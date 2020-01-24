import React, { Component } from "react";
import ReactDOM from "react-dom";

/*for comments etc - 
https://www.youtube.com/watch?v=e_ZibOe77yo
https://www.youtube.com/watch?v=BaRtXhcD9O4*/

class ToDoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    };
  }

  //Parameters allow a function to perform tasks without knowing the specific input values ahead of time.
  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  addItem() {
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      //make a copy of state.newItem without altering original item
      value: this.state.newItem.slice()
    };

    //make copy of current list of items -
    //place the contents of state.list into individual elements
    const list = [...this.state.list];

    //add new item to the list
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({ list, newItem: "" });
  }

  deleteItem(id) {
    //copy current list of items
    const list = [...this.state.list];
    console.log(list);

    //filter out item to be deleted
    const updatedList = list.filter(item => item.id !== id);

    //update state
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="todo-item">
        <div>
          Add an item...
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}>Add item</button>
          <br />
          <ol>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>X</button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}
export default ToDoItem;
