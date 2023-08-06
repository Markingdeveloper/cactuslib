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

### Range method

***The range method returns all digits from the selected digit to the other selected digit on the console.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

data = range(3, 6)

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

data = range(3,6,true)

console.log(data)
```
***Output:***
```
[3, 4, 5, 6]
```

### Title method

***The title method replaces the first letter of all words in any string variable with the capital letter and returns it on the console.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

str = "welcome to the cactuslib!"
data = title(str)

console.log(data)
```
***Output:***
```
Welcome To The Cactuslib!
```

### Swapcase method

***The swapCase method returns all letters in any string variable as its opposite. For example, it converts lowercase letters to uppercase and uppercase letters to lowercase and returns them to the console.***

***Example***

***Code:***
```
const cactuslib = require('cactuslib')

str = "CactusLib Provider"
data = swapCase(str)

console.log(data)
```
***Output:***
```
cACTUSlIB pROVIDER
```

***More methods will be explained in the next days.Enjoy!***
