
import './App.css'
import getTodayWord from './getTodayWord'
function App() {
  const todayWord =getTodayWord(); 
  return (
    <>
      {todayWord}
    </>
  )
}

export default App
