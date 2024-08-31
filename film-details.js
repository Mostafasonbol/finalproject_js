document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const title = params.get('title');

    if (title) {
        const filmDetails = getFilmDetailsByTitle(title);
        displayFilmDetails(filmDetails);
    }
    function getFilmDetailsByTitle(title) {
        const films = {
            'Kali Avenging Angel': {
                img: './images/7GC0TEOQ1ljAhtvcwdthAbb5D3h.jpg',
                title:'Kali Avenging Angel',
                description: 'Lisa, aka Kali, who has nothing left to lose when she finds out her husband has been executed in Rio to cover up a corruption scandal. A former Special Forces recruit, she heads to Brazil with fists, blood and explosives, to Know the truth.',
                Director: 'Julien Seri.',
                Writers: 'Cyril Ferment , Julien Seri ,Pascal Sid.',
                Stars: 'Sabrina , OuazaniOlivia , CôtePhilippe Bas.',
                rate: '5.1'
            },
            'Chandu Champion': {
                img: './images/Chandu-Champion-240x360.jpg',
                title:'Chandu Champion',
                description: 'A man who faced one adversary after another with an undying spirit. His unwavering zeal and never give up attitude led to India first individual gold medal in any form of the Olympics.',
                Director: 'Kabir Khan.',
                Writers: 'Sumit Arora , Kabir Khan , Sudipto Sarkar.',
                Stars: 'Kartik Aaryan , Vijay Raaz , Bhuvan Arora.',
                rate: '7.0'
            },
            'Consumed': {
                img: './images/jMKc8AOyb7KWSzlKblstqjCXhvn.jpg',
                title:'Consumed',
                description: 'A married couple, Jay and Beth taking a celebratory camping trip a year after Beth cancer remission but they find themselves trapped between a wild madman and a skin stealing monster.',
                Director: 'Mitchell Altieri.',
                Writers: 'David Calbert.',
                Stars: 'Devon Sawa , Courtney Halverson , Mark Famiglietti.',
                rate: '5.5'
            },
            'Twisters': {
                img: './images/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg',
                title:'Twisters',
                description: 'Kate Carter, a retired tornado-chaser and meteorologist, is persuaded to return to Oklahoma to work with a new team and new technologies.',
                Director: 'Lee Isaac Chung.',
                Writers: 'Mark L. Smith , Joseph Kosinski , Michael Crichton.',
                Stars: 'Daisy Edgar-Jones , Glen Powell , Anthony Ramos.',
                rate: '6.1'
            },
            'Young Woman and the Sea': {
                img: './images/bZlecCuBVvKuarNGvchBwaOsQ3c-329x495.jpg',
                title:'Young Woman and the Sea',
                description: 'The story of competitive swimmer Gertrude Ederle, who, in 1926, was the first woman to ever swim across the English Channel.',
                Director: 'Joachim Rønning.',
                Writers: 'Jeff Nathanson , Glenn Stout.',
                Stars: 'Daisy Ridley , Tilda Cobham-Hervey , Stephen Graham.',
                rate: '5.3'
            },
            'The Other Zoey': {
                img: './images/rh9fwqA98ufdx9vP7V6lLhfpfk1-329x495.jpg',
                title:'The Other Zoey',
                description: 'Zoey Miller, a super smart computer nerd who is uninterested in romantic love, has her life turned upside down when Zack, the school soccer star, gets amnesia and mistakes Zoey for his girlfriend.',
                Director: 'Sara Zandieh.',
                Writers: 'Matthew Tabak.',
                Stars: 'Josephine Langford , Drew Starkey , Archie Renaux.',
                rate: '7.8'
            },
            'The Idea of You': {
                img: './images/Y5P4Q3q8nrruZ9aD3wXeJS2Plg-329x495.jpg',
                title:'The Idea of You',
                description: 'Solène, a 40-year-old single mom, begins an unexpected romance with 24-year-old Hayes Campbell, the lead singer of August Moon, the hottest boy band on the planet.',
                Director: 'Michael Showalter.',
                Writers: 'Robinne Lee , Michael Showalter , Jennifer Westfeldt.',
                Stars: 'Anne Hathaway , Nicholas Galitzine , Ella Rubin.',
                rate: '8.2'
            },
            'Anyone But You': {
                img: './images/yRt7MGBElkLQOYRvLTT1b3B1rcp-329x495.jpg',
                title:'Anyone But You',
                description: 'After an amazing first date, Bea and Ben fiery attraction turns ice-cold--until they find themselves unexpectedly reunited at a wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.',
                Director: 'Will Gluck.',
                Writers: 'Ilana Wolpert , Will Gluck.',
                Stars: 'Sydney Sweeney , Glen Powell , Alexandra Shipp.',
                rate: '6.7'
            },
            'Miller’s Girl': {
                img: './images/y9zzaN65LOO56nUGC31x9mWQzoi-329x495.jpg',
                title:'Miller’s Girl',
                description: 'A creative writing assignment yields complex results between a teacher and his talented student.',
                Director: 'Jade Halley Bartlett.',
                Writers: 'Jade Halley Bartlett.',
                Stars: 'Martin Freeman , Jenna Ortega , Bashir Salahuddin.',
                rate: '5.8'
            },
            'Under Paris': {
                img: './images/qZPLK5ktRKa3CL4sKRZtj8UlPYc-329x495.jpg',
                title:'Under Paris',
                description: 'To save Paris from a bloodbath, a grieving scientist is forced to face her tragic past when a giant shark appears in the Seine.',
                Director: 'Xavier Gens.',
                Writers: 'Yannick Dahan , Maud Heywang ,Xavier Gens.',
                Stars: 'Bérénice Bejo , Nassim Lyes , Léa Léviant.',
                rate: '9.1'
            },
            'A Quiet Place: Day One': {
                img: './images/hU42CRk14JuPEdqZG3AWmagiPAP-329x495.jpg',
                title:'A Quiet Place: Day One',
                description: 'A young woman named Sam finds herself trapped in New York City during the early stages of an invasion by alien creatures with ultra-sensitive hearing.',
                Director: 'Michael Sarnoski.',
                Writers: 'Michael Sarnoski , John Krasinski , Bryan Woods.',
                Stars: 'Lupita Nyongo , Joseph Quinn , Alex Wolff.',
                rate: '8.2'
            },
            'Dange': {
                img: './images/b6z0MWic4sD9CJiT2VfWB7Kea8l-329x495.jpg',
                title:'Dange',
                description: 'Journey that delves deep into the complexities of friends. Set against the backdrop of a vibrant college festival, the movie explores the intricate dynamics between two friends whose paths diverge and ignite a fierce competition.',
                Director: 'Bejoy Nambiar.',
                Writers: 'Neil Julian Balthazar , Mithila Hegde , Bejoy Nambiar.',
                Stars: 'Harshvardhan Rane , Ehan Bhat , T.J. Bhanu.',
                rate: '4.5'
            },
            'Quiet on the Western Front': {
                img: './images/2IRjbi9cADuDMKmHdLK7LaqQDKA-329x495.jpg',
                title:'Quiet on the Western Front',
                description: 'A young German soldiers terrifying experiences and distress on the western front during World War I.',
                Director: 'Edward Berger.',
                Writers: 'Edward Berger , Lesley Paterson , Ian Stokell.',
                Stars: 'Felix Kammerer , Albrecht Schuch , Aaron Hilmer.',
                rate: '4.8'
            },
            'Battlebox': {
                img: './images/fDeqyKwEtms2IFtT8SDvURZWqAF-329x495.jpg',
                title:'Battlebox',
                description: 'With a sudden attack by the Japanese, British Major-General Maltby and his top officers struggle with the decision to either fight to the death or offer a humiliating surrender of the British Colony of Hong Kong.',
                Director: 'Craig McCourry.',
                Writers: 'Craig McCourry.',
                Stars: 'Michael Szuc , Mira Leung , Jai Day.',
                rate: '7.9'
            },
            'Devotion': {
                img: './images/26yQPXymbWeCLKwcmyL8dRjAzth-329x495.jpg',
                title:'Devotion',
                description: 'A pair of U.S. Navy fighter pilots risk their lives during the Korean War and become some of the Navys most celebrated wingmen.',
                Director: 'J.D. Dillard.',
                Writers: 'Jake Crane , Jonathan Stewart , Adam Makos.',
                Stars: 'Jonathan Majors , Glen Powell , Christina Jackson.',
                rate: '4.2'
            },
            'Freedom': {
                img: './images/rkRj194FZ9efpIIWZtSP0OyuZOY-329x495.jpg',
                title:'Freedom',
                description: 'The incredible true story of a former government agent turned vigilante who embarks on a dangerous mission to rescue hundreds of children from traffickers.',
                Director: 'Alejandro Monteverde.',
                Writers: 'Rod Barr , Alejandro Monteverde.',
                Stars: 'Jim Caviezel , Mira Sorvino , Bill Camp.',
                rate: '7.4'
            },
            'Cash Out': {
                img: './images/v3youHDLigrtIis1NqTjlY8Sk38-329x495.jpg',
                title:'Cash Out',
                description: 'Professional thief Mason attempts his biggest heist with his brother, robbing a bank. When it goes wrong, they are trapped inside surrounded by law enforcement. Tension rises as Mason negotiates with his ex-lover, the lead negotiator.',
                Director: 'Randall Emmett.',
                Writers: 'Dipo Oseni , Doug Richardson.',
                Stars: 'John Travolta , Kristin Davis , Lukas Haas.',
                rate: '6.8'
            },
            'Godzilla Minus One': {
                img: './images/hkxxMIGaiCTmrEArK7J56JTKUlB-329x495.jpg',
                title:'Godzilla Minus One',
                description: 'Post-war Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.',
                Director: 'Takashi Yamazaki.',
                Writers: 'Takashi Yamazaki , Ishirô Honda , Takeo Murata.',
                Stars: 'Minami Hamabe , Ryunosuke Kamiki , Sakura Andô.',
                rate: '4.9'
            },
            'The Covenant': {
                img: './images/kVG8zFFYrpyYLoHChuEeOGAd6Ru-329x495.jpg',
                title:'The Covenant',
                description: 'During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.',
                Director: 'Guy Ritchie.',
                Writers: 'Guy Ritchie , Ivan Atkinson , Marn Davies.',
                Stars: 'Jake Gyllenhaal , Dar Salim , Sean Sagar.',
                rate: '4.9'
            },
            'Land of Bad': {
                img: './images/bIeEMMvfzgbMBtYaEWtxrFnt6Vo-329x495.jpg',
                title:'Land of Bad',
                description: 'A Delta Force team fights for survival as an Air Force drone pilot becomes its eyes in the sky.',
                Director: 'William Eubank.',
                Writers: 'David Frigerio , William Eubank.',
                Stars: 'Liam Hemsworth , Russell Crowe , Luke Hemsworth.',
                rate: '7.7'
            },
        };
        return films[title] || {}; 
    }
    function displayFilmDetails(film) {
        if (film) {
            const detailsSection = document.getElementById('film-details');
            detailsSection.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <img src="${film.img}" alt="${title}" class="img-fluid">
                    </div>
                    <div class="col-12 col-md-6 mt-3 mt-md-0">
                        <p>${film.title}</p>
                        <p><span>Description:</span> ${film.description}</p>
                        <p><span>Director:</span>  ${film.Director}</p>
                        <p><span>Writers:</span>  ${film.Writers}</p>
                        <p><span>Stars:</span>  ${film.Stars}</p>
                        <p><span>Rate:</span>  ${film.rate}</p>
                        <a href="index.html" class="btn btn-primary">Back to Home</a> 
                    </div>        
                </div>
            </div>    
            `;
        }
    }
});
