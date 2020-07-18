import { DELETE, CREATE, GET, UPDATE } from '../constants/bookConstants';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];
    case GET:
      return action.payload;
    case UPDATE:
      return state.map( book => book.id === action.payload.id ? action.payload : book);
    case DELETE:
      return state.filter( book => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
