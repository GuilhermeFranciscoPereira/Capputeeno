import { useCategoryContext } from '@/contexts/Filters/CategoryContext';
import { useOrganizeByContext } from '@/contexts/Filters/OrganizeByContext';
import styles from './Nav.module.css';

export default function Nav(): JSX.Element {
    const {toSetCategory} = useCategoryContext();
    const {toSetChoiceAndOrder} = useOrganizeByContext();
    
    function handleSetChoiceAndOrder(event: React.ChangeEvent<HTMLSelectElement>): void {
        const splitWord: Array<string> = (event.target.value).split(' ');
        toSetChoiceAndOrder(splitWord[0], splitWord[1]);
    }

    return (
        <>
        <nav>
            <section className={styles.navSection}>
                <div className={styles.divLink}>
                    <button id='allProducts' onClick={() => toSetCategory('', 'allProducts')} className={styles.active}>TODOS OS PRODUTOS</button>
                    <button id='t-shirts' onClick={() => toSetCategory('t-shirts', 't-shirts')}>CAMISETAS</button>
                    <button id='mugs' onClick={() => toSetCategory('mugs', 'mugs')}>CANECAS</button>
                </div>
                <div className={styles.divOrganizeBy}>
                    <select name="organizeBy" onChange={handleSetChoiceAndOrder}>
                        <option value=" ">Organizar por</option>
                        <option value="created_at ASC">Novidades</option>
                        <option value="price_in_cents DESC">Preço: Maior - menor</option>
                        <option value="price_in_cents ASC">Preço: Menor - maior</option>
                        <option value="sales DESC">Mais Vendidos</option>
                    </select>
                </div>
            </section>
        </nav>
        </>
    )
}