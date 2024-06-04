import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";

let API = "http://hn.algolia.com/api/v1/search?";
const initialState = {
  isLoading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppContext = createContext();
const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_POSTS",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Search
  const searchPost=(searchquery)=>{
    dispatch({type:"SEARCH_POST",
      payload:searchquery,
    });
  }

  //paginatiom
  const getPrevPage=()=>{
    dispatch({type:"GET_PREV_PAGE"});
  }
  const getNextPage=()=>{
    dispatch({type:"GET_NEXT_PAGE"}); 
  }

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query,state.page]);

  return (
    <AppContext.Provider value={{ ...state,searchPost ,getNextPage,getPrevPage}}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
