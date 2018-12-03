// Imports
import { API_URL } from "../../constants";
import { actionCreators as userActions } from "./user";

// Actions

const SET_SEARCH = "SET_SEARCH";
const ADD_PRODUCT = "ADD_PRODUCT";
const EXTRACT_PRODUCT = "EXTRACT_PRODUCT";
const RESET_SELECTEDPRODUCT = "RESET_SELECTEDPRODUCT";
const CLASSIFY_PRODUCT = "CLASSIFY_PRODUCT";
const CLASSIFY_SELECTED = "CLASSIFY_SELECTED";
const SET_IMAGE = "SET_IMAGE";
const ADD_PRODUCT_ARRAY = "ADD_PRODUCT_ARRAY";
const EXTRACT_PRODUCT_ARRAY = "EXTRACT_PRODUCT_ARRAY";
const SET_TOTAL_PRICE = "SET_TOTAL_PRICE";
const SET_ACTIVE_CLASS = "SET_ACTIVE_CLASS";

// Action Creators

function setActiveClass() {
  return { type: SET_ACTIVE_CLASS };
}

function setImage(image) {
  return { type: SET_IMAGE, image };
}

function setTotalPrice(image) {
  return { type: SET_TOTAL_PRICE };
}

function extractProduct(product) {
  return { type: EXTRACT_PRODUCT, product };
}

function extractProductArray(product) {
  return { type: EXTRACT_PRODUCT_ARRAY, product };
}

function setClassify(search) {
  return { type: CLASSIFY_PRODUCT, search };
}

function setClassifySelected() {
  return { type: CLASSIFY_SELECTED };
}

function setSearch(search) {
  return { type: SET_SEARCH, search };
}

function addProduct(product) {
  return { type: ADD_PRODUCT, product };
}

function addProductArray(productArray) {
  return { type: ADD_PRODUCT_ARRAY, productArray };
}

function resetSelectedProduct() {
  return { type: RESET_SELECTEDPRODUCT };
}

// API Actions

function searchByKeyword(keyword) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    return fetch(`${API_URL}/products/search/?keyword=${keyword}`, {
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
      .then(json => {
        dispatch(setSearch(json));
        dispatch(setClassify(json));
        return true;
      })
      .catch(function() {
        console.log("Search by keyword Rejected");
      });
  };
}

// Initial State

const initialState = {
  search: [],
  selectedProduct: [],
  selectedArray: [],
  classifiedProduct: [],
  image: "",
  classifiedSelected: []
};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH:
      return applySetSearch(state, action);
    case ADD_PRODUCT:
      return applyAddProduct(state, action);
    case ADD_PRODUCT_ARRAY:
      return applyAddProductArray(state, action);
    case RESET_SELECTEDPRODUCT:
      return applyResetSelectedProduct(state);
    case CLASSIFY_PRODUCT:
      return applyClassfyProduct(state, action);
    case CLASSIFY_SELECTED:
      return applyClassfySelected(state, action);
    case EXTRACT_PRODUCT:
      return applyExtractProduct(state, action);
    case EXTRACT_PRODUCT_ARRAY:
      return applyExtractProductArray(state, action);
    case SET_IMAGE:
      return applySetImage(state, action);
    case SET_TOTAL_PRICE:
      return applySetTotalPrice(state, action);
    case SET_ACTIVE_CLASS:
      return applySetActiveClass(state, action);
    default:
      return state;
  }
}

// Reducer Functions

function applySetImage(state, action) {
  const { image } = action;
  return {
    ...state,
    image
  };
}

function applySetTotalPrice(state, action) {
  const { classifiedSelected, activeClass } = state;

  setAdditionalPrice = () => {
    additionalPrice = 0;
    activeClass.forEach(element => {
      if (element.classArray.length > 20) {
        additionalPrice += (element.classArray.length - 20) * 1000;
      } else {
        additionalPrice += 0;
      }
    });
  };
  setAdditionalPrice();

  setTotalPrice = () => {
    if (activeClass.length == 1) {
      totalPrices = 150000 + 56000;
    } else {
      totalPrices = 206000 + (activeClass.length - 1) * 156000;
    }
  };

  setTotalPrice();
  return {
    ...state,
    totalPrice: totalPrices + additionalPrice
  };
}

function applyClassfySelected(state, action) {
  const { selectedArray } = state;
  return {
    ...state,
    classifiedSelected: [
      {
        class: 1,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "1") {
            return true;
          }
        })
      },
      {
        class: 2,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "2") {
            return true;
          }
        })
      },
      {
        class: 3,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "3") {
            return true;
          }
        })
      },
      {
        class: 4,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "4") {
            return true;
          }
        })
      },
      {
        class: 5,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "5") {
            return true;
          }
        })
      },
      {
        class: 6,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "6") {
            return true;
          }
        })
      },
      {
        class: 7,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "7") {
            return true;
          }
        })
      },
      {
        class: 8,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "8") {
            return true;
          }
        })
      },
      {
        class: 9,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "9") {
            return true;
          }
        })
      },
      {
        class: 10,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "10") {
            return true;
          }
        })
      },
      {
        class: 11,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "11") {
            return true;
          }
        })
      },
      {
        class: 12,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "12") {
            return true;
          }
        })
      },
      {
        class: 13,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "13") {
            return true;
          }
        })
      },
      {
        class: 14,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "14") {
            return true;
          }
        })
      },
      {
        class: 15,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "15") {
            return true;
          }
        })
      },
      {
        class: 16,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "16") {
            return true;
          }
        })
      },
      {
        class: 17,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "17") {
            return true;
          }
        })
      },
      {
        class: 18,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "18") {
            return true;
          }
        })
      },
      {
        class: 19,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "19") {
            return true;
          }
        })
      },
      {
        class: 20,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "20") {
            return true;
          }
        })
      },
      {
        class: 21,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "21") {
            return true;
          }
        })
      },
      {
        class: 22,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "22") {
            return true;
          }
        })
      },
      {
        class: 23,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "23") {
            return true;
          }
        })
      },
      {
        class: 24,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "24") {
            return true;
          }
        })
      },
      {
        class: 25,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "25") {
            return true;
          }
        })
      },
      {
        class: 26,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "26") {
            return true;
          }
        })
      },
      {
        class: 27,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "27") {
            return true;
          }
        })
      },
      {
        class: 28,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "28") {
            return true;
          }
        })
      },
      {
        class: 29,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "29") {
            return true;
          }
        })
      },
      {
        class: 30,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "30") {
            return true;
          }
        })
      },
      {
        class: 31,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "31") {
            return true;
          }
        })
      },
      {
        class: 32,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "32") {
            return true;
          }
        })
      },
      {
        class: 33,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "33") {
            return true;
          }
        })
      },
      {
        class: 34,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "34") {
            return true;
          }
        })
      },
      {
        class: 35,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "35") {
            return true;
          }
        })
      },
      {
        class: 36,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "36") {
            return true;
          }
        })
      },
      {
        class: 37,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "37") {
            return true;
          }
        })
      },
      {
        class: 38,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "38") {
            return true;
          }
        })
      },
      {
        class: 39,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "39") {
            return true;
          }
        })
      },
      {
        class: 40,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "40") {
            return true;
          }
        })
      },
      {
        class: 41,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "41") {
            return true;
          }
        })
      },
      {
        class: 42,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "42") {
            return true;
          }
        })
      },
      {
        class: 43,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "43") {
            return true;
          }
        })
      },
      {
        class: 44,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "44") {
            return true;
          }
        })
      },
      {
        class: 45,
        classArray: selectedArray.filter(function(el) {
          if (el.category == "45") {
            return true;
          }
        })
      }
    ]
  };
}

function applySetActiveClass(state, action) {
  const { classifiedSelected } = state;
  console.log("setActiveClass");
  return {
    ...state,
    activeClass: classifiedSelected.filter(function(el) {
      return el.classArray.length > 0;
    })
  };
}

function applyClassfyProduct(state, action) {
  const { search } = action;
  const { selectedProduct } = state;
  return {
    ...state,
    classifiedProduct: [
      {
        class: 1,
        classArray: search.filter(function(el) {
          if (el.category == "1" && selectedProduct.indexOf(el.product) == -1) {
            return true;
          }
        })
      },
      {
        class: 2,
        classArray: search.filter(function(el) {
          if (el.category == "2" && selectedProduct.indexOf(el.product) == -1) {
            return true;
          }
        })
      },
      {
        class: 3,
        classArray: search.filter(function(el) {
          if (el.category == "3" && selectedProduct.indexOf(el.product) == -1) {
            return true;
          }
        })
      },
      {
        class: 4,
        classArray: search.filter(function(el) {
          if (el.category == "4" && selectedProduct.indexOf(el.product) == -1) {
            return true;
          }
        })
      },
      {
        class: 5,
        classArray: search.filter(function(el) {
          if (el.category == "5" && selectedProduct.indexOf(el.product) == -1) {
            return true;
          }
        })
      },
      {
        class: 6,
        classArray: search.filter(function(el) {
          if (el.category == "6" && selectedProduct.indexOf(el.product) == -1) {
            return true;
          }
        })
      },
      {
        class: 7,
        classArray: search.filter(function(el) {
          if (el.category == "7" && selectedProduct.indexOf(el.product) == -1) {
            return true;
          }
        })
      },
      {
        class: 8,
        classArray: search.filter(function(el) {
          if (el.category == "8" && selectedProduct.indexOf(el.product) == -1) {
            return true;
          }
        })
      },
      {
        class: 9,
        classArray: search.filter(function(el) {
          if (el.category == "9" && selectedProduct.indexOf(el.product) == -1) {
            return true;
          }
        })
      },
      {
        class: 10,
        classArray: search.filter(function(el) {
          if (
            el.category == "10" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 11,
        classArray: search.filter(function(el) {
          if (
            el.category == "11" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 12,
        classArray: search.filter(function(el) {
          if (
            el.category == "12" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 13,
        classArray: search.filter(function(el) {
          if (
            el.category == "13" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 14,
        classArray: search.filter(function(el) {
          if (
            el.category == "14" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 15,
        classArray: search.filter(function(el) {
          if (
            el.category == "15" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 16,
        classArray: search.filter(function(el) {
          if (
            el.category == "16" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 17,
        classArray: search.filter(function(el) {
          if (
            el.category == "17" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 18,
        classArray: search.filter(function(el) {
          if (
            el.category == "18" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 19,
        classArray: search.filter(function(el) {
          if (
            el.category == "19" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 20,
        classArray: search.filter(function(el) {
          if (
            el.category == "20" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 21,
        classArray: search.filter(function(el) {
          if (
            el.category == "21" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 22,
        classArray: search.filter(function(el) {
          if (
            el.category == "22" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 23,
        classArray: search.filter(function(el) {
          if (
            el.category == "23" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 24,
        classArray: search.filter(function(el) {
          if (
            el.category == "24" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 25,
        classArray: search.filter(function(el) {
          if (
            el.category == "25" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 26,
        classArray: search.filter(function(el) {
          if (
            el.category == "26" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 27,
        classArray: search.filter(function(el) {
          if (
            el.category == "27" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 28,
        classArray: search.filter(function(el) {
          if (
            el.category == "28" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 29,
        classArray: search.filter(function(el) {
          if (
            el.category == "29" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 30,
        classArray: search.filter(function(el) {
          if (
            el.category == "30" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 31,
        classArray: search.filter(function(el) {
          if (
            el.category == "31" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 32,
        classArray: search.filter(function(el) {
          if (
            el.category == "32" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 33,
        classArray: search.filter(function(el) {
          if (
            el.category == "33" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 34,
        classArray: search.filter(function(el) {
          if (
            el.category == "34" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 35,
        classArray: search.filter(function(el) {
          if (
            el.category == "35" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 36,
        classArray: search.filter(function(el) {
          if (
            el.category == "36" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 37,
        classArray: search.filter(function(el) {
          if (
            el.category == "37" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 38,
        classArray: search.filter(function(el) {
          if (
            el.category == "38" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 39,
        classArray: search.filter(function(el) {
          if (
            el.category == "39" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 40,
        classArray: search.filter(function(el) {
          if (
            el.category == "40" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 41,
        classArray: search.filter(function(el) {
          if (
            el.category == "41" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 42,
        classArray: search.filter(function(el) {
          if (
            el.category == "42" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 43,
        classArray: search.filter(function(el) {
          if (
            el.category == "43" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 44,
        classArray: search.filter(function(el) {
          if (
            el.category == "44" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      },
      {
        class: 45,
        classArray: search.filter(function(el) {
          if (
            el.category == "45" &&
            selectedProduct.indexOf(el.product) == -1
          ) {
            return true;
          }
        })
      }
    ]
  };
}

function applySetSearch(state, action) {
  const { search } = action;
  return {
    ...state,
    search
  };
}

function applyAddProductArray(state, action) {
  const { selectedArray } = state;
  const { productArray } = action;
  return {
    ...state,
    selectedArray: [...selectedArray, productArray]
  };
}

function applyExtractProductArray(state, action) {
  const { selectedArray } = state;
  const { product } = action;
  return {
    ...state,
    selectedArray: selectedArray.filter(function(el) {
      return el.product != product;
    })
  };
}

function applyAddProduct(state, action) {
  const { selectedProduct } = state;
  const { product } = action;
  return {
    ...state,
    selectedProduct: [...selectedProduct, product]
  };
}

function applyExtractProduct(state, action) {
  const { selectedProduct } = state;
  const { product } = action;
  return {
    ...state,
    selectedProduct: selectedProduct.filter(function(el) {
      return el != product;
    })
  };
}

function applyResetSelectedProduct(state) {
  return {
    ...state,
    selectedProduct: [],
    selectedArray: [],
    classifiedSelected: []
  };
}

// Exports

const actionCreators = {
  searchByKeyword,
  setSearch,
  addProduct,
  resetSelectedProduct,
  setClassify,
  extractProduct,
  setImage,
  extractProductArray,
  addProductArray,
  setClassifySelected,
  setTotalPrice,
  setActiveClass
};

export { actionCreators };
// Default Reducer Export

export default reducer;
