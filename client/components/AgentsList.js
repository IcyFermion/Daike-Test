import React, { PropTypes } from 'react'
import Agent from './Agent'

const AgentsList = ({ agents, onTodoClick }) => (
    <div className="agents-list">
        <div className={'header'}>谁来处理</div>
        <ul>
            {agents.map(agent =>
                <Agent
                    key={agent.id}
                    {...agent}
                    onClick={() => onTodoClick(agent.id)}
                    />
            )}
        </ul>
    </div>
)

// AgentsList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.text.isRequired,
//     assigned: PropTypes.bool.isRequired,
//     name: PropTypes.string.isRequired,
//   }).isRequired).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }

export default AgentsList
