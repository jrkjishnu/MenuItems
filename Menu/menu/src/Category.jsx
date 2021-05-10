import React from 'react'

export default function Category({filterItems,categories}) {
    return (
        <div>
            {
                categories.map((category)=>
                {
                    return(
                        <button onClick={()=>filterItems(category)}>{category}</button>
                    )
                })
            }
        </div>
    )
}
