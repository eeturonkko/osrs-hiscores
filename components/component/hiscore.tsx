import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import Header from "./header";

const HiscoreData = dynamic(
  () => import("@/components/component/hiscore-data"),
  { ssr: false }
);

export function Hiscore() {
  return (
    <div className="min-h-screen flex flex-col items-center py-8">
      <Header />
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
