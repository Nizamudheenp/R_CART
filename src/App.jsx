import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./e-components/Layout"
import ProductList, { productLoader } from "./e-components/Productlist"
import Productcard from "./e-components/Productcard"
import Cart from "./e-components/Cart"
import { useState } from "react"



function App() {
  const [searchTerm,setSearchTerm] = useState("")
    const router= createBrowserRouter([
      {
        path:"/",
        element:<Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>,
        loader:productLoader,
        children:[
          {
            path:"/",
            element:<ProductList searchTerm={searchTerm}/>,
            loader:productLoader
          },
          {    
            path:"/productItem/:productId",
            element:<Productcard />,
          },
          {
            path:"/cart",
            element:<Cart />
          }
        ]
      }
    ])  


    return <RouterProvider router={router} />
}

export default App
