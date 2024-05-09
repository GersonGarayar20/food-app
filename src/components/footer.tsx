import Link from "next/link";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div>
      desarrollador por 
      <HoverCard>
        <HoverCardTrigger>
        <Button variant="link">
          @esteban
          </Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <Link href={""}>Linkendin</Link>
          The React Framework – created and maintained by @vercel.
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
