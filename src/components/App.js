import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('katakroker');
  const [userLetter, setUserLetter] = useState([]);

  const renderSolutionLetters = (ev) => {
    const wordLetters = word.split('');
    const renderLetters = wordLetters.map((letter, index) => {
      if (word.includes(userLetter)) {
        return (
          <li key={index} class='letter'>
            {userLetter}
          </li>
        );
      } else {
        return <li key={index} class='letter'></li>;
      }
    });
    return renderLetters;
  };

  const handleChangeLetter = (ev) => {
    ev.preventDefault();
    const pattern = new RegExp('^[A-Za-z]+$');
    if (!pattern.test(ev.target.value)) {
      alert('tiene que ser una letra');
    } else {
      setLastLetter(ev.target.value);
      setUserLetter([...userLetter, ev.target.value]);
      // setUserLetter(ev.target.value);
    }
  };

  const renderErrorLetters = (ev) => {
    const filterErrorLetters = userLetter.filter(
      (letter) =>
        !word.includes(letter)).map((letter, index) => (
          <li key={index} class='letter'>
            {userLetter}
          </li>
        ))
    ;
    return filterErrorLetters;
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    setNumberOfErrors(numberOfErrors + 1);
  };

  return (
    <div className='page'>
      <header>
        <h1 className='header__title'>Juego del ahorcado</h1>
      </header>
      <main className='main'>
        <section>
          <div className='solution'>
            <h2 className='title'>Solución:</h2>
            <ul className='letters'>{renderSolutionLetters()}</ul>
          </div>
          <div className='error'>
            <h2 className='title'>Letras falladas:</h2>
            <ul className='letters'>
              {renderErrorLetters()}
              {/* <li className='letter'>f</li>
              <li className='letter'>q</li>
              <li className='letter'>h</li>
              <li className='letter'>p</li>
              <li className='letter'>x</li> */}
            </ul>
          </div>
          <form className='form'>
            <label className='title' htmlFor='last-letter'>
              Escribe una letra:
            </label>
            <input
              autocomplete='off'
              className='form__input'
              maxlength='1'
              type='text'
              name='last-letter'
              id='last-letter'
              value={lastLetter}
              onChange={handleChangeLetter}
            />
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className='error-13 eye'></span>
          <span className='error-12 eye'></span>
          <span className='error-11 line'></span>
          <span className='error-10 line'></span>
          <span className='error-9 line'></span>
          <span className='error-8 line'></span>
          <span className='error-7 line'></span>
          <span className='error-6 head'></span>
          <span className='error-5 line'></span>
          <span className='error-4 line'></span>
          <span className='error-3 line'></span>
          <span className='error-2 line'></span>
          <span className='error-1 line'></span>
        </section>
        <button onClick={handleClick}>Incrementar</button>
      </main>
    </div>
  );
}
export default App;
