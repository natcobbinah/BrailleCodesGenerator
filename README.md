# BrailleCodesGenerator
Converts characters to brailleCode format and vice versa

One major obstacle in the education of the blind is, of course, their inability to read printed books. 
Valentin Haüy (1745–1822), the founder of the Paris school, had invented a system of raised letters on paper 
that could be read by touch. But this system was very difficult to use, and only a few books had been produced 
using this method.

The sighted Haüy was stuck in a paradigm. To him, an A was an A was an A, and the letter A must look (or feel) like an A

The origins of an alternative type of code came from an unexpected source. Charles Barbier, a captain of the French army,
had by 1819 devised a system of writing he called écriture nocturne, or "night writing." This system used a pattern of 
raised dots and dashes on heavy paper and was intended for use by soldiers in passing notes to each other in the dark when 
quiet was necessary. The soldiers were able to poke these dots and dashes into the back of the paper using an awl-like stylus. 
The raised dots could then be read with the fingers.

The problem with Barbier's system is that it was quite complex. Rather than using patterns of dots and dashes that corresponded 
to letters of the alphabet, Barbier devised patterns that corresponded to sounds, often requiring many codes for a single word. 
The system worked fine for short messages in the field but was distinctly inadequate for longer texts, let alone entire books.

Louis Braille became familiar with Barbier's system at the age of 12. He liked the use of raised dots, not only because it 
proved easy to read with the fingers but also because it was easy to write. A student in the classroom equipped with paper 
and a stylus could actually take notes and read them back. Louis Braille diligently tried to improve the system and within 
three years (at the age of 15) had come up with his own, the basics of which are still used today. For many years, the system 
was known only within the school, but it gradually made its way to the rest of the world. In 1835, Louis Braille contracted 
tuberculosis, which would eventually kill him shortly after his 43rd birthday in 1852.

Today, enhanced versions of the Braille system compete with tape-recorded books for providing the blind with access to the written 
word, but Braille still remains an invaluable system and the only way to read for people who are both blind and deaf. 
In recent years, Braille has become more familiar in the public arena as elevators and automatic teller machines are made 
more accessible to the blind.

In Braille, every symbol used in normal written language—specifically, letters, numbers, and punctuation marks—is encoded as one
or more raised dots within a two-by-three cell. The dots of the cell are commonly numbered 1 through 6:

 -----------
1|    |    |4
 -----------
2|    |    |5
 -----------
3|    |    |6
 -----------
 
 What should be interesting to us at this point is that the dots are binary. A particular dot is either flat or raised.
 That means we can apply what we've learned about Morse code and combinatorial analysis to Braille. We know that there are 6 dots 
 and that each dot can be either flat or raised, so the total number of combinations of 6 flat and raised dots is 2 x 2 x 2 x 2 x 2 x 2, 
 or 26, or 64.

##Braille, let's look at the basic lowercase alphabet
###### Every alphabet representation needs to be **tranposed in vertical**  form to see the the actual graphical representation
       "a" =  ["● .", ". .", ". ."])
       "b" = ["● .", "● .", ". ."])
       "c" = ["● ●", ". .", ". ."])
       "d" = ["● ●", ". ●", ". ."])
       "e" = ["● .", ". ●", ". ."])
       "f" = ["● ●", "● .", ". ."])
       "g" = ["● ●", "● ●", ". ."])
       "h" = ["● .", "● ●", ". ."])
       "i" = [". ●", "● .", ". ."])
       "j" = [". ●", "● ●", ". ."])
       "k" = ["● .", ". .", "● ."])
       "l" = ["● .", "● .", "● ."])
       "m" = ["● ●", ". .", "● ."])
       "n" = ["● ●", ". ●", "● ."])
       "o" = ["● .", ". ●", "● ."])
       "p" = ["● ●", "● .", "● ."])
       "q" = ["● ●", "● ●", "● ."])
       "r" = ["● .", "● ●", "● ."])
       "s" = [". ●", "● .", "● ."])
       "t" = [". ●", "● ●", "● ."])
       "u" = ["● .", ". .", "● ●"])
       "v" = ["● .", "● .", "● ●"])
       "x" = ["● ●", ". .", "● ●"])
       "y" = ["● ●", ". ●", "● ●"])
       "z" = ["● .", ". ●", "● ●"]);
       
   
## Using classes in the package
###### Javascript
let brailleCode = require('braille-code-generator')
let results = new brailleCode.BrailleCodeGenerator();

//convert from Alphabet Characters to Braille Characters
results.convertToBraille("you and me");

//decode from Braille Characters to Alphabet Characters
braille
  .addBrailleCode(["● .", "● ●", ". ."])
  .addBrailleCode(["● .", ". ●", ". ."])
  .addBrailleCode(["● .", "● .", "● ."])
  .addBrailleCode(["● .", "● .", "● ."])
  .addBrailleCode(["● .", ". ●", "● ."])
  .space()
  .addBrailleCode(["● ●", "● .", ". ."])
  .addBrailleCode(["● .", "● ●", "● ."])
  .addBrailleCode([". ●", "● .", ". ."])
  .addBrailleCode(["● .", ". ●", ". ."])
  .addBrailleCode(["● ●", ". ●", "● ."])
  .addBrailleCode(["● ●", ". ●", ". ."])
  .addBrailleCode([". ●", "● .", "● ."])
  .converToCharacterString()
  .output();
  
######OUTPUT
y
● ●
. ●
● ●

o
● .
. ●
● .

u
● .
. .
● ●


a
● .
. .
. .

n
● ●
. ●
● .

d
● ●
. ●
. .


m
● ●
. .
● .

e
● .
. ●
. .

h  e  l  l  o   f  r  i  e  n  d  s
  

###### TypeScript
import {BrailleCodeGenerator} from 'braille-code-generator';
const results = new BrailleCodeGenerator();

//convert from Alphabet Characters to Braille Characters
results.convertToBraille("you and me");

//decode from Braille Characters to Alphabet Characters
braille
  .addBrailleCode(["● .", "● ●", ". ."])
  .addBrailleCode(["● .", ". ●", ". ."])
  .addBrailleCode(["● .", "● .", "● ."])
  .addBrailleCode(["● .", "● .", "● ."])
  .addBrailleCode(["● .", ". ●", "● ."])
  .space()
  .addBrailleCode(["● ●", "● .", ". ."])
  .addBrailleCode(["● .", "● ●", "● ."])
  .addBrailleCode([". ●", "● .", ". ."])
  .addBrailleCode(["● .", ". ●", ". ."])
  .addBrailleCode(["● ●", ". ●", "● ."])
  .addBrailleCode(["● ●", ". ●", ". ."])
  .addBrailleCode([". ●", "● .", "● ."])
  .converToCharacterString()
  .output();

######OUTPUT

y
● ●
. ●
● ●

o
● .
. ●
● .

u
● .
. .
● ●


a
● .
. .
. .

n
● ●
. ●
● .

d
● ●
. ●
. .


m
● ●
. .
● .

e
● .
. ●
. .

h  e  l  l  o   f  r  i  e  n  d  s

