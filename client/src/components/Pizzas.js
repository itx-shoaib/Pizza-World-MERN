// Import section
import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Using mapping data of pizza from homescreen as a props
const Pizzas = ({pizza}) => {
    // Using useState for setting the quantity and varient
    const [quantity, setquantity] = useState(1)
    const [varient, setvarient] = useState('small')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div style={{margin:'50px'}} className="shadow-lg p-3 mb-5 bg-white rounded">
        <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} alt="..." className='img-fluid' style={{height:'200px',width:'200px'}}/>

        </div>

        <div className="flex-container">
            <div className="w-100 m-1">
                <p>Varients</p>
                {/* Using useState for changing the value of varient i.e. small,medium,large */}
                <select className='form-control' value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
                    {/* Mapping varient in pizza array */}
                    {pizza.varients.map(varient=>{
                        return <option value={varient}>{varient}</option>
                    })}
                </select>
            </div>
            <div className="w-100 m-1">
                <p>Quantity</p>
                {/* Using useState for changing the value of quantity i.e. 1,2,3,4.. */}
                <select className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                    {/* Mapping array of with adding 1 in previous until 10 */}
                    {[...Array(10).keys()].map((x,i)=>{
                        return <option value={i+1}>{i+1}</option>
                    })}
                </select>
            </div>
        </div>

        <div className="flex-container">
            <div className='m-1 w-100'>
                {/* Showing the price of item by varient and multiply it with its quantity */}
                <h1 className='mt-1'>Price: Rs.{pizza.prices[0][varient]*quantity}</h1>
            </div>
            <div className='m-1 w-100'>
                <button className="btn">Add to Cart</button>
            </div>
        </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={pizza.image} alt="..." className='img-fluid' style={{height:'400px'}}/>
            <p>{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Pizzas
