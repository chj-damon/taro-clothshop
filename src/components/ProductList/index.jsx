import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'nervjs/prop-types';
import { View, Text, Image } from '@tarojs/components';
import './index.scss';
import { ProductItemModel } from '../../interfaces/product';

/**
 * 商品列表
 */
export class ProductList extends Component {
  static defaultProps = {
    list: [],
    loading: false
  };

  gotoDetail = (id: number) => () => {
    Taro.navigateTo({
      url: `/pages/detail/index?id=${id}`
    });
  };

  render() {
    const { list, loading } = this.props;
    return (
      <View className='product-list-container'>
        {list.length > 0 && (
          <View className='product-ul'>
            {list.map(item => (
              <View
                key={item.id}
                className='product-li'
                // 注意这里的写法。
                // 参见：https://nervjs.github.io/taro/docs/event.html 向事件处理程序传递参数
                onClick={this.gotoDetail.bind(this, item.id)}
              >
                <View className='pos'>
                  <View className='image-container'>
                    <Image
                      src={
                        item.coverImage
                          ? `${item.coverImage}!w750`
                          : 'http://static-r.msparis.com/uploads/d/1/d1ca37e902e5550ad2c82c721bc216ce.png'
                      }
                    />
                  </View>
                  {item.modeId === 3 &&
                    (item.enabled !== 1 || item.saleStock === 0) && (
                      <View className='sold-out'>
                        <View className='sales-end'>
                          <Text>已售罄</Text>
                        </View>
                      </View>
                    )}
                  {item.enabled && ![0, 1, 2].includes(item.enabled) && (
                    <View className='unable'>
                      <View className='sales-end'>
                        <Text>下架</Text>
                      </View>
                    </View>
                  )}
                </View>
                <View className='zan-capsule'>
                  {item.typeId === 2 && item.modeId === 1 && (
                    <View className='zan-capsule__left'>
                      <Text>VIP</Text>
                    </View>
                  )}
                  {item.limitTag && (
                    <View className='zan-capsule__center'>
                      <Text>{item.limitTag}</Text>
                    </View>
                  )}
                  {item.marketPrice / 100 > 500 && (
                    <View className='zan-capsule__right'>
                      <Text>
                        参考价¥
                        {(item.marketPrice / 100).toFixed()}
                      </Text>
                    </View>
                  )}
                </View>
                <Text className='dark'>{item.brand}</Text>
                <Text>{item.name}</Text>
              </View>
            ))}
          </View>
        )}
        {loading && (
          <View className='loadMoreGif'>
            <View className='zan-loading' />
            <View className='text'>加载中...</View>
          </View>
        )}
      </View>
    );
  }
}
ProductList.propTypes = {
  list: PropTypes.array,
  loading: PropTypes.boolean
};
