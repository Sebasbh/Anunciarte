// import React from 'react'
// import ReactDOM from 'react-dom/client'
// //import App from './App.jsx'
// import './index.css'
// import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Home from './Pages/Home.jsx'
// import Navbar from './Components/molecules/Navbar.jsx';
// import Product from './Pages/Product.jsx';
// import ProductDetail from './Pages/ProductDetail.jsx';



// export default function Main() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <>
//           <Navbar />
//           <Outlet />
//         </>
//       ),
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/product",
//           element: <Product />,
//         },
//         {
//           path: "/detail",
//           element: <ProductDetail />,
//         },
        
//       ],
//     },
//   ]);
  
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <RouterProvider router={router} />
//     </React.StrictMode>,
//   )
//   return 
    
    

// }

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


