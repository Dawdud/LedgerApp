import { IColumns } from "../../models/ColumnsModel";
import { LedgerModel } from "../../models/LedgerModel";

const ledgerColumns: LedgerModel = {
  id: "id",
  additional: "additional",
  lp: "lp",
  event_date: "event_date",
  fullName: "fullName",
  description: "description",
  development_cost: "development_cost",
  development_description: "development_description",
  income: "income",
  invoice_number: "invoice_number",
  comments: "comments",
  commodityVal: "commodityVal",
  edit: "edit",
  additional_spendings: "additional_spendings",
  adress: "adress",
  total_income: "total_income",
  material_costs: "material_costs",
  other_costs: "other_costs",
  salary: "salary",
  summary_cost: "summary_cost",
};

export const tableColumns: IColumns[] = [
  {
    Header: "lp",
    accessor: ledgerColumns.lp,
  },
  {
    Header: "data zdarzenia",
    accessor: ledgerColumns.event_date,
  },
  {
    Header: "numer faktury",
    accessor: ledgerColumns.invoice_number,
  },
  {
    Header: "imie i nazwisko",
    accessor: ledgerColumns.fullName,
  },
  {
    Header: "opis zdarzenia",
    accessor: ledgerColumns.description,
  },
  {
    Header: "adres",
    accessor: ledgerColumns.adress,
  },
  {
    Header: "wartość sprzedanych towarów",
    accessor: ledgerColumns.commodityVal,
  },
  {
    Header: "przychód pozostałe",
    accessor: ledgerColumns.income,
  },
  {
    Header: "łączny przychód",
    accessor: ledgerColumns.total_income,
  },
  {
    Header: "zakup towar",
    accessor: ledgerColumns.material_costs,
  },
  {
    Header: "koszty uboczne",
    accessor: ledgerColumns.other_costs,
  },
  {
    Header: "wynag.",
    accessor: ledgerColumns.salary,
  },
  {
    Header: "pozostałe wydatki",
    accessor: ledgerColumns.additional_spendings,
  },
  {
    Header: "razem wydatki",
    accessor: ledgerColumns.summary_cost,
  },
  {
    Header: "        ",
    accessor: ledgerColumns.additional,
  },
  {
    Header: "wartość bad.rozwój",
    accessor: ledgerColumns.development_cost,
  },
  {
    Header: "opis bad.roz",
    accessor: ledgerColumns.development_description,
  },
  {
    Header: "Uwagi",
    accessor: ledgerColumns.comments,
  },
  {
    Header: "edytuj/usuń",
    accessor: ledgerColumns.edit,
  },
];
