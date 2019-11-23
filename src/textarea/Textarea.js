import React , {useState} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState , convertToRaw , ContentState , convertFromHTML} from 'draft-js';
import "./texteditor.css";



function Textarea(props){

	const initValue = function(){
		 return EditorState.createWithContent(
		  ContentState.createFromBlockArray(
			convertFromHTML('<h1>My Note</h1>')
		  )
		)
	}

	const [value , setValue] = useState(initValue);

	const [toolbarClassName , setToolbarClassName] = useState("show");

	const handleChange = function(editorState){
		setValue(editorState)
	}
	
	const sendData = function(){
		props.sendNote(convertToRaw(value.getCurrentContent()));
	}

	const focus = function(){
		setToolbarClassName("show")
	}

	const blur = function(){
		setToolbarClassName("hide")
	}

	return(
		<div onBlur={sendData} className="text-editor">
			<Editor
  				editorState={value}
				toolbarClassName={toolbarClassName}
				wrapperClassName="wrapperClassName"
				editorClassName="editorClassName"
				onEditorStateChange={handleChange}
				placeholder="Content"
			/>
		</div>
	)
}

export default Textarea ;