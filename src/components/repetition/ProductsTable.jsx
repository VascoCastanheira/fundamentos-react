import React, { Children } from "react";
import products from "../../data/products";
import './ProductsTable.css';


export default props => {

    const productsList = products.map((product, i) =>{
        return (<tr key={product.id} className={i % 2 == 0 ? 'even' : 'odd'}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>USD$ {product.price.toFixed(2)}</td>
                </tr>
        )
    })
    return(
        <div className='ProductsTable'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product</th>
                        <th>Price</th>    
                    </tr>
                </thead>
                <tbody>
                    {productsList}
                </tbody>
            </table>
        </div>
    )
}