var value = 0.0

const save = () => {
    const v = document.getElementById('input').value
    const button = document.getElementById('button')
    if(isFinite(v) && v >= 1) {
        value = v -1
        button.style.visibility = 'visible'
    } else {
        button.style.visibility = 'collapse'
    }
}

const calculate = () => {
    const e = JSON.parse(httpGet())
    
    const r = Math.round( e.USD_COP * value * 0.82/1000)*1000
    document.getElementById('result').innerHTML = r
}

function httpGet() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://free.currconv.com/api/v7/convert?q=USD_COP&compact=ultra&apiKey=fce473c88ab0c897391f', false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}