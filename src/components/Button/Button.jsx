import styles from './Button.module.sass'

const Button = ({label}) => {
    return (
        <button className={styles.buttonStyle} onClick={() => console.log('click')}>{ label }</button>
    )
}

export default Button