let str = 'John'
console.log(str.padStart(15,'******'))
let res = str.padEnd(14,'#####')
console.log(res)
console.log(res,'',str.length)

let str2 = 'Hello'
console.log(str2.repeat(5))

let str3 = 'I like Java'
console.log(str3)
console.log(str3.replace('Java','Javascript'))
console.log(str3.replace('Python','Java'))
console.log(str3.replace('Java','Python'))

let str4 = 'Jai Hind'
let str5 = 'Jai Bharat'
console.log(str5.match('Jai'))

let str6 = 'Bat Ball Cat'
console.log('Actual string = ',str6)
console.log('Replaced String = ',str6.replaceAll('B','C'))

let str7 = 'Jai Shri Ram'
console.log(str7.search('Ram'))
console.log(str7.search('s'))

// uppercase to lowercase
let str8 = 'BHARAT MATA KI JAI'
console.log(str8.toLowerCase(str8))

// lowercase to uppercase
let str9 = 'jai bajrangbali'
console.log(str9.toUpperCase(str9))