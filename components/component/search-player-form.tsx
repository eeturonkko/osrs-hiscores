"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { getNonIronmanPlayerInformation } from "@/actions/playerInformationActions";

function SearchPlayerForm() {
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
        <form
          className="flex flex-col gap-2"
          action={getNonIronmanPlayerInformation}
        >
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
