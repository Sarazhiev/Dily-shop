import {useEffect} from "react";
import {db, storage} from "./firebase/firebase";
import {collection, getDocs} from "@firebase/firestore";
import {getAllProducts} from "./redux/reducers/products";
import {useDispatch, useSelector} from "react-redux";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import Shops from "./pages/Home/Shops/Shops";
import Layout from "./Layout/Layout";
import Auth from "./pages/Auth/Auth";
import './app.scss'
import Confirm from "./pages/Auth/Confirm/Confirm";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import Service from "./pages/Service/Service";
import Phones from "./pages/Phones/Phones";
import Advertisement from "./pages/Advertisement/Advertisement";
import Buying from "./pages/Buying/Buying";
import {findUser} from "./redux/reducers/user";
import NotFound from "./pages/NotFound/NotFound";
import Shop from "./pages/Home/Shops/Shop/Shop";
import Online from "./pages/Online/Online";
import Favourites from "./pages/Online/Favourites/Favourites";
import Cart from "./pages/Online/Cart/Cart";
import Charity from "./pages/Home/Charity/Charity";
import Orphanage from "./pages/Home/Orphanage/Orphanage";
import Data from "./pages/Home/Charity/Misery/Data/Data";
import Send from "./pages/Home/Charity/Request/Send/Send";
import Product from "./pages/Product/Product";
import Formalize from "./pages/Online/Cart/Formalize/Formalize";
import Organizations from "./pages/Home/Organizations/Organizations";
import Parishes from "./pages/Home/Parishes/Parishes";
import AboutUs from "./pages/Home/Orphanage/AboutUs/AboutUs";


function App() {
  const dispatch = useDispatch();

  const products = useSelector((s) => s.products.products);

  useEffect(() => {
    getDocs(collection(db, 'products'))
        .then((res) => dispatch(getAllProducts({arr: res.docs.map(el => ({...el.data(), id:el.id}))})));

   localStorage.getItem('user')?
    dispatch(findUser({user: JSON.parse(localStorage.getItem('user')) })) : console.log('empty local')
  }, []);


  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Layout/>}>
         <Route path='' element={<Home/>}/>
         <Route path='shops/' element={<Shops/>}/>
         <Route path='shop/:id' element={<Shop/>}/>
         <Route path='phone' element={<Phones/>}/>
         <Route path='charity' element={<Charity/>}/>
         <Route path='advertisement' element={<Advertisement/>}/>
         <Route path='service' element={<Service/>}/>
         <Route path='service/:category' element={<Service/>}/>
         <Route path='buying' element={<Buying/>}/>
         <Route path='online' element={<Online/>}/>
         <Route path='favourites' element={<Favourites/>}/>
         <Route path='cart' element={<Cart/>}/>
         <Route path='product/:id' element={<Product/>}/>
         <Route path='product' element={<Product/>}/>
         <Route path='orphanage' element={<Orphanage/>}/>
         <Route path='formalize' element={<Formalize/>}/>
         <Route path='organizations' element={<Organizations/>}/>
         <Route path='parishes' element={<Parishes/>}/>
         <Route path='aboutUs' element={<AboutUs/>}/>
       </Route>
       <Route path='data' element={<Data/>}/>
       <Route path='send' element={<Send/>}/>
       <Route path='/auth' element={<Auth/>}/>
       <Route path='/confirm' element={<Confirm/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/*' element={<NotFound/>}/>
     </Routes>
    </div>
  );
}

export default App;
