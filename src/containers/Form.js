import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";

class ConnectedForm extends Component {

  constructor() {
    super();
    this.state = {
      title: "",
      alert: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    if (title === "" || title === undefined) {
      this.setState({ alert: "You must enter information before you submit." })
    }
    else {
      const id = uuidv1();
      const article = { title, id }
      this.props.addArticle(article);
      this.setState({ title: "", alert: "" });
    }
  }
  render() {
    const { title, alert } = this.state;
    return (
      <div>
        {alert && <div className="alert alert-danger" role="alert">
          {alert}
        </div>}

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-success btn-lg">
            SAVE
        </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

export default connect(null, mapDispatchToProps)(ConnectedForm);