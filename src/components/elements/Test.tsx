import { use } from "react";
// import { SelectedPlayerContext } from "@/lib/SelectionContext";
import { SelectionContext } from "@/components/Layout.tsx";

export default function Test() {
  const player = use(SelectionContext);

  return (
    <div>
      SELECTED PLAYER:
      {` ${player?.firstName} ${player?.lastName}`}
    </div>
  );
}
