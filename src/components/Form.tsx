import { FormEvent, useEffect, useState } from 'react'

import { PlusCircle } from 'phosphor-react'

import { api } from '../utils/api'
import styles from './Form.module.css'
import { TodoComponent } from './TodoComponent'

interface Task {
  id: string
  task: string
  isDone: boolean
}

export function Form() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const loadTasks = async () => {
      const response = await api.get('/tasks')
      setTasks(response.data)
    }
    loadTasks()
  }, [])

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    await api.post('tasks', {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      task: newTask
    })
    const response = await api.get('/tasks')
    setTasks(response.data)
    setNewTask('')
  }

  function handleNewTaskChange(event: FormEvent<HTMLInputElement>) {
    setNewTask(event.currentTarget.value)
  }

  const handleDelete = async (id: string) => {
    await api.delete(`/tasks/${id}`)

    const newTaskListWithoutTheDeleteComment = tasks.filter(
      task => task.id !== id
    )

    setTasks(newTaskListWithoutTheDeleteComment)
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Adicione uma nova tarefa'
          name='task'
          value={newTask}
          onChange={handleNewTaskChange}
        />
        <button type='submit'>
          Criar
          <PlusCircle size={20} weight='bold' />
        </button>
      </form>
      <TodoComponent tasks={tasks} handleDelete={handleDelete} />
    </>
  )
}
