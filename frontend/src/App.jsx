import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'
import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'
function App() {

  const [todos, setTodos] = useState([])
  const API = `${import.meta.env.VITE_API_URL}/api/todos`

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get(API)
        const data = Array.isArray(res.data) ?
          res.data : res.data.todos ?? []

        setTodos(data)
        console.log(data)

      } catch (error) {
        console.log("체크 상태 업데이트 실패", error)
      }
    }
    fetchTodos()
  }, [])

  return (
    <div className='App'>
      <Header />
      <TodoEditor />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
