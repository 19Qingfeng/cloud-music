import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Tab, TabItem, Top } from './style';
import routesConfig from '../../routes';

const Home = () => {
  const renderTabItem = () => {
    const children = routesConfig[0].children || [];
    return children.map((i) => {
      return i.meta ? (
        <NavLink
          to={i.path || ''}
          key={i.path}
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? 'selected' : ''
          }
        >
          <TabItem>
            <span>{i.meta}</span>
          </TabItem>
        </NavLink>
      ) : null;
    });
  };

  return (
    <>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">网易云音乐</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>{renderTabItem()}</Tab>
      <Outlet></Outlet>
    </>
  );
};

export default React.memo(Home);
