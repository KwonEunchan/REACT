import { configureStore, createSlice } from '@reduxjs/toolkit'

let cart   = createSlice({
  name : 'cart',
  initialState : [] ,
  reducers: {
    addItem(state, target){
      let copy = [...state];
      copy.push(target.payload);
      return state = copy;
    },
    delItem(state,target){
      let copy = [...state];
      copy.shift(copy.find(copy=>copy===target.payload));
      return state = copy;
    },

    clear(state){
      return [];
    }
  }
}
)

let view   = createSlice({
  name : 'view',
  initialState : 0,
  reducers: {
    next(state,count){
      console.log(count.payload);
      console.log(count.payload)
      return state - 370 <= -count.payload * 370 ? -(count.payload-1)*370 : state - 370;
    },
    back(state){
      return state + 370 >= 0 ? 0 : state + 370;
    }
  }
})

let ticket   = createSlice({
  name : 'ticket',
  initialState : [],
  reducers: {
    setTicket(state,value){
      return state = value.payload;
    }
  }
})



export default configureStore({
  reducer: { 
    cart : cart.reducer,
    view : view.reducer,
    ticket : ticket.reducer
  }
}) 

export let { addItem, delItem, clear } = cart.actions
export let { next, back } = view.actions
export let { setTicket } = ticket.actions