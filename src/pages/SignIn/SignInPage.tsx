import SignInForm from "../../components/forms/SignInForm";
import LoginTextBlock from "../../components/loginTextBlock/LoginTextBlock";

export default function SignInPage(){
  return (
    <section className="background-img">
      <div className="container">
        <div className="login">
          <LoginTextBlock/>
          <SignInForm title="Login"/>
        </div>
      </div>
    </section>
  )
}