import React, { Component } from 'react';
import logo from './logo.svg';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        );
    }
}

export default App;
