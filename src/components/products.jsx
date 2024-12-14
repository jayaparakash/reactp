import { useEffect, useState } from "react"
import { Header } from "./header"
import axios from "axios"
import { ProductsList } from "./productsList"

export const Products =()=>{
    let [products,setProducts] = useState([])
    let [count,setCount]=useState(0)

    function add() {
        setCount(count+1)
    }

    function remove() {
        setCount(count-1)
    }

    useEffect(()=>{

        async function HandleData() {
            let products = await axios.get('https://dummyjson.com/products')
            console.log(products.data.products);
            setProducts(products.data.products)
            
        }
        HandleData()

    },[])

    return(
        <div>
            <Header />
            {/* <h1>WelCom to products</h1> */}
            <h1>CartCount:{count}</h1>
      <div className="container">
      <ProductsList products={products} add={add} remove={remove}/>
      </div>


        </div>
    )
}