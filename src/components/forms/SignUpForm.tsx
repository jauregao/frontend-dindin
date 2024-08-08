import axios from "axios";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import api from "../../services/api";

type Props = {
  title: string;
};

type FormValues = {
  email: string;
  senha: string;
  passwordCheck: string;
  nome: string;
};

export default function SignUpForm({ title }: Props ) {
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState<string | null >(null);
  const [formError, setFormError] = useState<string | null >(null);

  const { register, handleSubmit, reset, setValue } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async ({ nome, email, senha, passwordCheck }) => {

    try {
      if(senha !== passwordCheck) {
        setPasswordError("As senhas não coincidem.");
        setTimeout(() => {
          setPasswordError(null); 
          setValue("senha", "");
          setValue("passwordCheck", "");
        }, 2000);
        return;
      }
      await api.post('/usuario', { nome, email, senha });
      setPasswordError(null);
      navigate('/sign-in');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(error);
          setFormError('Ocorreu um erro ao realizar o login.');
      } else {
        setFormError('Ocorreu um erro inesperado.');
      }
      setTimeout(() => {
        setFormError(null); 
        reset()
      }, 2000);
    }
  };

  return (
    <div className="form-dad">
      <h1>{title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {formError && (
            <p>{formError}</p>
          )}
            <label htmlFor="name">Nome
              <input id="name" {...register("nome", { required: true }) } />
            </label>
            <label htmlFor="email">Email
              <input id="email" type="email" {...register("email", { required: true })} />
            </label>
            <label htmlFor="password">Senha
              <input id="password" type="password" {...register("senha", { required: true })} />
            </label>
            <label htmlFor="passwordCheck">Confirmação de senha
              <input id="passwordCheck" type="password" {...register("passwordCheck", { required: true })} />
            </label>
        {passwordError && <p className="error-message">{passwordError}</p>}
          <input type="submit" value={"Cadastrar"}/>
          <p onClick={() => navigate('/sign-in')}>Já tem cadastro? Clique aqui!</p>
        </form>
    </div>
  );
}
