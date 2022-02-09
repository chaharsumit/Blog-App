import React from "react";

export default class Aside extends React.Component{
  constructor(props){
    super(props);
  }

  tags = () => {
    let availtags = this.props.articles.reduce((acc, curr) => {
      acc = acc.concat(curr.tagList);
      return acc;
    }, []);
    availtags = [...new Set(availtags)];
    return availtags;
  }

  render(){
    let tagList = this.tags();
    return (
      <div className="tags-container">
        <ul className="tags-menu flex">
          {
            tagList.map(tag => (
              <li key={tag} className="tags-menu-item">{tag}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}
