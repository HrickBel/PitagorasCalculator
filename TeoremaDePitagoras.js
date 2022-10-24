var c = document.getElementById("canva");
var p = c.getContext("2d");
p.lineWidth = 5;
p.moveTo(55, 55);
p.lineTo(55, 250);
p.moveTo(55, 250);
p.lineTo(700, 250);
p.lineTo(55, 55);
p.stroke();

function pitagoras() {
    var result;
    var a = document.getElementsByName("catA")[0].value;
    var b = document.getElementsByName("catB")[0].value;
    var h = document.getElementsByName("hip")[0].value;
    if (Number(a) == "") {
        result = Math.sqrt(Math.pow(parseFloat(h), 2) - Math.pow(parseFloat(b), 2));
        document.getElementsByName("catA")[0].value = result;
    } else if (Number(b) == "") {
        result = Math.sqrt(Math.pow(parseFloat(h), 2) - Math.pow(parseFloat(a), 2));
        document.getElementsByName("catB")[0].value = result;
    } else {
        result = Math.sqrt(Math.pow(parseFloat(a), 2) + Math.pow(parseFloat(b), 2));
        document.getElementsByName("hip")[0].value = result;
    }
}
