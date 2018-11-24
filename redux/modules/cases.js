// Imports
import { API_URL } from "../../constants";
import { actionCreators as userActions } from "./user";
import uuidv1 from "uuid/v1";

// Actions

const SET_FEED = "SET_FEED";
const RESET_FEED = "RESET_FEED";
const SET_DESIGNATED_ARRAY = "SET_DESIGNATED_ARRAY";
const SET_PRODUCTS = "SET_PRODUCTS";
const SET_APPLICANTS_ARRAY = "SET_APPLICANTS_ARRAY";
const SET_DESCRIPTION = "SET_DESCRIPTION";
const RESET_CASE = "RESET_CASE";

// Action Creators

function resetCase() {
  return {
    type: RESET_CASE
  };
}

function setDescription(descriptions) {
  return {
    type: SET_DESCRIPTION,
    descriptions
  };
}

function setApplicantsArray(applicantsArray) {
  return {
    type: SET_APPLICANTS_ARRAY,
    applicantsArray
  };
}

function setDesignatedArray(designatedArray) {
  return {
    type: SET_DESIGNATED_ARRAY,
    designatedArray
  };
}

function setProduct(products) {
  return {
    type: SET_PRODUCTS,
    products
  };
}

function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}

function resetFeed() {
  return {
    type: RESET_FEED
  };
}

// API Actions

function getFeed() {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
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
      .catch(function() {
        console.log("Promise Rejected");
      });
  };
}

function uploadCase(
  file,
  designatedArray,
  products,
  applicantsArray,
  descriptions
) {
  const data = new FormData();
  data.append("designatedArray", JSON.stringify(designatedArray));
  data.append("products", products);
  data.append("descriptions", descriptions);
  data.append("progress_status", "출원 준비 중");
  data.append("trademark_title", "상표명 입력 예정");
  data.append("applicantsArray", JSON.stringify(applicantsArray));
  data.append("file", {
    uri: file,
    type: "image/jpeg",
    name: `${uuidv1()}.jpg`
  });
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    return fetch(`${API_URL}/cases/upload/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "multipart/form-data"
      },
      body: data
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logOut());
      } else if (response.ok) {
        dispatch(getFeed());
        return true;
      } else {
        return false;
      }
    });
  };
}

// Initial State

const initialState = {
  feed: []
};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    case RESET_FEED:
      return applyResetFeed(state, action);
    case SET_DESIGNATED_ARRAY:
      return applySetDesignatedArray(state, action);
    case SET_PRODUCTS:
      return applySetProduct(state, action);
    case SET_APPLICANTS_ARRAY:
      return applySetApplicantsArray(state, action);
    case SET_DESCRIPTION:
      return applySetDescription(state, action);
    case RESET_CASE:
      return applyResetCase(state, action);
    default:
      return state;
  }
}
applySetDescription;

// Reducer Functions

function applyResetCase(state, action) {
  return {
    ...state,
    designatedArray: [],
    products: "",
    applicantsArray: [],
    descriptions: "",
    isProductsSelected: false
  };
}

function applySetApplicantsArray(state, action) {
  const { applicantsArray } = action;
  return {
    ...state,
    applicantsArray
  };
}

function applySetDesignatedArray(state, action) {
  const { designatedArray } = action;
  return {
    ...state,
    designatedArray
  };
}

function applySetFeed(state, action) {
  const { feed } = action;
  return {
    ...state,
    feed
  };
}
function applyResetFeed(state) {
  return {
    ...state,
    feed: []
  };
}
function applySetProduct(state, action) {
  const { products } = action;
  return {
    ...state,
    products,
    isProductsSelected: true
  };
}

function applySetDescription(state, action) {
  const { descriptions } = action;
  return {
    ...state,
    descriptions
  };
}

// Exports

const actionCreators = {
  getFeed,
  resetFeed,
  setDesignatedArray,
  uploadCase,
  setProduct,
  setApplicantsArray,
  setDescription,
  resetCase
};

export { actionCreators };
// Default Reducer Export

export default reducer;
