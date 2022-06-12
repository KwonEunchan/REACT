import Point from "../components/Point";
import '../styles/Tour.scss'
import elementInfo from '../dataset'

export default function Tour(){
  return(
    <div className="point-Wrapper">
      { elementInfo.map((target,index)=>{
        return(
        <Point code={target.code}></Point>
        )
      })}
    </div>
  )
}
