import axios, * as others from 'axios';
import {modalMail} from "@/store/mail";
import {preloader} from "@/store/preloader";

const sendMail = (data, type) => {
  const url = `https://domains-api.cf.od.ua/mail`
  let formData = new FormData();

  const headers = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }

  formData.append('user_email[]', data);
  formData.append('form_type[]', type);

  preloader.dispatch('addPreloaderState', true)
  axios.post(url, formData, headers).then(response => {
    if (response.data.success) {
      modalMail.dispatch('addModalMailState', true);
    }
    preloader.dispatch('addPreloaderState', false)
  })
};
export default sendMail
