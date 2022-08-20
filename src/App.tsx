import { Transactions } from './pages/Transactions'
import { globalStyles } from './styles/global'

export function App() {
  globalStyles()
  return (
    <>
      <Transactions />
    </>
  )
}
