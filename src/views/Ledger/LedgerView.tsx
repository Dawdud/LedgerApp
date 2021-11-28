import { useEffect, useState } from "react";
import { Table } from "../../components/Table/Table";
import { ILedgerTable } from "../../models/TableModel";
import LedgerService from "../../services/LedgerService";

export const LedgerView = () => {
  const [state, setstate] = useState<ILedgerTable>({ data: [], columns: [] });

  useEffect(() => {
    async function getItem() {
      const { data } = await LedgerService.getAll();
      const keys = Object.keys(data[0]);
      const mapedKeys = keys.map((item) => {
        return { Header: item, accessor: item };
      });

      setstate({ data: data, columns: mapedKeys });
    }
    getItem();
  });
  return <Table data={state.data} columns={state.columns}></Table>;
};
