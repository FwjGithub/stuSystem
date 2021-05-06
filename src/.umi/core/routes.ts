// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/FWJ/Desktop/前端笔记/REACT/umi-demo2/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.js').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.js').default,
        "title": "首页",
        "wrappers": [require('@/wrappers/auth').default, require('@/wrappers/HandleTitle').default]
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('@/pages/login.js').default
      },
      {
        "path": "/register",
        "exact": true,
        "component": require('@/pages/register.js').default
      },
      {
        "path": "/student/add",
        "exact": true,
        "component": require('@/pages/student/add.js').default,
        "title": "添加学生页",
        "wrappers": [require('@/wrappers/auth').default, require('@/wrappers/HandleTitle').default]
      },
      {
        "path": "/student",
        "exact": true,
        "component": require('@/pages/student/index.js').default,
        "title": "学生管理页",
        "wrappers": [require('@/wrappers/auth').default, require('@/wrappers/HandleTitle').default]
      },
      {
        "path": "/student/uploadTest",
        "exact": true,
        "component": require('@/pages/student/uploadTest.js').default
      },
      {
        "path": "/student/:sNo",
        "exact": true,
        "component": require('@/pages/student/[sNo].js').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
