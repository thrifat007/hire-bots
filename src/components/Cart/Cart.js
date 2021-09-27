import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);

    // add total rent
    let total = 0;
    let totalQuantity = 0;
    const tax = 0.10;
    for (const robo of cart) {
        totalQuantity = totalQuantity + robo.quantity;
        total = total + (robo.price * robo.quantity);
    }
    console.log(totalQuantity);

    // grand total rent
    const shipping = total > 0 ? 500 : 0;
    const taxAmount = (total + shipping) * tax;
    const grandTotal = shipping + total + taxAmount;



    return (
        <div className="cart card mt-5 rounded">
            <h4>Selected <span className="text-danger">{totalQuantity} Robot(s)</span> for the task</h4>
            {/* <h5>Robots Count: {totalQuantity}</h5> */}
            
            <p className="mt-3">Rent Total= <strong>{total.toFixed(2)}</strong></p>
            <p className='text-muted'>Shipping= {shipping}</p>
            <p className='text-muted'>tax= {taxAmount.toFixed(2)}</p>
            <p>Grand Total Rent= <strong>{grandTotal.toFixed(2)}</strong></p>
        
            <div>
            <h3>Selected Robots are</h3>
                {
                    cart.map(bot => <div>
                        <img key={bot.id} src={bot.img} alt="bot" />
                        <p>bot name: {bot.name} <br /> price: {bot.price}</p>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Cart;