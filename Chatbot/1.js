function talk() {
    var know = {
        "who are you" : "Hello Shreyy here ",
        "How are you" : "Good :) ",
        "What can i do for you" : "Please Appreciate for this project. ",
        "Your Field of Interest" : "Web Development .",
        "OK" : "Thank You So Much ...",
        "Bye" : "Okay! Stay Healthy and Happy , will meet soon." 
    };
    
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user+"<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user]+"<br>";
    } else {
        document.getElementById("chatLog").innerHTML = " Sorry , I didn't understand <br>";
    }
}