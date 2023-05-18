/* копипаст из products/Products */

import React, { useState } from "react"
import FavorCard from "./favorcard/FavorCard"
import style from './favorites.module.css'
import { AppContext } from "../../App"

const Favorites = () => {
     const context = React.useContext(AppContext);
  //  console.log(context);
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
          <h2>Избранное, всего: {context.favors.length}</h2>
            <div className={style.search_block}>
              <img src="/img/search.png" alt="search icon" />
              <input type="search" placeholder="Поиск модели" onChange={onChangeSearch} />
            </div>
          </div>
         
          <div className={style.products}>
            {context.favors.filter((r)=>r.title.toLowerCase().includes(changeSearch.toLowerCase()))
            .map(obj => {
              return(
                <FavorCard 
                {...obj}
                key={obj.code}

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
export default Favorites
