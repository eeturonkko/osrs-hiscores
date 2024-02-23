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
      <div className="bg-black bg-opacity-50 rounded-lg p-4 mt-32">
        <Table>
          <TableHeader>
            <TableHead className="text-white">Skill</TableHead>
            <TableHead className="text-white">Rank</TableHead>
            <TableHead className="text-white">Level</TableHead>
            <TableHead className="text-white">XP</TableHead>
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
