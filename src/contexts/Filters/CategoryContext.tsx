import { createContext, useContext, useEffect, useState } from "react";

type CategoryContextProps = {
    category: string;
    toSetCategory: (category: string, activeId: string) => void;
}

const CategoryContext = createContext<CategoryContextProps>({} as CategoryContextProps);

const CategoryProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
    const [category, setCategory] = useState<string>('');

    useEffect(() => {
        document.querySelector('#allProducts')?.classList.add('Nav_active__Z6ODH');
    }, []);

    function toSetCategory(category: string, activeId: string): void {
        setCategory(category);
        //to remove all classNames:
        document.querySelector('#allProducts')?.classList.remove('Nav_active__Z6ODH');
        document.querySelector('#t-shirts')?.classList.remove('Nav_active__Z6ODH');
        document.querySelector('#mugs')?.classList.remove('Nav_active__Z6ODH');
        //to set how active button:
        const active: HTMLButtonElement = document.querySelector(`#${activeId}`) as HTMLButtonElement;
        active.classList.add('Nav_active__Z6ODH');
    }
    
    return (
        <CategoryContext.Provider value={{category, toSetCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}

//This function below is to use the UseContext here, and to not need use 'use client' where call this context and to use 'use client' in the AppProvider.tsx;
function useCategoryContext() {
    const useCategoryContext = useContext(CategoryContext);
    return useCategoryContext;
}

export {CategoryProvider, useCategoryContext};