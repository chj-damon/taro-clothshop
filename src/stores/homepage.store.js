import { observable } from 'mobx';
import api from '../utils/api';

const homepageStore = observable({
  banners: [],
  brands: [],
  productList: [],
  loading: false,
  page: 1
});

homepageStore.fetchHomepageStaff = async function(data: any) {
  const result = await api({
    url: '/homepage-v3',
    method: 'GET',
    data
  });
  console.log(result);
};
export default homepageStore;
