import { client } from "../config/axios";
import { LedgerModel } from "../models/LedgerModel";

const getAll = () => client.get<LedgerModel[]>("/GetAllLedgerItems");

const LedgerService = {
  getAll,
};
export default LedgerService;
