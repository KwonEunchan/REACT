import CartEl from '../components/CartEl'
import { useDispatch, useSelector } from "react-redux"
import '../styles/Cart.scss'
import BootPay from "bootpay-js"
import elementInfo from '../dataset'
import { Link } from 'react-router-dom'
import { clear, next, back} from "../Store.js" 
import Ticket from './Ticket'

export default function Cart(){
  let cart = useSelector((state) => state.cart);
  let view = useSelector((state) => state.view);
  let dispatch = useDispatch();
  let fee = 0;

  function pay_Request(money) {
    BootPay.request({
      price: money, //실제 결제되는 가격
      application_id: "6293c9aee38c3000245ada69",
      name: '여행상품', //결제창에서 보여질 이름
      pg: 'danal',
      method: 'card', //결제수단, 입력하지 않으면 결제수단 선택부터 화면이 시작합니다.
      show_agree_window: 0, // 부트페이 정보 동의 창 보이기 여부
      items: [
        {
          item_name: '여행상품', //상품명
          qty: 1, //수량
          unique: '123', //해당 상품을 구분짓는 primary key
          price: 1000, //상품 단가
        }
      ],
      user_info: {
        username: '사용자 이름',
        email: '사용자 이메일',
        addr: '사용자 주소',
        phone: '010-1234-4567'
      },
      order_id: '12345', //고유 주문번호로, 생성하신 값을 보내주셔야 합니다.
      params: { callback1: 'A', callback2: 'B', customvar1234: 'C' },
      account_expire_at: '2023-10-25', // 가상계좌 입금기간 제한 ( yyyy-mm-dd 포멧으로 입력해주세요. 가상계좌만 적용됩니다. )
      extra: {
      raw_data: 1 // 오류 확인용
    }
    }).error(function (data) {
      //결제 진행시 에러가 발생하면 수행됩니다.
      console.log(data);
    }).cancel(function (data) {
      //결제가 취소되면 수행됩니다.
      console.log(data);
    }).ready(function (data) {
      // 가상계좌 입금 계좌번호가 발급되면 호출되는 함수입니다.
      console.log(data);
    }).confirm(function (data) {
      //결제가 실행되기 전에 수행되며, 주로 재고를 확인하는 로직이 들어갑니다.
      //주의 - 카드 수기결제일 경우 이 부분이 실행되지 않습니다.
      console.log(data);
      var enable = true; // 재고 수량 관리 로직 혹은 다른 처리
      if (enable) {
        BootPay.transactionConfirm(data); // 조건이 맞으면 승인 처리를 한다.
      } else {
        BootPay.removePaymentWindow(); // 조건이 맞지 않으면 결제 창을 닫고 결제를 승인하지 않는다.
      }
    }).close(function (data) {
      // console.log(data);
    }).done(function (data) {
      dispatch(clear())
      //결제가 정상적으로 완료되면 수행됩니다
      //비즈니스 로직을 수행하기 전에 결제 유효성 검증을 하시길 추천합니다.
    });
  }
  
  function clickNext(){
    dispatch(next(cart.length));
    console.log(view);
    document.querySelector('.cart-Viewer').style.left = view + `px`;
  }
  function clickBack(){
    dispatch(back());
    console.log(view);
    document.querySelector('.cart-Viewer').style.left = view + `px`;
  }
  return(
    <>
    { cart.length == 0 ? (
      <div className='cartEmpty'>
        <h1>장바구니가 비어있습니다.</h1> 
        <Link to="/tour"><div className='btn btnLink'>담 기</div></Link> 
      </div>
    ):
    <div className='cartArea'>
    <span className="material-symbols-outlined btnBack" onClick={()=>{ clickBack()}}>arrow_back_ios</span>
    <div className="cart-Wrapper">
      <div className='cart-Viewer' style={{width: cart.length * 400 +`px`}}>
      { 
        cart.map((target,index)=>{
          fee += elementInfo[target].price;
          return(
            <CartEl code={target}></CartEl>
          )
      })}
      </div>
    </div>
    <span className="material-symbols-outlined btnNext" onClick={()=>{ clickNext()}}>arrow_forward_ios</span>
    </div>
}
    
    { cart.length==0 ? null :
    <div className='btnBox'>
      <button className="btn btnPay" onClick={() => pay_Request(fee)}>결제하기</button>
      <button className="btn btnClear" onClick={() => dispatch(clear())}>비우기</button>
    </div>
    }
    </>
    )
  }