"use client";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { useAtom } from "jotai";
import { playerInformationAtom } from "@/utils/store";

function HiscoreData() {
  const [playerInformation] = useAtom(playerInformationAtom);

  if (!playerInformation) {
    return <div>Loading or no player information available...</div>;
  }
  return (
    <div className="container relative bg-scroll bg-cover bg-no-repeat  text-white flex justify-center items-start">
      <div className="p-4 mt-32 text-black max-h-screen">
        <h2 className="text-xl font-bold mb-5">Hiscore Data</h2>
        <Table>
          <TableHeader>
            <TableHead className="text-black">Skill</TableHead>
            <TableHead className="text-black">Level</TableHead>
            <TableHead className="text-black">XP</TableHead>
          </TableHeader>
          <TableBody>
            {Object.entries(playerInformation.skills).map(
              ([skill, { level, experience }]) => (
                <tr key={skill}>
                  <TableCell>{skill}</TableCell>
                  <TableCell>{level}</TableCell>
                  <TableCell>{experience}</TableCell>
                </tr>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default HiscoreData;
