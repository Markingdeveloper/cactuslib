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

***More methods will be explained in the next days.Enjoy!***
