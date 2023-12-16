import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, fetchUserData, increment, incrementByAmount } from "../slices/AccountSlice"

const Account = () => {
    const [inputValue, setInputValue] = useState()
    const amount = useSelector(state => state.account.amount)
    const name = useSelector(state => state.account.name)
    const dispatch = useDispatch()

  return (
    <div style={{border: '1px solid white', padding: '20px'}}>
      <h2>Account Component</h2>
      <h2>userName: {name} </h2>
      <button onClick={()=> dispatch(fetchUserData(1))}>Fetch user name</button>
      
      <h2>Amount: {amount}</h2>

      <button onClick={()=> dispatch(increment())}>increment+</button>
      <button onClick={()=> dispatch(decrement())}>decrement-</button>

      <input type="number" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}  />
      <button onClick={()=> dispatch(incrementByAmount(inputValue))}>incrementBy {inputValue} + </button>
    </div>
  )
}

export default Account
