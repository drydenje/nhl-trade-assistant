import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  CircleX,
  Copy,
} from "lucide-react";
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

  return (
    <Sidebar>
      <SidebarHeader>
        <Progress value={players.length / 1533} />
        <div className="flex justify-around">
          <span>{players.length} players</span>
          <Copy
            className="inline-block"
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(players));
            }}
          />
        </div>
        <Button>Update</Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Players</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {players.map((player) => (
                <SidebarMenuItem key={player.uuid}>
                  <SidebarMenuButton asChild>
                    <div className="flex-1/2 justify-between">
                      <span>{player.name}</span>
                      <CircleX
                        onClick={() => removePlayerToUpdate(player.uuid)}
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
