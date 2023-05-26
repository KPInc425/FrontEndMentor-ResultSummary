import { useEffect } from 'react'
import styles from './ResultBadge.module.sass'
import { useState } from 'react'

const ResultBadge = ({ category, score, icon, badgeColor }) => {
    const [lightColor, setLightColor] = useState('')
    useEffect(() => {
        lightenColor(badgeColor, 97)
    }, [])
    const lightenColor = (color, percent) => {
        const hslRegex = /hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/;
        // console.log(color)
        // console.log(hslRegex)
        const lightColor = color.match(hslRegex)
        // console.log(lightColor)
        if (lightColor) {
            const hue = lightColor[1]
            const saturation = lightColor[2]
            const newLightness = percent
            return setLightColor(`hsl(${hue}, ${saturation}%, ${newLightness}%)`)
        }
        return console.error('Invalid color or percentage')
    }
    return (
        // <div style={{backgroundColor: badgeColor}} className={styles.badgeContainer}>
        <div style={{backgroundColor: lightColor}} className={styles.badgeContainer}>
            <div className={styles.categoryContainer}>
                <img src={icon} className={styles.iconImage}/>
                <p style={{color: badgeColor}} className={styles.label}>{category}</p>
            </div>
            <p className={styles.label}>{score} &nbsp;<span className={styles.totalFade}>/ 100</span></p>
        </div>
    )
}

export default ResultBadge