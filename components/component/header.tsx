"use client";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center w-full max-w-6xl px-4">
        <div className="flex space-x-4">
          <Button className="bg-[#333533] text-white">
            <Link href="/">Hiscores</Link>
          </Button>
          <Select>
            <SelectTrigger id="ironman" className="bg-[#333533] text-white">
              <SelectValue placeholder="Ironman" />
            </SelectTrigger>
            <SelectContent
              className="bg-[#333533] border-none"
              position="popper"
            >
              <div className="flex flex-col gap-2 ">
                <Button className="bg-[#333533] text-white">
                  <Link href="/ironman">Ironman</Link>
                </Button>
                <Button className="bg-[#333533] text-white">
                  <Link href="/ultimate_ironman">Ultimate Ironman</Link>
                </Button>
                <Button className="bg-[#333533] text-white">
                  <Link href="/hardcore_ironman">Hardcore Ironman</Link>
                </Button>
              </div>
            </SelectContent>
          </Select>

          <Button className="bg-[#333533] text-white">Group Ironman</Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
