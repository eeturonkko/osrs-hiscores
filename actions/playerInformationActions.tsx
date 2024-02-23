"use server";
import { revalidatePath } from "next/cache";
import { parsePlayerInformation } from "@/utils/functions";

export async function getNonIronmanPlayerInformation(formData: FormData) {
  const name = formData.get("name");
  const response = await fetch(
    `https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${name}`
  );
  const textData = await response.text();

  const playerInformation = parsePlayerInformation(textData);
  return playerInformation;
}
