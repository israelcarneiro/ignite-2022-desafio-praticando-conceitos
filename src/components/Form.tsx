import { FormEvent, useState } from 'react'

import { PlusCircle } from 'phosphor-react'

import styles from './Form.module.css'

export function Form() {
  const [task, setTask] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <form className={styles.form}>
      <input type='text' placeholder='Adicione uma nova tarefa' value={task} />
      <button type='submit'>
        Criar
        <PlusCircle size={20} weight='bold' />
      </button>
    </form>
  )
}
