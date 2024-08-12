import './style.css'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import imagemLogo from '../assets/tech-logo.png'

function Header() {
  const navigate = useNavigate()

  return (
    <header>
      <div
        className="imagem-logo"
        onClick={() => navigate('/listafuncionarios')}
      >
        <img src={imagemLogo} />
      </div>

      <div className="menuSuperiorDireito">
        <hr></hr>
        <div className="imagemUsuario">
          <img
            src="https://e7.pngegg.com/pngimages/96/344/png-clipart-user-profile-instagram-computer-icons-insta-head-silhouette.png"
            alt="imagem do usuário"
          ></img>
        </div>

        <div className="dadosUsuário">
          <span>Dados do usuário</span>
          <span>Cargo do usuário</span>
        </div>

        <Button
          size="large"
          color="secondary"
          startIcon={<ExitToAppIcon style={{ fontSize: '30px' }} />}
          onClick={() => navigate('/logout')}
          style={{
            // backgroundColor: 'red',
            fontSize: '40px',
            padding: '10px 20px',
            width: '50px',
            height: '50px',
          }}
        ></Button>
      </div>
    </header>
  )
}

export default Header
