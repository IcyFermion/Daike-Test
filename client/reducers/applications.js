const aapplication = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_APPLICATION':
        let newState = Object.assign({}, state, {
            selected: false,
            active: false
        });
        if (action.id === 'ALL') {
            newState.selected = true;
        }
        if (state.id === action.id) {
            newState.active = true;
            newState.selected = true;
        }

        return newState;

        default:
        return state;
    }
};

const applications = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_APPLICATION':
        return state.map(t =>
            aapplication(t, action)
        );
        default:
        return state;
    }
};

export default applications;
