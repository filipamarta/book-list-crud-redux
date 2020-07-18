import axios from 'axios';

export const getBooks = () => {
    return dispatch => {
      axios
        .get('./books.json')
        .then(res => {
            console.log(res)
          dispatch({ type: "GET", payload: res.data.books  });
        })
        .catch(err => {
          console.log('an error has occured')
        });
    };
  };

  
//   const getBooksActionCreator = books => ({
//     type: "GET",
//     payload: {
//       ...books
//     }
//   });