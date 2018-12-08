import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '购物车'
  };

  render() {
    return <View className='home-page'>购物车</View>;
  }
}
