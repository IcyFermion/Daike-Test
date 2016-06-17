require('../../sass/left-column.scss');
import React from 'react';
import AllAgentsList from '../containers/AllAgentsList';
import AllApplicationsList from '../containers/AllApplicationsList';

const LeftColumn =() => {

    return (
        <div id={'left-column'}>
            <AllAgentsList />
            <AllApplicationsList />
        </div>
    );
};

export default LeftColumn;
