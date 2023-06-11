import PropTypes from 'prop-types';
import style from 'components/Statistics/Statistics.module.css'

const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage
}) => {
    return (
        <>
            <p className={style.stat}>Good: <span className={style.count}>{good}</span></p>
            <p className={style.stat}>Neutral: <span className={style.count}>{neutral}</span></p>
            <p className={style.stat}>Bad: <span className={style.count}>{bad}</span></p>
            <p className={style.stat}>Total: <span className={style.count}>{total}</span></p>
            <p className={style.stat}>Positive feedback: <span className={style.count}>{positivePercentage}%</span></p>
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}

export default Statistics;
