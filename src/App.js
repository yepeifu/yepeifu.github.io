// import logo from './logo.svg';
import React, { Suspense } from 'react'
import { Skeleton } from 'antd'
import { renderRoutes } from 'react-router-config'
import './App.less'
import routes from '@/router'
import { HashRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Suspense fallback={<Skeleton active />}>{renderRoutes(routes)}</Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
