// Import section
import React from 'react'
import Pizzas from '../components/Pizzas'
import pizzas from '../pizzasdata'

const Homescreen = () => {
  return (
    <>
    {/* Making a row and rendering pizza data in col-md-4 */}
    <div className="row">
      {/* Maping the pizza data */}
        {pizzas.map(pizza=>{
            return <>
                <div className="col-md-4">
                    <div>
                      {/* Giving mapping data as a props */}
                    <Pizzas pizza={pizza} />

                    </div>
                </div>
            </>
        })}
    </div>
    </>
  )
}

export default Homescreen
