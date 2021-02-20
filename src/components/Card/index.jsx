import React from 'react';
import PropTypes from 'prop-types';

// Гибкий компонент под создание одной настраиваемой карточки
const Card = ({ title, buttonText }) => {
    return (
        <div className="card">
            <div>
                <p>{title}</p>
            </div>
            <div>
                <button>
                    <img src={plus} alt="plus"/>
                    {buttonText}
                </button>
            </div>
        </div>
    );
};


Card.propTypes = {

};


export default Card;
