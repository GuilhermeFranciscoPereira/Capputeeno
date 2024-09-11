import { createContext, useContext, useEffect, useState } from "react";

type CartContextProps = {
    cartValue: number;
    toSetCart: (id: string) => void;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

const CartProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
    const [cartValue, setCartValue] = useState<number>(0);
    const [allProductsInCart, setAllProductsInCart] = useState<Array<string>>([]);

    //This useEffect it is to check if exist a key 'allPr,oductsInCart' in local storage and set the value of items and set the products
    useEffect(() => {
        const localStorageProducts: string | null = localStorage.getItem('allProductsInCart');
        if (localStorageProducts) {
            try {
                const localStorageJsonParse: Array<string> = JSON.parse(localStorageProducts);
                setAllProductsInCart(localStorageJsonParse);
                setCartValue(localStorageJsonParse.length);
            } catch (err) {
                console.error(`O local storage não possui nenhum item de produto. Erro: ${err}`);
            }
        }
    }, []);

    function toSetCart(id: string): void {
        if (id === '') {
            alert('Ocorreu um erro ao adicionar o produto no carrinho. Por favor, tente novamente!');
        } else {
            setAllProductsInCart(products => [...products, id]);
            setCartValue(cartValue + 1);
        }
    }

    useEffect(() => {
        if(allProductsInCart.length > 0) {
            localStorage.setItem('allProductsInCart', JSON.stringify(allProductsInCart));
        }
    }, [allProductsInCart]); 

    return (
        <CartContext.Provider value={{cartValue, toSetCart}}>
            {children}
        </CartContext.Provider>
    )
}

//This function below is to use the UseContext here, and to not need use 'use client' where call this context and to use 'use client' in the AppProvider.tsx;
function useCartContext() {
    const useCartContext = useContext(CartContext);
    return useCartContext;
}

export { useCartContext, CartProvider};