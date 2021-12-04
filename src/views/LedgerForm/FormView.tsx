import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LedgerModel } from "../../models/LedgerModel";
import LedgerService from "../../services/LedgerService";
import { Input } from "../../components/forms/input";
export const FormView: FC = () => {
  const { register, handleSubmit } = useForm<LedgerModel>();

  const onSubmit: SubmitHandler<LedgerModel> = async (data) => {
    try {
      const response = await LedgerService.createItem(data);
      alert(response.status);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="date"
        register={register}
        labelInfo="data"
        name="event_date"
      />
      <Input
        type="text"
        register={register}
        labelInfo="numer faktury"
        name="invoice_number"
      />
      <Input
        type="text"
        register={register}
        labelInfo="Imię i nazwisko"
        name="fullName"
      />
      <Input type="text" register={register} labelInfo="adres" name="adress" />
      <Input
        type="text"
        register={register}
        labelInfo="opis zdarzenia"
        name="description"
      />
      <Input
        type="number"
        register={register}
        labelInfo="wartość sprzedanych towarów"
        name="commodityVal"
      />
      <Input
        type="number"
        register={register}
        labelInfo="pozostały przychów"
        name="income"
      />
      <Input
        type="number"
        register={register}
        labelInfo="razem przychód"
        name="total_income"
      />
      <Input
        register={register}
        type="number"
        labelInfo="zakup towarów handl"
        name="material_costs"
      />
      <Input
        type="number"
        register={register}
        labelInfo="koszty uboczne"
        name="other_costs"
      />
      <Input
        type="number"
        register={register}
        labelInfo="wynagrodzenie"
        name="salary"
      />
      <Input
        type="number"
        register={register}
        labelInfo="pozostałe wydatki"
        name="additional_spendings"
      />
      <Input
        type="number"
        register={register}
        labelInfo="razem wydatki"
        name="summary_cost"
      />
      <Input
        type="text"
        register={register}
        labelInfo="dodatkowe"
        name="additional"
      />
      <Input
        type="number"
        register={register}
        labelInfo="wartość bad.rozw"
        name="development_cost"
      />
      <Input
        type="text"
        register={register}
        labelInfo=" opis bad.rozw"
        name="development_description"
      />
      <Input
        type="text"
        register={register}
        labelInfo=" Uwagi"
        name="comments"
      />

      <input type="submit" />
    </form>
  );
};
