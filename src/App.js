import React from 'react' ;
import AddNote from "./AddNote" ;
import { connect } from "react-redux" ;

function App(props) {

  console.log("props======",props);

  const addNewNote = function(){
    console.log("adding new note");
  }

  return(
    <div> 
        <button className="new-note" onClick={addNewNote}>New Note</button>
        <AddNote/> 
    </div>
  );
}

const mapStateToProps = (state)=> {
  return {
    notes: state.Notes.notes ,
    status : state.Notes.status 
  };
};


export default connect(mapStateToProps ,null)(App) ;
