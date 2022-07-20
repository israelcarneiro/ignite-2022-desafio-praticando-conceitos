import { FormEvent, InputHTMLAttributes, useEffect, useState } from 'react'

import { PlusCircle } from 'phosphor-react'

import { api } from '../utils/api'
import styles from './Form.module.css'

export function Form() {
  const [newTask, setNewTask] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    await api.post('tasks', {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      task: newTask,
      isDone: false
    })

    setNewTask('')
  }

  function handleNewTaskChange(event: React.FormEvent<HTMLInputElement>) {
    setNewTask(event.currentTarget.value)
  }

  return (
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
  )
}
