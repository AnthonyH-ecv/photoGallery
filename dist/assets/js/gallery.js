//
// ─── FILTER BUTTON ──────────────────────────────────────────────────────────────
//



document.addEventListener("click", function (event) {

    var people = document.getElementsByClassName("people");
    var place = document.getElementsByClassName("place");
    var thing = document.getElementsByClassName("thing");
    console.log(event.target.id);

    if (event.target.id === "all") {

        for (let i = 0; i < people.length; i++) {

            people[i].style.display="block";
        }  
        for (let i = 0; i < place.length; i++) {

            place[i].style.display = 'block';
        }
        for (let i = 0; i < thing.length; i++) {

            thing[i].style.display = 'block';
        }
    }
    if (event.target.id === "people") {

        for (let i = 0; i < people.length; i++) {

            people[i].style.display="block";
        }  
        for (let i = 0; i < place.length; i++) {

            place[i].style.display = 'none';
        }
        for (let i = 0; i < thing.length; i++) {

            thing[i].style.display = 'none';
        }
    }

    if (event.target.id === "place") {

        for (let i = 0; i < place.length; i++) {

            place[i].style.display="block";
        }  
        for (let i = 0; i < people.length; i++) {

            people[i].style.display = 'none';
        }
        for (let i = 0; i < thing.length; i++) {

            thing[i].style.display = 'none';
        }
    }
    if (event.target.id === "thing") {

        for (let i = 0; i < thing.length; i++) {

            thing[i].style.display="block";
        }  
        for (let i = 0; i < people.length; i++) {

            people[i].style.display = 'none';
        }
        for (let i = 0; i < place.length; i++) {

            place[i].style.display = 'none';
        }
    }

});


