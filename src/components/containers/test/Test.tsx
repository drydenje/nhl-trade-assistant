import React from "react";
import { Button } from "@/components/ui/button";
import { useStore } from "@nanostores/react";
import { isCartOpen } from "@/stores/cartStore";
import { currentPlayer } from "@/stores/playerStore";

// const $isCartOpen = useStore(isCartOpen);

export default function Test() {
  const $isCartOpen = useStore(isCartOpen);
  const $currentPlayer = useStore(currentPlayer);
  console.log("PLAYER:", $currentPlayer);

  return (
    <div>
      <Button
        onClick={() => {
          isCartOpen.set(!$isCartOpen);
        }}
      >
        clicky clicky
      </Button>
    </div>
  );
}
