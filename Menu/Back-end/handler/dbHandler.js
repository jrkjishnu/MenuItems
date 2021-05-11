const { resolve, reject } = require("promise")
const db = require('../config/connection')
module.exports={
    getItems:()=>
    {
        return new Promise((resolve,reject)=>
        {
            db.get().collection('items').find().toArray().then((items)=>
            {
                console.log(items);
                resolve(items);
            })
            
        })
    }
}