import { LedgerModel } from "../../models/LedgerModel";
import LedgerService from "../../services/LedgerService";

export const Actions = ({ id, fullName }: LedgerModel) => {
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          LedgerService.deleteItem(id);
        }}
      >
        delete
      </button>
      <button onClick={() => {}}>edit</button>
    </div>
  );
};
