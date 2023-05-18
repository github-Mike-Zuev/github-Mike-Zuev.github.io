import './App.css';
import Home from      "./components/Home";
import Header from    './components/header/Header';
import Footer from    './components/footer/Footer';
// import Products from  './components/products/Products';
import Basket from    './components/basket/Basket';
import Favorites from './components/favorites/Favorites';
import React from     "react";
import axios from     'axios';
import { Routes, Route, Link } from 'react-router-dom';
export const AppContext = React.createContext({})

 

  function App() {
    const Context = React.useContext(AppContext);
  //  console.log(AppContext);

     /* открытие корзины */
     const [btn_basket,setBtn_basket] = React.useState(false);
     const onClickBasket = ()=> setBtn_basket(!btn_basket);/*закрыти/открытие корзины*/
     /* товары в корзине*/
     const [basketItems, setBasketItems] = React.useState([]);
     /* Продукты */
     const [products,setProducts] = React.useState([]);
     /*Избранное */
     const[favors, setFavors] = React.useState([])
    
    //  React.useEffect(()=>{
    //   axios.get("https://635c028ffc2595be263e8438.mockapi.io/products/Products"
    //     ).then((json)=>{setProducts(json.data)})
    //   axios.get("https://635c028ffc2595be263e8438.mockapi.io/products/Basket"
    //   ).then((json)=>{setBasketItems(json.data)})
    //   axios.get('https://635c028ffc2595be263e8438.mockapi.io/products/Favor'
    //   ).then(json=> {setFavors(json.data)})
    //   },[])
    React.useEffect(  ()=>{
      async function readDAO (){ 
try {      
      const readProducts = await axios.get("https://635c028ffc2595be263e8438.mockapi.io/products/Products");
      const readBasket = await axios.get("https://635c028ffc2595be263e8438.mockapi.io/products/Basket");
      const readFavors = await axios.get('https://635c028ffc2595be263e8438.mockapi.io/products/Favor');
      setProducts(readProducts.data);
      setBasketItems(readBasket.data);
      setFavors(readFavors.data);
} catch{ alert(`Ошибка чтения mockapi url-'Б/Д:products'
                   https://635c028ffc2595be263e8438.mockapi.io/products/*`);}
      }
        readDAO ()
    },[])

     /* методы для Избранного */
    const changeFavor = (code)=>{ /* инверсия присутствия в избранном */
     return (inFavors(code)?onDelFavors(code):onAddFavors(code))
    }
     const inFavors = (code) =>{ /* (code)=>bool true если товар с code- имеется в избранном */
        return(favors.some((r) =>r.code === code))
    }  
    const onAddFavors = async (code) =>{
        // alert(title+" code: "+ code);console.log(favors);
        const objPush = products.find((item) => (item.code === code));/* поиск выбранного объекта для передачи */
try{
        await axios.post(`https://635c028ffc2595be263e8438.mockapi.io/products/Favor`,objPush)
        let arr = [...favors, objPush];
        setFavors(arr);
}catch{ alert(`Ошибка доступа mockapi url-'избранное' 
                      https://635c028ffc2595be263e8438.mockapi.io/products/Favor`)}
    }
    const onDelFavors = (code)=>{
      // React.useEffect( ()=>{ 
      async function delDAO () {
try{    
        const readFavors = await axios.get('https://635c028ffc2595be263e8438.mockapi.io/products/Favor');
        const forDel = readFavors.data.find((r)=> r.code === code);
        // console.log(forDel);
        const idDel = forDel.id;
        axios.delete(`https://635c028ffc2595be263e8438.mockapi.io/products/Favor/${idDel}`);
        let arr = favors.filter((r) => r.code !== code);
        setFavors(arr);
}catch{ alert(`Ошибка чтения/удаления mockapi url-'избранное'
                      https://635c028ffc2595be263e8438.mockapi.io/products/Favor/*`);}    
      } 
    delDAO ()
    }
     /* методы для корзины */
    const inBasket = (code)=>{ /* (code)=>bool true если товар с code- имеется в корзине */
      let res=basketItems.some((r) => r.code === code);
      // console.log(res);
      return(res)
    } 
    const changeBasket  =  (code) =>{  /* инверсия присутствия в корзине */
    return (inBasket(code)?onDelBasket(code):onAddBasket(code))  
    // if  ( inBasket (code))  onDelBasket (code);
    //    else onAddBasket (code);
    }
    const onAddBasket = async (code) =>{ //
      const objPush = products.find((item) => (item.code === code));
try {
        await axios.post("https://635c028ffc2595be263e8438.mockapi.io/products/Basket",objPush);
        let arr =  [...basketItems, objPush];
        setBasketItems(arr);
}catch{ alert(`Ошибка доступа mockapi url-'корзина'
                      https://635c028ffc2595be263e8438.mockapi.io/products/Basket`)}
    }
  const onDelBasket = (code)=>{
    async function delDAO () { /*загрузка всего Basket для поиска id соотв-го искомому объукту */ 
try{     
      const readBasket = await axios.get('https://635c028ffc2595be263e8438.mockapi.io/products/Basket');
      const forDel = readBasket.data.find((r)=> r.code === code);
      // console.log(forDel);
      const idDel = forDel.id;
      await axios.delete(`https://635c028ffc2595be263e8438.mockapi.io/products/Basket/${idDel}`);
      let arr = basketItems.filter((r) => r.code !== code);
      setBasketItems(arr);
} catch{ alert(`Ошибка чтения/удаления mockapi url-'корзина'
                        https://635c028ffc2595be263e8438.mockapi.io/products/Basket/*`);}   
    } 
  delDAO ()
  }
 
  return (
    <AppContext.Provider value={{ 

      changeFavor, /*= (code)=>{  инверсия присутствия в избранном */
      inFavors, /* (code)=>bool true если товар с code- имеется в избранном */
      basketItems, //содержимое корзины
      favors,     // содержимое избранного

      inBasket,  // (code)->bool - если такой есть в корзине 
      changeBasket,  /* инверсия присутствия в избранном */
      onAddBasket,// добавление в корзину
      onDelBasket // удаление из корзины

    }}>
    <div className="app">
    <Header onClickBasket={onClickBasket}/> {/*закрыти/открытие корзины*/}
    
    { (btn_basket)?<Basket /* Корзина  */
                // basketItems={basketItems}
                onClickBasket={onClickBasket} /*закрыти/открытие корзины*/
                // onDelBasket={onDelBasket}
                />:null}
    <Routes>
          <Route path='/favorites' element={
              <>
              <Favorites
                // favors={favors}
                // inFavors={inFavors}
                // onAddFavors={onAddFavors}
                // onDelFavors={onDelFavors}
                // inBasket={inBasket}
                // onAddBasket={onAddBasket}
                // onDelBasket={onDelBasket}      
              />
              </>
          } />
      <Route path='/' element={ <>
        <Home
          // btn_basket={btn_basket}
          // basketItems={basketItems}
          // onClickBasket={onClickBasket}
          // onDelBasket={onDelBasket}

          products={products}
          // inFavors={inFavors}
          // onAddFavors={onAddFavors}
          // onDelFavors={onDelFavors}
          // inBasket={inBasket}
          // onAddBasket={onAddBasket}
          // onDelBasket={onDelBasket}
        />
      </>} 
      /> 
    </Routes>
      <Footer/>
    </div>
    </AppContext.Provider>
  )
}

export default App;
