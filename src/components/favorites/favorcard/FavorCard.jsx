/*копипаст Card */
import style from "./favorCard.module.css"
import React from "react"
import { AppContext } from "../../../App"

const FavorCard = (props) =>{

const context = React.useContext(AppContext);
const onСlickAdd = ()=> {
  context.changeBasket(props.code)
  }
const onClickFavor = ()=>{context.changeFavor(props.code)}
    return(
        <div className='product_item'>
              <button className={context.inFavors(props.code)?style.btn_fav_in:style.btn_fav_off}
               onClick={onClickFavor}>
                {context.inFavors(props.code)?"Отвергнуть избранное": "Добавить в избранное"}
              </button>
              <img className='product_img' src={props.img} alt={props.title}/>
              <p className='product_title'>{props.title}</p>
              <p className='product_description'>{props.description}</p>
              <p className='price'>Стоимость</p>
              <div className='product_price'>
                <span>
                  {props.price} руб.
                </span>
                  <button className={context.inBasket(props.code)?style.btn_added:style.btn_add} onClick={onСlickAdd}>
                      <img src={context.inBasket(props.code)?"/img/check.svg" 
                      :"/img/icons8-plus-24.svg"} alt='icon plus' />
                  </button>
              </div>
            </div>
    ) 
}
export default FavorCard
