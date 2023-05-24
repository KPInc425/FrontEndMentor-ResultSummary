import ResultBadge from '../ResultBadge/ResultBadge'
import styles from './ResultSummary.module.sass'

const ResultSummary = () => {
    console.log(styles.testing)
    return (
        <>
            <div className={styles.header}>
                <h3>Your Result</h3>
                <div className={styles.headerResults}>
                    <h1>
                        76  
                    </h1>
                    <p>of 100</p>
                </div>

                <h2>Great</h2>
                <p>You scored higher than 65% of the people who have taken these tests.</p>
            </div>
            <div className={styles.contentContainer}>
                <h2>Summary</h2>
                <ResultBadge badgeColor={'hsl(0, 100%, 67%)'} category={'Reaction'} score={'80'} icon={'./assets/images/icon-reaction.svg'} />
                Reaction
                80 / 100

                Memory
                92 / 100

                Verbal
                61 / 100

                Visual
                72 / 100

                Continue
            </div>

        </>
    )
}

export default ResultSummary