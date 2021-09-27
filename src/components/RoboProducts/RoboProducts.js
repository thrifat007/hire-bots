import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Robot from '../Robot/Robot';


import './RoboProducts.css'

const RoboProducts = () => {
    const [robots, setRobots] = useState([]);
    const [cart, setCart] = useState([]);

    // load data
    useEffect(() => {
        fetch('./robotsData.json')
            .then(res => res.json())
            .then(data => setRobots(data));
    }, [])

    // add to cart
    const handleAddToCart = robo => {
        console.log('clicked',robo);
        const newCart = [...cart, robo]; 
        setCart(newCart);
    }

    // console.log(robots);

    return (
        <div className="row justify-content-center mt-3">
            <div className="col-lg-8">
                <h2 className="text-muted">Robots Available</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        robots.map(robot => <Robot
                            key={robot.id}
                            robot={robot}
                            addToCart={handleAddToCart}></Robot>)
                    }
                </div>
            </div>

            <div className="col-lg-2">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default RoboProducts;