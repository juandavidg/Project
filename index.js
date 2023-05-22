$(document).ready(function() {
    buildTitles();
    buildMoviesInfo();
    imageMoviesDinamic();
})

function buildTitles() {
    let titlesMovies = [
        {
            id: 1,
            name: 'Fast Furius X'
        },
        {
            id: 2,
            name: 'Jonh Wick Chapter 4'
        },
        {
            id: 3,
            name: 'Black Adam'
        },
        {
            id: 4,
            name: 'Top Gun'
        },
        {
            id: 5,
            name: 'Evil Dead'
        }

    ];

    for (let i=0; i<titlesMovies.length; i++) {
        $('#titleMovies').append(`<li><button type="button" onclick="getMovieInfo(${titlesMovies[i].id},'${titlesMovies[i].name}')";>${titlesMovies[i].name}</button></li>`);
    }
    
}



function getMovieInfo(id, name) {
    localStorage.setItem('name', JSON.stringify(name));
    localStorage.setItem('id', JSON.stringify(id));
    window.location = "./movies.html";
}


function buildMoviesInfo() {
    let idMovie = JSON.parse(localStorage.getItem('id'));
    let name = JSON.parse(localStorage.getItem('name'));
    let description = [
        {
            id: 1,
            description: 'Over many missions and against impossible odds, Dom Toretto and his family have outsmarted and outdriven ,every foe in their path. Now, they must confront the most lethal opponent they have ever faced. Fueled by revenge, a terrifying threat emerges from the shadows of the past to shatter Doms world and destroy everything and everyone he loves.'
        },
        {
            id: 2,
            description: 'With the price on his head ever increasing, legendary hit man John Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Japan to Berlin.'
        },
        {
            id: 3,
            description: 'In ancient Kahndaq, Teth Adam was bestowed the almighty powers of the gods. After using these powers for vengeance, he was imprisoned, becoming Black Adam. Nearly 5,000 years have passed, and Black Adam has gone from man to myth to legend. Now free, his unique form of justice, born out of rage, is challenged by modern-day heroes who form the Justice Society: Hawkman, Dr. Fate, Atom Smasher and Cyclone.'
        },
        {
            id: 4,
            description: 'After more than thirty years of service as one of the Navys top aviators, Pete Maverick Mitchell (Tom Cruise) is at home, pushing the limits as a gritty test pilot and dodging the promotion that would land him on the ground. In the course of training sessions for a detachment of TOPGUN graduates to carry out a specialized mission that no pilot alive had ever carried out, Maverick meets Lt. Bradley Bradshaw (Miles Teller), whose call sign is Rooster, the son of Mavericks late friend and radar and intercept officer, Lt. Nick Bradshaw, aka Goose.'
        },
        {
            id: 5,
            description: 'Mia (Jane Levy), a drug addict, is determined to kick the habit. To that end, she asks her brother, David (Shiloh Fernandez), his girlfriend, Natalie (Elizabeth Blackmore) and their friends Olivia (Jessica Lucas) and Eric (Lou Taylor Pucci) to accompany her to their familys remote forest cabin to help her through withdrawal. Eric finds a mysterious Book of the Dead at the cabin and reads aloud from it, awakening an ancient demon. All hell breaks loose when the malevolent entity possesses Mia.'
        }
    ];

    $('#movieOnly').append(`Resumen de ${name}`);
    $('#title-movies').append(`${name}`);

    description.forEach(element => {
        if (element.id == idMovie) {
            $('#description').append(`${element.description}`);
        } 
    });

}


function imageMoviesDinamic() {

    let idMovie = JSON.parse(localStorage.getItem('id'));
    let imagesMovies = [
        {
            id: 1,
            image: "./images/fast_furiuos_x.jpg"
        },
        {
            id: 2,
            image: "./images/john_wick_4.jpg"
        },
        {
            id: 3,
            image: "./images/black_adam.jpg"
        },
        {
            id: 4,
            image: "./images/top_gun_maverick.webp"
        },
        {
            id: 5,
            image: "./images/evil_dead_rise.jpg"
        },
    ];
    
    imagesMovies.forEach(element => {
        if (element.id == idMovie) {
            $('#backgroundMovie').css('background-image', `url(${element.image})`);
            $('#backgroundMovie').css('background-repeat', `no-repeat`);
            $('#backgroundMovie').css('background-size', `cover`);
            $('#backgroundMovie').css('background-attachment', `fixed`);
        }
    });
    
}