import React from 'react';
import PropTypes from 'prop-types';
import { 
    Done,
    InWork,
    Modal,
    OnCheck 
} from './components';

const App = (props) => (
    <React.Fragment>
        <div className="container"> 
            <div className="grid-container">
                <InWork />
                <OnCheck />
                <Done />
            </div>
        </div>
        {/* <Modal /> */}
    </React.Fragment>
)


App.propTypes = {

};


export default App;
