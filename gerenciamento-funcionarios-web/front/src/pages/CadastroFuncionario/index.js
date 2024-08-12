import React, { useState, useEffect } from 'react'
import './cadastrofuncionario.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Button, TextField } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Lista() {
  const navigate = useNavigate()
  const api = 'http://localhost:8080/api/funcionario/'

  const listaHabilidades = [
    'React',
    'Ract Native',
    'Vue',
    'Java',
    'Angular',
    'Nenhuma habilidade',
  ]
  const listaPreferencias = ['Front-end', 'Back-end']

  const [funcionario, setFuncionario] = useState({
    nomeFuncionario: '',
    funcao: '',
    habilidades: [],
    preferencias: '',
  })
  const [funcionarios, setFuncionarios] = useState([])
  const [atualizar, setAtualizar] = useState('')

  function goTo(go) {
    navigate(go)
  }

  function cadastrar() {
    axios.post(api, funcionario).then((result) => {
      setAtualizar(result)
    })
    limpar()
  }

  function limpar() {
    setFuncionario({
      nomeFuncionario: '',
      funcao: '',
      habilidades: '',
      preferencias: '',
    })
  }

  return (
    <div className="listaDeFuncionarios">
      Nome:
      <TextField
        value={funcionario.nomeFuncionario}
        onChange={(e) =>
          setFuncionario({ ...funcionario, nomeFuncionario: e.target.value })
        }
      ></TextField>
      Funcao:{' '}
      <TextField
        value={funcionario.funcao}
        onChange={(e) =>
          setFuncionario({ ...funcionario, funcao: e.target.value })
        }
      ></TextField>
      Habilidades:{' '}
      <TextField
        value={funcionario.habilidades}
        onChange={(e) =>
          setFuncionario({ ...funcionario, habilidades: e.target.value })
        }
      ></TextField>
      Preferencias:{' '}
      <TextField
        value={funcionario.preferencias}
        onChange={(e) =>
          setFuncionario({ ...funcionario, preferencias: e.target.value })
        }
      ></TextField>
      <Button variant="contained" onClick={cadastrar}>
        Cadastrar
      </Button>
      <Button variant="contained" onClick={() => goTo('/listafuncionarios')}>
        Lista
      </Button>
    </div>
  )
}

export default Lista
