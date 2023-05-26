import Button from '../Button/Button'
import ResultBadge from '../ResultBadge/ResultBadge'
import styles from './ResultSummary.module.sass'
import { useEffect, useState } from 'react'
const ResultSummary = ({ resultData }) => {
    const [results, setResults] = useState([])
    useEffect(() => {
      fetch('./src/data.json')
      .then(r => r.json())
      .then(data => setResults(data))
    }, [])
    return (
        <div className={styles.mainContainer}>
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
                <div className={styles.resultsContainer} >
                    <h3>Summary</h3>
                    {  results && results.map((result, index) => {
                            return (
                                <ResultBadge key={index} badgeColor={result.color} category={result.category} score={result.score} icon={result.icon} />
                            )
                        })
                    }
                    <Button label="Continue" />
                </div>
            </div>

        </div>
    )
}

export default ResultSummary