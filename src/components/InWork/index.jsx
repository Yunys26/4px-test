import React from 'react';
import PropTypes from 'prop-types';
import plus from '../../resource/img/plus.svg'

const InWork = () => {
    return (
        <div className="inWork">
            <div className="title">
                <p>В работе</p>
            </div>
            <div className="card">
                card
            </div>
            <div>
                <button className="addCard">
                    <img src={plus} alt="plus"/>
                    Добавить еще одну карточку
                </button>
            </div>
        </div>
    );
};


InWork.propTypes = {

};


export default InWork;
