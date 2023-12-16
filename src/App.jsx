import './App.css'
import Account from './components/Account'
// import Bonus from './components/Bonus'
import { useSelector } from 'react-redux'
// import Reword from './components/Reword'

function App() {
  const amount = useSelector(state => state.account.amount)
  const points = useSelector(state => state.bonus.points)

  return (
    <div className='app'>
      <h2>CurrentAmount: {amount}</h2>
      <h2>Total Bonus: {points}</h2>
      <Account />
      {/* <Bonus /> */}
      {/* <Reword /> */}
    </div>
  )
}

export default App
