import React from 'react';
import PropTypes from 'prop-types';
import plus from '../../resource/img/plus.svg'

const OnCheck = () => {
    return (
        <div className="onCheck">
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


OnCheck.propTypes = {

};


export default OnCheck;
