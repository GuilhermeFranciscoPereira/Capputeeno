'use client';
import { CategoryProvider } from "./Filters/CategoryContext";
import { OrganizeByProvider } from "./Filters/OrganizeByContext";
import { SearchProvider } from "./Filters/SearchContext";
import { TogglePaginationProvider } from "./Filters/TogglePaginationContext";
import { DynamicProductProvider } from "./Pages/DynamicProductContext";

const AppProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
    return (
        <CategoryProvider>
            <SearchProvider>
                <OrganizeByProvider>
                    <TogglePaginationProvider>
                        <DynamicProductProvider>
                            {children}
                        </DynamicProductProvider>
                    </TogglePaginationProvider>
                </OrganizeByProvider>
            </SearchProvider>
        </CategoryProvider>
    )
}

export default AppProvider;