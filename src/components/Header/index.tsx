import { SairaStencilOne } from "@/app/layout";
import Image from "next/image";
import shoppingBag from '../../assets/shopping-bag.png'
import styles from './Header.module.css'
import { useContext } from "react";
import { SearchContext } from "@/contexts/Filters/SearchContext";

export default function Header() {
    const { toSetSearch } = useContext(SearchContext);
    return (
        <header className={styles.header}>
            <h1 className={SairaStencilOne.className}>capputeeno</h1>
            <div className={styles.headerRightSide}>
                <div className={styles.inputSection}>
                    <input type="text" placeholder="Procurando por algo específico?" onChange={(e) => toSetSearch(e.target.value)}/>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#737380"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                    {/* Créditos do icone total ao Google, Link do site do Google Icons: https://fonts.google.com/icons */}
                </div>
                <div className={styles.shoppingBag}>
                    <Image
                        src={shoppingBag}
                        width={24}
                        height={24}
                        alt="Imagem de uma bolsinha, localizada no canto superior do site. Serve para irmos ao carrinho"
                    />
                    <div><span>2</span></div>
                </div>
            </div>
        </header>
    )
}