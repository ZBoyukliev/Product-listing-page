import { createContext, useEffect, useState, ReactNode } from 'react';
import Product from '../types/Product';

export interface ProductContextType {
    products: Product[];
    isLoading: boolean;
    err: boolean;
    categoryType: string;
    changeCategoryType: (newCategoryType: string) => void;
}

interface ProductProviderProps {
    children: ReactNode;
}

export const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({ children }: ProductProviderProps) => {

    const [products, setProducts] = useState<Product[]>([]); // Provide type for useState
    const [isLoading, setIsLoading] = useState<boolean>(false); // Provide type for useState
    const [err, setErr] = useState<boolean>(false); // Provide type for useState
    const [categoryType, setCategoryType] = useState<string>('bags');

    // const [products, setProducts] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [err, setErr] = useState(false);
    // const [categoryType, setCategoryType] = useState('bags');

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:3030/data/items?where=category%3D%22${categoryType}%22`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                setIsLoading(false);
                return response.json();
            })
            .then(data => {
                setProducts(data);
            })
            .catch((error) => {
                setIsLoading(false);
                setErr(error);
                setProducts([]);
            });
    }, [categoryType]);

    const changeCategoryType = (newCategoryType: string) => {
        setCategoryType(newCategoryType);
        console.log(categoryType);

    };

    console.log(categoryType);


    return (
        <ProductContext.Provider value={{
            products,
            isLoading,
            err,
            categoryType,
            changeCategoryType
        }}>
            {children}
        </ProductContext.Provider>
    );
};

