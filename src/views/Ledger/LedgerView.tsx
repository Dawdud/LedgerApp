import { useEffect, useState } from "react";
import { Table } from "../../components/Table/Table";
import { ILedgerTable } from "../../models/TableModel";
import LedgerService from "../../services/LedgerService";
import { tableColumns } from "../../utils/constants/table";
import { parseISO } from "date-fns/fp";
import { format } from "date-fns/esm";
import { Actions } from "../../components/Table/actions";
import { source } from "../../config/axios";
import axios, { Axios } from "axios";
import { LedgerModel } from "../../models/LedgerModel";
import { IColumns } from "../../models/ColumnsModel";

export const LedgerView = () => {
  const [state, setstate] = useState<ILedgerTable>({ data: [], columns: [] });
  const [hasError, setHasError] = useState(false);
  const handleDelete = (data: LedgerModel[], columns: IColumns[]) => {
    setstate({ data, columns });
  };

  useEffect(() => {
    let unmounted = false;
    async function getItem() {
      try {
        if (!unmounted) {
          console.log(unmounted);

          const { data } = await LedgerService.getAll();

          const mappedData = data.map((item, index) => {
            const parseddata = format(parseISO(item.event_date), "dd.MM.yyyy");
            item.lp = index + 1;
            item.event_date = parseddata;
            item.invoice_number = item.invoice_number.substring(0, 6);
            console.log(item);

            item.edit = <Actions handleUpdate={this.handleDelete} {...item} />;
            return item;
          });
          setstate({ data: mappedData, columns: tableColumns });
        }
      } catch (error) {
        if (!unmounted) {
          console.log(error);
          setHasError(true);
          if (axios.isCancel(error)) {
          } else {
            throw error;
          }
        }
      }
    }
    getItem();
    return () => {
      unmounted = true;
      source.cancel("Component is unmounted");
    };
  }, []);
  return (
    <div>
      <button>Create</button>
      <Table data={state.data} columns={state.columns}></Table>
    </div>
  );
};
