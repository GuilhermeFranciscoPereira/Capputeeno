'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"
import styles from './Nav.module.css'

type navLinksProps = Array<
    {
        name: string,
        href: string
    }
>

type idNavLinksProps = Array<
    {
        name: string,
        href: string
    }
>

const navLinks: navLinksProps = [
    {name: 'TODOS OS PRODUTOS', href: '/'},
    {name: 'CAMISETAS', href: '/TShirts'},
    {name: 'CANECAS', href: '/Mugs'}
]

const idNavLinks: idNavLinksProps = [
    {name: '1', href: '/'},
    {name: '2', href: '/2'},
    {name: '3', href: '/3'},
    {name: '4', href: '/4'},
    {name: '5', href: '/5'},
    {name: '<', href: '/5'},
    {name: '>', href: '/5'}
]

export default function Nav() {
    const pathName: string = usePathname();

    return (
        <>
        <nav>
            <section className={styles.navSection}>
                <div className={styles.divLink}>
                {navLinks.map((link) => {
                    const startActive: boolean = pathName.startsWith(link.href)
                    const endActive: boolean = pathName.endsWith(link.href)
                    return (
                        <Link
                            style={{
                                borderBottom: `${startActive && endActive ? '3px solid rgba(255, 165, 133, 1)': 'none'}`,
                                color: `${startActive && endActive ? 'rgba(65, 65, 77, 1)' : 'rgba(115, 115, 128, 1)'}`,
                                fontWeight: `${startActive && endActive ? '600' : '400'}`
                            }}
                            key={link.href} href={link.href}>{link.name}
                        </Link>
                    )
                })} 
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
            <section className={styles.togglePagination}>
                {idNavLinks.map((idLink) => {
                    const isActive: boolean = pathName.endsWith(idLink.href)
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
        </nav>
        </>
    )
}