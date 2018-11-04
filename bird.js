var birdString;

function showBird() {

    var birds = data.birds;
    var birdMember = data.birds.members;

    for (var i = 0; i < birds.length; i++) {
        birdString += "<h1 style='color:green'>" + birds[i].family + "</h1>"
        + "<img src ='"+birds[i].image + "' width = 300 >"
        var members = birds[i].members;
        for (var j = 0; j < members.length; j++) {
            birdString += "<h3 style='color:brown'>" + members[j] + "</h3>";
        }
    }

    document.getElementById('birds').innerHTML = data.description 
    + "<br> " + data.source 
    + "<br> " + birdString;
}