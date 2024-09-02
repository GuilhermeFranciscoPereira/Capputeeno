import { CategoryProvider } from "./Filters/CategoryContext"
import { OrganizeByProvider } from "./Filters/OrganizeByContext";
import { SearchProvider } from "./Filters/SearchContext";

const AppProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
    return (
        <CategoryProvider>
            <SearchProvider>
                <OrganizeByProvider>
                    {children}
                </OrganizeByProvider>
            </SearchProvider>
        </CategoryProvider>
    )
}

export default AppProvider;