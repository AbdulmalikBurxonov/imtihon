import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { Component } from "react";
import { cars } from "./data/cars";
import { Card } from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        {/* {cars.map((car) => (
          <Col
            title={car.title}
            price={car.price}
            warehouse={car.warehouse}
            url={car.url}
          />
        ))} */}

        <Card />
      </div>
    );
  }
}

export default App;
