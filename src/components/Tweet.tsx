import { ChatCircle, ArrowsClockwise, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import './Tweet.css';

interface TwitterProps {
  content: string;
}

export function Tweet(props: TwitterProps) {
  return (
    <Link to='/status' className="tweet">
      <img src="https://github.com/rayonefreire.png" alt="RayoneFreire" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Rayone</strong>
          <span>rayonefreire</span>
        </div>

        <p>{props.content}</p>
        
        <div className="tweet-content-footer">
          <button type='button'>
            <ChatCircle />
            20
          </button>

          <button type='button'>
            <ArrowsClockwise />
            20
          </button>

          <button type='button'>
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  )
}