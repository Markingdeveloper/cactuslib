// Range method:  returns a string that contains numbers

function range(start, end, withlist) {
  var ans = []
  for(let i = start; i <= end; i++){
    ans.push(i)
  }
  if(withlist == true) {
    return ans
  }
  else {
    return ans.join(",")
  }
}

function title(str) {
  var arr = str.split(" ")
  for (var i = 0; i < arr.length; i++){
    arrslice = arr[i].slice(1,arr[i].length)
    arr[i] = arr[i].charAt(0).toUpperCase() + arrslice
  }
  return arr.join(" ")
}

function swapCase(str) {
  const findLetter = (char = '') => {
    if(char.toLowerCase() === char.toUpperCase){
      return char;
    }
    else if(char.toLowerCase() === char){
      return char.toUpperCase();
    }
    else{
      return char.toLowerCase();
    };
  }
  const swapCase = (str = '') => {
    let res = '';
    for(let i = 0; i < str.length; i++){
      const el = str[i];
      res += findLetter(el);
    };
    return res;
  };
  return swapCase(str)
}

function sinDeg(num) {
  var degree = Math.sin(num*(Math.PI/180))
  
  return degree
}

function cosDeg(num) {
  var degree = Math.cos(num*(Math.PI/180))
  
  return degree
}

function tanDeg(num) {
  var degree = Math.tan(num*(Math.PI/180))
  
  return degree
}

function cot(num) {
  var degree = Math.cos(num)/Math.sin(num)
  
  return degree
}

function cotDeg(num) {
  var degree = cot(num*(Math.PI/180))
  
  return degree
}

function sec(num) {
  var rad = 1/Math.cos(num)

  return rad
}

function csc(num) {
  var rad = 1/Math.sin(num)

  return rad
}

function secDeg(num) {
  var degree = 1/Math.cos(num*(Math.PI/180))

  return degree
}

function cscDeg(num) {
  var degree = 1/Math.sin(num*(Math.PI/180))

  return degree
}

function acot(num) {
  var res = Math.PI/2 - Math.atan(num)

  return res
}

function acotDeg(num) {
  var res = (Math.PI/2 - Math.atan(num))*180/Math.PI

  return res
}

function asec(num) {
  var res = Math.acos(1/num)

  return res
}

function asecDeg(num) {
  var res = Math.acos(1/num) * 180/Math.PI

  return res
}

function acsc(num) {
  var res = Math.asin(1/num)

  return res
}

function acscDeg(num) {
  var res = Math.asin(1/num)*180/Math.PI

  return res
}

function toBase64(str) {
  let data = str
  let buffer = new Buffer(data)
  let tobase64 = buffer.toString('base64')
  
  return tobase64
}

function toASCII(base64data) {
  let fromdata = base64data
  let frombuffer = new Buffer(fromdata, 'base64')
  let tostr = frombuffer.toString('ascii')
  
  return tostr
}


function isAlnum(str) {
  var code, i, len;
  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)){
      return false
    }
  }
  return true
}

function isAlpha(str) {
  var code, i
  for(i = 0; i < str.length; i++) {
    code = str.charCodeAt(i)
    if (!(code > 64 && code < 91) && !(code > 96 && code < 123)) {
      return false
    }
  }
  return true
}

function isASCII(str) {
  result = /^[\x00-\x7F]+$/.test(str)
  
  return result
}

function isIdentifier(str) {
  var code, i
  for(i = 0; i < str.length; i++) {
    code = str.charCodeAt(i)
    let numcode = str.charCodeAt(0)
    if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123) && !(code == 95)){
      return false
    }
    else if(numcode > 47 && numcode < 58) {
      return false
    }
  }
  return true
}

function isLower(str) {
  let arr = []
  var code
  for (var i = 0; i<str.length; i++) {
    code = str.charCodeAt(i)
    if (code > 64 && code < 91) {
      arr.push(0)
    }
    else {
      arr.push(1)
    }
  }
  if (arr.includes(0) == true) {
    return false
  }
  else {
    return true
  }
}

function isPrintable(char) {
  
  return !( /[\x00-\x08\x0E-\x1F\x80-\xFF]/.test(char));
}

function isSpace(str) {
  var code, i
  for(i = 0; i < str.length; i++) {
    code = str.charCodeAt(i)
    if (!(code == 32)){
      
      return false
    }
  }
  return true
}

function isTitle(str) {
  var arr = str.split(" ")
  for(var i = 0; i < arr.length; i++) {
    if (!(arr[i][0] == arr[i][0].toUpperCase())) {
      
      return false
    }
  }
  return true
}

function isUpper(str) {
  let arr = []
  var code
  for (var i = 0; i<str.length; i++) {
    code = str.charCodeAt(i)
    if (code > 96 && code < 123) {
      arr.push(0)
    }
    else {
      arr.push(1)
    }
  }
  if (arr.includes(0) == true) {
    return false
  }
  else {
    return true
  }
}

function ljust(text, num, word) {
  text = String(text)
  let len = text.length
  word = String(word)
  let impt = num - len
  let rep = word.repeat(impt)
  
  return text + rep
}

function rjust(text, num, word) {
  text = String(text)
  let len = text.length
  word = String(word)
  let impt = num - len
  let rep = word.repeat(impt)
  
  return rep + text
}

function zfill(text, num) {
  text = String(text)
  let len = text.length
  let impt = num - len
  let rep = "0".repeat(impt)
  
  return rep + text
}

function bit_length(num) {
  len = (num.toString(2)).length
  return len
}

function enumerate(item) {
  arr = []
  for(var i = 0; i < item.length; i++) {
    arr.push([i, item[i]])
  }
  return arr;
}

module.exports = {
  range, title, swapCase, sinDeg, cosDeg, tanDeg, cot, cotDeg, sec, csc, secDeg, cscDeg, acot, acotDeg, asec, asecDeg, acsc, acscDeg, toBase64, toASCII, isAlnum, isAlpha, isASCII, isIdentifier, isLower, isPrintable, isSpace, isTitle, isUpper, ljust, rjust, zfill, bit_length, enumerate
}