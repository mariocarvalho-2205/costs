import styles from './Submit.module.css'


function Submit ({ text, type }) {
    return (
        <div>
            <button className={styles.btn} type={type}>{text}</button>
        </div>
    )
}

export default Submit