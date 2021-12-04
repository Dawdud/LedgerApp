export interface LedgerModel {
  lp: number | string;
  additional: string;
  additional_spendings: string;
  adress: string;
  comments: string;
  commodityVal: number | string;
  description: string;
  development_cost: number | string;
  development_description: string;
  event_date: string;
  fullName: string;
  id: number | string;
  income: number | string;
  invoice_number: string;
  material_costs: number | string;
  other_costs: number | string;
  salary: number | string;
  summary_cost: number | string;
  total_income: number | string;
  edit: JSX.Element | string;
}
