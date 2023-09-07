

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import Login from './Auth/Login';
import Todayappinment from './TodayAppoinment/Todayappinment';
import SignUp from './Auth/SignUp';
import DashBoard from './DashBoard/DashBoard';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './PrivateRoute/PrivateRoute';


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
        path:'/signup',
        element:<SignUp></SignUp>
        },
        {
          path:'/appoinment',
          element:<Todayappinment></Todayappinment>
        },
        {
          path:'/dashboard',
          element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>
        }
      
      ]                                                       
    }
  ])
  return (
    <div className='max-w-[1440px] max-auto'>
      <RouterProvider router={router} ></RouterProvider>
      <Toaster></Toaster>
 
    </div>
  );
}

export default App;
