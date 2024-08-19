'use client'
import Nav from "@/components/Nav";
import useGetDatas from "@/hooks/useGetDatas";
import Image from "next/image";
import '../../../../styles/GlobalStyles.css'

export default function Mug(): JSX.Element {
    const {data, isFetching} = useGetDatas();
    return (
        <>
        <Nav/>
        <main className='mainCards'>
        {isFetching ? <h1 className='h1Fetching'>Carregando...</h1> :
            data?.data.allProducts.map(product => (
                product.category === 't-shirts' && (
                    <div key={product.id}>
                        <Image src={product.image_url} height={300} width={256} alt={`Imagem do produto: ${product.name}`} quality={100}/>
                        <p>{product.name}</p>
                        <hr />
                        <p>R$ {product.price_in_cents / 100}</p>
                    </div>
                )
            ))
        }
        </main>
        </>
    )
}