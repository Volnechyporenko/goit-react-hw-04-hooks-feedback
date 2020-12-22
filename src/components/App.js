import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increment = prev => prev + 1;

  const handleClick = option => {
    switch (option) {
      case 'good':
        setGood(increment);
        break;
      case 'neutral':
        setNeutral(increment);
        break;
      case 'bad':
        setBad(increment);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round(good * (100 / countTotalFeedback())) || 0;
  const total = countTotalFeedback();
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onClick={handleClick}
          options={['good', 'neutral', 'bad']}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};

export default App;
