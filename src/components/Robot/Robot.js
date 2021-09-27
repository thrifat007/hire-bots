import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Robot.css';

const Robot = (props) => {
    // console.log(props.robot);

    // icon
    const element = <FontAwesomeIcon icon={faPlus} />

    const { name, img, manufacturer, price, version, year, country, speciality } = props.robot;

    return (
        <div className="col">
            <div className="card flex-md-row mb-4 shadow-sm h-md-250 h-100">
                <div className="card-body d-flex flex-column align-items-start">
                    <strong className="d-inline-block mb-2 text-primary m-auto text-monospace">Robot-Name: {name}</strong>

                    <div className="mb-1 text-muted small">
                        <p>manufacturer: {manufacturer} at {year}</p>
                        <h4 className="text-monospace text-dark">Price: ${price}</h4>
                    </div>

                    <p className="card-text m-auto text-muted small">
                        version: {version}, <br />
                        Origin of the robot: {country}, <br />
                        speciality: {speciality}
                    </p>
                    <button onClick={() => props.addToCart(props.robot)} type="button" className="mx-auto mt-3 btn btn-outline-primary btn-sm">{element} Hire this</button>
                </div>

                <div className="d-flex align-items-center">
                    <img src={img} alt="robotImg" className="card-img-top rounded-circle" height='180px' />
                </div>
            </div>

        </div>
    );
};

export default Robot;