
window.setTimeout(function() {
    var button = document
    .evaluate("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/a[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    .singleNodeValue;
    console.log(32131);
    function readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }
    
    //usage:
    readTextFile("C:/luna/1.json", function(text){
        var data = JSON.parse(text);
        console.log(data);
    });



 //   buttons.forEach(function(button) {
        var div = document.createElement("div");
        
        div.style.color = "blue";
        div.style.background = "#D9FFAD";
        div.classList.add("test-coverage");
        div.classList.add("coveragePin");
        div.style.zIndex = 1002;
        div.innerHTML="3";
        let tests = "Жопа бобра"
        div.setAttribute("data-tests", tests);
        button.after(div);
        

   // });
},3000);






