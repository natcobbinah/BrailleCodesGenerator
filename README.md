# BrailleCodesGenerator
Converts characters to braille pattern dots and vice-versa.

In Braille, every symbol used in normal written language—specifically, letters, numbers, and punctuation marks—is encoded as one or more raised dots within a two-by-three cell. The dots of the cell are commonly numbered 1 through 6:

     -----------
    1|    |    |4
     -----------
    2|    |    |5
     -----------
    3|    |    |6
     -----------
 
 What should be interesting to us at this point is that the dots are binary. A particular dot is either flat or raised.
 > Copied from Charles Petzold [CODE]
 
 > A raised dot is represented as a (big and deepened unicode char) and flat dot is represented as simply a (dot) 


## Methods
| Function                                   |                                            Defintion                                            |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| addBrailleCode(**brailleCodeExpression: [string, string, string]**) | [**@param brailleCodeExpression**] Array argument which takes (3) strings to  and add it to a Map which would be decoded to to Alphabetic Character
|                                            | [**@returns**]  A Map of String Array                   |
| space()                                    | [**@returns**] A Map of empty String array to allow for formatting output
| converToCharacterString()                  | [**@returns**] Alphabetic Character equivalent of keyed in BrailleCodes                           |
| convertToBraille(**message: string**)       | [**@param message**]Pass a sentence or word as an arugment to the fxn(convertToBraille) and have it converted to BrailleCode Characters
|                                            | [**@returns**] morseCode translation equivalent as a string                            |             
| output()                                   | [**@returns**] String output after  decoded operation to the console                      |

 
### Pipe Operations
> On Encoding
      ```
      brailleCodeGeneratorInstance > convertToBraille(String argx)
      ```

> On Decoding
      ```
       brailleCodeGeneratorInstance > addBrailleCode(["String arg", "String arg", "String arg"]) > space(){optional if not needed} > converToCharacterString() > output()
      ```

##Braille, let's look at the basic lowercase alphabet
###### Every alphabet representation needs to be **tranposed in vertical**  form to see the the actual graphical representation
       "a" =  ["● .", ". .", ". ."]
       "b" = ["● .", "● .", ". ."]
       "c" = ["● ●", ". .", ". ."]
       "d" = ["● ●", ". ●", ". ."]
       "e" = ["● .", ". ●", ". ."]
       "f" = ["● ●", "● .", ". ."]
       "g" = ["● ●", "● ●", ". ."]
       "h" = ["● .", "● ●", ". ."]
       "i" = [". ●", "● .", ". ."]
       "j" = [". ●", "● ●", ". ."]
       "k" = ["● .", ". .", "● ."]
       "l" = ["● .", "● .", "● ."]
       "m" = ["● ●", ". .", "● ."]
       "n" = ["● ●", ". ●", "● ."]
       "o" = ["● .", ". ●", "● ."]
       "p" = ["● ●", "● .", "● ."]
       "q" = ["● ●", "● ●", "● ."]
       "r" = ["● .", "● ●", "● ."]
       "s" = [". ●", "● .", "● ."]
       "t" = [". ●", "● ●", "● ."]
       "u" = ["● .", ". .", "● ●"]
       "v" = ["● .", "● .", "● ●"]
       "x" = ["● ●", ". .", "● ●"]
       "y" = ["● ●", ". ●", "● ●"]
       "z" = ["● .", ". ●", "● ●"]
       
   
## Using classes in the package
###### Javascript
      let brailleCode = require('braille-code-generator')
      let results = new brailleCode.BrailleCodeGenerator();

      //convert from Alphabet Characters to Braille Characters
      results.convertToBraille("you and me");

      //decode from Braille Characters to Alphabet Characters
      results
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
        results
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

