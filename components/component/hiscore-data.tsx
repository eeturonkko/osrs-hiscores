"use client";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";

function HiscoreData() {
  return (
    <div className="container relative bg-scroll bg-cover bg-no-repeat h-[100vh] text-white flex justify-center items-start">
      <div className="p-4 mt-32 text-black">
        <h2 className="text-xl font-bold mb-5">
          Hiscore Data for {"<player>"}
        </h2>
        <Table>
          <TableHeader>
            <TableHead className="text-black">Skill</TableHead>
            <TableHead className="text-black">Rank</TableHead>
            <TableHead className="text-black">Level</TableHead>
            <TableHead className="text-black">XP</TableHead>
          </TableHeader>
          <TableBody>
            <TableCell>Overall</TableCell>
            <TableCell>976,299</TableCell>
            <TableCell>1,573</TableCell>
            <TableCell>52,806,202</TableCell>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default HiscoreData;
