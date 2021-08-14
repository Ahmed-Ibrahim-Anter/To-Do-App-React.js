import React, { Component } from 'react';


class AddItem extends Component {
    state = {
        name: '',
        age: ''
    }
    handelChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handelSubmit = (e) => {
        e.preventDefault();
     this.props.addItem(this.state);
this.setState({
    name: '',
    age: ''
})

    }
    render() {
        return (
            <div className='add'> 
                <form onSubmit={this.handelSubmit}  className='inp'>
                    <input type="text" autoComplete='off' pattern="[A-Za-z]{3,}" required id='name' placeholder='Enter your name....' onChange={this.handelChange} value={this.state.name} />
                    <input type="number" min='3' max='120' required id='age' placeholder='Enter your age....' onChange={this.handelChange} value={this.state.age}/>
                    <input type="submit" name="" value="(+)" id='add'/>

                </form>
            </div>
        );
    }
}

export default AddItem;