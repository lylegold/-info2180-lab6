window.onload=ex;

function act()
{

document.getElementsByClassName("btn")[0].addEventListener("click", function()
  {

var req = new XMLHttpRequest();
req.onreadystatechange = function()
    {

    if (this.readyState == 4 && this.status == 200)
        {

       alert(req.responseText);
        }
    };
req.open("GET", "http://localhost:8080/superheroes.php", true);
req.send();
})

}