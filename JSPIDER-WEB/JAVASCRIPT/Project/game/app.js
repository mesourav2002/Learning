let hii = document.getElementById("hii");
let formSubmit = (e) => {
  e.preventDefault();
  let user = e.target[0].value;
  console.log(user);
  let choices = ["s", "w", "g"];
  let hum_points = 0;
  let com_points = 0;
  let chances = 8;

  while (chances > 0) {
    hii.innerText = `${chances} chances left...!`;
    let hum = user;
    let com = choices[Math.floor(Math.random() * choices.length)];
    chances -= 1;

    if (com == "s" && hum == "g") {
      hii.innerText =
        "Computer chosen 'Snake' and You chosen 'Gun'\nYou won a point...";

      hum_points += 1;
    } else if (com == "w" && hum == "s") {
      hii.innerText =
        "Computer chosen 'Water' and You chosen 'Snake'\nYou won a point\n";

      hum_points += 1;
    } else if (com == "g" && hum == "w") {
      hii.innerText =
        "Computer chosen 'Gun' and You chosen 'Water'\nYou won a point\n";

      hum_points += 1;
    } else if (com == "s" && hum == "w") {
      hii.innerText =
        "Computer chosen 'Snake' and You chosen 'Water'\nComputer won a point\n";

      com_points += 1;
    } else if (com == "w" && hum == "g") {
      hii.innerText =
        "Computer chosen 'Water' and You chosen 'Gun'\nComputer won a point\n";

      com_points += 1;
    } else if (com == "g" && hum == "s") {
      hii.innerText =
        "Computer chosen 'Gun' and You chosen 'Snake'\nComputer won a point\n";

      com_points += 1;
    } else if (com == hum) {
      hii.innerText = "Tie";
    } else {
      hii.innerText = "Invalid input...";
    }
  }

//   if (hum_points > com_points) {
//     hii.innerText = `You won this game with ${hum_points} points...`;
//   } else if (hum_points < com_points) {
//     hii.innerText = `Computer won this game with ${com_points} points...`;
//   } else if (hum_points == com_points) {
//     hii.innerText = `This game is tie with ${
//       hum_points - com_points
//     } points...`;
//   }
};
