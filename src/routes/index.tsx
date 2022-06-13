import React from 'react';
import Redirect from '../baseUI/Redirect';
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';
import type { RouteObject } from 'react-router-dom';

export type ExtendRouteObject = Omit<RouteObject, 'children'> & {
  children: (RouteObject & { meta?: string })[];
};

const routesConfig: ExtendRouteObject[] = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Redirect path="/recommend"></Redirect>,
      },
      {
        path: '/recommend',
        element: <Recommend />,
        meta: '推荐',
      },
      {
        path: '/singers',
        element: <Singers />,
        meta: '歌手',
      },
      {
        path: '/rank',
        element: <Rank />,
        meta: '排名',
      },
    ],
  },
];

export default routesConfig;
