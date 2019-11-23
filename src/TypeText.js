import React from 'react' ;

function TypeText(props) {

    console.log("rending text=====>>>",props.initVal);

    const update = function(ev){
      if( props.sendTypeText){
        props.sendTypeText(ev.target.textContent);
      }
    }

    return(
      <div>
          <span onBlur={update} className="type-text" >{props.initVal}</span>
      </div>
    );
}

export default TypeText;
