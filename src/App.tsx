import { MouseEventHandler, useState } from 'react'
import reactLogo from './assets/react.svg'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { amountAdded, decremented, incremented, reseted } from './features/counter/counterSlice';
import viteLogo from '/vite.svg'
import reduxLogo from '/redux.svg';
import { useFetchBreedsQuery } from './features/dogs/dogSlice';
import './App.css'

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState(10);

  const handlecounter: MouseEventHandler<HTMLButtonElement> | undefined = () => {
    dispatch(incremented());
  }
  const handledecrement: MouseEventHandler<HTMLButtonElement> | undefined = () => {
    dispatch(decremented());
  }

  const handlereset: MouseEventHandler<HTMLButtonElement> | undefined = () => {
    dispatch(reseted());
  }

  const handleAdded: MouseEventHandler<HTMLButtonElement> | undefined = () => {
    dispatch(amountAdded(2));
  }


  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

    return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reduxLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Redux/Toolkit</h1>
      <h2>Counter +  Dogs</h2>
      <div className="card">
        <h2>{count}</h2>
        <button onClick={handlecounter} >
          incremented
        </button>
        <button onClick={handleAdded} >
          incremented by 2
        </button>
        <button onClick={handlereset} >
          reseted
        </button>
        <button onClick={handledecrement} >
          decremented
        </button>
        <section>
      <div className="status">
      <p>Dogs to fetche</p>
      <select
        value={numDogs}
        onChange={(e) => setNumDogs(Number(e.target.value))}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        </select>

      </div>

<div>Number of dogs fetched : {data?.length}</div> 
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Picture</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((breed) => (
          <tr key={breed.id}>
            <td>{breed.name}</td>
            <td>
              <img src={breed.image.url} alt={breed.name} height={250} />
            </td>
          </tr>
        ))}
      </tbody>

      </table>
       
  </section>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
