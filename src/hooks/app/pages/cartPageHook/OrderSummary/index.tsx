'use client'
import { useEffect, useState } from 'react';
import { useCartContext } from '@/contexts/Pages/CartContext';
import styles from './OrderSummary.module.css';

export default function OrderSummary(): JSX.Element {
    const {totalValueCart, toSetTotalValueCart} = useCartContext();
    const [delivery, setDelivery] = useState<number>(0);

    useEffect(() => {
        setDelivery(4000 / 100);
    }, [])

    useEffect(() => {
        totalValueCart > 900 ? setDelivery(0) : setDelivery(4000 / 100);
    }, [toSetTotalValueCart])
    
    return (
        <section className={styles.OrderSection}>
            <h2>RESUMO DO PEDIDO</h2>
            <div className={styles.subtotalDiv}>
                <p>Subtotal de produtos</p>
                <span>R$ {(totalValueCart).toFixed(2)}</span>
            </div>
            <div className={styles.deliveryDiv}>
                <p>Entrega R$ </p>
                <span>{delivery},00</span>
            </div>
            <hr />
            <div className={styles.totalDiv}>
                <h3>Total</h3>
                <span>R$ {totalValueCart && (totalValueCart + delivery).toFixed(2)}</span>
            </div>
            <button>FINALIZAR A COMPRA</button>
            <ul>
                <li>AJUDA</li>
                <li>REEMBOLSO</li>
                <li>ENTREGAS E FRETE</li>
                <li>TROCAS E DEVOLUÇÕES</li>
            </ul>
        </section>
    )
}