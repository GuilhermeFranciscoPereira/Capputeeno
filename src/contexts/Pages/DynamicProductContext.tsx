import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

type DynamicProductContextProps = {
    productId: string;
    handleIdAndRouter: (name: string ,id: string) => void;
}

const DynamicProductContext = createContext<DynamicProductContextProps>({} as DynamicProductContextProps);

const DynamicProductProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
    const router = useRouter();
    const [productId, setProductId] = useState<string>('');

    function handleIdAndRouter(name: string, id: string): void {
        setProductId(id);
        if(name === '') {
            router.push('/');
        } else {
            router.push(`/produtos/${name.toLowerCase().trim().replace(/\s+/g, '-')}`)
        }
    }

    return (
        <DynamicProductContext.Provider value={{productId, handleIdAndRouter}}>
            {children}
        </DynamicProductContext.Provider>
    )
}

//This function below is to use the UseContext here, and to not need use 'use client' where call this context and to use 'use client' in the AppProvider.tsx;
function useDynamicProductContext() {
    const useDynamicProductContext = useContext(DynamicProductContext);
    return useDynamicProductContext;
}

export {useDynamicProductContext, DynamicProductProvider}