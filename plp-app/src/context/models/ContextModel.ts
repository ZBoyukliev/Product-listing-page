import React, { SetStateAction } from 'react';
import Product from '../../types/Product';
import { Filter } from './filter';
 
export interface ProductContextType {
 
  filters: Filter;
    products: Product[];
    isLoading: boolean;
    err: boolean;
    categoryType: string;
    filteredProducts: Product[];
    changeCategoryType: (newCategoryType: string) => void;
    sortProducts: (newCategoryType: string) => void;
    setFilteredProducts: React.Dispatch<SetStateAction<Product[]>>;
    handleSelectedColorsChange: (color:string) => void;
    handleMaximumPriceSelect:(price:number) => void;
    handleResetFilters: () => void;
 
  }
