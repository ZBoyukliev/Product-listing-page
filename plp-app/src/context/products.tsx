import React, { createContext, useEffect, useState, ReactNode, SetStateAction } from 'react';
import Product from '../types/Product';

export interface ProductContextType {
  products: Product[];
  isLoading: boolean;
  err: boolean;
  categoryType: string;
  filteredProducts: Product[];
  changeCategoryType: (newCategoryType: string) => void;
  sortProducts: (newCategoryType: string) => void;
  setFilteredProducts: React.Dispatch<SetStateAction<Product[]>>;
  handleSelectedColorsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false);
  const [categoryType, setCategoryType] = useState<string>('bags');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`http://localhost:3030/data/items?where=category%3D%22${categoryType}%22`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setIsLoading(false);
        return response.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
        if(colors.length > 0) {
          data = products.filter((product: Product) => colors.includes(product.color));
          setProducts(data);
        } 

      })
      .catch((error) => {
        setIsLoading(false);
        setErr(error);
        setProducts([]);
      });
  }, [categoryType, colors]);



  const changeCategoryType = (newCategoryType: string) => {
    setCategoryType(newCategoryType);
  };
 

  // const applyFilter = () => {
  //   const filtered = products.filter((product: Product) => colors.includes(product.color));
  //   setProducts(filtered);
  // };

  const handleSelectedColorsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const color = e.target.value;
      setColors([...colors, color]);

    } else {
      const color = e.target.value;
      setColors(colors.filter((v) => v !== color));
    }
  };

  const sortProducts = (sortOption: string) => {
    switch (sortOption) {
      case 'name_asc':
        setFilteredProducts([...filteredProducts].sort((a, b) => a.title.localeCompare(b.title)));
        break;
      case 'name_desc':
        setFilteredProducts([...filteredProducts].sort((a, b) => b.title.localeCompare(a.title)));
        break;
      case 'price_asc':
        setFilteredProducts([...filteredProducts].sort((a, b) => a.price - b.price));
        break;
      case 'price_desc':
        setFilteredProducts([...filteredProducts].sort((a, b) => b.price - a.price));
        break;
      default:
        // If no option is selected or an invalid option is selected, do nothing
        break;
    }
  };


  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        err,
        categoryType,
        filteredProducts,
        changeCategoryType,
        setFilteredProducts,
        handleSelectedColorsChange,
        sortProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

