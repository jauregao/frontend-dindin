import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  title: string;
};

type FormValues = {
  email: string;
  password: string;
};

export default function SignInForm({ title }: Props) {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    reset();
  };

  return (
    <div className="form-dad">
      <h1>{title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email
              <input id="email" type="email" {...register("email", { required: true })} />
            </label>
            <label htmlFor="password">Senha
              <input id="password" type="password" {...register("password", { required: true })} />
            </label>
          <input type="submit" value={"Entrar"}/>
        </form>
    </div>
  );
}