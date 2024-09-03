'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './TogglePagination.module.css';

type idNavLinksProps = Array<
    {
        name: string,
        href: string
    }
>

const idNavLinks: idNavLinksProps = [
    {name: '1', href: '/'},
    {name: '2', href: '/2'},
    {name: '3', href: '/3'},
    {name: '4', href: '/4'},
    {name: '5', href: '/5'},
    {name: '<', href: '/5'},
    {name: '>', href: '/5'}
]

export default function TogglePagination(): JSX.Element {
    const pathName: string = usePathname();

    return (
    <section className={styles.togglePagination}>
        {idNavLinks.map((idLink) => {
            const isActive: boolean = pathName.endsWith(idLink.href);
            return (
                <Link
                    style={{
                        border: `${isActive ? '1px solid rgba(255, 165, 133, 1)': 'none'}`,
                        color: `${isActive ? 'rgba(255, 165, 133, 1)' : 'rgba(115, 115, 128, 1)'}`,
                        fontWeight: `${isActive ? '600' : '400'}`
                    }}
                    key={idLink.name} href={`${idLink.href}`}>{idLink.name}
                </Link>
            )
        })}
    </section>
    )
}