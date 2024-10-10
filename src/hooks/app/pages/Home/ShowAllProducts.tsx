'use client';
import { useSearchContext } from "@/contexts/Filters/SearchContext";
import { useDynamicProductContext } from "@/contexts/Pages/DynamicProductContext";
import useGetAllProducts from "@/hooks/apis/useGetAllProducts";
import Image from "next/image";

export default function ShowAllProducts(): JSX.Element {
  const {data, isFetching} = useGetAllProducts();
  const {search} = useSearchContext();
  const {handleIdAndRouter} = useDynamicProductContext();
  
  return (
    <>
    {isFetching ? <h1 className='h1Fetching'>Carregando...</h1> :
    data?.data.allProducts.map(product => (
      search.length > 1
      ? ( product.name.toLowerCase().trim().replace(/\s+/g, '').includes(search) &&
        <div key={product.id} onClick={() => handleIdAndRouter(product.name, product.id)}>
          <Image src={product.image_url} height={300} width={300} alt={`Imagem do produto: ${product.name}`} quality={100}/>
          <p>{product.name}</p>
          <hr />
          <p>R$ {product.price_in_cents / 100}</p>
        </div>
      )
      : (
        <div key={product.id} onClick={() => handleIdAndRouter(product.name, product.id)}>
          <Image src={product.image_url} height={300} width={300} alt={`Imagem do produto: ${product.name}`} quality={100}/>
          <p>{product.name}</p>
          <hr />
          <p>R$ {product.price_in_cents / 100}</p>
        </div>
      )
    ))
    }
    </>
  )
}