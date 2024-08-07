type IProps = {
  isLogged: boolean;
  name?: string
}

export default function Header({isLogged, name}: IProps) {
  return (
    <header className="header">
      <img src="/Logo.png" alt="logo dindin" />  

      {
      isLogged && (
        <section>
          <div>
            <img src="/1814089_account_user_person_profile_avatar_icon 1.png" alt="conta" />
            <p>{name}</p>
            <img src="/sign-out.png" alt="sair" />
          </div>
        </section>
      ) 

    }
    </header>
  )
}