import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom'

type Props = {
  title: string;
};

type FormValues = {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
};

export default function SignUpForm({ title }: Props ) {
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const { register, handleSubmit, reset, setValue } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if(data.password !== data.passwordCheck) {
      setPasswordError(true);

      setTimeout(() => {
        setPasswordError(false); 
        setValue("password", "");
        setValue("passwordCheck", "");
      }, 2000);

    } else {
      setPasswordError(false)
      reset();
    }
  };

  return (
    <div className="form-dad">
      <h1>{title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          
            <label htmlFor="name">Nome
              <input id="name" {...register("name", { required: true }) } />
            </label>
            <label htmlFor="email">Email
              <input id="email" type="email" {...register("email", { required: true })} />
            </label>
            <label htmlFor="password">Senha
              <input id="password" type="password" {...register("password", { required: true })} />
            </label>
            <label htmlFor="passwordCheck">Confirmação de senha
              <input id="passwordCheck" type="password" {...register("passwordCheck", { required: true })} />
            </label>
        {passwordError && <p className="error-message">As senhas não coincidem.</p>}
          <input type="submit" value={"Cadastrar"}/>
          <p onClick={() => navigate('/sign-in')}>Já tem cadastro? Clique aqui!</p>
        </form>
    </div>
  );
}
