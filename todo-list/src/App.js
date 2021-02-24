import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate'
import Form from './components/Form'
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

export default class App extends Component {

    id = 3;

    state = {
        input:'',
        todos: [
            {id:0, text: '리액트 소개', checked:false},
            {id:1, text: '리액트 소개', checked:true},
            {id:2, text: '리액트 소개', checked:false}
        ],
        color: '#343a40'
    }

    handleSetColor = (color) => {
        this.setState({
            color
        })
    }

    handleColorChange = (e) => {
        this.setState({
            color: e.target.value
        })
    }

    handleRemove = (id) => {
        const {todos} = this.state;
        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        });
    }

    handleToggle = (id) => {
        const {todos} = this.state;

        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index];

        const nextTodos = [...todos];

        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        }
        this.setState({
            todos:nextTodos
        })
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    handleCreate = () => {
        const {input, todos, color} = this.state;
        this.setState({
            input: '',
            todos: todos.concat({
                id:this.id++,
                text:input,
                checked:false,
                color
            })
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleCreate();
        }
    }

    render(){
        const {input, todos} = this.state;
        const{
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove,
            handleSetColor
        } = this;

        return(
            <TodoListTemplate form={(
                    <Form
                        value={input}
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                        onCreate={handleCreate}
                        color={this.state.color}
                        />
                )}
                palette={(<Palette colors={colors} selected={this.state.color}
                                onSelect={handleSetColor}
                                />)}>
                <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
            </TodoListTemplate>
        );
    }
}
