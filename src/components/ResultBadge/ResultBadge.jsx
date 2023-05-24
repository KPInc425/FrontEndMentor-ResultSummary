import styles from './ResultBadge.module.sass'

const ResultBadge = ({ category, score, icon, badgeColor }) => {
    return (
        <div style={{backgroundColor: badgeColor}} className={styles.badgeContainer}>
            <div className={styles.flex}>
                <img src='https://i.imgur.com/yzhyLDB.gif' className={styles.iconImage}/>
                <p>badge here</p>
            </div>
            <p>Results/ofTotal</p>
        </div>
    )
}

export default ResultBadge