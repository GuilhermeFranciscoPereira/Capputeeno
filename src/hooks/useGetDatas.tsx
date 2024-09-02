'use client'
import { useContext } from "react"
import { CategoryContext } from "@/contexts/Filters/CategoryContext"
import { useQuery } from "react-query"
import axios from "axios"
import { OrganizeByContext } from "@/contexts/Filters/OrganizeByContext"

type productsProps = {
    data: {
        allProducts: [
            {
                id: string,
                name: string,
                price_in_cents: number,
                image_url: string,
                category: string,
                created_at: string,
                sales: number
            }
        ]
    }
}

export default function useGetDatas(): {data: productsProps | undefined; isFetching: boolean} {
    const {category} = useContext(CategoryContext);
    const {choice, order} = useContext(OrganizeByContext);
    const {data, isFetching} = useQuery<productsProps>(`Products - ${category} - Field: ${choice} - Order: ${order}`, async () => {
        try {
            const response = await axios({
                url: 'http://localhost:3333',
                method: 'post',
                data: {
                    query: category.length < 1
                    ? `
                    query {
                        allProducts(sortField: "${choice}", sortOrder: "${order}") {
                            id
                            name
                            price_in_cents
                            image_url
                            category
                            created_at
                            sales
                        }
                    }
                    `
                    : `
                    query {
                        allProducts(filter: {category: "${category}"}, sortField: "${choice}", sortOrder: "${order}") {
                            id
                            name
                            price_in_cents
                            image_url
                            category
                            created_at
                            sales
                        }
                    }
                    `
                }
            })
            return response.data
        } catch (error) {
            console.log(`Ocorreu um erro ao fazer a requisição para o GraphQL: ${error}`)
        }
    }, {
        refetchOnWindowFocus: false, 
        refetchOnReconnect: false, 
        staleTime: 1000 * 60 * 60 * 24 // 1 day - ( 24 hour - 1440 minutes )
    })
    return { data, isFetching }
}