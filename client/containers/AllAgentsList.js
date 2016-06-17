import { connect } from 'react-redux';
import { toggleAgent } from '../actions';
import AgentsList from '../components/AgentsList';


const mapStateToProps = (state) => {
    return {
        agents: state.agents
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleAgent(id));
        }
    };
};

const AllAgentsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(AgentsList);

export default AllAgentsList;
