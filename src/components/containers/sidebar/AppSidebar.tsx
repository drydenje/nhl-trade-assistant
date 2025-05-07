import { CircleX, Copy } from "lucide-react";
import { playersToUpdate, removePlayerToUpdate } from "@/stores/playerStore";
import { useStore } from "@nanostores/react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const players = useStore(playersToUpdate);
  const remainingPercentage = Math.round((players.length / 1533) * 100);

  return (
    <Sidebar>
      <SidebarHeader>
        <Progress value={remainingPercentage} />
        <div className="flex justify-around">
          <span>{players.length} players</span>
          <Copy
            className="inline-block"
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(players));
            }}
          />
        </div>
        <Button
          onClick={() => {
            const q = `
              WITH ${players[0]} AS players
                UNWIND players AS h
                MATCH (player:Player {playerId: h.playerId })
                SET player.hrId = coalesce(player.hrId, h.hrId),
                    player.hdbId = coalesce(player.hdbId, h.hdbId)
                RETURN player;
            `;
            console.log(q);
          }}
        >
          Update
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Players</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {players.map((player) => (
                <SidebarMenuItem key={player.uuid.toString()}>
                  <SidebarMenuButton asChild>
                    <div className="flex-1/2 justify-between">
                      <span>{player.name}</span>
                      <CircleX
                        onClick={() =>
                          removePlayerToUpdate(player.uuid.toString())
                        }
                      />
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
