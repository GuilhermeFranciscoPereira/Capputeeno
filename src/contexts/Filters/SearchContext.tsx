import { createContext, useContext, useState } from "react";

type searchContextProps = {
    search: string;
    toSetSearch: (search: string) => void;
}

const SearchContext = createContext<searchContextProps>({} as searchContextProps);

const SearchProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
    const [search, SetSearch] = useState<string>('');

    function toSetSearch(search: string): void {
        SetSearch(search.toLowerCase().trim().replace(/\s+/g, ''));
    }

    return (
        <SearchContext.Provider value={{search, toSetSearch}}>
            {children}
        </SearchContext.Provider>
    )
}

//This function below is to use the UseContext here, and to not need use 'use client' where call this context and to use 'use client' in the AppProvider.tsx;
function useSearchContext() {
    const useSearchContext = useContext(SearchContext);
    return useSearchContext;
}

export {SearchProvider, useSearchContext};