import React from 'react'
import Category from './Category';
export default function Menu({data}) {
    return (
        <div>
            <h1>Our Menu</h1>
            {
                data.map((item)=>
                {
                    return(
                        <button onClick={()=><Category />}>{item.category}</button>
                      
                    )
                })
            }
        </div>
    )
}
