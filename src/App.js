import React, { Component } from 'react';

import AddItem from './components/AddItem';
import Show from './components/ShowItems';



class App extends Component {
  state = {
    Items: [
      { id: 1, name: 'ahmed', age: 39 },
      { id: 2, name: 'ahmed', age: 13 },
      { id: 3, name: 'Hana', age: 12 }
    ],
  };
  dleteItems = (id) => {
    let Items = this.state.Items.filter(items => {
      return items.id !== id;
    });
    this.setState({ Items })
  }
  addItem = (item) => {
    item.id = Math.random();
    let Items = this.state.Items
    Items.push(item);
    this.setState({ Items });
  }
  render() {
    return (
      <div className="App">
        <div className='head'>
          <h1>My To Do List </h1>
        </div>
        <Show Items={this.state.Items} dleteItems={this.dleteItems} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
