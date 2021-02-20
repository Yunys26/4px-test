import React from 'react';
import PropTypes from 'prop-types';
import plus from '../../resource/img/plus.svg'

const Done = () => {
    return (
        <div className="done">
            <div>
                <p>На проверке</p>
            </div>
            <div>
                <button>
                    <img src={plus} alt="plus"/>
                    Добавить еще одну карточку
                </button>
            </div>
        </div>
    );
};


Done.propTypes = {

};


export default Done;
