// Imports
import { API_URL } from "../../constants";
import { actionCreators as userActions } from "./user";

// Actions

const SET_FEED = "SET_FEED"

// Action Creators

function setFeed(feed) {
    return {
        type: SET_FEED,
        feed
    };
}

// API Actions

function getFeed() {
    return (dispatch, getState) => {
        const { user: { token } } = getState();
        fetch(`${API_URL}/cases/all/`, {
            method: "GET",
            headers: {
                Authorization: `JWT ${token}`
            }
        })
            .then(response => {
                if (response.status === 401) {
                    dispatch(userActions.logOut());
                } else {
                    return response.json();
                }
            })
            .then(json => dispatch(setFeed(json)))
            .catch(function () { console.log("Promise Rejected") });
    };
}

// Initial State

const initialState = {

};

// Reducer

function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_FEED:
            return applySetFeed(state, action);
        default:
            return state;
    }
}

// Reducer Functions

function applySetFeed(state, action) {
    const { feed } = action;
    return {
        ...state,
        feed
    };
}


// Exports

const actionCreators = {
    getFeed
};

export { actionCreators };
// Default Reducer Export

export default reducer;