const textString =
  'The Tao gave birth to machine language.  Machine language gave birth to the assembler. he assembler gave birth to the compiler.  Now there are ten thousand languages. Each language has its purpose, however humble.  Each language expresses the Yin and Yang of software.  Each language has its place within the Tao. But do not program in COBOL if you can avoid it.         Geoffrey James, "The Tao of Programming"';

const isLetterUnique = (list, letter) =>
  list.filter((el) => el === letter).length === 1;

const getUniqueLetter = (text) => {
  const words = text.split(" ").filter((el) => el !== "");
  const uniqueLetters = [];
  words.forEach((element) => {
    for (letter of element.split("")) {
      if (isLetterUnique(element.split(""), letter)) {
        uniqueLetters.push(letter);
        break;
      }
    }
  });

  for (letter of uniqueLetters) {
    if (isLetterUnique(uniqueLetters, letter)) {
      return letter;
    }
  }
  return null;
};

console.log("result: ", getUniqueLetter(textString));
