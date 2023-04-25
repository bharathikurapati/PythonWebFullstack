import logo from './logo.svg'
import './App.css';
import Carts from './Modules/Carts/Carts';
import{Outlet, useRoutes} from 'react-router-dom';
/*import Carts from './Modules/Cart/Cart';*/

function App() {

  const routers = useRoutes([
    {
      path:"/",
      element: <Carts/>
    },
    {
      path:"/Carts",
      element: <Carts>Hii I am searching the myntra app</Carts>
    }  
 ]);  

  return routers;
}


const Approot = () => {
  return <div className='App'>
    {Outlet}
  </div>
}
   
    

export default App;
