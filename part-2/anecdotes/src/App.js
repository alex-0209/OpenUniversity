import { useState } from 'react';

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    '1. If it hurts, do it more often.',
    '2. Adding manpower to a late software project makes it later!',
    '3. The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    '4. Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    '5. Premature optimization is the root of all evil.',
    '6. Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    '7. Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  ];

  const [selected, setSelected] = useState(0);

  const handlerRandom = () => {
    setSelected(Math.round(Math.random() * 6));
  };
  const point = Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(point);

  const handlerVotes = () => {
    const copyPoint = [...votes];
    copyPoint[selected] += 1;
    setVotes(copyPoint);
  };

  const BestChoice = () => {
    const bestChoiceIndex = votes.indexOf(Math.max(...votes));
    console.log(bestChoiceIndex);

    return (
      <div>
        <h2>Moust pupular</h2>
        <p>
          {votes[bestChoiceIndex] === 0
            ? ' '
            : `${anecdotes[bestChoiceIndex]} has ${votes[bestChoiceIndex]}`}
        </p>
      </div>
    );
  };

  return (
    <div className="App">
      <p>{anecdotes[selected]}</p>
      <p>
        has {votes[selected]} {votes[selected] <= 1 ? 'point' : 'points'}
      </p>
      <Button text="Next" onClick={handlerRandom} />
      <Button text="Vote" onClick={handlerVotes} />
      <BestChoice />
    </div>
  );
};

export default App;
