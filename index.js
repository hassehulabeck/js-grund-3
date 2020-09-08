let bookshelf = []
let isFound = false
let myBook = "Bokletande 101"

for (let i = 0; i < 9998; i++) {
    let str = "";
    let titleLength = Math.floor(Math.random() * 16)
    // Minst 4 tecken.
    for (let j = 0; j < titleLength + 4; j++) {
        let slump = Math.floor(Math.random() * 56)
        str += String.fromCharCode(65 + slump)
    }
    bookshelf.push(str)
}

// Adda en hårdkodad (literal) bok
bookshelf.push(myBook)

// Sortera arrayen.
bookshelf.sort();

let min = 0
let max = bookshelf.length - 1

while (!isFound) {
    let mid = Math.floor((max + min) / 2);

    if (bookshelf[mid] == myBook) {
        isFound = true
        console.log("Funnit den")
    } else if (bookshelf[mid] < myBook) {
        min = mid;
    } else if (bookshelf[mid] > myBook) {
        max = mid
    }
    console.log("MIN:" + min + " -- MAX:" + max)

}