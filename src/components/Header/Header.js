import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {

    const element = <FontAwesomeIcon icon={faRobot} />
    const element2 = <FontAwesomeIcon icon={faArrowRight} />

    return (
        <div className='header'>
            <div>
                <h1>{element} Hire Your Bot</h1>
                <p>hire bot {element2} work done</p>
            </div>

            <div>
                <h4>Your Total Budget is</h4>
                <h5>$ 100000</h5>
            </div>
        </div>
    );
};

export default Header;