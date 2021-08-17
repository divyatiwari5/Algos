var testString = '    my name is mahamaya munmun    ';
titleCase(testString);
replaceLetter(testString, 'm', 'o');
removeWhiteSpace(testString);

function titleCase(str) {
  console.log(str.split(' ').map((ele) => convertToUpperCase(ele)).join(' '))
  var upperCase = [];
  var token = str.split(' ');
  for(var i=0; i<token.length; i++) {
    upperCase.push(convertToUpperCase(token[i]));
  }
  console.log(upperCase.join(' '));
}

function convertToUpperCase(str) {
  const code = str.charCodeAt(0);
  var uppercaseLetter = String.fromCharCode(code - 32);
  const restOfTheString = str.slice(1);
  const newString = uppercaseLetter + restOfTheString;
  return newString;
}

function replaceLetter(str, replaceThis, withThis) {
  var retVal = [];
  for(var i=0; i<str.length; i++) {
    if (str[i] === replaceThis) {
      retVal.push(withThis);
    } else {
      retVal.push(str[i]);
    }
  }

  const finalString = retVal.join('');
  console.log(finalString);
}

function removeWhiteSpace(str) {
  var retVal = [];
  for (var i=0; i<str.length; i++) {
    if(str[i] === ' ') {
      retVal = [];
    }
    retVal.push(str[i]);
  }

  console.log(retVal.join(''));
}

function calculateTotalCost() {

  var penCost = prompt("Please enter cost of one pen", 10);
  var totalPen = prompt("Total Pen:", 10);
  var pencilCost = prompt("Pencil cost: ", 10);
  var totalPencil = prompt("Total Pencil:", 10);

  const TotalPenCost = totalPen*penCost;
  const TotalPencilCost = totalPencil*pencilCost;

  const TotalCost = TotalPenCost +  TotalPencilCost;
  return TotalCost;
}

totalCost = calculateTotalCost();
console.log({totalCost});