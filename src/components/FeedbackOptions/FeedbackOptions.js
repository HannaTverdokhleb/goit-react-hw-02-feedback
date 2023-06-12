import PropTypes from 'prop-types';
import style from 'components/FeedbackOptions/FeedbackOptions.module.css'

const FeedbackOptions = ({options, onLeaveFeedback}) => {

    return (
        <div className={style.buttonWrapper}>
            {options.map(option => {
                return (
                    <button key={option} name={option} onClick={onLeaveFeedback} className={style.button}>{option}</button>
                )
            })}
        </div>  
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;
