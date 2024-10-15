'use client';
import { useTogglePaginationContext } from '@/contexts/Filters/TogglePaginationContext';
import { useCategoryContext } from '@/contexts/Filters/CategoryContext';
import styles from './TogglePagination.module.css';

export default function TogglePagination(): JSX.Element {
    const {toSetPage, toTogglePage} = useTogglePaginationContext();
    const {category} = useCategoryContext();
    
    return (
        <section className={styles.togglePagination}>
            {!category 
            ?
            <>
            <button id='page1' className={styles.active} onClick={() => toSetPage(1)}>1</button>
            <button id='page2' onClick={() => toSetPage(2)}>2</button>
            <button id='page3' onClick={() => toSetPage(3)}>3</button>
            <button id='page4' onClick={() => toSetPage(4)}>4</button>
            <button id='page5' onClick={() => toSetPage(5)}>5</button>
            <button onClick={() => toTogglePage('<')}>{'<'}</button>
            <button onClick={() => toTogglePage('>')}>{'>'}</button>
            </>
            :
            ''
            }
        </section>
    )
}