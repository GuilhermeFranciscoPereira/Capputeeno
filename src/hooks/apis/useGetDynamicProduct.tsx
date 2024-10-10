import { useDynamicProductContext } from "@/contexts/Pages/DynamicProductContext";
import { useQuery } from "react-query";
import axios from "axios";

type DynamicProductProps = {
    data: {
        Product: {
            id: string,
            image_url: string,
            category: string,
            name: string,
            price_in_cents: number,
            description: string,
        }
    }
}

export default function useGetDynamicProduct(): {data: DynamicProductProps | undefined; isFetching: boolean} {
    const {productId} = useDynamicProductContext();
    const {data, isFetching} = useQuery<DynamicProductProps>(`Product - ${productId}`, async () => {
        try {
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
            })
            return response.data;
        } catch (error) {
            console.log(`Ocorreu um erro ao fazer a requisição para o GraphQL: ${error}`);
        }
    }, {
        refetchOnWindowFocus: false, 
        refetchOnReconnect: false, 
        staleTime: 1000 * 60 * 60 * 24 // 1 day - ( 24 hour - 1440 minutes )
    })

    return { data, isFetching };
}