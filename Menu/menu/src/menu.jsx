import React from 'react'

export default function Menu({data}) {
    return (
        <div>
            <h1>Our Menu</h1>
            {
                data.map((item)=>
                {
                    return(
                        <section>

                        <img src={item.img} alt="" height='300px'/>
                        <h4>{item.title}</h4>
                        <h5>Rs.{item.price}</h5>

                        </section>
                      
                    )
                })
            }
        </div>
    )
}
