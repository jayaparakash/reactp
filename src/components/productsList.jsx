export const ProductsList =({products,add,remove})=>{
    return(
        <div className="row">
            {
               products.map((product)=>(
                <div className="card col-3 p-3" >
                <img src={product.thumbnail} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                    <div>
                        <button className="btn btn-primary" onClick={()=>add()}>ADD</button>
                        <button className="btn btn-danger" onClick={()=>remove()}>Remove</button>
                    </div>
                </div>
              </div>

               ))
            }
        </div>
    )
}