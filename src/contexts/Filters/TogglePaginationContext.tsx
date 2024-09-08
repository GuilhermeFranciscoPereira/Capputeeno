import { createContext, useContext, useState } from "react";

type TogglePaginationContextProps = {
    page: number;
    toSetPage: (page: number) => void;
    toTogglePage: (choice: string) => void;
}

const TogglePaginationContext = createContext<TogglePaginationContextProps>({} as TogglePaginationContextProps);

const TogglePaginationProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
    const [page, setPage] = useState<number>(1);

    function toSetPage(page: number): void {
        setPage(page);
        //to remove all classNames:
        document.querySelectorAll('#page1')?.forEach(page => page.classList.remove('TogglePagination_active__07PY4'));
        document.querySelectorAll('#page2')?.forEach(page => page.classList.remove('TogglePagination_active__07PY4'));
        document.querySelectorAll('#page3')?.forEach(page => page.classList.remove('TogglePagination_active__07PY4'));
        document.querySelectorAll('#page4')?.forEach(page => page.classList.remove('TogglePagination_active__07PY4'));
        document.querySelectorAll('#page5')?.forEach(page => page.classList.remove('TogglePagination_active__07PY4'));
        //to set how active button:
        const active: NodeListOf<Element> = document.querySelectorAll(`#page${page}`) as NodeListOf<Element>;
        active.forEach(id => id.classList.add('TogglePagination_active__07PY4'));
    }

    function toTogglePage(choice: string): void {
        if (choice == '<' && page != 1) {
            setPage( page - 1 );
            //to remove all classNames:
            document.querySelectorAll('#page1')?.forEach(page => page.classList.remove('TogglePagination_active__07PY4'));
            document.querySelectorAll('#page2')?.forEach(page => page.classList.remove('TogglePagination_active__07PY4'));
            document.querySelectorAll('#page3')?.forEach(page => page.classList.remove('TogglePagination_active__07PY4'));
            document.querySelectorAll('#page4')?.forEach(page => page.classList.remove('TogglePagination_active__07PY4'));
            document.querySelectorAll('#page5')?.forEach(page => page.classList.remove('TogglePagination_active__07PY4'));
            //to set how active button:
            const active: NodeListOf<Element> = document.querySelectorAll(`#page${page - 1}`) as NodeListOf<Element>;
            active.forEach(id => id.classList.add('TogglePagination_active__07PY4'));
        }
        else if (choice == '>' && page != 5) {
            setPage( page + 1 );
            //to remove all classNames:
            document.querySelectorAll('#page1')?.forEach(page => page.classList.remove('TogglePagination_active__07PY4'));
            document.querySelectorAll('#page2')?.forEach(page => page.classList.remove('TogglePagination_active__07PY4'));
            document.querySelectorAll('#page3')?.forEach(page => page.classList.remove('TogglePagination_active__07PY4'));
            document.querySelectorAll('#page4')?.forEach(page => page.classList.remove('TogglePagination_active__07PY4'));
            document.querySelectorAll('#page5')?.forEach(page => page.classList.remove('TogglePagination_active__07PY4'));
            //to set how active button:
            const active: NodeListOf<Element> = document.querySelectorAll(`#page${page + 1}`) as NodeListOf<Element>;
            active.forEach(id => id.classList.add('TogglePagination_active__07PY4'));
        }
    }

    return (
        <TogglePaginationContext.Provider value={{page, toSetPage, toTogglePage}}>
            {children}
        </TogglePaginationContext.Provider>
    )
}

//This function below is to use the UseContext here, and to not need use 'use client' where call this context and to use 'use client' in the AppProvider.tsx;
function useTogglePaginationContext() {
    const useTogglePaginationContext = useContext(TogglePaginationContext);
    return useTogglePaginationContext;
}

export { useTogglePaginationContext, TogglePaginationProvider};