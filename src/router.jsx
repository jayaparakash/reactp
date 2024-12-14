import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import { Products } from "./components/products"
import { Blog } from "./components/blog"
import { RegisterFrom } from "./components/RegisterForm"


export const RouterDom = ()=>{
    return(
        <div className="">

        <BrowserRouter>
        <Routes>
        <Route path="/registerForm" element={<RegisterFrom/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/blog" element={<Blog/>}/>
         </Routes>
        </BrowserRouter>
    
        </div>
    )
}