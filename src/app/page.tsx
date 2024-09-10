'use client';
import { useSearchContext } from "@/contexts/Filters/SearchContext";
import { useDynamicProductContext } from "@/contexts/Pages/DynamicProductContext";
import useGetDatas from "@/hooks/useGetDatas";
import Nav from "@/components/Nav";
import Image from "next/image";
import TogglePagination from "@/components/TogglePagination";
import { useCategoryContext } from "@/contexts/Filters/CategoryContext";
import "../styles/GlobalStyles.css";

export default function Home(): JSX.Element {
  const {search} = useSearchContext();
  const {data, isFetching} = useGetDatas();
  const {category} = useCategoryContext();
  const {handleIdAndRouter} = useDynamicProductContext();
  return (
    <>
    <Nav/>
    {category == '' ? <TogglePagination/> : ''}
    <main className='mainCards'>
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
    </main>
    <div className='lastPartFromHome'>
      {category == '' ? <TogglePagination/> : ''}
    </div>
    </>
  )
}