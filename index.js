document.getElementById("submi").onclick = function(){
  if (document.getElementById("sat").checked == true) {
    let e = document.createElement("a");
    e.innerHTML = "here";
    e.setAttribute("href","./memory.html")
    document.getElementById("foot").textContent = `thank you for the complement take a reward for it `;
    document.getElementById("foot").appendChild(e)
  } else {
    document.getElementById("foot").textContent = "send ur comments on this non-existing email named yoface@gmail.com";
  }
}