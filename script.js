
function ftc(){
    let input = document.getElementById("farenheit").value;

    // formula (value-32)*5/9

    let result = (input - 32) * 5 / 9;
    
    alert(result);
}