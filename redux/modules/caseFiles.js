// Imports
import { API_URL } from "../../constants";
import { actionCreators as userActions } from "./user";
import uuidv1 from "uuid/v1";

// Actions

const SET_FILE = "SET_FILE";
const RESET_FILE = "RESET_FILE";

// Action Creators

function setFile(casefiles) {
  return {
    type: SET_FILE,
    casefiles
  };
}

function resetFile() {
  return {
    type: RESET_FILE
  };
}

// API Actions

function getFile(identification_number) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch(
      `${API_URL}/casefiles/all/?identification_number=${identification_number}`,
      {
        method: "GET",
        headers: {
          Authorization: `JWT ${token}`
        }
      }
    )
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logOut());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setFile(json)))
      .catch(function() {
        console.log("Promise Rejected");
      });
  };
}

// Initial State

const initialState = {
  casefiles: []
};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILE:
      return applySetFile(state, action);
    case RESET_FILE:
      return applyResetFile(state, action);
    default:
      return state;
  }
}

// Reducer Functions

function applySetFile(state, action) {
  const { casefiles } = action;
  return {
    ...state,
    casefiles
  };
}
function applyResetFile(state) {
  return {
    ...state,
    casefiles: []
  };
}

// Exports

const actionCreators = {
  getFile,
  resetFile
};

export { actionCreators };
// Default Reducer Export

export default reducer;
