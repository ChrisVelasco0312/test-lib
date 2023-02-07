import { useState } from 'react'
import { MyButton } from 'my-lib'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyButton onClick={() => setCount(count + 1)}>Click me</MyButton>
      <p>Count: {count}</p>
    </div>
  )
}

export default App
