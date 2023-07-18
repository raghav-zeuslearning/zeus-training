submit = document.getElementById("randomform");

function radio() {
    var elem = document.getElementsByName("gender");

    for (i = 0; i < elem.length; i++) {
        if (elem[i].checked) return elem[i].value;
    }
}

submit.addEventListener("submit", (e) => {
    e.preventDefault();
    nam = document.getElementById("name").value;
    comment = document.getElementById("comment").value;
    gender = radio();
    regexname = '[a-zA-Z]*$'
    console.log(nam, comment, gender);
    if (nam.match(regexname)) {
        alert("successfully submitted");
    }
    else {
        alert("Please enter correct Name");
    }
});