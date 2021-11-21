import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/Link';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardLarge}>
                <h1 className={styles.title}>SU4ENUAH CREATIVES.</h1>
                <h1 className={styles.linkTitle}>
                    <a href='/contact' passHref>
                        <span className={styles.linkText}>WORK WITH US</span>
                        <Image src='/images/link.png' width='40px' height='40px' alt=''/>
                    </a>
                </h1>
            </div>
            <div className={styles.cardSmall}>
                <div className={styles.cardItem}>
                    БАЛЬЗАКА 2А. <br/> КАЗАХСТАН
                </div>
                <div className={styles.cardItem}>
                    CONTACT@KALI.DEV <br/> +7-523-456-78-96
                </div>
            </div>
            <div className={styles.cardSmall}>
                <div className={styles.cardItem}>
                    FOLLOW US:
                    <br /> __FB __IN __BE __TW
                </div>
                <div className={styles.cardItem}>
                    © 2022 SURENUAH INTERACTIVE,
                    <br />
                    ALL RIGHTS RESERVED
                </div>
            </div>
        </div>
    )
}

export default Footer;