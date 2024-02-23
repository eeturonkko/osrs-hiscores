import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

const HiscoreData = dynamic(
  () => import("@/components/component/hiscore-data"),
  { ssr: false }
);

export function Hiscore() {
  return (
    <div className="min-h-screen flex flex-col items-center py-8">
      <div className="flex justify-between items-center w-full max-w-6xl px-4">
        <div className="flex space-x-4">
          <Button className="bg-[#333533] text-white">Hiscores</Button>
          <Select>
            <SelectTrigger id="ironman">
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
      </div>
      <div className="flex space-x-8 mt-8 w-full max-w-6xl px-4">
        <div className="flex-1 p-4 rounded-md">
          <HiscoreData />
        </div>
        <div className="flex flex-col space-y-4 w-[300px]">
          <Card className="bg-[#1e1f21]">
            <CardHeader>
              <CardTitle className="text-white">Search by name</CardTitle>
            </CardHeader>
            <CardContent>
              <Input placeholder="Search" />
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-[#333533] text-white">Search</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
