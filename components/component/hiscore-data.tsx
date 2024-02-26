/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { nonIronmanPlayerInformationAtom } from "@/utils/store";

function HiscoreData() {
  useEffect(() => {
    if (playerInformation) {
      setPlayerInformation(undefined);
    }
  }, []);

  const [playerInformation, setPlayerInformation] = useAtom(
    nonIronmanPlayerInformationAtom
  );

  if (!playerInformation) {
    return (
      <div className="container min-h-screen bg-scroll bg-cover bg-no-repeat flex justify-center items-start">
        <div className="p-4 mt-32 text-black flex flex-col items-center">
          <h2 className="text-xl font-bold mb-5">Hiscore Data</h2>
          <p>Search for a player</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container min-h-screen bg-scroll bg-cover bg-no-repeat flex justify-center items-start">
      <div className="text-black mt-28">
        <h2 className="text-xl font-bold mb-5">Hiscore Data</h2>
        <div>
          <table className="table-auto w-full">
            <thead>
              <tr className="text-left text-black">
                <th className="px-4 py-2">Skill</th>
                <th className="px-4 py-2">Level</th>
                <th className="px-4 py-2">XP</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(playerInformation.skills).map(
                ([skill, { level, experience }]) => (
                  <tr key={skill}>
                    <td className="px-4">{skill}</td>
                    <td className="px-4">{level}</td>
                    <td className="px-4">{experience.toLocaleString()}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HiscoreData;
