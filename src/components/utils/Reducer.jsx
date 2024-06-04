const reducer = (state, action) => {
  switch (action.type) {
    
    case"GET_PREV_PAGE":{
      let pageNum = state.page-1;
      if(pageNum<=0){
        pageNum=0;
      }
      return{
        ...state,
        page:pageNum,
      };
    }
    case"GET_NEXT_PAGE":{
      let pageNumInc =state.page+1;
      if(pageNumInc>=state.nbPages){
        pageNumInc=0;
      }
      return{
          ...state,
          page:pageNumInc,
      };
    }
    case "SEARCH_POST":{
      return{
        ...state,
        query:action.payload,
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "GET_POSTS":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
  }
  return state;
};

export default reducer;
