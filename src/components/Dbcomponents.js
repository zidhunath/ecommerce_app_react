import {db} from '../db/db'
import { useLiveQuery } from 'dexie-react-hooks'
import { useDispatch } from "react-redux";
import { removeItem } from '../redux/Cart';


export const DbComponents = () =>{

    const dispatch= useDispatch()
    const itemsInDb = useLiveQuery(() => db.cartItems.toArray(), []);
   
    

        
    if(!itemsInDb){
        return null
    }
    return( 
        itemsInDb.map((product)=>{
           return(  
            <div className="card box"  key={product.id}>
            <div className="card-image">
              <img className="image is-128x128" src={product.image} />
            </div>
            <div className="card-content ">
              <div className="media-content">
                <p className="title is-6  mt-2 ">{product.name}</p>
                <p className="subtitle is-6 mt-2 ">{product.description}</p>
                <p className="subtitle is-6 mt-2">Price : ₹ {product.price}</p>
              </div>
            </div>
            <div className="columns is-3 has-text-centered">
              <div className="column button ">
                <button
                  className="button "
                 
                >
                  -
                </button>
              </div>
              <div className="column button ">
                <p className="is-size-6 ">{product.quantity} </p>
              </div>
              <div className="column button">
                <button
                  
                  className="button "
                 
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <button
                
                className="button is-danger"
                onClick={()=>dispatch(removeItem(product.id))}
              >
                Remove item
              </button>
            </div>
          </div>
           )
        })
        
    )
}