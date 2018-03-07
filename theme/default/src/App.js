import React, { Component } from 'react';
import {
  BrowserRouter  as Router,
  Route,
  Link
} from 'react-router-dom'

import LeftPanel from './components/LeftPanel';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import Footer from './components/Footer';
import 'normalize.css';

import './css/reset.css';
import './css/sakura.css';
import './css/app.css';

import { menu } from '../../../blog.config';
class App extends Component {
  render() {
    return (
      <div className="App">

        <LeftPanel></LeftPanel>   {/* 左边恻栏 */}

        {/* 中间内容 */}
        <Router>
            <div>
                <Route exact path="/" component={ArticleList}/>
                <Route exact path="/detail/:id" component={ArticleDetail}/>
                <Route exact path="/tags" component={ArticleDetail}/>
                <Route exact path="/categories" component={ArticleDetail}/>
            </div>
        </Router>

        <Footer></Footer>         {/* footer信息 */}
      </div>
    );
  }
}

export default App;
