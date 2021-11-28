import { IColumns } from "./ColumnsModel";
import { LedgerModel } from "./LedgerModel";

export interface ILedgerTable {
  data: LedgerModel[];
  columns: IColumns[];
}
