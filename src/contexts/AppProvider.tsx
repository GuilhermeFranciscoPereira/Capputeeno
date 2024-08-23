import { CategoryProvider } from "./Filters/CategoryContext"

const AppProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
    return (
        <CategoryProvider>
            {children}
        </CategoryProvider>
    )
}

export default AppProvider;