import React, { PropTypes } from 'react'

// FIXME: wtf arguments????
const Agent = ({ onClick, assigned, name, self }) => (
    <li
        onClick={onClick}
        className={assigned ? 'active' : ''}
        >
        {self ? '我' :name}
    </li>
)

// Agent.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   assigned: PropTypes.bool.isRequired,
//   name: PropTypes.string.isRequired
// }

export default Agent
