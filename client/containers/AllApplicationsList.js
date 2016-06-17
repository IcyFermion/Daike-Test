import { connect } from 'react-redux';
import { toggleApplication } from '../actions';
import ApplicationsList from '../components/ApplicationsList';


const mapStateToProps = (state) => {
    return {
        applications: state.applications
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleApplication(id));
        }
    };
};

const AllApplicationsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ApplicationsList);

export default AllApplicationsList;
