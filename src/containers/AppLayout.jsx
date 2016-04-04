import React, { Component } from 'react';
import { connect } from '../state/context';
import cx from 'classnames';

// dev tools
import isDev from 'isdev';
import DevTools from 'mobx-react-devtools';

// components
import { StickyContainer, Sticky } from 'react-sticky';
import AppBar from '../components/AppBar';
import AppNav from '../components/AppNav';

// global styles
import '../styles/_.global.css';

// module styles
import styles from '../styles/app.layout.css';
const navBtn = cx('btn', 'block');

@connect
export default class AppLayout extends Component {

  static propTypes = {
    children: React.PropTypes.object,
  };

  render() {
    const appNavIsOpen = this.context.store.ui.appNavIsOpen;
    return (
      <StickyContainer className={cx('animated', 'fadeIn')}>
        { isDev ? <DevTools /> : null }
        <AppNav open={appNavIsOpen}>
          <a className={navBtn}>Link A</a>
          <a className={navBtn}>Link B</a>
          <a className={navBtn}>Link C</a>
          <a className={navBtn}>Link D</a>
          <a className={navBtn}>Link E</a>
        </AppNav>
        <div className={styles.layout}>
          <Sticky className={cx('animated', 'slideInDown')}>
            <AppBar />
          </Sticky>
          <div className={styles.content}>
            {this.props.children}
          </div>
        </div>
      </StickyContainer>
    );
  }
}