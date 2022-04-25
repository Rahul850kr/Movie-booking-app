// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let arr = JSON.parse(localStorage.getItem("movie"));

// console.log(arr)

let image = document.createElement("img");
image.src = arr.Poster;

let name = document.createElement("h1");
name.innerText = arr.Title;

document.getElementById("movie").append(name,image)


let paisa = +(localStorage.getItem("amount"));

document.getElementById("wallet").innerText=paisa;


function submit()
{
    let seats = document.getElementById("number_of_seats").value;

    totalprice = seats * 100;

    // console.log(totalprice)

    if(totalprice>paisa)
    {
        alert("Insufficient Balance!")
    }
    else if(totalprice===0)
    {
        alert("Please select the seat")
    }
    else{
        let remainbal = paisa-totalprice;

        localStorage.setItem("amount",remainbal);

        alert("Booking successful!")
        window.location.reload();
    }
}
