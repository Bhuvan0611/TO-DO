let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    if (inp.value !== "") {
        let item = document.createElement("li");
        item.innerText = inp.value;
        let dltbtn = document.createElement("button");
        dltbtn.classList.add("delete-btn");
        dltbtn.innerText = "Delete";
        item.appendChild(dltbtn);
        ul.appendChild(item);
        inp.value = ""; // Clear input after adding
    }
});

ul.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        let li = e.target.parentElement;
        ul.removeChild(li);
    }
});