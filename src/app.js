import '@tarojs/async-await';
import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/mobx';
import HomeIndex from './pages/home';

import counterStore from './stores/counter.store';
import homepageStore from './stores/homepage.store';

const stores = {
  counterStore,
  homepageStore
};

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config = {
    pages: ['pages/home/index', 'pages/cart/index', 'pages/user/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={stores}>
        <HomeIndex />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
