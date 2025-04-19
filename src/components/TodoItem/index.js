import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodoFromList} = props
  const onDeleteTodo = () => {
    deleteTodoFromList(todoItem.id)
  }
  return (
    <li className="todo-item">
      <p className="todo">{todoItem.title}</p>
      <button type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
