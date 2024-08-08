import handleClearToken from '../../hooks/useAuth'

type IProps = {
  isLogged: boolean;
  name?: string
}

export default function Header({isLogged, name}: IProps) {

  function handleOpenModal() {
    //todo
  }

  function handleLogout() {
    handleClearToken()
  }

  return (
    <header className="header" style={{ justifyContent: isLogged ? 'space-between' : 'start' }}>
      <img src="/Logo.png" alt="logo dindin" />  

      {
      isLogged && (
        <section>
          <div className="login-icons">
          <img
            onClick={handleOpenModal}
            className="user-icon"
            src="/1814089_account_user_person_profile_avatar_icon 1.png"
            alt="conta" 
          />
              <p className="user-name">{name ? name : "Amanda"}</p>
            <img 
              onClick={handleLogout}
              className="logout"
              src="/sign-out.png"
              alt="sair"
            />
          </div>
        </section>
      ) 

    }
    </header>
  )
}