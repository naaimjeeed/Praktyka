let poll = new Map();

addOption = (option) =>{
    if(poll.has(option)){
    return `Option "${option}" already exists.`;
    }
    if(option === ""){ 
    return 'Option cannot be empty.';
    }
     
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
   
}

vote = (option, voterId) =>{
    if(!poll.has(option)){
        return `Option "${option}" does not exist.`;
    }else{
        if(poll.get(option).has(voterId)){
            return `Voter ${voterId} has already voted for "${option}".`;
        }else{
            poll.get(option).add(voterId);
            return `Voter ${voterId} voted for "${option}".`;
        }
    }
}

displayResults = (poll) =>{
    let result = "Poll Results:\n";
    poll.forEach((value, key) => {
        result += `${key}: ${value.size} votes\n`;
    });
    return result.trim();
}

console.log(addOption("Turkey"));
console.log(addOption("Morocco"));
console.log(addOption("Spain"));
console.log(addOption("Egypt"));
console.log(addOption("Malaysia"));
console.log(addOption("Algeria"));
console.log(vote("Malaysia", "traveler1"));
console.log(vote("Algeria", "traveler1"));
console.log(vote("Turkey", "traveler2"));
console.log(vote("Turkey", "traveler3"));
console.log(vote("Morocco", "traveler4"));
console.log(displayResults(poll));


