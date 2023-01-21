import { useState } from 'react';
import './App.css';

const Button = ({ text, onClick }) => {
  return <button onClick={onClick} className="Button">{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td> {text} </td>
      <td> {value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad;
  const avarage =
    sum > 0 ? ((good * 1 + neutral * 0 + bad * -1) / sum).toFixed(1) : 0;

  const positive =
    good > 0 ? ((good * 100) / sum).toFixed(1).concat('%') : '0%';

  if (sum <= 0) {
    return 'No feedback';
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="All" value={sum} />
          <StatisticLine text="Avarage" value={avarage} />
          <StatisticLine text="Positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerClickGood = () => {
    setGood(good + 1);
  };
  const handlerClickNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handlerClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div className="App">
      <h1>Give a feedback</h1>
      <Button text="good" onClick={handlerClickGood} />
      <Button text="neutral" onClick={handlerClickNeutral} />
      <Button text="bad" onClick={handlerClickBad} />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
