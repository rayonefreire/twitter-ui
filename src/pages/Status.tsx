import { FormEvent, KeyboardEvent, useState } from 'react';
import { Tweet } from '../components/Tweet';
import { Header } from "../components/Header"
import { Separetor } from '../components/Separetor';
import { PaperPlaneRight } from 'phosphor-react';

import './Status.css';

export function Status() {
  const [newAnswer, setNewAnswer] = useState('');
  const [answers, setAnswers] = useState([
    'Concordo',
    'Vdd'
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer('');
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer('');
    }
  }

  return (
    <main className="status">
      <Header title='Tweet' />

      <Tweet content='Opa' />

      <Separetor />

      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/rayonefreire.png" alt="RayoneFreire" />
          <textarea
            id='tweet'
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => setNewAnswer(event.target.value)}
          />
        </label>

        <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map(item => {
        return <Tweet key={item} content={item} />
      })}
    </main>
  )
}