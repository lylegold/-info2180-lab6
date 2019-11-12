window.onload=act;

function act()
{

document.getElementsByClassName("btn")[0].addEventListener("click", function()
  {
      var val = document.getElementById("newinput").value;

var req = new XMLHttpRequest();
req.onreadystatechange = function()
    {

    if (this.readyState == 4 && this.status == 200)
        {
        document.getElementById("result").innerHTML = req.responseText;
        }
    };
req.open("GET", "superheroes.php?query="+val);
req.send();
});

}