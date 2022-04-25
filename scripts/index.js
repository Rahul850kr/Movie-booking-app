// Store the wallet amount to your local storage with key "amount"

function addedamount()
{
    // console.log("hii")

    let amount = document.getElementById("amount").value;

    let am= +(localStorage.getItem("amount"))+Number(amount) || +amount;

    localStorage.setItem("amount",am);   

    window.location.reload();
}

let tag = document.getElementById("wallet");

tag.innerText= localStorage.getItem("amount") || 0;

// window.location.reload();