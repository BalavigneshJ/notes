import {
    INIT ,
    POSTNOTE
  } from "../actions/actionTypes" ; //No I18N
  
  const initState = {
    notes : [] ,
    status : INIT 
  } ;
  
  function NoteReducer(state = initState , action) {
  
    switch (action.type) {
  
      case POSTNOTE:
        return { notes: [...state.notes , ...action.payload] , status : POSTNOTE };
  
      case INIT:
        return { notes : state.notes , status : INIT };
  
      default:
        return state;
    }
  };
  
  export default NoteReducer;