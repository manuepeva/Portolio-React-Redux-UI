import { LOGO_CLICK } from './types';

export const clickOverLogo = (link) => (dispatch) => {
  dispatch({
    type: LOGO_CLICK,
    payload: link
  });
};
