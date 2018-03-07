import React from 'react';

class ArticleDetail extends React.Component{
  constructor(){
    super();
  }


  render(){
    var id  = this.props.match.params.id;
    var md = require('./articles/'+id+'.md');
    return (
      <div className="articleDetail">

      </div>
    )
  }
}

export default ArticleDetail;
