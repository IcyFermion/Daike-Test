export const toggleAgent = (id) => {
    return {
        type: 'TOGGLE_AGENT',
        id
    };
};

export const toggleApplication = (id) => {
    return {
        type: 'TOGGLE_APPLICATION',
        id
    };
};
