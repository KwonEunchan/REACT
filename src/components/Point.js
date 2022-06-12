import '../styles/Point.scss'
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../Store.js" 
import elementInfo from '../dataset'


export default function Point(props){
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  
  return(
    <div className='pointEl'> 
      <img className='pointImg' src = {`images/`+props.code+`.jfif`}></img>
      <div className="pointText">
        <div className='pointInfo'>
          <h2>{elementInfo[props.code].name}</h2>
          <h5>{elementInfo[props.code].addr.slice(0,11)}</h5>
        </div>
        <div className='pointEvent'>
          <div className='btn about'>자세히</div>
          <div className='btn pick' onClick={()=>{ dispatch(addItem(props.code))}} >선 택</div>
        </div>   
      </div> 
    </div>
  )
}