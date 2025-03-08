import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Player = {
  playerID: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  birthCity: string;
  birthCountry: string;
  hrID: string | null;
  hdbID: string | null;
  verified: boolean;
};

// export const players: Player[] = unfilteredPlayers;

export const columns: ColumnDef<Player>[] = [
  { accessorKey: "playerID", header: "PlayerID" },
  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          First Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  { accessorKey: "lastName", header: "Last Name" },
  { accessorKey: "birthDate", header: "BirthDate" },
  { accessorKey: "birthCity", header: "City" },
  { accessorKey: "birthCountry", header: "Country" },
  { accessorKey: "hrID", header: "hrID" },
  { accessorKey: "hdbID", header: "hdbID" },
  { accessorKey: "verified", header: "Verified" },
];
