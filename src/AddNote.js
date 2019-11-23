import React , {useState}  from 'react'
import TypeText from './TypeText';
import { connect } from "react-redux" ;
import { createNote } from './redux/actions/NoteAction';
import Textarea from './textarea/Textarea';

function AddNote(props) {

    const [type , setType] = useState("My Notes");
    const [title , setTitle] = useState("");
    const [note , setNote] = useState("");

    const getType = function(val){
      setType(val)
    }

    const getNote = function(val){
      setNote(val);
      setTitle(val.blocks[0].text) ;
      save();
    }

    const save = function(){
        let data = [{type:type , title:title , note:note}]
        props.saveNote(data);
    }

    return(
      <div>
         <div className="note-type">
           <TypeText sendTypeText={getType} initVal={type ? type : "My Notes"}/>
         </div>
         <div className="note-title">
          <TypeText initVal={title ? title : "My Note"}/>
         </div>
         <div className="note-content"> 
          <Textarea sendNote={getNote}/> 
         </div>
      </div>
    );
}

const mapDispatchToProps = dispatch => {
	return {
	  saveNote : (data) => {
		  dispatch(createNote(data));
	  } 
	};
};

export default connect(null ,mapDispatchToProps)(AddNote) ;
