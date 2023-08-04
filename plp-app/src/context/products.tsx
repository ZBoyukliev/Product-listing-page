import { createContext, useEffect, useState, ReactNode } from 'react';
import Product from '../types/Product';
import { SortingOrder } from './models/SortingOrder';
import { ProductContextType } from './models/ContextModel';
import { Filter } from './models/filter';

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

  const [filters, setFilters] = useState<Filter>({ colors: [], price: 0 });

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
        checkFilteredItems(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setErr(error);
        setProducts([]);
      });
  }, [categoryType, filters.colors, filters.price]);


  const checkFilteredItems = (data: Product[]) => {
    if (filters.colors.length > 0) {
      const filteredData = data.filter((product) => filters.colors.find((color) => product.color === color));
      if (filters.price > 0) {
        const items = filteredData.filter((product) => product.price <= filters.price);
        setProducts(items);
      } else {
        setProducts(filteredData);
      }
    } else if (filters.price > 0) {
      const items = data.filter((product) => product.price <= filters.price);
      setProducts(items);
    } else {
      setProducts(data);
    }
  };

  const changeCategoryType = (newCategoryType: string) => {
    setCategoryType(newCategoryType);
  };

  const handleSelectedColorsChange = (color: string) => {
    if (filters.colors.includes(color)) {
      const updatedColors = filters.colors.filter(c => c !== color);
      setFilters({ ...filters, colors: updatedColors });
    } else {
      setFilters({ ...filters, colors: [...filters.colors, color] });
    }
  };

  const handleMaximumPriceSelect = (price: number) => {
    setFilters({ ...filters, price: filters.price === price ? 0 : price });
  };

  const handleResetFilters = () => {
    setFilters({ colors: [], price: 0 });
  }

  const sortProducts = (sortOption: string) => {
    switch (sortOption) {
      case SortingOrder.NAME_ASC:
        setProducts([...products].sort((a, b) => a.title.localeCompare(b.title)));
        break;
      case SortingOrder.NAME_DESC:
        setProducts([...products].sort((a, b) => b.title.localeCompare(a.title)));
        break;
      case SortingOrder.PRICE_ASC:
        setProducts([...products].sort((a, b) => (a.discountPrice ? a.discountPrice : a.price) - (b.discountPrice ? b.discountPrice : b.price)));
        break;
      case SortingOrder.PRICE_DESC:
        setProducts([...products].sort((a, b) => (b.discountPrice ? b.discountPrice : b.price) - (a.discountPrice ? a.discountPrice : a.price)));
        break;
    }
  };


  return (
    <ProductContext.Provider
      value={{
        products,
        filters,
        isLoading,
        err,
        categoryType,
        filteredProducts,
        changeCategoryType,
        setFilteredProducts,
        handleSelectedColorsChange,
        sortProducts,
        handleMaximumPriceSelect,
        handleResetFilters
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

