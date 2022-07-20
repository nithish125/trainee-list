var tablearea = document.getElementById('tablearea');

var table = document.createElement('table');
table.setAttribute("class", "bor")
var tr = [];
var td = []
for (i = 0; i < 5; i++) {
    tr[i] = document.createElement("tr")
    for (j = 0; j < 8; j++) {
        td[j] = document.createElement("td")
               
                function box(photo, name, mobile, batch, git, referby,referby1) {
                    able(1, photo)
                    able(2, name)
                    able(3, mobile)
                    able(4, batch)
                    able(5, git)
                    able(6, referby)
                    able(7, referby1)
                    function able(j,n) {
                        td[j].append(n)
                            console.log(td[j])
                    }
                }
                tr[i].append(td[j])
    }
    table.append(tr[i])
    //td.setAttribute("class","bor")
   

}
box("photo", "name", "mobile", "batch", "git", "referby","location")
box("photo", "EDWINRAJ", "9361046327", "FSD-9", "zeddyy", "velmrgan-fsd8","chennai")  
box("photo", "francis", "9500252669", "FSD-09", "FRANCISANIMH", "G.srya fsd 04","pavoorchathram")
console.log(tr[i])


//tr.forEach(able)




//console.log(k)

tablearea.appendChild(table);
