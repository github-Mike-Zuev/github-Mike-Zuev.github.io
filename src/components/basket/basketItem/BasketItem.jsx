// товары в корзине
import style from "./basketItem.module.css"
const BasketItem = (props)=>{
    return(
<div>
    <div className={style.basketItem}>
        <img className = {style.basketImgItem} src={props.img} alt={props.title} />
        <h3 className={style.basketTitleItem}>
          {props.title}
          <br />
          <span className={style.basketPriceItem}>{props.price} р.</span>
        </h3>
        <button className={style.btnCloseBasketItem}
            onClick={()=> props.onDel(props.code)}>X</button>
    </div>
</div>
    
    )
}
export default BasketItem