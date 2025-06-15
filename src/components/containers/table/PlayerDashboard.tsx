import { useState, useEffect } from "react";
import { Player } from "@/types/Player";
import { playersMissingIds } from "@/stores/playerStore";
import { columns } from "@/components/containers/table/columns";
import { DataTable } from "@/components/containers/table/data-table";

const PlayerDashboard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    playersMissingIds.listen((value) => {
      setData(value);
    });
  }, []);

  console.log("Players remaining:", data?.length);

  return data ? <DataTable columns={columns} data={data} /> : null;
};

export { PlayerDashboard };
