import { observable } from 'mobx';

export const homepageStore = observable({
  banners: [],
  brands: [],
  productList: [],
  loading: false,
  page: 1
});

homepageStore.fetchHomepageStaff = async function(data: any) {
  console.log(123);
  // const result = await request({
  //   url: '/homepage-v3',
  //   method: 'GET',
  //   data
  // });
  // console.log(result);
};
