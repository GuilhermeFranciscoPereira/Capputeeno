'use client';
import { useEffect } from "react";
import { useCartContext } from "@/contexts/Pages/CartContext";
import useGetCartProducts from "@/hooks/apis/useGetCartProducts";
import redTrash from '../../../../../assets/imagesForTheSite/redTrash.png';
import Image from "next/image";
import styles from './ShowAllCartProducts.module.css';

export default function ShowAllCartProducts(): JSX.Element {
    const {allProductsInTheCart} = useGetCartProducts();
    const {quantityProduct, totalValueCart, toSetTotalValueCart, toDeleteProductInCart, toSetTheQuantityOfTheProduct} = useCartContext();

    // This useEffect will change the value about the cart
    useEffect(() => {
        toSetTotalValueCart(
            allProductsInTheCart?.reduce((acc, product) => {
                return acc + Number((product?.data?.Product?.price_in_cents / 100) * quantityProduct[product?.data?.Product?.id]);
            }, 0) || 0
        )
    }, [toSetTheQuantityOfTheProduct])

    return (
        <section>
            <h1 className={styles.h1}>SEU CARRINHO</h1>
            <p style={{marginBottom: "23px"}}>Total ({allProductsInTheCart?.length} produtos) <b>R${(totalValueCart)?.toFixed(2)}</b></p>
            {
                allProductsInTheCart 
                && allProductsInTheCart.map(product => (
                    <div className={styles.cardProduct} key={product?.data?.Product?.id}>
                        <Image src={product?.data?.Product?.image_url} width={256} height={211} alt={`Imagem do produto: ${product?.data?.Product?.name}`} quality={100}/>
                        <div className={styles.cardProductContent}>
                            <div className={styles.divForTheH1AndTrash}>
                                <h1>{product?.data?.Product?.name}</h1>
                                <Image src={redTrash} alt="Imagem de uma lixeira que serve como botão para excluir o item do carrinho" width={24} height={24} quality={100} onClick={() => toDeleteProductInCart(product?.data?.Product?.id)}/>
                            </div>
                            <h2>{product?.data?.Product?.description}</h2>
                            <div className={styles.divInput}>
                                <input 
                                type="number" 
                                min={1}
                                value={quantityProduct[product?.data?.Product?.id] } 
                                onChange={(e) => toSetTheQuantityOfTheProduct(product?.data?.Product?.id, Number(e.target.value))}
                                />
                                <p>R$ {((product?.data?.Product?.price_in_cents / 100) * (quantityProduct[product?.data?.Product?.id])).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}