import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../Header'
import CadastroFuncionario from '../pages/CadastroFuncionario'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import CadastroUsuario from '../pages/CadastroUsuario'
import EsqueciSenha from '../pages/Esquecisenha'
import ListaFuncionarios from '../pages/ListaFuncionarios'
import Erro from '../pages/Erro'
import Funcionario from '../pages/Funcionario'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#b9114b',
      darker: '#053e85',
    },
    secondary: {
      main: '#FFF',
      darker: '#CCC',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
})

function RoutesApp() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/cadastrofuncionario"
            element={<CadastroFuncionario />}
          />
          <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
          <Route path="/listafuncionarios" element={<ListaFuncionarios />} />
          <Route path="/esquecisenha" element={<EsqueciSenha />} />
          <Route
            path="/listafuncionarios/:id"
            element={<Funcionario />}
          ></Route>

          <Route path="*" element={<Erro />}></Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default RoutesApp
