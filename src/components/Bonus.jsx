import { useDispatch, useSelector } from "react-redux"
import { increment } from "../slices/BonusSlice"

const Bonus = () => {
    const points = useSelector(state => state.bonus.points)
    const dispatch = useDispatch()

  return (
    <div style={{border: '1px solid white', padding: '20px'}}>
    <h2>Bonus Component</h2>
    <h2>Total points: {points} </h2>

    <button onClick={()=> dispatch(increment())}>increment+</button>
  </div>
  )
}

export default Bonus
