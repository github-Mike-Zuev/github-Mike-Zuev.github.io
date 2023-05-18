 import React, { useState } from "react"
import Card from "./card/Card"
import style from './products.module.css'
// const products = [
//   {key:1, title:'iPhone 1', description:'Краткое описание смартфона 1', price: 40000.00, img:'/img/iphone-1.png'},
//   {key:2, title:'iPhone 2', description:'Краткое описание смартфона 2', price: 40100.00, img:'/img/iphone-1.png'},
//   {key:3, title:'iPhone 3', description:'Краткое описание смартфона 3', price: 40200.00, img:'/img/iphone-1.png'},
//   {key:4, title:'iPhone 4', description:'Краткое описание смартфона 4', price: 40300.00, img:'/img/iphone-1.png'},
//   {key:5, title:'iPhone 5', description:'Краткое описание смартфона 5', price: 40400.00, img:'/img/iphone-1.png'},
//   {key:6, title:'iPhone 6', description:'Краткое описание смартфона 6', price: 40500.00, img:'/img/iphone-1.png'},
//   {key:7, title:'iPhone 7', description:'Краткое описание смартфона 7', price: 40600.00, img:'/img/iphone-1.png'},
//   {key:8, title:'iPhone 8', description:'Краткое описание смартфона 8', price: 40700.00, img:'/img/iphone-1.png'},
//   {key:9, title:'iPhone 9', description:'Краткое описание смартфона 9', price: 40800.00, img:'/img/iphone-1.png'},
//   {key:10, title:'iPhone 10', description:'Краткое описание смартфона 10', price: 40900.00, img:'/img/iphone-1.png'},
// ]


const Products = (props) => {
/* текст поиска */
  const [changeSearch,setChangeSearch] = React.useState("");
  const onChangeSearch = function (inp) {
    let text = (inp.target.value);
    setChangeSearch(text);
    // console.log(changeSearch);
  }
  return(
        <div className={style.products_sect}>
          <div className ={style.search}>
          <h2>Все смартфоны </h2>
            <div className={style.search_block}>
              <img src="/img/search.png" alt="search icon" />
              <input type="search" placeholder="Поиск модели" onChange={onChangeSearch} />
            </div>
          </div>
         
          <div className={style.products}>
            {/* {props.products.filter((r)=>r.title.toLowerCase.includes("1")).map(obj => { */}
            {props.products.filter((r)=>r.title.toLowerCase().includes(changeSearch.toLowerCase()))
            .map(obj => {
              return(
                <Card 
                {...obj}
                key={obj.code}
                // code={obj.code} 
                // title={obj.title} 
                // description={obj.description} 
                // price={obj.price} 
                // img={obj.img}
               // // inFav={props.favors !==undefined ? props.favors:"-"} 
              //  // onСlickAdd={()=>{alert("Вы добавили в корзинку: "+ obj.title)}}
                // fav={props.inFavors(obj.code)}
                // onAddFavors={props.onAddFavors}
                // onDelFavors={props.onDelFavors}
                // isInBasket={props.inBasket(obj.code)}
                // onDelBasket={props.onDelBasket}
                // onAddBasket={props.onAddBasket}
              /> ) } )}
         </div>
      </div>
    )
}
export default Products