import React from 'react';
import ReactDOM from 'react-dom';
import WordCloud from 'wordcloud';
import tags  from '../../../../tags.json'

import '../css/tags.css'

class Tags extends React.Component{
    constructor(){
      super();
      this.state = {
        tagsJson : {},
        worldCloudJson : [],
        selectTag:"js",
      }
    }

    componentWillMount(){
      this.setState({"tagsJson" : tags});
      var worldCloudJson = [];
      for(var key in tags){
        worldCloudJson.push([key,tags[key].length]);
      }
      this.setState({'worldCloudJson': worldCloudJson});
    }

    render(){
      var key = this.state.selectTag;
      var resultArr = [];
      if(key!=="" && key in tags){
        for(var i in tags[key]){
          var value = tags[key][i].replace(/.md/,"");

          resultArr.push(<div className="art_item" key ={'art_tag_'+key+i} ><a href={"/detail/"+value}>{value}</a></div>);
        }
      }
      return  (<div>
                <div id="worldCloudCanvas" ref="canvas"></div>
                <div id="tagRelatedArt">
                  {resultArr}
                </div>
              </div>)
    }

    componentDidMount(){
        var canvas = ReactDOM.findDOMNode(this.refs.canvas)
        var list = this.state.worldCloudJson;
        var that = this;
        WordCloud(canvas, {
          list: list,
          gridSize: 0 ,
          weightFactor: function (size) {
            size = Math.max(size,4);
            return Math.pow(size, 2.4);
          },
          minSize:"20px",
          fontWeight:"bold",
          fontFamily: 'sans-serif, serif',
          color: 'random-dark',
          backgroundColor: '#fff',
          rotateRatio: 0,
          wait:50,
          shape:"star",
          ellipticity:1,
          click:function(item){
            that.setState({selectTag:item[0]})
          }
        });
    }
}


export default Tags;