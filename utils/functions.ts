interface PlayerSkill {
  rank: number;
  level: number;
  experience: number;
}

interface PlayerInformation {
  skills: Record<string, PlayerSkill>;
}

const skillNames = [
  "Overall",
  "Attack",
  "Defence",
  "Strength",
  "Hitpoints",
  "Ranged",
  "Prayer",
  "Magic",
  "Cooking",
  "Woodcutting",
  "Fletching",
  "Fishing",
  "Firemaking",
  "Crafting",
  "Smithing",
  "Mining",
  "Herblore",
  "Agility",
  "Thieving",
  "Slayer",
  "Farming",
  "Runecrafting",
  "Hunter",
  "Construction",
];

export function parsePlayerInformation(textData: string): PlayerInformation {
  // Split the response by new lines to get each skill
  const lines = textData.split("\n").filter((line) => line.length > 0);

  const playerInformation: PlayerInformation = {
    skills: {},
  };

  // Iterate over the lines, parsing skills only
  lines.forEach((line, index) => {
    if (index < 24) {
      // There are 24 skills to parse
      const [rank, level, experience] = line.split(",").map(Number);
      playerInformation.skills[skillNames[index]] = { rank, level, experience };
    }
  });

  return playerInformation;
}
