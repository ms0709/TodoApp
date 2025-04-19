import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodoFromList} = props

  const [isSaved, setSaveStatus] = useState(true)
  const [todoTitle, setTitle] = useState(todoItem.title)
  const [isCompleted, setCompleted] = useState(false)
  const onEdit = () => {
    setSaveStatus(prev => !prev)
  }

  const onChangeTodo = event => {
    setTitle(event.target.value)
  }

  const onChangeCompleteCheckbox = () => {
    setCompleted(prev => !prev)
  }

  return (
    <li className="todo-item">
      <div className="todo-details-container">
        <input
          type="checkbox"
          className="todo-checkbox"
          onChange={onChangeCompleteCheckbox}
          checked={isCompleted}
          id={todoItem.id}
        />
        {isSaved ? (
          <p
            className={`todo ${isCompleted ? 'completed' : ''}`}
            id={todoItem.id}
          >
            {todoTitle}
          </p>
        ) : (
          <input
            type="text"
            value={todoTitle}
            className="todo-title-input"
            onChange={onChangeTodo}
          />
        )}
      </div>

      <div className="option-container">
        <button type="button" className="edit-btn" onClick={onEdit}>
          {isSaved ? 'Edit' : 'Save'}
        </button>

        <button type="button" onClick={() => deleteTodoFromList(todoItem.id)}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
