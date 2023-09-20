# cactuslib
## Simple, but useful and extensible library for JavaScript/Node.js


## Introduction
***A Node.js library that combines many new String and Number methods in one library***

### Support group

[Telegram](https://telegram.me/Cactuslib)
## Installation

```shellscript
$npm install cactuslib
```

## Getting Started

### range method

***The range method returns all digits from the selected digit to the other selected digit on the console.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.range(3, 6)

console.log(data)
```
***Output:***
```
3,4,5,6
```

### Return an array with range method

***The range method can return output as array too.Just write true in third value in parantheses.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.range(3,6,true)

console.log(data)
```
***Output:***
```
[3, 4, 5, 6]
```

### title method

***The title method replaces the first letter of all words in any string variable with the capital letter and returns it on the console.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

str = "welcome to the cactuslib!"
data = cactuslib.title(str)

console.log(data)
```
***Output:***
```
Welcome To The Cactuslib!
```

### swapCase method

***The swapCase method returns all letters in any string variable as its opposite. For example, it converts lowercase letters to uppercase and uppercase letters to lowercase and returns them to the console.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

str = "CactusLib Provider"
data = cactuslib.swapCase(str)

console.log(data)
```
***Output:***
```
cACTUSlIB pROVIDER
```

### sinDeg method

***The sinDeg method is a mathematical operator. It displays the degrees of the sine in JavaScript.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.sinDeg(30)

console.log(data)
```
***Output:***
```
0.5
```

### cosDeg method

***The cosDeg method is a mathematical operator. It displays the degrees of the cosine in JavaScript.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.cosDeg(60)

console.log(data)
```
***Output:***
```
0.5
```

### tanDeg method

***The tanDeg method is a mathematical operator. It displays the degrees of the tangent in JavaScript.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.tanDeg(45)

console.log(data)
```
***Output:***
```
1
```

### cot method

***The cot method is a mathematical operator. It displays the radians of the cotangent in JavaScript.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.cot(45)

console.log(data)
```
***Output:***
```
0.6173696237835551
```

### cotDeg method

***The cotDeg method is a mathematical operator. It displays the degrees of the cotangent in JavaScript.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.cotDeg(45)

console.log(data)
```
***Output:***
```
1
```

### sec method

***The sec method is a mathematical operator. It displays the radians of the secant in JavaScript.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.sec(60)

console.log(data)
```
***Output:***
```
-1.0499646902797362
```

### csc method

***The csc method is a mathematical operator. It displays the radians of the cosecant in JavaScript.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.csc(30)

console.log(data)
```
***Output:***
```
-1.012113353070178
```

### secDeg method

***The secDeg method is a mathematical operator. It displays the degrees of the secant in JavaScript.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.secDeg(60)

console.log(data)
```
***Output:***
```
2
```

### cscDeg method

***The cscDeg method is a mathematical operator. It displays the degrees of the cosecant in JavaScript.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.cscDeg(30)

console.log(data)
```
***Output:***
```
2
```

### acot method

***The acot method is a mathematical operator. It displays the radians of the inversed cotangent in JavaScript.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.acot(1)

console.log(data)
```
***Output:***
```
0.7853981633974483
```

### acotDeg method

***The acotDeg method is a mathematical operator. It displays the degrees of the inversed cotangent in JavaScript.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.acotDeg(1)

console.log(data)
```
***Output:***
```
45
```

### asec method

***The asec method is a mathematical operator. It displays the radians of the inversed secant in JavaScript.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.asec(2)

console.log(data)
```
***Output:***
```
1.0471975511965979
```

### acsc method

***The acsc method is a mathematical operator. It displays the radians of the inversed cosecant in JavaScript.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.acsc(2)

console.log(data)
```
***Output:***
```
0.5235987755982989
```

### asecDeg method

***The asecDeg method is a mathematical operator. It displays the degrees of the inversed secant in JavaScript.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.asecDeg(2)

console.log(data)
```
***Output:***
```
60
```

### acscDeg method

***The acscDeg method is a mathematical operator. It displays the degrees of the inversed cosecant in JavaScript.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.acscDeg(2)

console.log(data)
```
***Output:***
```
30
```

### toBase64 method

***The toBase64 converts a characher into Base64 code.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.toBase64("*")

console.log(data)
```
***Output:***
```
Kg==
```

### toASCII method

***The toASCII method converts a Base64 data into ASCII(normal character)***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.toASCII('Kg==')

console.log(data)
```
***Output:***
```
*
```

### isAlnum method

***The isAlnum method controls characters is alphanumerical or not.Returns true or false.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.isAlnum("Cactuslibv120")
data2 = cactuslib.isAlnum("source.net.de.ar.sv")

console.log(data)
console.log(data2)
```
***Output:***
```
true
false
```

### isAlpha method

***The isAlpha method controls characters is alphabetical or not.Returns true or false.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.isAlpha("Cactuslib")
data2 = cactuslib.isAlpha("cactuslibv120")

console.log(data)
console.log(data2)
```
***Output:***
```
true
false
```

### isASCII method

***The isASCII method controls characters is ASCII character or not.Returns true or false.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.isASCII("Cactuslib v1.2.0 now in npm!")

console.log(data)
```
***Output:***
```
true
```

### isIdentifier method

***The isIdentifier method controls characters is identifier or not.Returns true or false.***

### Identifier rule
***A string is considered a valid identifier if it only contains alphanumeric letters (a-z) and (0-9), or underscores (_). A valid identifier cannot start with a number, or contain any spaces.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

a = "MyFolder"
b = "Demo002"
c = "2bring"
d = "my demo"

console.log(cactuslib.isIdentifier(a))
console.log(cactuslib.isIdentifier(b))
console.log(cactuslib.isIdentifier(c))
console.log(cactuslib.isIdentifier(d))
```
***Output:***
```
true
true
false
false
```

### isLower method

***The isLower method controls characters are lower or not.Returns true or false.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

a = "Hello world!"
b = "hello 123"
c = "mynameisPeter"

console.log(cactuslib.isLower(a))
console.log(cactuslib.isLower(b))
console.log(cactuslib.isLower(c))
```
***Output:***
```
false
true
false
```

### isPrintable method

***The isPrintable method controls characters is printable or not.Returns true or false.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

txt = "Cactuslib is good source"
y = cactuslib.isPrintable("txt")
console.log(y)
```
***Output:***
```
true
```

### isSpace method

***The isSpace method controls strings that contain space or not.Returns true or false.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = cactuslib.isSpace("Isgood")
data1= cactuslib.isSpace('       ')

console.log(data)
console.log(data1)
```
***Output:***
```
false
true
```

### isTitle method

***The isTitle method controls words that are capitalized or not.Returns true or false.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')


data = cactuslib.isTitle("Isgood")

data1= cactuslib.isTitle('lkdswlkjwesqwaslfsa')


console.log(data)

console.log(data1)
```
***Output:***
```
true
false
```

### isUpper method

***The isUpper method controls characters are written with UpperCase or not.Returns true or false.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')


var a = "Hello World!"

var b = "hello 123"

var c = "MY NAME IS PETER"


console.log(cactuslib.isUpper(a))

console.log(cactuslib.isUpper(b))

console.log(cactuslib.isUpper(c))
```
***Output:***
```
false
false
true
```

### ljust method

***The ljust method adds written word at the leftside of the first word.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

var txt = "banana"

data = cactuslib.ljust(txt, 20, "C")

console.log(data)
```
***Output:***
```
bananaCCCCCCCCCCCCCC
```

### rjust method

***The rjust method adds written word at the rightside of the first word.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

var txt = "banana"

data = cactuslib.rjust(txt, 20, "C")

console.log(data)
```
***Output:***
```
CCCCCCCCCCCCCCbanana
```
