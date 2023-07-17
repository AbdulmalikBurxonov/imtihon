import React from "react";
import { Component } from "react";
import { Row, Col, Button, Container, Form, Navbar } from "react-bootstrap";
import { Book } from "../../components/Book";
import { booksData } from "../../data/books";

export class BookStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: booksData,
      searchValue: "",
      test: 1,
    };

    this.changeSearchValue = this.changeSearchValue.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  changeSearchValue(e) {
    this.setState((s) => ({ ...s, searchValue: e.target.value }));
  }

  deleteBook(index) {
    this.setState((s) => {
      const books = [
        ...s.booksData.slice(0, index),
        ...s.booksData.slice(index + 1),
      ];

      localStorage.setItem("booksData", JSON.stringify(books));

      return {
        ...s,
        booksData: books,
      };
    });
  }

  render() {
    return (
      <div>
        <Navbar expand="lg" className="bg-body-tertiary p-3">
          <Container>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={this.state.searchValue}
                  onChange={this.changeSearchValue}
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="py-4">
          <Row className="g-4">
            {this.state.booksData
              .filter((book) =>
                book.name
                  .toLowerCase()
                  .includes(this.state.searchValue.toLowerCase().trim())
              )
              .map((book, index) => (
                <Col key={book.name} lg={4} sm={6}>
                  <Book
                    book={book}
                    delete={() => this.deleteBook(index)}
                  ></Book>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}
