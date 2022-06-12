import { Link } from 'react-router-dom'
import '../styles/Menu.scss'

export default function Menu(){
  return(
    <div className="menu">
      <div className="menu-wrapper">
        <div><Link to="/">홈</Link></div>
        <div><Link to="/tour">관광지</Link></div>
        <div><Link to="/mypage">마이페이지</Link></div>
      </div>
    </div>
  )
}