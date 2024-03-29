import React from 'react'
import './App.css'
import TextField from './TextField'
import Counter from './Counter'

const App : React.FC = () => {

  return (
    <div className="App">
      <TextField
        text={'hello'}
        person={{ firstName: '', lastName: '' }}
        handleChange={e => e.preventDefault()}
      />
      <Counter>
        {
          ({count, setCount}) => (
            <div>
              {count}
              <button onClick={() => setCount(count + 1)}> +</button>

            </div>
          )

        }
      </Counter>
    </div>
  )
}

export default App
