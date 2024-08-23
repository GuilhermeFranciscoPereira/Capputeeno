'use client'

import { useContext } from 'react'
import { CategoryContext } from '@/contexts/Filters/CategoryContext';
import styles from './Nav.module.css'

export default function Nav() {
    const {toSetCategory} = useContext(CategoryContext);

    return (
        <>
        <nav>
            <section className={styles.navSection}>
                <div className={styles.divLink}>
                    <button id='allProducts' onClick={() => toSetCategory('', 'allProducts')}>TODOS OS PRODUTOS</button>
                    <button id='t-shirts' onClick={() => toSetCategory('t-shirts', 't-shirts')}>CAMISETAS</button>
                    <button id='mugs' onClick={() => toSetCategory('mugs', 'mugs')}>CANECAS</button>
                </div>
                <div className={styles.divOrganizeBy}>
                    <select name="organizeBy">
                        <option value="">Organizar por</option>
                        <option value="news">Novidades</option>
                        <option value="higherPrice">Preço: Maior - menor</option>
                        <option value="lowerPrice">Preço: Menor - maior</option>
                        <option value="bestSellers">Mais Vendidos</option>
                    </select>
                </div>
            </section>
        </nav>
        </>
    )
}