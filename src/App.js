import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
      completed: false,
    };
  }
  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value,
    });
  }

  addItem() {
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    //copy of the current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem: "",
    });
  }
  deteteItem(id) {
    //copy current list of items
    const list = [...this.state.list];

    //filter out the item being deleted
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }

  doneItem = (event) => {
    const element = event.target;
    element.classList.toggle("doneItem");
  };

  render() {
    let btn_class = this.state.completed ? "doneItem" : "notdoneItem";
    return (
      <section>
        <h1 className="app-title">To Do LIST</h1>
        <div className="container">
          <div>
            Add an Item..
            <br />
            <input
              type="text"
              placeholder="type new item here.."
              value={this.state.newItem}
              onChange={(e) => this.updateInput("newItem", e.target.value)}
            />
            <button
              disabled={this.state.newItem.length < 1}
              onClick={() => this.addItem()}
            >
              Add{" "}
            </button>
            <br />
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li key={item.id}>
                    <a onClick={this.doneItem}> {item.value}</a>
                    <button onClick={() => this.deteteItem(item.id)}>x</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
