import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { EditorState , convertToRaw  , ContentState , convertFromHTML} from 'draft-js';
import "./texteditor.css";

class Textarea extends React.Component {

	constructor(props) {
		super(props);
		this.state = {value : this.initValue() , toolbarClassName : "show"};
		this.handleChange = this.handleChange.bind(this) ;
		this.sendData = this.sendData.bind(this);
	}

	initValue() {
		 let val = convertFromHTML('<h1>My Note</h1>') ;
		 return EditorState.createWithContent(
		  ContentState.createFromBlockArray(val)
		)
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.note && nextProps.note.note){	
			let val = convertFromHTML(draftToHtml(nextProps.note.note));
			let content = EditorState.createWithContent(ContentState.createFromBlockArray(val));
			this.setState({value : content})
			return true ;
		}else{
			return false ;
		}
	}

	handleChange(editorState){
		console.log("handleChange");
		this.setState({value : editorState})
	}
	
	sendData(){
		let val = convertToRaw(this.state.value.getCurrentContent()) ;
		console.log("sendData" ,val);
		this.props.sendNote(val);
	}

	focus (){
		this.setState({toolbarClassName : "show"}) ;
	}

	blur(){
		console.log("onBlur");
		//this.setState({toolbarClassName : "show"}) ;
	}

	render(){
		return(
			<div onBlur={this.sendData} className="text-editor">
				<Editor
					editorState={this.state.value}
					toolbarClassName={this.state.toolbarClassName}
					wrapperClassName="wrapperClassName"
					editorClassName="editorClassName"
					onEditorStateChange={this.handleChange}
					placeholder="Content"
					onBlur={this.blur}
				/>
			</div>
		)
	}

}


export default Textarea ;
