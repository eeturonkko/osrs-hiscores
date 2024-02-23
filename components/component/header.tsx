"use client";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center w-full max-w-6xl px-4">
        <div className="flex space-x-4">
          <Button className="bg-[#333533] text-white">Hiscores</Button>
          <Select>
            <SelectTrigger id="ironman" className="bg-[#333533] text-white">
              <SelectValue placeholder="Ironman" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="ironman">Ironman</SelectItem>
              <SelectItem value="ultimate">Ultimate</SelectItem>
              <SelectItem value="hardcore">Hardcore</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-[#333533] text-white">Group Ironman</Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
