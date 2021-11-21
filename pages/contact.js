import styles from '../styles/Contact.module.css';
import Circle from '../components/Circle';

const contact = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor='green' left='-40vh' top='-20vh'/>
            <Circle backgroundColor='yellow' right='-30vh' bottom='-60vh'/>
            <h1 className={styles.title}>GET IN TOUCH</h1>
            <form className={styles.form}>
                <input className={styles.inputSmall} placeholder='Username'/>
                <input className={styles.inputSmall} placeholder='Phone'/>
                <input className={styles.inputLarge} placeholder='Email'/>
                <input className={styles.inputLarge} placeholder='Subject'/>
                <textarea className={styles.textarea} placeholder='Message' rows={6}/>
                <button className={styles.button}>SUMBIT</button>
            </form>
        </div>
    )
}

export default contact;