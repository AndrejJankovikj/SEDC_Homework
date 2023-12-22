



class SomeBook {
    constructor(title, author, readingStatus) {
        this.title = title;
        this.author = author;
        this.readingStatus = readingStatus
    }
    haveYouRead() {
        if (this.readingStatus == true) {
            console.log(`You have already read "${this.title}" by the author ${this.author}`);
        }
        else {
            console.log(`You still need to read "${this.title} "by ${this.author}`);
        }

    }


}

const book1 = new SomeBook("Whatever it takes", "Javascript Basic", true);
const book2 = new SomeBook("Lord of the rings", "Andrej Jankovikj", true);
const book3 = new SomeBook("Igor the great", "Anthony Davis", false);

console.log(book1);
console.log(book2);
console.log(book3);

book1.haveYouRead()
book2.haveYouRead()
book3.haveYouRead()

