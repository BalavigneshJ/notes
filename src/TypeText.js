import React from 'react' ;

function TypeText(props) {

    // const update = function(ev){
    //   if( props.sendTypeText){
    //     props.sendTypeText(ev.target.textContent);
    //   }
    // }

    return(
      <div onClick={props.handleClick ? (() => props.handleClick(props.index)) : undefined} className="type-title">
          <span className="type-text" >{props.initVal}</span>
      </div>
    );
}

export default TypeText;
