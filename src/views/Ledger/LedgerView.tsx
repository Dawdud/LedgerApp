import { useEffect, useState } from "react";
import { Table } from "../../components/Table/Table";
import { ILedgerTable } from "../../models/TableModel";
import LedgerService from "../../services/LedgerService";
import { tableColumns } from "../../utils/constants/table";
import { parse } from "date-fns";
import { parseISO } from "date-fns/fp";
import { format } from "date-fns/esm";
export const LedgerView = () => {
  const [state, setstate] = useState<ILedgerTable>({ data: [], columns: [] });

  useEffect(() => {
    async function getItem() {
      const { data } = await LedgerService.getAll();

      const mappedData = data.map((item, index) => {
        const parseddata = format(parseISO(item.event_date), "dd.MM.yyyy");
        item.lp = index + 1;
        item.event_date = parseddata;
        item.invoice_number = item.invoice_number.substring(0, 6);
        return item;
      });
      setstate({ data: mappedData, columns: tableColumns });
    }
    getItem();
  });
  return <Table data={state.data} columns={state.columns}></Table>;
};
