import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [categoryType, setCategoryType] = useState('bags');

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

    const changeCategoryType = (newCategoryType:string) => {
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


// export const getAll = () => request.get(`${baseUrl}/menu`);
 
// export const getByCategory = (foodCategory) => request.get(`${baseUrl}/menu?where=category%3D%22${foodCategory}%22`);