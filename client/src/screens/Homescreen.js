// Import section
import React, { useState, useEffect } from 'react'
import Pizzas from '../components/Pizzas'
import pizzas from '../pizzasdata'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'

const Homescreen = () => {
  const dispatch = useDispatch()
  const pizzasstate = useSelector(state => state.getAllPizzasReducer)
  const { pizzas, loading, error } = pizzasstate
  useEffect(() => {
    // Calling the action name
    dispatch(getAllPizzas())
  }, [])

  return (
    <>
      {/* Making a row and rendering pizza data in col-md-4 */}
      <div className="row">
        {loading ? (<h1>Loading</h1>) : error ? (<h1>Something went wrong</h1>) : (

          pizzas.map(pizza => {
            return <>
              <div className="col-md-4" key={pizza._id}>
                <div >
                  {/* Giving mapping data as a props */}
                  <Pizzas pizza={pizza} />

                </div>
              </div>
            </>
          })
        )}

      </div>
    </>
  )
}

export default Homescreen
