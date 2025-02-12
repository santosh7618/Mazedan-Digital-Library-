import React from 'react'

const Reducer = (state, action) => {

    switch (action.type) {

        case 'IS_LOADING':
            return{
                ...state,
                isLoading: true,
            }
        case "GET_SERVICES":
            return{
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,

            }
            
          

        case "REMOVE_ITEM":
            return{
                ...state,
                hits: state.hits.filter((curEle) => 
                    curEle.objectID !== action.payload
                ),
            }
        case "SEARCH_JOURNAL":
            return{
                ...state,
                search: action.payload,
            };

        
        case "NEXT_PAGE":

        let pageNumInc = state.page + 1;

        if (pageNumInc >= state.nbPages) {
            pageNumInc = 0;

        }
            return{
                ...state,
                // page: state.page + 1,
                page: pageNumInc,
            }
        
        case "PREV_PAGE":
            let pageNum = state.page;
            if(pageNum <= 0){
                pageNum = 0;
            } else{
                pageNum = pageNum - 1;
            }
            return{
                ...state,
                page: pageNum,
            }
        default:
            break;
    }
  return 
    state;
  
}

export default Reducer;