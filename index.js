async function getPasswordFromAPI() {
    var pWordLength, nums, caps, chars;
    chars = (document.getElementById("haveChars").checked ? "special&" : "");
    caps = (document.getElementById("haveCaps").checked ? "uppercase&lowercase" : "lowercase");
    nums = document.getElementById("haveNums").checked;
    errorMessage = document.getElementById("error-message");
    pWordLength = document.getElementById("length").value;

    if (pWordLength.length > 0 && pWordLength > 6 && pWordLength < 100) {
        await fetch('https://api.genratr.com/?length=' + pWordLength + '&' + caps + '&' + chars + nums)
            .then((res) => res.json())
            .then((data) => {
                document.getElementById("passwordDisplayer").innerText = data.password;
            });
    }
    else {
        errorMessage.style.display = "block";
        errorMessage.innerText = "You have specified an incorrect length.";
        setTimeout(function () {
            errorMessage.style.display = "none";
        }, 3000)
    }
}

function copyPassword() {
    var copyText = document.getElementById("passwordDisplayer");
    navigator.clipboard.writeText(copyText.innerText);
    alert("Password has been copied to the clipboard.")
}