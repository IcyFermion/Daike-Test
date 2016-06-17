const agent = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_AGENT':
        if (state.id !== action.id) {
            return Object.assign({}, state, {
                assigned: false
            });
        }

        return Object.assign({}, state, {
            assigned: true
        });
        
        default:
        return state;
    }
};

const agents = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_AGENT':
        return state.map(t =>
            agent(t, action)
        );
        default:
        return state;
    }
};

export default agents;
