import React from "react";
import Loader from './Loader';


let rootUrl = 'https://mighty-oasis-08080.herokuapp.com/api/';
export default class Aside extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tags: null,
    }
  }

  componentDidMount(){
    fetch(rootUrl + '/tags').then(res => res.json()).then(({tags}) => this.setState({
      tags
    }))
  }

  render(){
    if(this.state.tags){
      return (
        <div className="tags-container">
          <ul className="tags-menu flex">
            {
              this.state.tags.map(tag => (
                <li key={tag} onClick={this.props.handleTagSelect} className="tags-menu-item">{tag}</li>
              ))
            }
          </ul>
        </div>
      )
    }else{
      return (
        <div className="tags-container">
          <Loader />
        </div>
      )
    }
  }
}
