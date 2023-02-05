import axios from 'axios';
import { showAlert } from './alert';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? 'https://natoursapp.onrender.com/api/v1/users/updateMyPassword'
        : 'https://natoursapp.onrender.com/api/v1/users/updateMe';

    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully`);
      // window.setTimeout(() => {
      //   location.assign('/me');
      // }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
