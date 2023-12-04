import { useForm } from 'react-hook-form';
import './App.css'
import {useState} from "react";


function App() {
    const [aardbeienCount, setAardbeienCount ] =useState(0);
    const [bananenCount, setBananenCount ] = useState(0);
    const [kiwiCount , setKiwiCount] =useState(0);
    const [appelCount , setAppelCount] = useState(0);

    function App() {
        const { register } = useForm();

  return (
    <>
<body>
        <h1>Fruitmand bezorgservice
            🥝 🍏 🍓 🍌
        </h1>

        <div>
        <section className='fruitcard'>
            <p> 🥝 </p>
            <p> kiwis </p>
            <button type='button' disabled={kiwiCount === 0}
                    onClick={() => setKiwiCount(kiwiCount - 1)}>-
            </button>
            <p>{kiwiCount}</p>
            <button type='button' onClick={() => setKiwiCount(kiwiCount + 1)}>+
            </button>
        </section>
        </div>

<div>
        <section className= 'fruitcard'>
            <p> 🍏 </p>
            <p> apples </p>
            <button type='button' disabled={appelCount === 0}
                    onClick={() => setAppelCount(appelCount - 1)}>-
            </button>
            <p>{appelCount}</p>
            <button type='button' onClick={() => setAppelCount(appelCount + 1)}>+
            </button>
        </section>
</div>

<div>
        <section className= 'fruitcard'>
            <p> 🍌 </p>
            <p> bananas</p>
            <button type='button' disabled={bananenCount === 0}
                    onClick={() => setBananenCount(bananenCount - 1)}>-
            </button>
            <p>{bananenCount}</p>
            <button type='button' onClick={() => setBananenCount(bananenCount + 1)}>+
            </button>
        </section>
</div>

<div>
        <section className= 'fruitcard'>
        <p> 🍓 </p>
        <p> aardbeien</p>
        <button type='button' disabled={aardbeienCount === 0}
                onClick={() => setAardbeienCount(aardbeienCount - 1)}>-
        </button>
        <p>{aardbeienCount}</p>
        <button type='button' onClick={() => setAardbeienCount(aardbeienCount + 1)}>+
        </button>
    </section>

        </div>


            <form>
            <label htmlFor="name-field">
            Naam:
            <input
            type="text"
            name="name"
            id="name-field"
            />
            </label>

            <label htmlFor="email-field">
            Email:
            <input
            type="text"
            name="email"
            id="email-field"
            />
            </label>

            <label htmlFor="message-field">
            Bericht:
            <textarea
            id="message-field"
            rows="4"
            cols="40"
            placeholder="Laat je bericht achter"
            name="message-content"
            ></textarea>
            </label>

            <button type="submit">
            Versturen
            </button>
            </form>




</body>
    </>
  );
}

export default App
