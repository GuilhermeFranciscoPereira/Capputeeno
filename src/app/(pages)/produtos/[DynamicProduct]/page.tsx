'use client'
import { useDynamicProductContext } from "@/contexts/Pages/DynamicProductContext";
import useDynamicProduct from "@/hooks/useGetDynamicProduct"
import Image from "next/image";
import Link from "next/link";
import styles from './DynamicProduct.module.css'

export default function DynamicProduct(): JSX.Element {
    const {data, isFetching} = useDynamicProduct();
    const {handleIdAndRouter} = useDynamicProductContext();
    return (
        <>
        {
        isFetching ? <h1 className='h1Fetching'>Carregando...</h1> :
        data?.data.Product !== null
        ?
            <section className={styles.sectionDynamicProduct}>
                <div className={styles.toDoMargin} style={{margin: "30px 0px"}}>
                    <Link href={'/'}>⮌ Voltar</Link>
                </div>
                <div className={styles.containerProductInformations}>
                    <Image src={`${data?.data.Product.image_url}`} height={580} width={640} alt={`Imagem do produto: ${data?.data.Product.name}`} quality={100}/>
                    <div>
                        <div className={styles.informationsTexts}>
                            {data?.data.Product.category == 'mugs' ? <h3>Caneca</h3> : <h3>Camiseta</h3>}
                            <h1>{data?.data.Product.name}</h1>
                            <h2> R$ {data?.data.Product.price_in_cents && data?.data.Product.price_in_cents / 100}</h2>
                            <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
                            <h4>Descrição</h4>
                            <p>{data?.data.Product.description}</p>
                        </div>
                        <div className={styles.addToCartButton}>
                            <button>🛒 ADICIONAR AO CARRINHO </button>
                        </div>
                    </div>
                </div>
            </section>
        :
        handleIdAndRouter('', '')
        }
        </>
    )
}