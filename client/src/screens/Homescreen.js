// Import section
import React,{useState,useEffect} from 'react'
import Pizzas from '../components/Pizzas'
import pizzas from '../pizzasdata'
import {useDispatch,useSelector} from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'

const Homescreen = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    // Calling the action name
    dispatch(getAllPizzas())
  }, [])
  
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
