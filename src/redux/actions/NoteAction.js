import { CREATE_NOTE , UPDATE_NOTE , REMOVE_NOTE } from "./actionTypes"; 

export const saveNote = (type,content) => ({
  type: type,
  payload : content
});


export const updateNote = (note,index) => {
  return (dispatch) => {
    dispatch(saveNote(UPDATE_NOTE , {note:note , index:index})) ;
  }
};


export const createNote = (note) => {
  return (dispatch) => {
    dispatch(saveNote(CREATE_NOTE ,note))
      // axios({
      //   method: 'post',   // No I18n
      //   url: '/portals',  // No I18n
      //   headers: { "x-zcsrf-token": token },  // No I18n
      //   data: {
      //     portal: { name: portalName, lastModifiedTime: null }
      //   }
      // })
      // .then(response => {
      //   dispatch(addPortalSuccess(response.data.portals));
      // })
      // .catch(error => {
      //   dispatch(addPortalFailure());
      // });
  }
};


  
  
  
  