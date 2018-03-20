import React, { Component } from 'react';
import cates from '../../../../categories.json'

import '../css/categories.css'
export default class Categories extends Component{
  constructor(){
    super();
    this.state={
      cates : cates
    }
  }

  render(){
    // simple tree view

    var treeView = [];
    var cates= this.state.cates;
    if(JSON.stringify(cates) == "{}"){
      return <div style={{textAlign:'center',marginTop:"15rem"}}>抱歉，暂无任何分类</div>
    }
    for(var key in cates){
      var cate_item = cates[key];
      var cate_item_children = [];
      cate_item_children =  cate_item.map(function(val){
        // 二级标题
        var name = val.replace(/.md/,'');
        return <li className="tree_2"><a href={"/detail/"+name}>{name}</a></li>
      })
      treeView.push(
        <li className="tree_1">
          <div className="toggler">{key} <span className="artCount">{cate_item.length}</span></div>
          <ul className="cate_list_second">
            {cate_item_children}
          </ul>
        </li>
      )

    }
    return <div className="categories_tree">
              <ul className="cate_list_first">
                {treeView}
              </ul>
            </div>
  }


}
