var num = window.prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

const buildPyramid = input => {
  for (let i = 0; i < input; i++) {
    console.log(' '.repeat(input - 1 - i) + '#'.repeat(2 * i + 1))
  }
} 

const showPyramid = input => {
  (input > 25) ? console.log('On ne peut pas costruire une pyramide avec plus de 25 étages!') : buildPyramid(input);
}

showPyramid(num);

