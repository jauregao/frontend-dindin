import Header from "../../components/header/Header";
import SignUpForm from "../../components/forms/SignUpForm";

export default function LoginPage(){
  return (
    <section className="background-img">
      <div className="container">
        <Header isLogged={false}/>
        <div className="center">
          <SignUpForm title="Cadastre-se"/>
        </div>
      </div>
    </section>
  )
}