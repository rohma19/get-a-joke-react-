import './Joke.css';
import PropTypes from 'prop-types';



const Joke = ({ joke }) => {
  return (
    <div className="joke-container">
        <h2>{joke.category}</h2>

      {joke.type === 'single' ? (
        <div className="joke">{joke.joke}</div>
        ) : (
        <div>
            <div className="setup">{joke.setup}</div>
           <div className="delivery">{joke.delivery}</div>
         </div>)
        })

<div className='flags'>
        {Object.entries(joke.flags).map(([flag, value]) => (
          <button key={flag} className={value ? 'red' : 'green'}>
            {flag} : {value.toString()}
          </button>
        ))}
      </div>

      <div className={joke.safe ? 'green' : 'red'}>
        {' '}
        Safe : {joke.safe.toString()}
        </div>
    </div>
    );
};


Joke.propTypes = {
  joke: PropTypes.shape({
    type: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    joke: PropTypes.string,
    setup: PropTypes.string,
    delivery: PropTypes.string,
    flags: PropTypes.shape({
      nsfw: PropTypes.bool,
      religious: PropTypes.bool,
      political: PropTypes.bool,
      racist:PropTypes.bool,
      sexist:PropTypes.bool,
      explicit: PropTypes.bool
    }),
    safe: PropTypes.bool.isRequired

  }).isRequired,
};


export default Joke;
