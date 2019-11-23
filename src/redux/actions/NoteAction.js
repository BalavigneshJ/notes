import { POSTNOTE } from "./actionTypes"; 

export const saveNote = content => ({
  type: POSTNOTE,
  payload : content
});


export const createNote = (note) => {
  return (dispatch) => {
    dispatch(saveNote(note))
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


  
  
  
  