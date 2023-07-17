import { Component } from "react";
import { Col } from "react-bootstrap";

export class ColE extends Component {
  render() {
    const { title, url, price, warehouse } = this.props;
    return (
      <Col xs={12} md={6} lg={4}>
        <div className="row-col">
          <div className="img">
            <img src={url} alt="" />
          </div>
          <div className="trueFalse d-flex align-items-center gap-2 mb-2 px-1">
            <div className="dumalo"></div>
            <p className="m-0">{warehouse}</p>
          </div>
          <p className="fw-bold">{title}</p>
          <div className="border mb-2"></div>

          <div className="d-flex gap-2 justify-content-around">
            <div>
              <p className="m-0">Price</p>

              <p className="m-0">{price}</p>
            </div>
            <div>
              <p className="m-0">Sales</p>

              <p className="m-0">100</p>
            </div>
            <div>
              <p className="m-0">Revenue</p>

              <p className="m-0">1000000</p>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}
