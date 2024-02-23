"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

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
        <form action="#">
          <Input id="name" placeholder="Search" />
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="bg-[#333533] text-white">Search</Button>
      </CardFooter>
    </Card>
  );
}

export default SearchPlayerForm;
