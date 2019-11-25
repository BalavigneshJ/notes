import {
    INIT ,
    CREATE_NOTE,
    UPDATE_NOTE,
    REMOVE_NOTE
  } from "../actions/actionTypes" ; //No I18N
  
  const initState = {
    notes : [] ,
    status : INIT 
  } ;
  
  function NoteReducer(state = initState , action) {
  
    switch (action.type) {
  
      case CREATE_NOTE:
        return { notes: [...state.notes , action.payload] , status : CREATE_NOTE };

      case UPDATE_NOTE:
          const index = action.payload.index ;
          return { 
            notes: [...action.payload.note , ...state.notes.slice(0,index) ,  ...state.notes.slice(index + 1)] ,
            status : UPDATE_NOTE 
          };
    
      case INIT:
        return { notes : state.notes , status : INIT };
  
      default:
        return state;
    }
  };
  
  export default NoteReducer;