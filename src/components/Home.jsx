import Banner from './ban/Banner';
import About from  './about/About';
import Products from  './products/Products';
// import Basket from    './basket/Basket';

const Home = (props) =>{
    return(
    <>
        <Banner />
        <About />
        {/* { (props.btn_basket)?<Basket 
        basketItems={props.basketItems}
        onClickBasket={props.onClickBasket}
        onDelBasket={props.onDelBasket}
        />:null} */}
          <Products
            products={props.products}
            // inFavors={props.inFavors}
            // onAddFavors={props.onAddFavors}
            // onDelFavors={props.onDelFavors}
            // inBasket={props.inBasket}
            // onAddBasket={props.onAddBasket}
            // onDelBasket={props.onDelBasket}
          /> 
    </>
    )
}
export  default Home;