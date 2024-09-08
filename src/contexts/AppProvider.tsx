'use client';
import { CategoryProvider } from "./Filters/CategoryContext";
import { OrganizeByProvider } from "./Filters/OrganizeByContext";
import { SearchProvider } from "./Filters/SearchContext";
import { TogglePaginationProvider } from "./Filters/TogglePaginationContext";

const AppProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
    return (
        <CategoryProvider>
            <SearchProvider>
                <OrganizeByProvider>
                    <TogglePaginationProvider>
                        {children}
                    </TogglePaginationProvider>
                </OrganizeByProvider>
            </SearchProvider>
        </CategoryProvider>
    )
}

export default AppProvider;