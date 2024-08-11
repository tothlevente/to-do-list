import { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default class List extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      userInput: "",
      list: [],
    };
  }

  updateInput(value: any) {
    this.setState({
      userInput: value,
    });
  }

  addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
        id: Math.random(),
        value: this.state.userInput,
      };

      const list = [...this.state.list];
      list.push(userInput);

      this.setState({
        list,
        userInput: "",
      });
    }
  }

  deleteItem(key: any) {
    const list = [...this.state.list];
    const updateList = list.filter((item) => item.id !== key);

    this.setState({
      list: updateList,
    });
  }

  editItem = (index: any) => {
    const todos = [...this.state.list];
    const editedTodo = prompt(`Edit the todo:`);

    if (editedTodo !== null && editedTodo.trim() !== "") {
      let updatedTodos = [...todos];
      updatedTodos[index].value = editedTodo;

      this.setState({
        list: updatedTodos,
      });
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <InputGroup className="mb-3">
              <FormControl
                size="lg"
                type="text"
                className="form-control"
                placeholder="Type here your new to-do item"
                value={this.state.userInput}
                onChange={(item) => this.updateInput(item.target.value)}
              />
              <InputGroup style={{ justifyContent: "center" }}>
                <Button
                  disabled={this.state.userInput.length > 0 ? false : true}
                  variant="dark"
                  className="mt-3 input-group-button"
                  onClick={() => this.addItem()}
                >
                  <i style={{ marginRight: "10px" }} className="bi bi-plus-circle"></i>
                  Add
                </Button>
              </InputGroup>
            </InputGroup>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={{ span: 7, offset: 3 }}>
            <ListGroup variant="flush">
              {this.state.list.map((item: any, index: any) => {
                return (
                  <div key={index}>
                    <ListGroup.Item variant="light" className="list-group-item">
                      <div>
                        <i className="bi bi-star-fill" style={{ paddingRight: "10px" }}></i>
                        {item.value}
                      </div>
                      <span>
                        <Button
                          variant="light"
                          className="item-btn pencil-btn"
                          onClick={() => this.editItem(index)}
                          style={{ marginRight: "10px" }}
                        >
                          <i className="bi bi-pencil-square"></i>
                        </Button>
                        <Button
                          variant="light"
                          className="item-btn trash-btn"
                          onClick={() => this.deleteItem(item.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </Button>
                      </span>
                    </ListGroup.Item>
                    <hr />
                  </div>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
