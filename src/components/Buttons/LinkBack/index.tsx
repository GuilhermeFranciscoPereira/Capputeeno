import ComeBackImage from '../../../assets/imagesForTheSite/Backward, Rearward, Back.png';
import Image from "next/image";
import Link from "next/link";
import styles from './LinkBack.module.css';

export default function LinkBack(): JSX.Element {
    return (
        <Link className={styles.a} href={'/'}> 
            <Image src={ComeBackImage} alt='Imagem que simboliza o botão de voltar' height={24} width={24} quality={100}/>
            Voltar
        </Link>
    )
}