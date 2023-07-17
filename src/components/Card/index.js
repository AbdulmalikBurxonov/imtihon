import "./index.css";
import { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { cars } from "../../data/cars";
import { ColE } from "./card";
import { Book } from "../../components/Card/onclick";

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: cars,
      searchValue: "",
      test: 1,
    };
    this.changeSearchValue = this.changeSearchValue.bind(this);
    this.daleteBook = this.daleteBook.bind(this);
  }
  changeSearchValue(e) {
    this.setState((s) => ({ ...s, searchValue: e.target.value }));
  }
  daleteBook(index) {
    this.setState((s) => {
      const books = [...s.cars.slice(0, index), ...s.cars.slice(index + 1)];
      localStorage.setItem("cars", JSON.stringify(books));

      return {
        ...s,
        cars: books,
      };
    });
  }

  render() {
    return (
      <div>
        <header>
          <div className="d-flex align-items-center header px-3 border">
            <Form.Control
              type="search"
              placeholder="Search..."
              className="w-100 py-2 border-0 ps-2 shadow-none"
              aria-label="Search"
              value={this.state.searchValue}
              onChange={this.changeSearchValue}
            />

            <img src="" alt="" />
          </div>
        </header>

        <section className="pt-4">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Products</h2>
              <Button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                + New ebook
              </Button>
            </div>
            <div className="d-flex justify-content-between pt-4">
              <div className="d-flex gap-3">
                <Button className="btn btn-light">All</Button>
                <Button className="btn btn-light">Published</Button>
                <Button className="btn btn-light">Draft</Button>
              </div>
              <div className="d-flex"></div>
            </div>

            <Row className="py-5 g-4" id="row">
              {this.state.cars
                .filter((book) => {
                  book.id
                    .toLowerCase()
                    .includes(this.state.searchValue.toLowerCase().trim());
                })
                .map((car, index) => (
                  <ColE
                    key={car.id}
                    title={car.title}
                    price={car.price}
                    warehouse={car.warehouse}
                    url={car.url}
                  />
                ))}
            </Row>
          </div>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Book +add
                  </h1>
                  <Button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></Button>
                </div>
                <div className="modal-body">
                  <Row classNameName="g-3">
                    <Col md={6}>
                      <Form>
                        <Form.Control
                          className="form-control"
                          id="input1"
                          type="text"
                          placeholder="Url"
                        />
                      </Form>
                    </Col>
                    <Col md={6}>
                      <Form>
                        <Form.Control
                          className="form-control"
                          id="input2"
                          type="text"
                          placeholder="name book"
                        />
                      </Form>
                    </Col>
                    <Col md={6}>
                      <Form>
                        <Form.Control
                          className="form-control"
                          id="input3"
                          type="text"
                          placeholder="price"
                        />
                      </Form>
                    </Col>
                    <Col md={6}>
                      <Form>
                        <Form.Control
                          className="form-control"
                          id="input4"
                          type="text"
                          placeholder="book number"
                        />
                      </Form>
                    </Col>
                  </Row>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onclick="NewAdd()"
                    className="btn btn-primary"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
