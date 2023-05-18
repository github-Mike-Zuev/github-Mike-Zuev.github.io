import style from './header.module.css'
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import React from 'react';
const Header = (props) =>{
   const context=React.useContext(AppContext);
    return(
        <header>
            <Link to="/">
             <h1 className={style.logo}> ITECH </h1>
            </Link>
            <nav>
                <Link to="/favorites">
                 <button className={style.nav_it}>
                    {context.favors.length===0?"НЕИЗБРАННО"
                    :<>ИЗБРАННОE<sup>{context.favors.length}</sup></>}
                </button>
                </Link>
                <button className={style.nav_it} onClick={props.onClickBasket}>
                    
                    {context.basketItems.length===0?"КОРЗИНKА ПУСТA"
                    :<>КОРЗИНKА<sup>{context.basketItems.length}</sup></>}
                </button>
            </nav>
      </header>
    )
} 

export default Header