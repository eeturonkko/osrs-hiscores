type Skill = {
  rank: number;
  level: number;
  experience: number;
};

type Activity = {
  rank: number;
  score: number;
};

type HiscoreResponse = {
  skills: {
    overall: Skill;
    attack: Skill;
    defence: Skill;
    strength: Skill;
    hitpoints: Skill;
    ranged: Skill;
    prayer: Skill;
    magic: Skill;
    cooking: Skill;
    woodcutting: Skill;
    fletching: Skill;
    fishing: Skill;
    firemaking: Skill;
    crafting: Skill;
    smithing: Skill;
    mining: Skill;
    herblore: Skill;
    agility: Skill;
    thieving: Skill;
    slayer: Skill;
    farming: Skill;
    runecrafting: Skill;
    hunter: Skill;
    construction: Skill;
  };
};
