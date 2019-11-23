import { combineReducers } from 'redux';
import NoteReducer from "./NoteReducer" ;



const rootReducer = combineReducers({
  Notes : NoteReducer
});

export default rootReducer;
