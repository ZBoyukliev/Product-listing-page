import React, { SetStateAction } from 'react';
import Product from '../../types/Product';

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
    handleMaximumPriceSelect:(e: React.ChangeEvent<HTMLInputElement>) => void;
  }