

var div =document.getElementById('skill');
var display = 0;

function hideshow()
{
    if(display == 1)
    {
        div.style.display = 'block' ;
        display = 0;


    }
    else
    {
        div.style.display = 'none';
        display = 1;
    }
}