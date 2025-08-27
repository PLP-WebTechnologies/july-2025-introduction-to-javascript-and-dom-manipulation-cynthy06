let score = 75; 
let passingScore = 50;

if (score >= passingScore) {
  console.log("You passed! - script.js:5");
} else {
  console.log("You failed! - script.js:7");
}
function square(num) {
  return num * num;
}

function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

console.log(square(4));       
console.log(greetUser("Sam - script.js:18"));
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Value: - script.js:20", i);
}

let count = 1;
while (count <= 3) {
  console.log("While Loop Value: - script.js:25", count);
  count++;
}

document.getElementById("main-title").style.color = "blue";


document.getElementById("checkBtn").addEventListener("click", function() {
  if (score >= passingScore) {
    document.getElementById("status").textContent = "✅ You Passed!";
  } else {
    document.getElementById("status").textContent = "❌ You Failed!";
  }
});

document.getElementById("loopBtn").addEventListener("click", function() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // Clear previous list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    list.appendChild(li);
  }
});
