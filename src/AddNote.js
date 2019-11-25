import React from 'react'
import TypeText from './TypeText';
import { connect } from "react-redux" ;
import { createNote, updateNote } from './redux/actions/NoteAction';
import Textarea from './textarea/Textarea';


class AddNote extends React.Component {

    constructor(props) {
		super(props);
		this.state = {type : "My Notes" , title : "" , note:"",selectedIndex:0};
		this.addNote = this.addNote.bind(this) ;
        this.getType = this.getType.bind(this);
        this.getNote = this.getNote.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    getType(val){
        this.setState({type : val})
    }

    getNote(val){
      this.setState({note:val , title:val.blocks[0].text} , this.save)
    }

    handleClick(index){
        this.setState({selectedIndex : index}) ;
    }

    save(){
        let data = [{type:this.state.type , title:this.state.title , note:this.state.note}]
        this.props.updateNoteWithIndex(data , this.state.selectedIndex);
    }

    setCurrentIndex = function(){
        let newIndex = this.props.notes.length ;
        this.setState({selectedIndex : newIndex});
    }

    addNote(){
        this.setCurrentIndex() ;
        this.addNewNote();
    }

    addNewNote(){
        let newNote = {
            "note" : {
              "blocks":[
                {
                "data": {},
                "depth": 0,
                "entityRanges": [],
                "inlineStyleRanges": [],
                "key": "9b1v0",
                "text": "New note",
                "type": "header-one"
                }
              ],
              entityMap:{}
            },
            "title": "New note",
            "type": "My Notes"
          }
          this.props.newNote(newNote);
    }

    componentDidMount(){
        this.addNewNote();
    }

    render() {

        let typeText = this.props.notes.length ? 
        this.props.notes.map ((note , index) => {
            return(
                <TypeText handleClick={this.handleClick} key={index} index={index} note={note} initVal={note.title}/>
            )
        }) :  <TypeText key={0} index={0} initVal={"My Note"}/>
        
        return(
            <div>
               <button className="new-note" onClick={this.addNote}>New Note</button>
               <div className="note-type">
                 <TypeText sendTypeText={this.getType} initVal={this.state.type}/>
               </div>
      
               <div className="note-title">
                  {
                      typeText
                  }
              </div>
      
               <div className="note-content"> 
                <Textarea sendNote={this.getNote} note={(this.props.notes && this.props.notes.length) ? this.props.notes[this.state.selectedIndex] : undefined}/> 
               </div>
               
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
	return {
	  newNote : (data) => {
		  dispatch(createNote(data));
      },
      updateNoteWithIndex : (data , index) => {
        dispatch(updateNote(data , index));
      }    
	};
};

const mapStateToProps = (state)=> {
    return {
      notes: state.Notes.notes ,
      status : state.Notes.status 
    };
};


export default connect(mapStateToProps ,mapDispatchToProps)(AddNote) ;
