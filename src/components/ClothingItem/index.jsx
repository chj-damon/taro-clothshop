import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, Text, Image } from '@tarojs/components';
import './index.scss';

export class ClothingItem extends Component {
  static defaultProps = {
    list: []
  };

  deleteClothing = (productId: number) => () => {
    this.props.onDelete(productId);
  };

  render() {
    const { list } = this.props;
    return (
      <View className='clothingsItem-page'>
        <View className='whiteSpace' />
        <View className='hr' />
        {list.map(item => (
          <View key={item.productId}>
            <View className='WhiteSpace' />
            <View className='clothing'>
              <View className='shop-img'>
                <Image mode='widthFix' src={`${item.images}!w750`} />
              </View>
              <View className='content'>
                <View className='title p'>
                  <Text>{item.brand}</Text>
                </View>
                <View className='info p'>
                  <Text>{item.name}</Text>
                </View>
                <View className='size p'>
                  <Text>{`${item.spu} | ${item.specification || '均码'}`}</Text>
                </View>
              </View>
              <View className='edit'>
                <View
                  className='iconfont icon-delete'
                  data-id={item.productId}
                  onClick={this.deleteClothing(item.productId)}
                />
              </View>
            </View>
            <View className='whiteSpace' />
            <View className='hr' />
          </View>
        ))}
      </View>
    );
  }
}
ClothingItem.propType = {
  list: PropTypes.array
};
