

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import Login from './Auth/Login';
import Todayappinment from './TodayAppoinment/Todayappinment';


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          element:<Home></Home>
        },{
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/appoinment',
          element:<Todayappinment></Todayappinment>
        }
      
      ]                                                       
    }
  ])
  return (
    <div className='max-w-[1440px] max-auto'>
      <RouterProvider router={router} ></RouterProvider>
 
    </div>
  );
}

export default App;
