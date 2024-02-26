"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useSetAtom } from "jotai";
import { fetchPlayerInformation } from "@/utils/functions";
import { nonIronmanPlayerInformationAtom } from "@/utils/store";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function SearchPlayerForm() {
  const setPlayerInformation = useSetAtom(nonIronmanPlayerInformationAtom);

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const path = window.location.pathname;
    const playerInformation = await fetchPlayerInformation(formData, path);
    setPlayerInformation(playerInformation);
    form.reset();
  }

  return (
    <Card className="bg-[#1e1f21]">
      <CardHeader>
        <CardTitle className="text-white">
          <Label className="text-xl" htmlFor="name">
            Search by name
          </Label>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-2" onSubmit={handleSearch}>
          <Input id="name" name="name" placeholder="Search" />
          <Button type="submit" className="bg-[#333533] text-white">
            Search
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default SearchPlayerForm;
