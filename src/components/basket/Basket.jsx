// корзина 
import { Link } from "react-router-dom"
import style from "./basket.module.css"
import BasketItem from "./basketItem/BasketItem"
import React, { useState } from "react"
import { AppContext } from '../../App'
const Basket = (props) => {
    const context = React.useContext(AppContext);
    // console.log(context);

    const onDel =(code)=>{context.onDelBasket(code)}
    return(
     
    <div className={style.overlay}>
        <div className={style.basket}>        
            <div className={style.titleBlock}>
                <h2>Корзинка {context.basketItems.length}шт.</h2>
                <Link to = "/">
                   <button className={style.btnClose} onClick={props.onClickBasket}>
                     X 
                   </button>
                </Link>
            </div>
             <div className={style.baskList}>
                {context.basketItems.map(obj => {return(
                    <BasketItem 
                    key={obj.code}
                    {...obj}
                    onDel={onDel}
                />)})}
                
            </div>

            <div className={style.baskTotal}>
                <p className={style.totalTxt}>Итого:</p>
                <p className={style.totalSumm}>
                    {context.basketItems.reduce((A, B) =>  A + B.price, 0 )}  руб.</p>
                <button className={style.btnOrder}>Заказать</button>
            </div>
        </div>
    </div> 
)}
export default Basket;
