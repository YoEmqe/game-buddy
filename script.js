const games = [
  {
    name: "Cube Counter",
    icon: "🧊",
    tag: "Puzzle",
    blurb: "Count the right cubes under pressure and keep your streak alive round after round.",
    pace: "90 sec",
    mood: "Sharp focus",
    accent: "linear-gradient(135deg, #ffe36e, #ff8c1a)"
  },
  {
    name: "Meteor Order",
    icon: "☄️",
    tag: "Arcade",
    blurb: "Sort falling meteors in the right order before the sky gets too crowded.",
    pace: "2 min",
    mood: "Quick sorting",
    accent: "linear-gradient(135deg, #85ff4d, #2ab4ff)"
  },
  {
    name: "Scales",
    icon: "⚖️",
    tag: "Logic",
    blurb: "Balance both sides with smart picks and solve each weight puzzle efficiently.",
    pace: "75 sec",
    mood: "Balanced thinking",
    accent: "linear-gradient(135deg, #84efff, #74a6ff)"
  },
  {
    name: "Word Cipher",
    icon: "🔐",
    tag: "Word",
    blurb: "Decode hidden words through shifting letter patterns and clue-driven puzzles.",
    pace: "1 min",
    mood: "Code cracking",
    accent: "linear-gradient(135deg, #ff6b00, #ff4fd8)"
  },
  {
    name: "Mine Field",
    icon: "💣",
    tag: "Puzzle",
    blurb: "Read the grid, avoid the danger, and clear the field one careful move at a time.",
    pace: "3 min",
    mood: "Risk control",
    accent: "linear-gradient(135deg, #ffb33f, #ff5e62)"
  },
  {
    name: "Missing Sign",
    icon: "➕",
    tag: "Math",
    blurb: "Spot the missing operator fast and complete each equation before time runs out.",
    pace: "2 min",
    mood: "Formula hunt",
    accent: "linear-gradient(135deg, #ff87d8, #8b5dff)"
  },
  {
    name: "Car Path",
    icon: "🚗",
    tag: "Path",
    blurb: "Draw a safe route, dodge blockers, and guide every car to the finish.",
    pace: "45 sec",
    mood: "Route planning",
    accent: "linear-gradient(135deg, #ffe36e, #ff4fd8)"
  },
  {
    name: "Hang Man",
    icon: "🪢",
    tag: "Word",
    blurb: "Guess the hidden word with limited tries and stay calm as the clues tighten.",
    pace: "5 min",
    mood: "Classic tension",
    accent: "linear-gradient(135deg, #5ad7ff, #85ff4d)"
  },
  {
    name: "Target",
    icon: "🎯",
    tag: "Arcade",
    blurb: "Hit moving targets cleanly and build combos with perfect timing.",
    pace: "60 sec",
    mood: "Precision play",
    accent: "linear-gradient(135deg, #ff9f1c, #ff6b00)"
  },
  {
    name: "Logic Grid",
    icon: "🧩",
    tag: "Logic",
    blurb: "Solve clean deduction puzzles across a tight grid built for quick sessions.",
    pace: "80 sec",
    mood: "Pure logic",
    accent: "linear-gradient(135deg, #ff4fd8, #2ab4ff)"
  },
  {
    name: "Merge Number",
    icon: "🔷",
    tag: "Number",
    blurb: "Merge matching values into bigger ones and keep the board alive as long as possible.",
    pace: "4 min",
    mood: "Number flow",
    accent: "linear-gradient(135deg, #ffe36e, #ff9f1c)"
  },
  {
    name: "Word Rush",
    icon: "💬",
    tag: "Word",
    blurb: "Build words at speed and race the clock through rapid-fire rounds.",
    pace: "70 sec",
    mood: "Fast language",
    accent: "linear-gradient(135deg, #2d0a73, #ff4fd8)"
  },
  {
    name: "Color Dash",
    icon: "🌈",
    tag: "Arcade",
    blurb: "Switch lanes, catch the right colors, and keep the run alive at high speed.",
    pace: "6 min",
    mood: "Neon speed",
    accent: "linear-gradient(135deg, #85ff4d, #ffe36e)"
  },
  {
    name: "Dot Battle",
    icon: "🔴",
    tag: "Arcade",
    blurb: "Take over the board dot by dot and outplay the opposing color.",
    pace: "3 min",
    mood: "Board control",
    accent: "linear-gradient(135deg, #ff9f1c, #5ad7ff)"
  },
  {
    name: "Soccer Flick",
    icon: "⚽",
    tag: "Sports",
    blurb: "Flick clean shots through tricky angles and chase the perfect strike streak.",
    pace: "90 sec",
    mood: "Shot master",
    accent: "linear-gradient(135deg, #ff7f50, #ffe36e)"
  },
  {
    name: "Block Escape",
    icon: "🟦",
    tag: "Puzzle",
    blurb: "Slide the main block free by clearing a smart path through a crowded board.",
    pace: "4 min",
    mood: "Escape logic",
    accent: "linear-gradient(135deg, #85ff4d, #00c98d)"
  },
  {
    name: "Find The Match",
    icon: "🪄",
    tag: "Memory",
    blurb: "Flip, remember, and pair matching symbols before the timer fades away.",
    pace: "2 min",
    mood: "Memory race",
    accent: "linear-gradient(135deg, #ff4fd8, #ff9f1c)"
  },
  {
    name: "Math Match",
    icon: "➗",
    tag: "Math",
    blurb: "Pair values with the right result and solve each round before the pace jumps.",
    pace: "5 min",
    mood: "Quick math",
    accent: "linear-gradient(135deg, #d7cdf8, #5ad7ff)"
  },
  {
    name: "Number Shift",
    icon: "🔢",
    tag: "Number",
    blurb: "Shift rows and columns into place to line up the correct number pattern.",
    pace: "90 sec",
    mood: "Pattern shift",
    accent: "linear-gradient(135deg, #ffe36e, #85ff4d)"
  },
  {
    name: "Light Sequence",
    icon: "💡",
    tag: "Memory",
    blurb: "Remember the flashing order and repeat the full chain without a miss.",
    pace: "65 sec",
    mood: "Sequence memory",
    accent: "linear-gradient(135deg, #2ab4ff, #8b5dff)"
  },
  {
    name: "Number Trail",
    icon: "🛤️",
    tag: "Number",
    blurb: "Follow the numbers in the right order and keep the trail unbroken.",
    pace: "2 min",
    mood: "Clean sequence",
    accent: "linear-gradient(135deg, #85ff4d, #2ab4ff)"
  },
  {
    name: "Number Fields",
    icon: "🔲",
    tag: "Number",
    blurb: "Fill each field with the right values and complete the board with no overlaps.",
    pace: "75 sec",
    mood: "Grid solving",
    accent: "linear-gradient(135deg, #ffb6e6, #ffe36e)"
  },
  {
    name: "Crystal Grid",
    icon: "💎",
    tag: "Puzzle",
    blurb: "Link crystal patterns across the board and clear the glowing grid efficiently.",
    pace: "2 min",
    mood: "Shiny tactics",
    accent: "linear-gradient(135deg, #85ff4d, #17d976)"
  },
  {
    name: "Symbol Duo",
    icon: "🔣",
    tag: "Match",
    blurb: "Find the two symbols that belong together and clear each quick puzzle set.",
    pace: "80 sec",
    mood: "Pair spotting",
    accent: "linear-gradient(135deg, #d7cdf8, #5ad7ff)"
  },
  {
    name: "Word Trail",
    icon: "🔤",
    tag: "Word",
    blurb: "Trace connected letters to form longer words and extend your combo trail.",
    pace: "2 min",
    mood: "Word chaining",
    accent: "linear-gradient(135deg, #ff9f1c, #5ad7ff)"
  },
  {
    name: "Tic Tac Toe",
    icon: "⭕",
    tag: "Classic",
    blurb: "A familiar duel with a bright presentation and fast replayable rounds.",
    pace: "45 sec",
    mood: "Classic duel",
    accent: "linear-gradient(135deg, #ffe36e, #ff4fd8)"
  },
  {
    name: "Arrow Escape",
    icon: "➡️",
    tag: "Reflex",
    blurb: "Read the arrows instantly, react in time, and escape the trap sequence.",
    pace: "75 sec",
    mood: "Reaction burst",
    accent: "linear-gradient(135deg, #84efff, #74a6ff)"
  },
  {
    name: "Honey Sequence",
    icon: "🍯",
    tag: "Memory",
    blurb: "Follow the sweet sequence through a honeycomb board and finish without breaking rhythm.",
    pace: "90 sec",
    mood: "Sweet memory",
    accent: "linear-gradient(135deg, #ffb33f, #ffe36e)"
  },
  {
    name: "Odd One",
    icon: "👀",
    tag: "Spotting",
    blurb: "Find the single odd tile before the timer ends and the next pattern appears.",
    pace: "60 sec",
    mood: "Sharp eyes",
    accent: "linear-gradient(135deg, #d7cdf8, #5ad7ff)"
  }
];

const gameGrid = document.querySelector("#game-grid");

gameGrid.innerHTML = games
  .map(
    (game, index) => `
      <article class="game-card" style="--card-accent: ${game.accent}; --card-delay: ${index * 40}ms">
        <div class="game-card-top">
          <span class="game-badge" aria-hidden="true">${game.icon}</span>
          <span class="game-chip">${game.tag}</span>
        </div>
        <h3>${game.name}</h3>
        <p>${game.blurb}</p>
        <div class="game-meta">
          <span>${game.pace}</span>
          <span>${game.mood}</span>
        </div>
      </article>
    `
  )
  .join("");
