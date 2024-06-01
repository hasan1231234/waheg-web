import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import Corsat from './pages/Corsat';
import Best from './pages/Best';
import Cart from './pages/Cart';
import Credit from './components/Credit';
import Paypal from './components/Paypal';
import Sub from './pages/Sub';
import Sub2 from './pages/Sub2';

function App() {
  return (
   <>
   <BrowserRouter>
     <Routes>
       <Route path='/' index element={<SignUp/>}/>
       <Route path='/login' element={<LogIn/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/corsat' element={<Corsat/>}/>
       <Route path='/best' element={<Best/>}/>
       <Route path='/cart' element={<Cart/>}>
         <Route  path='credit' element={<Credit/>}/>
         <Route path='paypal' element={<Paypal/>}/>
       </Route>
       <Route path='/sub' element={<Sub/>}/>
       <Route path='/sub2' element={<Sub2/>}/>
     </Routes>
   </BrowserRouter>
     
   </>
  );
}

export default App;
