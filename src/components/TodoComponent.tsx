import { FormEvent, useMemo, useState } from 'react'

import { Trash } from 'phosphor-react'

import { api } from '../utils/api'
import styles from './TodoComponent.module.css'

interface Task {
  id: string
  task: string
  isDone: boolean
}

interface TodoComponentProps {
  tasks: Task[]
  handleDelete: (id: string) => void
}

export function TodoComponent({ tasks, handleDelete }: TodoComponentProps) {
  const [checked, setChecked] = useState<any>([])

  const handleChecked = (event: FormEvent<HTMLInputElement>) => {
    let checkedTasks = [...checked]

    if (event.currentTarget.checked) {
      checkedTasks = [...checked, event.currentTarget.value]
    } else {
      checkedTasks.splice(checked.indexOf(event.currentTarget.value), 1)
    }

    setChecked(checkedTasks)
    console.log(checked)
  }

  const isChecked = (item: string) =>
    checked.includes(item) ? styles.checkedTasks : styles.notCheckedTasks

  const tasksCount = useMemo(() => {
    const count = tasks.length
    return count
  }, [tasks])

  const tasksDoneCount = useMemo(() => {
    const countDone = checked.length
    return countDone
  }, [checked])

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h6>
          Tarefas criadas <span>{tasksCount}</span>
        </h6>
        <h6>
          Concluídas
          <span>
            {tasksDoneCount} de {tasksCount}
          </span>
        </h6>
      </div>
      {tasks.map(task => (
        <div className={styles.todo} key={task.id}>
          <label className={styles.customCheckbox}>
            <input type='checkbox' value={task.id} onChange={handleChecked} />
          </label>
          <span className={isChecked(task.id)}>{task.task}</span>
          <Trash size={30} onClick={() => handleDelete(task.id)} />
        </div>
      ))}
    </div>
  )
}
