'use client';
import { useCartContext } from "@/contexts/Pages/CartContext";
import { useDynamicProductContext } from "@/contexts/Pages/DynamicProductContext";
import useGetDynamicProduct from "@/hooks/apis/useGetDynamicProduct";
import LinkBack from "@/components/Buttons/LinkBack";
import Image from "next/image";
import shoppingBagWhite from '../../../../assets/imagesForTheSite/shopping-bag-white.png'
import styles from './DynamicProduct.module.css';

export default function DynamicProduct(): JSX.Element {
    const {data, isFetching} = useGetDynamicProduct();
    const {toAddProductInCart} = useCartContext();
    const {handleIdAndRouter} = useDynamicProductContext();
    
    return (
        <>
        {
        isFetching ? <h1 className={styles.h1Fetching}>Carregando...</h1> :
        data?.data.Product !== null
        ?
        <>
        <LinkBack></LinkBack>
        <section className={styles.sectionDynamicProduct}>
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
                            <button onClick={() => toAddProductInCart(data?.data.Product.id ? data.data.Product.id : '')}>
                                <Image
                                    src={shoppingBagWhite}
                                    width={24}
                                    height={24}
                                    alt="Imagem de uma bolsinha, localizada no canto superior do site. Serve para irmos ao carrinho"
                                />
                                ADICIONAR AO CARRINHO 
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
        :
            handleIdAndRouter('', '')
        }
        </>
    )
}