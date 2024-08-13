import { useForm, SubmitHandler } from "react-hook-form";
import { EType } from "../../types/transaction";

interface IProps {
  categories: {
    id: number;
    description: string;
  }[]
}

type FormValues = {
  type: EType;
  value: number;
  category: string;
  date: string;
  description: string;
}

export default function NewTransactionModal ({ categories }: IProps) {

  const { register, handleSubmit, reset, setValue } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async ({ type, value, category, date, description }) => {
    
  }

  return (
    <section>
      <form>
        <div>
          <input {...register("type", { required: true })} type="button" value="Entrada" onClick={} />
          <input {...register("type", { required: true })} type="button" value="Saída" onClick={} />
        </div>

        <label htmlFor="email">Value
          <input {...register("value", { required: true })} type="text" name="" id="" />
        </label>
        <label htmlFor="email">Category
          <input {...register("category", { required: true })} type="text" name="" id="" />
        </label>
        <label htmlFor="email">Date
          <input {...register("date", { required: true })} type="date" name="" id="" />
        </label>
        <label htmlFor="email">Description
          <input {...register("description", { required: true })} type="text" name="" id="" />
        </label>
        
        <input type="submit" value="Confirm" />
      </form>
    </section>
  )

}