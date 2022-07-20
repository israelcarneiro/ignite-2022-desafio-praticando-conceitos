import logoImg from '../assets/logo.png'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={logoImg}
        alt='Um foguete decolando, ao lado o nome do App, que é TODO'
      />
    </header>
  )
}
