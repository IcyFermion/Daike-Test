import React, { PropTypes } from 'react'

// FIXME: wtf arguments????
const Application = ({ onClick, active, name }) => (
    <li
        onClick={onClick}
        className={active ? 'active' : ''}
        >
        {name}
    </li>
)

// Application.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   active: PropTypes.bool.isRequired,
//   name: PropTypes.string.isRequired
// }

export default Application
