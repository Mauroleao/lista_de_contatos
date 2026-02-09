import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import ListaContatos from './pages/ListaContatos'
import Cadastro from './pages/Cadastro'
import EstiloGlobal, { Container, Main } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <Container>
          <Menu />
          <Main>
            <Routes>
              <Route path="/" element={<ListaContatos />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
          </Main>
        </Container>
      </BrowserRouter>
    </Provider>
  )
}

export default App
