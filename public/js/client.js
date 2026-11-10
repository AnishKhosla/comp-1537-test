console.log("Client script was loaded.");

// function fetchJSONFile(path, callback) {
//     var httpRequest = new XMLHttpRequest();
//     httpRequest.onload = function(){
//         if (httpRequest.readyState){
//             if (httpRequest.status) {
//                 var data = JSON.parse(httpRequest.responseText);
//                 if (callback) callback(data);
//             } else {
//                 console.error("Failed to load " + path + " (status " + httpRequest.status + ")");
//             }
//         } 
//     };
//     httpRequest.open("GET", path);
//     httpRequest.send();
// }

// fetchJSONFile("/app/data/test.json", function(data){
//     console.log(data)
// } )

fetch("/app/data/test.json").then(async(res) => {
    console.log(await res.json())
})