import { FormEvent, useState, KeyboardEvent } from 'react';
import { Tweet } from '../components/Tweet';
import { Header } from "../components/Header"
import { Separetor } from '../components/Separetor';

import './Timeline.css';

export function Timeline() {
  const [newTweet, setNewTweet] = useState('');
  const [tweets, setTweets] = useState([
    'Olá',
    'Oi'
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    setTweets([newTweet, ...tweets]);
    setNewTweet('');
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets]);
      setNewTweet('');
    }
  }

  return (
    <main className="timeline">
      <Header title='Home' />

      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/rayonefreire.png" alt="RayoneFreire" />
          <textarea
            id='tweet'
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => setNewTweet(event.target.value)}
          />
        </label>

        <button type='submit'>Tweet</button>
      </form>

      <Separetor />

      {tweets.map(item => {
        return <Tweet key={item} content={item} />
      })}
    </main>
  )
}