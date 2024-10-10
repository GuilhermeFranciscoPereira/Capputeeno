import ShowAllCartProducts from "@/hooks/app/pages/cartPageHook/ShowAllCartProducts";
import OrderSummary from "@/hooks/app/pages/cartPageHook/OrderSummary";
import Link from "next/link";
import styles from "./cartPage.module.css";

export default function CartPage(): JSX.Element {
    return (
        <>
        <div className={styles.toDoMargin}>
            <Link href={'/'}>⮌ Voltar</Link>
        </div>
        <main className={styles.mainCartPage}>
            <ShowAllCartProducts></ShowAllCartProducts>
            <OrderSummary></OrderSummary>
        </main>
        </>
    )
}