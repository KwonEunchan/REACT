import '../styles/CartEl.scss'
import { useDispatch, useSelector } from "react-redux"
import { addItem, delItem } from "../Store.js" 
import elementInfo from '../dataset'


export default function CartEl(props){
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  
  return(
    <div className='cartEl'> 
      <div className='cartImg'></div>
      <div className="cartText">
        <div className='cartInfo'>
          <h2>{elementInfo[props.code].name}</h2>
          <h5>{elementInfo[props.code].addr.slice(0,11)}</h5>
        </div>
        <div className='cartEvent'>
          <div className='btn about'>자세히</div>
          <div className='btn pick' onClick={()=>{ dispatch(delItem(props.code))}} >지우기</div>
        </div>   
      </div> 
    </div>
  )
}