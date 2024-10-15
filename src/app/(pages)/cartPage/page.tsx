import type { Metadata } from "next";
import ShowAllCartProducts from "@/hooks/app/pages/cartPageHook/ShowAllCartProducts";
import OrderSummary from "@/hooks/app/pages/cartPageHook/OrderSummary";
import LinkBack from "@/components/Buttons/LinkBack";
import styles from "./cartPage.module.css";

export const metadata: Metadata = {
    title: 'Carrinho'
}

export default function CartPage(): JSX.Element {
    return (
        <>
        <LinkBack></LinkBack>
        <main className={styles.mainCartPage}>
            <ShowAllCartProducts></ShowAllCartProducts>
            <OrderSummary></OrderSummary>
        </main>
        </>
    )
}