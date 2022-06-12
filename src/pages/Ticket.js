import { useDispatch, useSelector } from "react-redux"
import {QRCodeCanvas} from 'qrcode.react';
import { setTicket, clear } from "../Store";
import '../styles/Ticket.scss'

export default function Ticket(){
  let cart = useSelector((state) => state.cart);
  let ticket = useSelector((state) => state.ticket);  
  let dispatch = useDispatch();

  dispatch(setTicket(cart));

  return(
    <div className="inner">
      <div className="ticketBox">
        <QRCodeCanvas value={ticket}></QRCodeCanvas>
        <p>2022-06-12</p>
        <button>상 세</button>
      </div>
    </div>
    )
}