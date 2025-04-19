import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: uuidv4(),
    title: 'Book the ticket for today evening',
  },
  {
    id: uuidv4(),
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: uuidv4(),
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: uuidv4(),
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: uuidv4(),
    title: 'Order fruits on Big Basket',
  },
  {
    id: uuidv4(),
    title: 'Fix the production issue',
  },
  {
    id: uuidv4(),
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: uuidv4(),
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todoList: initialTodosList, todo: ''}

  deleteTodoFromList = uniqueId => {
    const {todoList} = this.state
    const filteredTodo = todoList.filter(each => each.id !== uniqueId)

    this.setState({todoList: filteredTodo})
  }

  onNewTodo = event => {
    this.setState({todo: event.target.value})
  }

  onSubmitTodo = event => {
    event.preventDefault()
    const {todo} = this.state
    const newTodo = {id: uuidv4(), title: todo}
    this.setState(prevTodo => ({
      todoList: [...prevTodo.todoList, newTodo],
      todo: '',
    }))
  }

  render() {
    const {todoList, todo} = this.state
    return (
      <div className="bg-container">
        <div className="todo-container">
          <h1 className="heading"> Simple Todos</h1>
          <form className="form-contaienr" onSubmit={this.onSubmitTodo}>
            <input
              type="text"
              placeholder="Add to do"
              className="add-todo-input"
              onChange={this.onNewTodo}
              value={todo}
            />
            <input type="submit" value="Add" className="add-todo-btn" />
          </form>
          <ul className="todo-item-container">
            {todoList.map(eachItem => (
              <TodoItem
                todoItem={eachItem}
                key={eachItem.id}
                deleteTodoFromList={this.deleteTodoFromList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
