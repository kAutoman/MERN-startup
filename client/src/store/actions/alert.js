import { toast } from 'react-toastify';

export const setAlert = (msg) => dispatch => {
  toast.info(msg)
};
