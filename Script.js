function sendMessage(){

let input = document.getElementById("userInput").value.toLowerCase();
let chatbox = document.getElementById("chatbox");

chatbox.innerHTML += "<p><b>You:</b> "+input+"</p>";

let mythKeywords = [
"krishna","rama","ram","ramayana","mahabharata",
"arjuna","hanuman","radha","kurukshetra","ayodhya",
"gita","bhagavad gita","sita","lakshmana"
];

let allowed = mythKeywords.some(word => input.includes(word));

let reply;

if(!allowed){
reply = "MythBOT only answers questions about Krishna, Rama, Ramayana, and Mahabharata.";
}

else if(input.includes("who is krishna")){
reply = "Krishna is the eighth avatar of Lord Vishnu and a central figure in the Mahabharata.";
}

else if(input.includes("who is rama")){
reply = "Rama is the seventh avatar of Lord Vishnu and the hero of the Ramayana.";
}

else if(input.includes("mahabharata")){
reply = "Mahabharata is an epic about the Kurukshetra war between the Pandavas and Kauravas.";
}

else if(input.includes("ramayana")){
reply = "Ramayana tells the story of Rama rescuing Sita from Ravana.";
}

else{
reply = "I know this topic but I am still learning more details.";
}

chatbox.innerHTML += "<p><b>MythBOT:</b> "+reply+"</p>";
document.getElementById("userInput").value="";
}
