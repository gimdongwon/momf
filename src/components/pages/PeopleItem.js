import React, { Component } from "react";

export default class PeopleItem extends Component {
  render() {
    return (
      <div className="profile" key={this.props.index}>
        <img
          src={this.props.item.img}
          alt="anomymous_profile"
          width="240px"
          height="240px"
        />
        <p>{this.props.item.name}</p>
        <p>{this.props.item.participation}</p>
        <p>{this.props.item.comment}</p>
      </div>
    );
  }
}
