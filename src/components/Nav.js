import '../styles/Nav.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

export default function Nav(){
  let cart = useSelector((state) => state.cart ) 

  return(
    <nav>
      <div className="inner">
        <img src="logo.png"></img>
        <ul>
          <li>로그인</li>
          <Link to="/ticket"><li>이용권</li></Link>
          <Link to="/cart"><li>장바구니</li></Link>
          { cart.length != 0 ? <span className="count">{cart.length}</span> : null}
        </ul>
      </div>
    </nav>
  )
}