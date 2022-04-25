// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let paisa = +(localStorage.getItem("amount"));

document.getElementById("wallet").innerText=paisa;

let id;

async function rahul(){
    try{
        
    let query = document.getElementById("search").value;
    
    let res = await fetch(`http://www.omdbapi.com/?apikey=9cb0f23f&s=${query}`);

    let data = await res.json();

    return data.Search
    // console.log(data)
    }catch(err){
        console.log(err);
    }
}

function append(data){

    document.getElementById("movies").innerHTML=null;

    data.map(function(el){

        let div = document.createElement("div");
        div.setAttribute("class","box")

        let image = document.createElement("img");
        image.src = el.Poster;

        let name = document.createElement("h3");
        name.innerText=el.Title;

        let btn = document.createElement("button");
        btn.innerText="Book Now";
        btn.setAttribute("class","book_now");
        btn.addEventListener("click",function(){
            addtowatch(el)
        })

        div.append(image,name,btn);

        document.getElementById("movies").append(div)
    })
}

function addtowatch(el)
{
    localStorage.setItem("movie",JSON.stringify(el));
    window.location.href = "checkout.html"
}

async function main()
{
    let data = await rahul();

    if(data===undefined)
    {
        return false;
    }
    else{
        append(data);
    }
}

function debouncing(fun,delay)
{
    if(id)
    {
        clearTimeout(id)
    }
    id = setTimeout(function(){
        fun();
    },delay)
}


