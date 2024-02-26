"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header>
      <nav className="flex gap-2 justify-between items-center w-full max-w-6xl px-4 p-4 rounded">
        <Button className="bg-[#333533] text-white">
          <Link href="/">Hiscores</Link>
        </Button>
        <Button className="bg-[#333533] text-white">
          <Link href="/ironman">Ironman</Link>
        </Button>
        <Button className="bg-[#333533] text-white">
          <Link href="/hardcore_ironman">Hardcore Ironman</Link>
        </Button>
        <Button className="bg-[#333533] text-white">
          <Link href="/ultimate_ironman">Ultimate Ironman</Link>
        </Button>
      </nav>
    </header>
  );
}

export default Header;
