import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteArticle } from "../actions";

class ConnectedList extends Component {

  renderList = () => {
    return (
      this.props.articles.map(el => (
        <div key={el.id}>
          <li className="list-group-item" >
            {el.title}
          </li>

          <button type="submit" onClick={() => this.props.deleteArticle(el.id)}
            className="btn btn-danger btn-lg">
            Delete
          </button>
          
        </div>
      )))
  }

  render() {
    return (<ul className="list-group list-group-flush">
      {this.renderList()}
    </ul>)
  }
}

const mapStateToProps = state => {
  return { articles: state.articles };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteArticle: id => dispatch(deleteArticle(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);