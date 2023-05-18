import style from "./card.module.css"
import React from "react"
import { AppContext } from "../../../App"
const Card = (props) =>{

  const context = React.useContext(AppContext);
  /* added -boolean-триггер-добавлен в корзину /isInBasket-уже в корзине */
// const [added,setAdded] = React.useState(props.isInBasket);
/* favorite -boolean- триггер для формы */
// Было до контекста
// const [favorite,setFavorite] = React.useState(props.fav);
const onСlickAdd = ()=> {
  context.changeBasket(props.code)
  //  setAdded(!added);
  // if(added) context.onDelBasket(props.code) 
  // else context.onAddBasket(props.code);
  }//было ранее:
// const onСlickAdd = ()=> { setAdded(!added);
//   if(added) props.onDelBasket(props.code) 
//   else props.onAddBasket(props.code);
//   }
const onClickFavor = ()=>{context.changeFavor(props.code)}
  // Было до контекста
  //  setFavorite(!favorite); 
  // if(favorite) props.onDelFavors(props.code) 
  // else props.onAddFavors(props.code);}
//props.onAddFavors(props.id);console.log(props.inFav)

    return(
        <div className='product_item'>


              <button className={context.inFavors(props.code)?style.btn_fav_in:style.btn_fav_off}
               onClick={onClickFavor}>
                {context.inFavors(props.code)?"Отвергнуть избранное": "Добавить в избранное"}
              </button>
              {/* Было без контекста
              <button className={(favorite)?style.btn_fav_in:style.btn_fav_off} onClick={onClickFavor}>
                {(favorite)?"Отвергнуть избранное": "Добавить в избранное"}
              </button> */}
              <img className='product_img' src={props.img} alt={props.title}/>
              <p className='product_title'>{props.title}</p>
              <p className='product_description'>{props.description}</p>
              <p className='price'>Стоимость</p>
              <div className='product_price'>
                <span>
                  {props.price /*+" >"+props.fav*/} руб.
                </span>
                  <button className={context.inBasket(props.code)?style.btn_added:style.btn_add} onClick={onСlickAdd}>
                      <img src={context.inBasket(props.code)?"/img/check.svg" 
                      :"/img/icons8-plus-24.svg"} alt='icon plus' />
                  </button>
                {/* Было без контекста
                  <button className={(added)?style.btn_added:style.btn_add} onClick={onСlickAdd}>
                      <img src={(added)?"/img/check.svg" 
                      :"/img/icons8-plus-24.svg"} alt='icon plus' />
                  </button> */}
              </div>
            </div>
    ) 
} 
export default Card