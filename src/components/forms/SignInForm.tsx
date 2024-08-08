import { useForm, SubmitHandler } from "react-hook-form";
import api from "../../services/api";
import { useState } from "react";
import useUser from '../../hooks/useUser'
import useAuth from '../../hooks/useAuth'
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
};

type FormValues = {
  email: string;
  senha: string;
};

export default function SignInForm({ title }: Props) {

  const navigate = useNavigate();

  const { handleInsertUser } = useUser()
  const { handleAddToken } = useAuth()
  const [formError, setFormError] = useState<string | null >(null);

  const { register, handleSubmit, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    try {
      const { data, status } = await api.post('/login', formData);
      
      if(status !== 200) {
        setFormError('Email ou senha incorretos.');
        setTimeout(() => {
          setFormError(null); 
          reset();
        }, 2000);
        return
      }
        const { usuario, token } = data; 
          handleInsertUser(usuario);
          handleAddToken(token);
          navigate('/');
        return
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 400) {
          setFormError('Email ou senha incorretos.');
        } else {
          setFormError('Ocorreu um erro ao realizar o login.');
        }
      } else {
        setFormError('Ocorreu um erro inesperado.');
      }
      setTimeout(() => {
        setFormError(null); 
        reset()
      }, 2000);
    };
}

  return (
    <div className="form-dad">
      <h1>{title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          { formError && (
            <p className="form-error">{formError}</p>
          )}
            <label htmlFor="email">Email
              <input id="email" type="email" {...register("email", { required: true })} />
            </label>
            <label htmlFor="password">Senha
              <input id="password" type="password" {...register("senha", { required: true })} />
            </label>
          <input type="submit" value={"Entrar"}/>
        </form>
    </div>
  );
}