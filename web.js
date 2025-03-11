function check(){
    var word = document.getElementById("inp").value
    console.log(word)
var arry = word.split("")
var reword = "";
for(let i = arry.length-1 ;i>=0;i--){
    reword+=arry[i]
}
if(reword==word) {
            document.getElementById("para").textContent =  "Entered word is palindrome"
}
else{
     document.getElementById("para").textContent   ="Entered word is not palindrome"
}

}
