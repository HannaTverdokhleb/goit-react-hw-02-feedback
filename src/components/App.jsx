import {Component} from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from "components/Notification/Notification";
import Section from 'components/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  getTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  getPositivePercentage = () => {
    let total = this.getTotal();
    let result = this.state.good * 100 / (total ? total : 1);
    return Math.round(parseFloat(result) * 100) / 100;
  }

  leaveFeedback = (e) => {
    let feedback = e.target.name; 
    this.setState((prevState) => ({ [feedback]: prevState[feedback] + 1 }));
  }

  render() {
    let feedbackOptions = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    let total = this.getTotal();
    let positivePercentage = this.getPositivePercentage();
    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions options={feedbackOptions} onLeaveFeedback={this.leaveFeedback} />
        </Section>
        <Section title="Statistics">
          {
            total ? 
              <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
            :
              <Notification message="Please leave feedback" />
          }
        </Section>
      </div>
    )
  }
}

export default App;