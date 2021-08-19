document.getElementById("bkground").style.backgroundImage = "url(wide-mountain.jpg)";
var searchForm = document.querySelector('#searchForm')
searchForm.addEventListener('submit',function(e){
    e.preventDefault()
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var res = JSON.parse(xhttp.responseText);
            console.log(res)
            var container = document.querySelector("#photo-divs")
            for (j=0; j < 1; j++) {
                container.innerHTML = ''
                for (i = 0; i < 10; i++){
                    var photoData = res.results[i].urls.small
                    var photoDiv = document.createElement('div')
                    var img = document.createElement('img')
                    img.src = photoData
                    container.appendChild(img)
                }
            }
            }
        };
        var textValue = document.querySelector('#searchBar').value
        xhttp.open("GET", `https://api.unsplash.com/search/photos?page=1&query=${textValue}&client_id=uAV2RZoVPikMH_1RB9SXByQ4Obtg1_9OYInhr2R8_IM`, true);
        xhttp.send();

})
/*https://api.unsplash.com/search/photos?page=1&query=computer&client_id=uAV2RZoVPikMH_1RB9SXByQ4Obtg1_9OYInhr2R8_IM` */