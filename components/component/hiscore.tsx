import dynamic from "next/dynamic";

import Header from "./header";
import SearchPlayerForm from "./search-player-form";

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
          <SearchPlayerForm />
        </div>
      </div>
    </div>
  );
}
