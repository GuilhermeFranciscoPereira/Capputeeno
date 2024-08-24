import { createContext, useState } from "react";

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

export {SearchContext, SearchProvider};