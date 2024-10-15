import { createContext, useContext, useEffect, useState } from "react";

type CartContextProps = {
    quantityOfProductsInCart: number;
    quantityProduct: {[productId: string]: number};
    totalValueCart: number;
    toSetTotalValueCart: (totalValue: number) => void;
    toSetTheQuantityOfTheProduct: (productId: string, newValue: number) => void;
    toCorrectTheQuantityOfProductsInCart: (quantity: number) => void;
    toAddProductInCart: (id: string) => void;
    toDeleteProductInCart: (productId: string) => void;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

const CartProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
    const [allIdsProductsInCart, setAllIdsProductsInCart] = useState<Array<string>>([]);
    const [quantityOfProductsInCart, setQuantityOfProductsInCart] = useState<number>(0);
    const [quantityProduct, setQuantityProduct] = useState<{ [productId: string]: number }>({});
    const [totalValueCart, setTotalValueCart] = useState<number>(0);

    // When the application starts, it fetches the localStorage data and passes the localStorage Ids and the quantity
    useEffect(() => {
        const localStorageProducts: string | null = localStorage.getItem('allProductsInCart');
        const localStorageJsonParse: Array<string> = localStorageProducts && JSON.parse(localStorageProducts);
        localStorageProducts && setAllIdsProductsInCart(localStorageJsonParse);
        localStorageJsonParse.map(productId => {
            setQuantityProduct(quantity => ({
                ...quantity, [productId]: 1
            }));
        })
        toCorrectTheQuantityOfProductsInCart(0);
    }, []);

    // This function is called from ShowAllCartProducts to set the value of cart
    function toSetTotalValueCart(totalValue: number): void {
        setTotalValueCart(totalValue);
    }

    // To set the quantity from each product
    const toSetTheQuantityOfTheProduct = (productId: string, newValue: number): void => {
        setQuantityProduct(quantity => ({
            ...quantity, [productId]: newValue
        }));
    }

    // To correct the value of cart
    function toCorrectTheQuantityOfProductsInCart(quantity: number): void {
        setQuantityOfProductsInCart(quantity);
    }

    // To add the product in localStorage when the user click to add to cart
    function toAddProductInCart(productId: string): void {
        if (productId === '') {
            alert('Ocorreu um erro ao adicionar o produto no carrinho. Por favor, tente novamente!');
        } else if(localStorage.getItem('allProductsInCart')?.includes(productId)) {
            alert('Produto já adicionado no carrinho, se deseja mais que uma quantidade deste produto altere no carrinho!');
        } else {
            setAllIdsProductsInCart(products => [...products, productId]);
            setQuantityOfProductsInCart(quantityOfProductsInCart + 1);
            setQuantityProduct(quantity => ({
                ...quantity, [productId]: 1
            }));
        }
    }

    // To delete the products from the localStorage
    function toDeleteProductInCart(productId: string): void {
        const localStorageProducts: string | null = localStorage.getItem('allProductsInCart');
        const localStorageJsonParse: Array<string> = localStorageProducts && JSON.parse(localStorageProducts);
        const updatedProducts = localStorageJsonParse.filter(product => product !== productId);
        localStorage.setItem('allProductsInCart', JSON.stringify(updatedProducts));
        setQuantityOfProductsInCart(updatedProducts.length);
    }

    //All times the user add a product to the cart this useEffect will set the all products to the localStorage; 
    useEffect(() => {
        if(allIdsProductsInCart.length > 0) {
            localStorage.setItem('allProductsInCart', JSON.stringify(allIdsProductsInCart));
        }
    }, [allIdsProductsInCart]);

    return (
        <CartContext.Provider value={{quantityOfProductsInCart, quantityProduct, totalValueCart, toSetTotalValueCart, toSetTheQuantityOfTheProduct, toCorrectTheQuantityOfProductsInCart, toAddProductInCart, toDeleteProductInCart}}>
            {children}
        </CartContext.Provider>
    )
}

//This function below is to use the UseContext here, and to not need use 'use client' where call this context and to use 'use client' in the AppProvider.tsx;
function useCartContext() {
    const useCartContext = useContext(CartContext);
    return useCartContext;
}

export { useCartContext, CartProvider };