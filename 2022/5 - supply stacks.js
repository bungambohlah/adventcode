let stacks = [
  ["D", "L", "V", "T", "M", "H", "F"],
  ["H", "Q", "G", "J", "C", "T", "N", "P"],
  ["R", "S", "D", "M", "P", "H"],
  ["L", "B", "V", "F"],
  ["N", "H", "G", "L", "Q"],
  ["W", "B", "D", "G", "R", "M", "P"],
  ["G", "M", "N", "R", "C", "H", "L", "Q"],
  ["C", "L", "W"],
  ["R", "D", "L", "Q", "J", "Z", "M", "T"],
];
// let stacks = [[]];

const movements = `move 1 from 7 to 6
move 1 from 8 to 5
move 3 from 7 to 4
move 5 from 9 to 6
move 3 from 7 to 9
move 2 from 5 to 7
move 10 from 6 to 8
move 2 from 2 to 3
move 2 from 9 to 1
move 6 from 8 to 2
move 5 from 3 to 8
move 4 from 5 to 9
move 3 from 4 to 5
move 2 from 1 to 8
move 3 from 1 to 7
move 1 from 7 to 1
move 4 from 7 to 8
move 1 from 5 to 6
move 1 from 9 to 3
move 8 from 2 to 4
move 1 from 5 to 8
move 1 from 5 to 3
move 2 from 1 to 8
move 4 from 3 to 4
move 1 from 3 to 4
move 1 from 1 to 7
move 1 from 7 to 8
move 1 from 7 to 4
move 5 from 9 to 1
move 2 from 6 to 7
move 3 from 2 to 1
move 12 from 8 to 7
move 8 from 7 to 3
move 1 from 2 to 8
move 6 from 7 to 1
move 1 from 6 to 3
move 8 from 4 to 3
move 5 from 3 to 6
move 6 from 1 to 8
move 2 from 1 to 2
move 2 from 3 to 1
move 4 from 4 to 5
move 1 from 5 to 7
move 1 from 6 to 9
move 1 from 4 to 9
move 8 from 1 to 4
move 10 from 3 to 5
move 2 from 4 to 5
move 2 from 2 to 6
move 2 from 1 to 6
move 11 from 4 to 7
move 9 from 6 to 5
move 16 from 8 to 3
move 15 from 5 to 6
move 10 from 3 to 6
move 24 from 6 to 5
move 5 from 7 to 5
move 1 from 6 to 3
move 1 from 7 to 2
move 2 from 7 to 6
move 3 from 3 to 6
move 8 from 5 to 1
move 3 from 9 to 8
move 3 from 8 to 4
move 1 from 7 to 1
move 1 from 2 to 9
move 1 from 9 to 2
move 2 from 3 to 1
move 2 from 4 to 2
move 5 from 6 to 8
move 3 from 7 to 1
move 1 from 4 to 2
move 26 from 5 to 9
move 1 from 3 to 6
move 7 from 1 to 9
move 1 from 3 to 5
move 1 from 6 to 5
move 1 from 5 to 4
move 5 from 5 to 6
move 1 from 4 to 9
move 3 from 9 to 3
move 4 from 8 to 5
move 2 from 5 to 2
move 1 from 1 to 6
move 1 from 8 to 9
move 2 from 2 to 4
move 2 from 3 to 7
move 1 from 7 to 6
move 7 from 6 to 7
move 1 from 4 to 3
move 2 from 2 to 4
move 28 from 9 to 3
move 26 from 3 to 7
move 2 from 4 to 3
move 2 from 9 to 1
move 4 from 3 to 6
move 1 from 4 to 5
move 1 from 3 to 4
move 3 from 1 to 9
move 1 from 4 to 7
move 1 from 5 to 7
move 1 from 6 to 9
move 23 from 7 to 1
move 4 from 9 to 5
move 3 from 9 to 4
move 2 from 6 to 3
move 1 from 6 to 7
move 3 from 3 to 9
move 11 from 7 to 2
move 4 from 2 to 3
move 23 from 1 to 2
move 15 from 2 to 4
move 2 from 7 to 9
move 13 from 2 to 8
move 1 from 7 to 5
move 1 from 2 to 8
move 7 from 4 to 8
move 6 from 4 to 3
move 1 from 2 to 4
move 1 from 2 to 9
move 20 from 8 to 5
move 1 from 8 to 4
move 3 from 4 to 7
move 3 from 3 to 9
move 1 from 2 to 8
move 20 from 5 to 3
move 6 from 5 to 3
move 26 from 3 to 9
move 2 from 7 to 5
move 1 from 5 to 4
move 1 from 7 to 8
move 2 from 8 to 5
move 12 from 9 to 4
move 2 from 3 to 2
move 4 from 1 to 9
move 2 from 3 to 1
move 4 from 5 to 6
move 5 from 9 to 4
move 2 from 6 to 3
move 2 from 6 to 8
move 2 from 8 to 3
move 1 from 2 to 7
move 21 from 4 to 2
move 1 from 4 to 5
move 13 from 2 to 4
move 4 from 3 to 9
move 25 from 9 to 7
move 7 from 2 to 4
move 18 from 7 to 8
move 2 from 1 to 5
move 1 from 3 to 9
move 2 from 9 to 3
move 1 from 1 to 6
move 8 from 7 to 6
move 4 from 3 to 2
move 1 from 4 to 7
move 6 from 2 to 5
move 1 from 7 to 3
move 5 from 6 to 8
move 4 from 4 to 1
move 9 from 5 to 1
move 12 from 4 to 3
move 1 from 6 to 5
move 1 from 5 to 2
move 13 from 3 to 8
move 14 from 8 to 6
move 2 from 1 to 6
move 1 from 2 to 5
move 11 from 1 to 3
move 1 from 5 to 3
move 6 from 6 to 8
move 23 from 8 to 5
move 1 from 8 to 1
move 18 from 5 to 8
move 5 from 6 to 8
move 10 from 3 to 8
move 1 from 1 to 5
move 2 from 4 to 8
move 1 from 4 to 7
move 5 from 5 to 3
move 1 from 6 to 1
move 6 from 3 to 9
move 35 from 8 to 4
move 1 from 7 to 6
move 2 from 9 to 8
move 1 from 1 to 6
move 17 from 4 to 7
move 1 from 5 to 1
move 4 from 9 to 6
move 12 from 6 to 4
move 29 from 4 to 2
move 17 from 7 to 8
move 27 from 2 to 7
move 2 from 2 to 1
move 1 from 3 to 1
move 25 from 7 to 4
move 25 from 4 to 6
move 1 from 4 to 2
move 4 from 1 to 6
move 1 from 2 to 6
move 25 from 6 to 1
move 5 from 6 to 8
move 15 from 1 to 6
move 2 from 7 to 8
move 15 from 6 to 2
move 14 from 2 to 8
move 1 from 2 to 3
move 4 from 1 to 4
move 4 from 4 to 2
move 6 from 1 to 8
move 3 from 2 to 5
move 3 from 5 to 7
move 1 from 2 to 3
move 1 from 6 to 8
move 8 from 8 to 5
move 2 from 7 to 4
move 1 from 7 to 9
move 3 from 5 to 8
move 2 from 4 to 6
move 3 from 5 to 8
move 2 from 3 to 4
move 2 from 6 to 5
move 1 from 9 to 8
move 48 from 8 to 5
move 1 from 8 to 9
move 41 from 5 to 4
move 4 from 5 to 2
move 3 from 2 to 7
move 1 from 2 to 7
move 1 from 8 to 1
move 1 from 9 to 4
move 1 from 1 to 3
move 7 from 4 to 7
move 11 from 7 to 4
move 4 from 4 to 1
move 37 from 4 to 9
move 4 from 4 to 3
move 32 from 9 to 3
move 5 from 9 to 1
move 12 from 3 to 2
move 3 from 4 to 1
move 3 from 1 to 6
move 3 from 1 to 6
move 2 from 1 to 5
move 9 from 2 to 7
move 3 from 7 to 3
move 6 from 6 to 5
move 4 from 3 to 6
move 3 from 6 to 9
move 13 from 3 to 8
move 3 from 1 to 9
move 2 from 3 to 2
move 2 from 7 to 8
move 1 from 6 to 8
move 4 from 2 to 8
move 2 from 8 to 3
move 1 from 2 to 1
move 4 from 7 to 3
move 6 from 3 to 5
move 3 from 9 to 8
move 13 from 8 to 6
move 1 from 9 to 2
move 2 from 3 to 8
move 1 from 1 to 9
move 1 from 1 to 3
move 10 from 6 to 3
move 1 from 2 to 5
move 22 from 5 to 7
move 1 from 9 to 3
move 1 from 8 to 7
move 2 from 7 to 8
move 6 from 8 to 4
move 2 from 9 to 2
move 21 from 7 to 6
move 4 from 8 to 5
move 1 from 8 to 4
move 1 from 5 to 7
move 12 from 3 to 6
move 1 from 2 to 6
move 1 from 7 to 9
move 1 from 2 to 6
move 6 from 3 to 5
move 6 from 4 to 2
move 1 from 3 to 6
move 1 from 9 to 7
move 6 from 2 to 7
move 22 from 6 to 4
move 3 from 6 to 5
move 7 from 5 to 7
move 3 from 7 to 8
move 2 from 5 to 3
move 2 from 3 to 7
move 13 from 6 to 8
move 3 from 7 to 1
move 3 from 5 to 9
move 16 from 4 to 5
move 1 from 5 to 8
move 2 from 1 to 6
move 1 from 1 to 7
move 6 from 4 to 2
move 4 from 8 to 7
move 13 from 5 to 7
move 1 from 6 to 3
move 2 from 5 to 6
move 10 from 7 to 6
move 1 from 3 to 9
move 1 from 4 to 3
move 1 from 3 to 5
move 12 from 7 to 3
move 2 from 2 to 1
move 1 from 5 to 9
move 2 from 9 to 6
move 4 from 2 to 7
move 7 from 7 to 9
move 1 from 7 to 8
move 1 from 1 to 9
move 11 from 9 to 7
move 4 from 8 to 3
move 5 from 3 to 5
move 2 from 8 to 4
move 3 from 5 to 2
move 2 from 2 to 8
move 1 from 5 to 2
move 5 from 8 to 2
move 7 from 7 to 2
move 4 from 8 to 9
move 2 from 7 to 6
move 4 from 9 to 7
move 6 from 2 to 4
move 1 from 5 to 6
move 5 from 3 to 5
move 1 from 8 to 1
move 10 from 6 to 3
move 8 from 2 to 8
move 1 from 8 to 1
move 5 from 3 to 2
move 2 from 8 to 7
move 6 from 7 to 4
move 12 from 4 to 1
move 4 from 1 to 2
move 1 from 2 to 1
move 8 from 2 to 9
move 2 from 4 to 8
move 5 from 9 to 7
move 8 from 3 to 8
move 2 from 3 to 1
move 6 from 8 to 2
move 7 from 7 to 2
move 1 from 3 to 5
move 2 from 7 to 2
move 1 from 9 to 1
move 1 from 9 to 7
move 1 from 9 to 4
move 1 from 6 to 7
move 1 from 2 to 3
move 1 from 3 to 8
move 1 from 4 to 9
move 5 from 6 to 1
move 7 from 8 to 2
move 1 from 7 to 4
move 9 from 2 to 8
move 7 from 2 to 7
move 1 from 4 to 2
move 8 from 7 to 5
move 4 from 8 to 7
move 8 from 8 to 6
move 9 from 1 to 4
move 1 from 9 to 1
move 4 from 7 to 6
move 7 from 1 to 7
move 6 from 7 to 3
move 4 from 1 to 8
move 13 from 6 to 3
move 6 from 2 to 3
move 1 from 3 to 4
move 2 from 3 to 7
move 1 from 6 to 9
move 11 from 5 to 1
move 1 from 6 to 3
move 8 from 4 to 1
move 2 from 5 to 2
move 1 from 9 to 5
move 2 from 8 to 7
move 7 from 1 to 5
move 2 from 7 to 3
move 8 from 5 to 4
move 1 from 8 to 2
move 1 from 5 to 7
move 3 from 7 to 2
move 4 from 4 to 7
move 4 from 3 to 4
move 20 from 3 to 2
move 1 from 8 to 3
move 1 from 3 to 8
move 4 from 7 to 2
move 1 from 8 to 6
move 1 from 7 to 5
move 1 from 3 to 1
move 1 from 4 to 2
move 5 from 1 to 4
move 14 from 4 to 1
move 1 from 6 to 5
move 1 from 2 to 3
move 1 from 5 to 1
move 11 from 2 to 9
move 18 from 1 to 2
move 4 from 1 to 3
move 12 from 2 to 5
move 5 from 2 to 4
move 7 from 5 to 1
move 1 from 2 to 9
move 9 from 1 to 9
move 1 from 3 to 6
move 2 from 3 to 9
move 1 from 6 to 1
move 1 from 4 to 8
move 1 from 3 to 4
move 1 from 3 to 8
move 16 from 9 to 5
move 2 from 2 to 7
move 14 from 5 to 8
move 16 from 8 to 5
move 1 from 7 to 9
move 1 from 7 to 6
move 4 from 9 to 5
move 11 from 5 to 6
move 12 from 2 to 4
move 16 from 5 to 7
move 4 from 7 to 2
move 1 from 5 to 6
move 3 from 9 to 1
move 4 from 7 to 9
move 3 from 6 to 4
move 9 from 2 to 9
move 3 from 1 to 8
move 2 from 8 to 1
move 1 from 8 to 2
move 5 from 6 to 1
move 7 from 7 to 1
move 1 from 7 to 6
move 8 from 4 to 5
move 1 from 2 to 6
move 12 from 9 to 2
move 3 from 2 to 9
move 8 from 5 to 8
move 12 from 4 to 5
move 1 from 2 to 9
move 1 from 5 to 6
move 2 from 1 to 7
move 4 from 5 to 2
move 6 from 5 to 1
move 2 from 7 to 6
move 1 from 5 to 1
move 1 from 8 to 5
move 7 from 6 to 9
move 2 from 9 to 4
move 16 from 1 to 8
move 1 from 5 to 8
move 7 from 2 to 8
move 3 from 6 to 2
move 1 from 4 to 8
move 28 from 8 to 3
move 1 from 4 to 2
move 4 from 1 to 2
move 11 from 2 to 7
move 9 from 7 to 8
move 7 from 9 to 5
move 4 from 8 to 1
move 2 from 9 to 1
move 2 from 1 to 5
move 1 from 7 to 9
move 1 from 1 to 9
move 6 from 5 to 3
move 3 from 5 to 1
move 2 from 2 to 8
move 7 from 8 to 3
move 7 from 3 to 7
move 4 from 1 to 9
move 1 from 8 to 9
move 2 from 8 to 1
move 1 from 8 to 1
move 6 from 7 to 6
move 6 from 6 to 5
move 17 from 3 to 6
move 2 from 9 to 2
move 2 from 1 to 4
move 12 from 3 to 8
move 6 from 6 to 5
move 2 from 2 to 1
move 4 from 9 to 7
move 2 from 7 to 3
move 1 from 1 to 5
move 10 from 8 to 6
move 2 from 3 to 9
move 9 from 5 to 2
move 7 from 2 to 8
move 1 from 4 to 8
move 1 from 4 to 6
move 7 from 8 to 7
move 3 from 9 to 7
move 4 from 3 to 4`.split("\n");

// PART 1
// for (let index = 0; index < movements.length; index++) {
//   const movement = movements[index];

//   let move1 =
//     movement[movement.indexOf(" from") - 2] !== " "
//       ? movement[movement.indexOf(" from") - 2]
//       : 0;
//   let move2 = movement[movement.indexOf(" from") - 1];
//   const move = parseInt(`${move1}${move2}`, 10);

//   let from1 =
//     movement[movement.indexOf(" to") - 2] !== " "
//       ? movement[movement.indexOf(" to") - 2]
//       : 0;
//   let from2 = movement[movement.indexOf(" to") - 1];
//   const from = parseInt(`${from1}${from2}`, 10) - 1;

//   const to = parseInt(movement[movement.length - 1], 10) - 1;

//   const spliced = stacks[from].splice(
//     stacks[from].length - 1 - (move - 1),
//     move
//   );

//   stacks[to] = [...stacks[to], ...spliced.reverse()];
// }

// PART 2
for (let index = 0; index < movements.length; index++) {
  const movement = movements[index];

  let move1 =
    movement[movement.indexOf(" from") - 2] !== " "
      ? movement[movement.indexOf(" from") - 2]
      : 0;
  let move2 = movement[movement.indexOf(" from") - 1];
  const move = parseInt(`${move1}${move2}`, 10);

  let from1 =
    movement[movement.indexOf(" to") - 2] !== " "
      ? movement[movement.indexOf(" to") - 2]
      : 0;
  let from2 = movement[movement.indexOf(" to") - 1];
  const from = parseInt(`${from1}${from2}`, 10) - 1;

  const to = parseInt(movement[movement.length - 1], 10) - 1;

  const spliced = stacks[from].splice(
    stacks[from].length - 1 - (move - 1),
    move
  );

  stacks[to] = [...stacks[to], ...spliced];
}

console.log("stacks", stacks.map((x) => x[x.length - 1]).join(""));
