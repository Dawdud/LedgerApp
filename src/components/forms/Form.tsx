import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LedgerModel } from "../../models/LedgerModel";
import LedgerService from "../../services/LedgerService";

export const Form: FC = () => {
  const { register, handleSubmit } = useForm<LedgerModel>();
  const onSubmit: SubmitHandler<LedgerModel> = async (data) => {
    try {
      console.log(data);

      await LedgerService.createItem(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="event_date">date</label>
      <input type="date" {...register("event_date")}></input>

      <label htmlFor="invoice_number"> numer faktury</label>
      <input
        type="text"
        id="invoice_number"
        {...register("invoice_number")}
      ></input>

      <label htmlFor="fullName"> imię i nazwisko </label>
      <input type="text" id="fullName" {...register("fullName")}></input>

      <label htmlFor="adress"> adres</label>
      <input type="text" id="adress" {...register("adress")}></input>

      <label htmlFor="description"> opis zdarzenia</label>
      <input type="text" id="description" {...register("description")}></input>

      <label htmlFor="commodityVal"> wartość sprzedanych towarów</label>
      <input
        type="text"
        id="commodityVal"
        {...register("commodityVal")}
      ></input>

      <label htmlFor="income"> pozostały przychów</label>
      <input
        type="number"
        id="income"
        {...register("income", {
          setValueAs: (v) => parseInt(v),
        })}
      ></input>

      <label htmlFor="total_income"> razem przychód</label>
      <input
        type="text"
        id="total_income"
        {...register("total_income", {
          setValueAs: (v) => parseInt(v),
        })}
      ></input>

      <label htmlFor="material_cost"> zakup towarów handl</label>
      <input
        type="text"
        id="material_costs"
        {...register("material_costs", {
          setValueAs: (v) => parseInt(v),
        })}
      ></input>

      <label htmlFor="other_costs"> koszty uboczne</label>
      <input
        type="text"
        id="other_costs"
        {...register("other_costs", {
          setValueAs: (v) => parseInt(v),
        })}
      ></input>

      <label htmlFor="salary"> wynagrodzenie</label>
      <input
        type="text"
        id="salary"
        {...register("salary", {
          setValueAs: (v) => parseInt(v),
        })}
      ></input>

      <label htmlFor="additional_spendings"> pozostałe wydatki</label>
      <input
        type="text"
        id="additional_spendings"
        {...register("additional_spendings", {
          setValueAs: (v) => parseInt(v),
        })}
      ></input>

      <label htmlFor="summary_cost">razem wydatki</label>
      <input
        type="text"
        id="summary_cost"
        {...register("summary_cost", {
          setValueAs: (v) => parseInt(v),
        })}
      ></input>

      <label htmlFor="additional">dodatkowe</label>
      <input type="text" id="additional" {...register("additional")}></input>

      <label htmlFor="development_cost">wartość bad.rozw</label>
      <input
        type="text"
        id="development_cost"
        {...register("development_cost", {
          setValueAs: (v) => parseInt(v),
        })}
      ></input>

      <label htmlFor="development_description"> opis bad.rozw</label>
      <input
        type="text"
        id="development_description"
        {...register("development_description")}
      ></input>

      <label htmlFor="comments"> Uwagi</label>
      <input type="text" id="comments" {...register("comments")}></input>
      <input type="submit" />
    </form>
  );
};
