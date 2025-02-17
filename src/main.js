// const guessTheNumber = () => {
//   const randomNum = Math.floor(Math.random() * 100) + 1;

//   for (let i = 0; i != randomNum; i++) {
//     const guessNum = Number(prompt("Gissa talet! (ett tal mellan 1-100)"));
//     console.log(randomNum);
//     if (guessNum === randomNum) {
//       alert("Grattis! Du gissade rätt på " + (i + 1) + " försök!");
//       break;
//     }
//     if (guessNum > randomNum) {
//       alert("Talet är mindre än " + guessNum + ". Försök igen.");
//     }
//     if (guessNum < randomNum) {
//       alert("Talet är större än " + guessNum + ". Försök igen.");
//     }
//   }

//----------
//while-loop
//----------

const guessTheNumber = () => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  let guessNum = 0;
  let guessCount = 0;

  while (guessNum !== randomNum) {
    guessNum = Number(prompt("Gissa talet! (ett tal mellan 1-100)"));
    guessCount++;
    if (guessNum > randomNum) {
      alert("Talet är mindre än " + guessNum + ". Försök igen.");
    }
    if (guessNum < randomNum) {
      alert("Talet är större än " + guessNum + ". Försök igen.");
    }
    if (guessNum === randomNum) {
      alert("Grattis! Du gissade rätt på " + guessCount + " försök!");
    }
  }

  //-------------------------
  //Gissa talet på tre försök
  //-------------------------

  // for (let i = 0; i < 3; i++) {
  //   const guess = Number(
  //     prompt("Gissa talet på 3 försök! (ett tal mellan 0-10)")
  //   );
  //   if (guess === 7) {
  //     alert("GRATTIS! Det var rätt!");
  //     break;
  //   } else {
  //     alert("Det var fel! Gissa igen.");
  //   }
  // }
};

guessTheNumber();
