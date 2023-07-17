import { Component } from "react";
import { Button } from "react-bootstrap";

export class Book extends Component {
  render() {
    const { name, img, price, sales } = this.props.book;

    return (
      <div key={name} className="shadow p-3 rounded h-100">
        <img src={img} className="w-100 mb-3" alt="" />
        <h2>{name}</h2>
        <div>
          <p>{price}</p>
          <p>{sales}</p>
        </div>
        <Button onClick={this.props.delete}>Delete</Button>
      </div>
    );
  }
}
