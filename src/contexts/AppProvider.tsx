import { CategoryProvider } from "./Filters/CategoryContext"
import { SearchProvider } from "./Filters/SearchContext";

const AppProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
    return (
        <CategoryProvider>
            <SearchProvider>
                {children}
            </SearchProvider>
        </CategoryProvider>
    )
}

export default AppProvider;