import React, { PropTypes } from 'react'
import Application from './Application'

const ApplicationsList = ({ applications, onTodoClick }) => (
    <div className="applications-list">
        <div className={'header'}>App</div>
        <ul>
            {applications.map(application =>
                <Application
                    key={application.id}
                    {...application}
                    onClick={() => onTodoClick(application.id)}
                    />
            )}
        </ul>
    </div>
)

// ApplicationsList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.text.isRequired,
//     selected: PropTypes.bool.isRequired,
//     name: PropTypes.string.isRequired,
//   }).isRequired).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }

export default ApplicationsList
