import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import './index.scss';

/**
 * 轮播图组件
 */
export class MySwiper extends Component {
  static defaultProps = {
    banners: [],
    home: false
  };

  render() {
    const { banners, home } = this.props;
    return (
      <Swiper
        className={!home ? 'swiper-container' : 'swiper'}
        circular
        indicatorDots
        indicatorColor='#999'
        indicatorActiveColor='#bf708f'
        autoplay
      >
        {banners.map(item => (
          <SwiperItem key={item}>
            <Image mode='widthFix' src={`${item}!w750`} />
          </SwiperItem>
        ))}
      </Swiper>
    );
  }
}
MySwiper.propTypes = {
  banners: PropTypes.array,
  home: PropTypes.bool
};
