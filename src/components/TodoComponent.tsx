import { useEffect } from 'react'

import { Trash } from 'phosphor-react'

import { api } from '../utils/api'
import styles from './TodoComponent.module.css'

export function TodoComponent() {
  const isChecked = true

  useEffect(() => {
    const loadTasks = async () => {
      const response = await api.get('/tasks')
      // console.log(response)
    }
    loadTasks()
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h6>
          Tarefas criadas <span>5</span>
        </h6>
        <h6>
          Concluídas <span>2 de 5</span>
        </h6>
      </div>
      <div className={styles.todo}>
        <label className={styles.customCheckbox}>
          <input type='checkbox' />
        </label>
        <span className={styles.task}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam
          sapiente molestias dolorum tenetur doloremque perspiciatis.
        </span>
        <Trash size={30} />
      </div>
      <div className={styles.todo}>
        <label className={styles.customCheckbox}>
          <input type='checkbox' checked />
        </label>
        <span className={isChecked ? styles.taskScratch : styles.task}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam
          sapiente molestias dolorum tenetur doloremque perspiciatis.
        </span>
        <Trash size={30} />
      </div>
    </div>
  )
}
