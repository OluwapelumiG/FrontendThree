import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/studentsSlice'


function App() {
  const [count, setCount] = useState(0);

  const students = useSelector(state => state.students.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 5)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        No of Students: { students }
      </p>

        <input type='text' className='border-2 border-gray-500' />
        <button className='px-4 py-2 bg-amber-500' onClick={() => dispatch(decrement())}>-</button>
        <button className='px-4 py-2 bg-green-600' onClick={() => dispatch(increment())}>+</button>
    </>
  )
}

export default App
