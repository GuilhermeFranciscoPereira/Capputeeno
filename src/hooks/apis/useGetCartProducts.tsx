import { useCartContext } from '@/contexts/Pages/CartContext';
import { useEffect } from 'react';
import { useQueries } from 'react-query';
import axios from 'axios';

type CartProductsProps = {
    data: {
        Product: {
            id: string;
            image_url: string;
            category: string;
            name: string;
            price_in_cents: number;
            description: string;
        }
    }
}

export default function useGetCartProducts(): { allProductsInTheCart: Array<CartProductsProps> | undefined } {
    const LocalStorage: string | null = localStorage.getItem('allProductsInCart');
    const localStorageJsonParse: Array<string> = LocalStorage && JSON.parse(LocalStorage);
    const {toCorrectTheQuantityOfProductsInCart} = useCartContext();

    //useQueries (looks like promise.all) - I learned more by watching videos and reading the documentation: https://tanstack.com/query/latest/docs/framework/react/reference/useQueries
    const allProductsResponse = useQueries(
        localStorageJsonParse.map(productId => ({
            queryKey: [`Product - ${productId + 1}`],
            queryFn: async () => {
                const response = await axios({
                    url: 'http://localhost:3333',
                    method: 'post',
                    data: {
                        query: `
                            query {
                                Product(id: "${productId}") {
                                    id
                                    image_url
                                    category
                                    name
                                    price_in_cents
                                    description
                                }
                            }
                        `
                    }
                });
                return response.data;
            },
            refetchOnWindowFocus: true,
            refetchOnReconnect: true,
            staleTime: 1000 * 60 * 60 * 24, // 1 day - ( 24 hour - 1440 minutes )
        }))
    );
    
    let allProductsInTheCart: Array<CartProductsProps> = allProductsResponse.map(product => product.data);
    allProductsInTheCart = allProductsInTheCart.filter(products => products?.data?.Product?.image_url !== undefined);
    
    useEffect(() => {
        toCorrectTheQuantityOfProductsInCart(allProductsInTheCart.length);
    }, [allProductsResponse]);

    return { allProductsInTheCart };
}