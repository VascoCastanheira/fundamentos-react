import React, { Children } from "react";
import products from "../../data/products";


export default props => {

    const productsList = products.map((product) =>{
        return (  <td key={product.id}>
                    {product.name} {product.price}
                </td>
        )
    })
    return(
        <div>
            <tr>
                {productsList}
            </tr>
        </div>
    )
}