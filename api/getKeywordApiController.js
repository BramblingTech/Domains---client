import axios, * as others from 'axios';
import {store} from "~/store/search";
import {preloader} from "~/store/preloader";
import {filter} from "@/store/filter";


const useGetDomainByKeywords = (keyword, action, tlds) => {
  let domains = [];
  let checkedDomains = [];
  let url = '';
  let endings = [];

  if (tlds.length > 0) {

    url = `${process.env.NUXT_ENV_API_URL}/suggest?query=${keyword}&tlds=${tlds.toString()}`
  } else {
    url = `${process.env.NUXT_ENV_API_URL}/suggest?query=${keyword}`;
  }
  axios.get(url)
    .then((response) => {
      response.data.forEach((item) => {
        domains.push(item.domain);
      })
    })
    .catch(error => {
      preloader.dispatch('addPreloaderState', false)
    })
    .finally(() => {
      axios.post(`${process.env.NUXT_ENV_API_URL}/available`, {domains: domains})
        .then((response) => {
          response.data.domains.forEach((item) => {
            if (item.available) {
              checkedDomains.push(item);
            }
          })
        }).finally(() => {
        store.dispatch(action, checkedDomains);
        checkedDomains.forEach((item) => {
          const str = item.domain.substr(item.domain.indexOf('.'));
          if (!endings.includes(str))
            endings.push(str);
        });
        filter.dispatch('addEndings', endings);
        preloader.dispatch('addPreloaderState', false)
      })

    })
}

export default useGetDomainByKeywords
