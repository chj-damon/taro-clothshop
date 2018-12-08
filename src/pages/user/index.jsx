import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '我的'
  };

  render() {
    return <View className='home-page'>我的</View>;
  }
}
