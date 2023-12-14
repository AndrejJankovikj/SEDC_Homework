console.log("HIIIII");

let array = ['John', 'angry', 'studying'];

function tellStory([name, mood, activity]) {
    let story = `This is ${name}.${name} is a nice person. Today they are ${activity} all day. The end`;
    return story;

}

console.log(tellStory(array));


