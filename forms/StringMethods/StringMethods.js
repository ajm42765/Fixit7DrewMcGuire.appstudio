//Create a variable named quoteString and put this string in it: 
let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."

//Using a string method, change the text in quoteString to all upper case and save it in a new variable named upperCaseString. Use this format for your output:
let upperCaseString = quoteString.toUpperCase();
alert(`Upper case string is: ${upperCaseString}`);

//Create a new variable named authorString and put this text in it. 
const authorString = '-Henry Ford'

//then create a new variable completeString that holds a new string created by using a string method to put the string in authorString on the end of the string in quoteString. Use this format for your output:
const completeString = quoteString.conCat(authorString)
alert(completeString)

//Now create a new string variable named secondQuote and put this string in it: 
const secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
alert(secondQuote)

//Using a string method, change the text in secondQuote to all lower case and save it in a new variable named lowerCaseString. Use this format for your output:
let  lowerCaseString = secondQuote.toLowerCase();
alert("Lower case string is: '${lowerCaseString}")

//Find the character at the 3rd position of secondQuote using a string method. Use this format for your output:
let SQ3 = secondQuote.charAt(2)
alert(`The character at location 3 is ${SQ3}`)

//Create a new variable named findString. Using a string method, remove this string:
let findString = secondQuote.split('. ')
let removeString = secondQuote.splice(1,1)
alert(removeString)
let findStrings = secondQuote.replace("What separates the talented individual from the successful one is a lot of hard work. ", "")
alert(findStrings)
alert(secondQuote)


