import { client } from "../config/axios";
import { LedgerModel } from "../models/LedgerModel";

const getAll = () => client.get<LedgerModel[]>("/GetAllLedgerItems");
const deleteItem = (id: number) => client.delete(`/DeleteLedgerItem?id=${id}`);
const createItem = (data: LedgerModel) =>
  client.post<LedgerModel>("/createLedger", data);

const LedgerService = {
  getAll,
  deleteItem,
  createItem,
};
export default LedgerService;
