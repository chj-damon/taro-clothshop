import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import { inject, observer } from '@tarojs/mobx';
import MySwiper from '../../components/MySwiper';
import { ProductList } from '../../components/ProductList';

@inject('homepageStore')
@observer
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  };

  componentDidMount() {
    this.props.homepageStore.fetchHomepageStaff({});
  }

  /**
   * 小程序上拉加载
   */
  onReachBottom() {}

  render() {
    const {
      homepageStore: { banners, brands, productList, loading }
    } = this.props;
    return (
      <View className='home-page'>
        <MySwiper home banners={banners} />
        {/* <View className='nav-list'>
          {brands.map((item: any) => (
            <View className='nav-item' key={item.id}>
              <Image mode='widthFix' src={item.src} />
            </View>
          ))}
        </View>
        <Text className='recommend'>为你推荐</Text>
        <ProductList list={productList} loading={loading} /> */}
      </View>
    );
  }
}
