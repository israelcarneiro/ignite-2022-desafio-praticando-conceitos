import { Form } from './components/Form'
import { Header } from './components/Header'
import { TodoComponent } from './components/TodoComponent'
import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Form />
      <TodoComponent />
    </>
  )
}
