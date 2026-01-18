// data.js - COMPLETE VERSION WITH 50 ITEMS
const movies = [
    // ========== MOVIES (20 items) ==========
    {
        id: 1,
        title: "Inception",
        year: "2010",
        duration: "148 min",
        rating: 8.8,
        genres: ["Sci-Fi", "Thriller", "Action"],
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        whyWatch: [
            "Groundbreaking visual effects that redefine dream sequences",
            "Complex narrative structure that rewards multiple viewings",
            "Hans Zimmer's iconic score that elevates every scene",
            "Thought-provoking exploration of reality and perception"
        ],
        platforms: [
            { name: "Netflix", icon: "fab fa-netflix", url: "#" },
            { name: "Prime Video", icon: "fab fa-amazon", url: "#" }
        ]
    },
    {
        id: 2,
        title: "The Shawshank Redemption",
        year: "1994",
        duration: "142 min",
        rating: 9.3,
        genres: ["Drama"],
        poster: "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?q=80&w=1976",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        whyWatch: [
            "Powerful storytelling about hope and perseverance",
            "Career-defining performances from Tim Robbins and Morgan Freeman",
            "Masterful direction that finds beauty in bleakness",
            "Satisfying character arcs that span decades"
        ],
        platforms: [
            { name: "HBO Max", icon: "fab fa-hbo", url: "#" }
        ]
    },
    {
        id: 3,
        title: "The Dark Knight",
        year: "2008",
        duration: "152 min",
        rating: 9.0,
        genres: ["Action", "Crime", "Drama"],
        poster: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest tests of his ability to fight injustice.",
        whyWatch: [
            "Heath Ledger's legendary, Oscar-winning performance as the Joker",
            "Intense psychological depth rarely seen in superhero films",
            "Masterful pacing that balances action with character development",
            "Exploration of moral ambiguity in the fight against chaos"
        ],
        platforms: [
            { name: "HBO Max", icon: "fab fa-hbo", url: "#" }
        ]
    },
    {
        id: 4,
        title: "Pulp Fiction",
        year: "1994",
        duration: "154 min",
        rating: 8.9,
        genres: ["Crime", "Drama"],
        poster: "https://images.unsplash.com/photo-1489599809505-f2b4ef8f6a60?q=80&w=2070",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
        whyWatch: [
            "Revolutionary non-linear storytelling that changed cinema",
            "Iconic dialogue and memorable characters",
            "Quentin Tarantino's signature style at its best",
            "Outstanding ensemble cast with career-defining performances"
        ],
        platforms: [
            { name: "Netflix", icon: "fab fa-netflix", url: "#" },
            { name: "Hulu", icon: "fab fa-hulu", url: "#" }
        ]
    },
    {
        id: 5,
        title: "The Matrix",
        year: "1999",
        duration: "136 min",
        rating: 8.7,
        genres: ["Action", "Sci-Fi"],
        poster: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        whyWatch: [
            "Revolutionary special effects and bullet time photography",
            "Philosophical themes about reality and freedom",
            "Groundbreaking action sequences that defined a generation",
            "Keanu Reeves' iconic performance as Neo"
        ],
        platforms: [
            { name: "HBO Max", icon: "fab fa-hbo", url: "#" },
            { name: "Prime Video", icon: "fab fa-amazon", url: "#" }
        ]
    },
    {
        id: 6,
        title: "Interstellar",
        year: "2014",
        duration: "169 min",
        rating: 8.6,
        genres: ["Adventure", "Drama", "Sci-Fi"],
        poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2071",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        whyWatch: [
            "Visually stunning representation of space and black holes",
            "Emotional father-daughter relationship at the core",
            "Hans Zimmer's powerful and haunting score",
            "Scientific accuracy combined with compelling storytelling"
        ],
        platforms: [
            { name: "Netflix", icon: "fab fa-netflix", url: "#" },
            { name: "Paramount+", icon: "fas fa-play-circle", url: "#" }
        ]
    },
    {
        id: 7,
        title: "Fight Club",
        year: "1999",
        duration: "139 min",
        rating: 8.8,
        genres: ["Drama"],
        poster: "https://images.unsplash.com/photo-1489599809505-f2b4ef8f6a60?q=80&w=2070",
        description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        whyWatch: [
            "Provocative social commentary on consumerism and masculinity",
            "Brad Pitt and Edward Norton's electric chemistry",
            "Mind-bending plot twists that redefine the narrative",
            "David Fincher's masterful direction and visual style"
        ],
        platforms: [
            { name: "Hulu", icon: "fab fa-hulu", url: "#" },
            { name: "Prime Video", icon: "fab fa-amazon", url: "#" }
        ]
    },
    {
        id: 8,
        title: "Forrest Gump",
        year: "1994",
        duration: "142 min",
        rating: 8.8,
        genres: ["Drama", "Romance"],
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925",
        description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
        whyWatch: [
            "Tom Hanks' Oscar-winning performance as Forrest Gump",
            "Heartwarming story that spans decades of American history",
            "Memorable quotes and iconic scenes",
            "Perfect blend of humor, drama, and romance"
        ],
        platforms: [
            { name: "Netflix", icon: "fab fa-netflix", url: "#" },
            { name: "Paramount+", icon: "fas fa-play-circle", url: "#" }
        ]
    },
    {
        id: 9,
        title: "The Lord of the Rings: The Return of the King",
        year: "2003",
        duration: "201 min",
        rating: 9.0,
        genres: ["Action", "Adventure", "Drama"],
        poster: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974",
        description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        whyWatch: [
            "Epic conclusion to one of cinema's greatest trilogies",
            "Record-breaking 11 Academy Award wins",
            "Groundbreaking visual effects and battle sequences",
            "Emotional payoff for beloved characters"
        ],
        platforms: [
            { name: "HBO Max", icon: "fab fa-hbo", url: "#" },
            { name: "Prime Video", icon: "fab fa-amazon", url: "#" }
        ]
    },
    {
        id: 10,
        title: "Gladiator",
        year: "2000",
        duration: "155 min",
        rating: 8.5,
        genres: ["Action", "Adventure", "Drama"],
        poster: "https://images.unsplash.com/photo-1558885544-2defc62e2e2f?q=80&w=2070",
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        whyWatch: [
            "Russell Crowe's powerful Oscar-winning performance",
            "Spectacular battle sequences and authentic historical detail",
            "Hans Zimmer's epic and memorable score",
            "Compelling story of revenge and redemption"
        ],
        platforms: [
            { name: "Netflix", icon: "fab fa-netflix", url: "#" },
            { name: "Prime Video", icon: "fab fa-amazon", url: "#" }
        ]
    },
    {
        id: 11,
        title: "Parasite",
        year: "2019",
        duration: "132 min",
        rating: 8.6,
        genres: ["Comedy", "Drama", "Thriller"],
        poster: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?q=80&w=2070",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        whyWatch: [
            "Oscar-winning masterpiece that transcends language barriers",
            "Brilliant social commentary on class inequality",
            "Perfect blend of dark humor and intense thriller elements",
            "Masterful direction by Bong Joon-ho"
        ],
        platforms: [
            { name: "Hulu", icon: "fab fa-hulu", url: "#" },
            { name: "Prime Video", icon: "fab fa-amazon", url: "#" }
        ]
    },
    {
        id: 12,
        title: "The Godfather",
        year: "1972",
        duration: "175 min",
        rating: 9.2,
        genres: ["Crime", "Drama"],
        poster: "https://images.unsplash.com/photo-1558885544-2defc62e2e2f?q=80&w=2070",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        whyWatch: [
            "Marlon Brando's iconic performance as Vito Corleone",
            "Masterclass in storytelling and character development",
            "Influential cinematography that defined a generation of filmmaking",
            "Memorable dialogue that has become part of popular culture"
        ],
        platforms: [
            { name: "Paramount+", icon: "fas fa-play-circle", url: "#" }
        ]
    },
    {
        id: 13,
        title: "Goodfellas",
        year: "1990",
        duration: "146 min",
        rating: 8.7,
        genres: ["Biography", "Crime", "Drama"],
        poster: "https://images.unsplash.com/photo-1489599809505-f2b4ef8f6a60?q=80&w=2070",
        description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.",
        whyWatch: [
            "Martin Scorsese's masterpiece of mob cinema",
            "Ray Liotta, Robert De Niro, and Joe Pesci's incredible performances",
            "Innovative cinematography and editing techniques",
            "Authentic portrayal of mob life from rise to fall"
        ],
        platforms: [
            { name: "HBO Max", icon: "fab fa-hbo", url: "#" },
            { name: "Netflix", icon: "fab fa-netflix", url: "#" }
        ]
    },
    {
        id: 14,
        title: "La La Land",
        year: "2016",
        duration: "128 min",
        rating: 8.0,
        genres: ["Comedy", "Drama", "Music"],
        poster: "https://images.unsplash.com/photo-1616530940355-351fabd952d1?q=80&w=1935",
        description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
        whyWatch: [
            "Visually stunning musical numbers choreographed to perfection",
            "Emma Stone and Ryan Gosling's incredible chemistry",
            "Beautifully captures the magic and heartbreak of Hollywood dreams",
            "Academy Award-winning direction and cinematography"
        ],
        platforms: [
            { name: "Netflix", icon: "fab fa-netflix", url: "#" },
            { name: "Hulu", icon: "fab fa-hulu", url: "#" }
        ]
    },
    {
        id: 15,
        title: "Joker",
        year: "2019",
        duration: "122 min",
        rating: 8.4,
        genres: ["Crime", "Drama", "Thriller"],
        poster: "https://images.unsplash.com/photo-1572177191856-3cde074de2e9?q=80&w=1974",
        description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
        whyWatch: [
            "Joaquin Phoenix's Oscar-winning transformative performance",
            "Gritty character study that explores mental illness and society",
            "Atmospheric cinematography that creates a haunting Gotham",
            "Powerful social commentary on class and inequality"
        ],
        platforms: [
            { name: "HBO Max", icon: "fab fa-hbo", url: "#" }
        ]
    },
    {
        id: 16,
        title: "Avengers: Endgame",
        year: "2019",
        duration: "181 min",
        rating: 8.4,
        genres: ["Action", "Adventure", "Drama"],
        poster: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070",
        description: "After the devastating events of Avengers: Infinity War, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        whyWatch: [
            "Epic conclusion to 11 years of Marvel storytelling",
            "Satisfying character arcs and emotional payoffs",
            "Spectacular action sequences and visual effects",
            "Record-breaking box office success"
        ],
        platforms: [
            { name: "Disney+", icon: "fab fa-disney", url: "#" }
        ]
    },
    {
        id: 17,
        title: "The Silence of the Lambs",
        year: "1991",
        duration: "118 min",
        rating: 8.6,
        genres: ["Crime", "Drama", "Thriller"],
        poster: "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?q=80&w=1976",
        description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
        whyWatch: [
            "Only horror film to win the Oscar for Best Picture",
            "Anthony Hopkins' chilling performance as Hannibal Lecter",
            "Jodie Foster's compelling portrayal of Clarice Starling",
            "Masterful tension and psychological depth"
        ],
        platforms: [
            { name: "Prime Video", icon: "fab fa-amazon", url: "#" },
            { name: "Hulu", icon: "fab fa-hulu", url: "#" }
        ]
    },
    {
        id: 18,
        title: "Whiplash",
        year: "2014",
        duration: "106 min",
        rating: 8.5,
        genres: ["Drama", "Music"],
        poster: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070",
        description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
        whyWatch: [
            "Intense and electrifying performances",
            "Exploration of obsession and artistic perfection",
            "Incredible jazz music and drumming sequences",
            "J.K. Simmons' Oscar-winning performance"
        ],
        platforms: [
            { name: "Netflix", icon: "fab fa-netflix", url: "#" },
            { name: "Prime Video", icon: "fab fa-amazon", url: "#" }
        ]
    },
    {
        id: 19,
        title: "The Departed",
        year: "2006",
        duration: "151 min",
        rating: 8.5,
        genres: ["Crime", "Drama", "Thriller"],
        poster: "https://images.unsplash.com/photo-1558885544-2defc62e2e2f?q=80&w=2070",
        description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
        whyWatch: [
            "Martin Scorsese's Oscar-winning direction",
            "All-star cast including Leonardo DiCaprio, Matt Damon, and Jack Nicholson",
            "Intense cat-and-mouse thriller with constant tension",
            "Sharp dialogue and complex character dynamics"
        ],
        platforms: [
            { name: "HBO Max", icon: "fab fa-hbo", url: "#" },
            { name: "Netflix", icon: "fab fa-netflix", url: "#" }
        ]
    },
    {
        id: 20,
        title: "Dune",
        year: "2021",
        duration: "155 min",
        rating: 8.0,
        genres: ["Action", "Adventure", "Drama"],
        poster: "https://images.unsplash.com/photo-1632108204150-1b4e1baa1b8d?q=80&w=2070",
        description: "Feature adaptation of Frank Herbert's science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
        whyWatch: [
            "Visually spectacular adaptation of a sci-fi classic",
            "Hans Zimmer's immersive and innovative score",
            "Outstanding ensemble cast performances",
            "Epic world-building and stunning cinematography"
        ],
        platforms: [
            { name: "HBO Max", icon: "fab fa-hbo", url: "#" },
            { name: "Prime Video", icon: "fab fa-amazon", url: "#" }
        ]
    },

    // ========== TV SHOWS (10 items) ==========
    {
        id: 21,
        title: "Breaking Bad",
        year: "2008-2013",
        duration: "TV Series",
        rating: 9.5,
        genres: ["Crime", "Drama", "Thriller"],
        poster: "https://images.unsplash.com/photo-1616530940355-351fabd952d1?q=80&w=1935",
        description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        whyWatch: [
            "One of the greatest character transformations in television history",
            "Perfectly crafted story arcs across five seasons",
            "Intense and unpredictable storytelling",
            "Emmy-winning performances from the entire cast"
        ],
        platforms: [
            { name: "Netflix", icon: "fab fa-netflix", url: "#" }
        ]
    },
    {
        id: 22,
        title: "Game of Thrones",
        year: "2011-2019",
        duration: "TV Series",
        rating: 9.2,
        genres: ["Action", "Adventure", "Drama"],
        poster: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974",
        description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
        whyWatch: [
            "Epic fantasy world with complex political intrigue",
            "Unpredictable plot twists and character deaths",
            "Spectacular production values and battle sequences",
            "Large ensemble cast with memorable characters"
        ],
        platforms: [
            { name: "HBO Max", icon: "fab fa-hbo", url: "#" }
        ]
    },
    {
        id: 23,
        title: "Stranger Things",
        year: "2016-2024",
        duration: "TV Series",
        rating: 8.7,
        genres: ["Drama", "Fantasy", "Horror"],
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925",
        description: "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
        whyWatch: [
            "Nostalgic 80s setting with modern storytelling",
            "Excellent young cast with standout performances",
            "Perfect blend of horror, sci-fi, and coming-of-age drama",
            "Memorable soundtrack and visual style"
        ],
        platforms: [
            { name: "Netflix", icon: "fab fa-netflix", url: "#" }
        ]
    },
    {
        id: 24,
        title: "The Office (US)",
        year: "2005-2013",
        duration: "TV Series",
        rating: 8.9,
        genres: ["Comedy"],
        poster: "https://images.unsplash.com/photo-1489599809505-f2b4ef8f6a60?q=80&w=2070",
        description: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
        whyWatch: [
            "Hilarious mockumentary style with memorable characters",
            "Steve Carell's iconic performance as Michael Scott",
            "Relatable workplace humor that stands the test of time",
            "Heartwarming character development across seasons"
        ],
        platforms: [
            { name: "Peacock", icon: "fas fa-tv", url: "#" },
            { name: "Prime Video", icon: "fab fa-amazon", url: "#" }
        ]
    },
    {
        id: 25,
        title: "Chernobyl",
        year: "2019",
        duration: "TV Series",
        rating: 9.4,
        genres: ["Drama", "History", "Thriller"],
        poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2071",
        description: "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
        whyWatch: [
            "Tense and harrowing historical drama",
            "Outstanding performances from the entire cast",
            "Important story about truth and accountability",
            "Impeccable attention to historical detail"
        ],
        platforms: [
            { name: "HBO Max", icon: "fab fa-hbo", url: "#" }
        ]
    },
    {
        id: 26,
        title: "The Crown",
        year: "2016-2023",
        duration: "TV Series",
        rating: 8.7,
        genres: ["Biography", "Drama", "History"],
        poster: "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?q=80&w=1976",
        description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
        whyWatch: [
            "Lavish production design and cinematography",
            "Excellent performances from rotating cast",
            "Fascinating insight into British monarchy",
            "Blend of historical events and personal drama"
        ],
        platforms: [
            { name: "Netflix", icon: "fab fa-netflix", url: "#" }
        ]
    },
    {
        id: 27,
        title: "The Mandalorian",
        year: "2019-",
        duration: "TV Series",
        rating: 8.8,
        genres: ["Action", "Adventure", "Fantasy"],
        poster: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070",
        description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
        whyWatch: [
            "Baby Yoda/Grogu became a cultural phenomenon",
            "Innovative use of StageCraft technology",
            "Expands the Star Wars universe in exciting ways",
            "Western-inspired storytelling in space"
        ],
        platforms: [
            { name: "Disney+", icon: "fab fa-disney", url: "#" }
        ]
    },
    {
        id: 28,
        title: "Better Call Saul",
        year: "2015-2022",
        duration: "TV Series",
        rating: 8.9,
        genres: ["Crime", "Drama"],
        poster: "https://images.unsplash.com/photo-1558885544-2defc62e2e2f?q=80&w=2070",
        description: "The trials and tribulations of criminal lawyer Jimmy McGill in the years leading up to his fateful run-in with Walter White and Jesse Pinkman.",
        whyWatch: [
            "Perfect prequel that stands on its own",
            "Bob Odenkirk's incredible lead performance",
            "Deep character development and backstory",
            "Consistently excellent writing and direction"
        ],
        platforms: [
            { name: "Netflix", icon: "fab fa-netflix", url: "#" }
        ]
    },
    {
        id: 29,
        title: "The Witcher",
        year: "2019-",
        duration: "TV Series",
        rating: 8.2,
        genres: ["Action", "Adventure", "Drama"],
        poster: "https://images.unsplash.com/photo-1632108204150-1b4e1baa1b8d?q=80&w=2070",
        description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
        whyWatch: [
            "Henry Cavill's perfect portrayal of Geralt",
            "Complex fantasy world with rich mythology",
            "Impressive fight choreography and visuals",
            "Multiple timeline narrative structure"
        ],
        platforms: [
            { name: "Netflix", icon: "fab fa-netflix", url: "#" }
        ]
    },
    {
        id: 30,
        title: "Succession",
        year: "2018-2023",
        duration: "TV Series",
        rating: 8.8,
        genres: ["Comedy", "Drama"],
        poster: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070",
        description: "The Roy family is known for controlling the biggest media and entertainment company in the world, but their world changes when their father steps down from the company.",
        whyWatch: [
            "Sharp, witty dialogue and dark humor",
            "Excellent performances from ensemble cast",
            "Exploration of power, family, and wealth",
            "Tense boardroom drama and family conflicts"
        ],
        platforms: [
            { name: "HBO Max", icon: "fab fa-hbo", url: "#" }
        ]
    },

    // ========== ANIME (10 items) ==========
    {
        id: 31,
        title: "Spirited Away",
        year: "2001",
        duration: "125 min",
        rating: 8.6,
        genres: ["Anime", "Adventure", "Fantasy"],
        poster: "https://images.unsplash.com/photo-1632108204150-1b4e1baa1b8d?q=80&w=2070",
        description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        whyWatch: [
            "Academy Award-winning masterpiece from Hayao Miyazaki",
            "Breathtaking animation that creates a magical world",
            "Rich storytelling that appeals to both children and adults",
            "Timeless themes of courage, identity, and growing up"
        ],
        platforms: [
            { name: "HBO Max", icon: "fab fa-hbo", url: "#" }
        ]
    },
    {
        id: 32,
        title: "Attack on Titan",
        year: "2013-2023",
        duration: "TV Series",
        rating: 9.0,
        genres: ["Anime", "Action", "Adventure"],
        poster: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070",
        description: "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
        whyWatch: [
            "Intense and brutal action sequences",
            "Complex characters and moral ambiguity",
            "Masterful world-building and mystery",
            "Evolving narrative that constantly surprises"
        ],
        platforms: [
            { name: "Crunchyroll", icon: "fas fa-tv", url: "#" },
            { name: "Hulu", icon: "fab fa-hulu", url: "#" }
        ]
    },
    {
        id: 33,
        title: "My Neighbor Totoro",
        year: "1988",
        duration: "86 min",
        rating: 8.2,
        genres: ["Anime", "Animation", "Family"],
        poster: "https://images.unsplash.com/photo-1614730321146-b6fa91a116b3?q=80&w=1974",
        description: "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
        whyWatch: [
            "Iconic Studio Ghibli characters that became cultural symbols",
            "Heartwarming story about childhood and imagination",
            "Beautiful animation of rural Japanese landscapes",
            "Perfect family film with universal appeal"
        ],
        platforms: [
            { name: "HBO Max", icon: "fab fa-hbo", url: "#" },
            { name: "Netflix", icon: "fab fa-netflix", url: "#" }
        ]
    },
    {
        id: 34,
        title: "Death Note",
        year: "2006-2007",
        duration: "TV Series",
        rating: 8.9,
        genres: ["Anime", "Crime", "Drama"],
        poster: "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?q=80&w=1976",
        description: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
        whyWatch: [
            "Psychological cat-and-mouse game between genius opponents",
            "Exploration of morality, justice, and power",
            "Intense intellectual battles rather than physical fights",
            "Memorable characters and iconic moments"
        ],
        platforms: [
            { name: "Netflix", icon: "fab fa-netflix", url: "#" },
            { name: "Crunchyroll", icon: "fas fa-tv", url: "#" }
        ]
    },
    {
        id: 35,
        title: "Demon Slayer",
        year: "2019-",
        duration: "TV Series",
        rating: 8.7,
        genres: ["Anime", "Action", "Adventure"],
        poster: "https://images.unsplash.com/photo-1616530940355-351fabd952d1?q=80&w=1935",
        description: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
        whyWatch: [
            "Stunning animation and fight sequences",
            "Emotional character development and relationships",
            "Beautiful art style and visual effects",
            "Compelling story of family and perseverance"
        ],
        platforms: [
            { name: "Crunchyroll", icon: "fas fa-tv", url: "#" },
            { name: "Netflix", icon: "fab fa-netflix", url: "#" },
            { name: "Hulu", icon: "fab fa-hulu", url: "#" }
        ]
    },
    {
        id: 36,
        title: "Your Name",
        year: "2016",
        duration: "106 min",
        rating: 8.4,
        genres: ["Anime", "Drama", "Fantasy"],
        poster: "https://images.unsplash.com/photo-1489599809505-f2b4ef8f6a60?q=80&w=2070",
        description: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.",
        whyWatch: [
            "Beautifully animated with stunning visual sequences",
            "Emotional and touching love story",
            "Unique body-swapping concept with depth",
            "Memorable soundtrack and emotional payoff"
        ],
        platforms: [
            { name: "Prime Video", icon: "fab fa-amazon", url: "#" },
            { name: "Crunchyroll", icon: "fas fa-tv", url: "#" }
        ]
    },
    {
        id: 37,
        title: "One Piece",
        year: "1999-",
        duration: "TV Series",
        rating: 8.7,
        genres: ["Anime", "Action", "Adventure"],
        poster: "https://images.unsplash.com/photo-1632108204150-1b4e1baa1b8d?q=80&w=2070",
        description: "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named 'One Piece'.",
        whyWatch: [
            "Epic world-building and long-running narrative",
            "Large cast of memorable and lovable characters",
            "Perfect blend of comedy, action, and drama",
            "One of the most successful anime franchises ever"
        ],
        platforms: [
            { name: "Crunchyroll", icon: "fas fa-tv", url: "#" },
            { name: "Netflix", icon: "fab fa-netflix", url: "#" }
        ]
    },
    {
        id: 38,
        title: "Fullmetal Alchemist: Brotherhood",
        year: "2009-2010",
        duration: "TV Series",
        rating: 9.1,
        genres: ["Anime", "Action", "Adventure"],
        poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2071",
        description: "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
        whyWatch: [
            "Perfectly paced story with satisfying conclusion",
            "Complex themes of sacrifice, morality, and family",
            "Excellent character development for entire cast",
            "Considered one of the greatest anime of all time"
        ],
        platforms: [
            { name: "Crunchyroll", icon: "fas fa-tv", url: "#" },
            { name: "Netflix", icon: "fab fa-netflix", url: "#" },
            { name: "Hulu", icon: "fab fa-hulu", url: "#" }
        ]
    },
    {
        id: 39,
        title: "Naruto",
        year: "2002-2007",
        duration: "TV Series",
        rating: 8.4,
        genres: ["Anime", "Action", "Adventure"],
        poster: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974",
        description: "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.",
        whyWatch: [
            "Iconic characters that became cultural phenomena",
            "Themes of friendship, perseverance, and redemption",
            "Exciting ninja battles and creative powers",
            "Emotional storytelling that resonates with viewers"
        ],
        platforms: [
            { name: "Crunchyroll", icon: "fas fa-tv", url: "#" },
            { name: "Netflix", icon: "fab fa-netflix", url: "#" },
            { name: "Hulu", icon: "fab fa-hulu", url: "#" }
        ]
    },
    {
        id: 40,
        title: "Howl's Moving Castle",
        year: "2004",
        duration: "119 min",
        rating: 8.2,
        genres: ["Anime", "Adventure", "Family"],
        poster: "https://images.unsplash.com/photo-1558885544-2defc62e2e2f?q=80&w=2070",
        description: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
        whyWatch: [
            "Stunning Studio Ghibli animation and art design",
            "Beautiful story about inner beauty and self-confidence",
            "Memorable characters and magical world-building",
            "Anti-war themes and messages of love"
        ],
        platforms: [
            { name: "HBO Max", icon: "fab fa-hbo", url: "#" },
            { name: "Netflix", icon: "fab fa-netflix", url: "#" }
        ]
    },

    // ========== DOCUMENTARIES (10 items) ==========
    {
        id: 41,
        title: "Planet Earth II",
        year: "2016",
        duration: "TV Series",
        rating: 9.4,
        genres: ["Documentary", "Nature"],
        poster: "https://images.unsplash.com/photo-1614730321146-b6fa91a116b3?q=80&w=1974",
        description: "David Attenborough returns with a new wildlife documentary that shows life in a variety of habitats.",
        whyWatch: [
            "Breathtaking cinematography that captures nature's beauty",
            "Groundbreaking technology reveals animal behavior never before seen",
            "Narrated by the legendary Sir David Attenborough",
            "Important conservation message about our planet"
        ],
        platforms: [
            { name: "Disney+", icon: "fab fa-disney", url: "#" }
        ]
    },
    {
        id: 42,
        title: "The Social Dilemma",
        year: "2020",
        duration: "94 min",
        rating: 7.6,
        genres: ["Documentary", "Drama", "Thriller"],
        poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
        description: "Explores the dangerous human impact of social networking, with tech experts sounding the alarm on their own creations.",
        whyWatch: [
            "Eye-opening exploration of social media's impact on society",
            "Insider perspectives from former tech industry employees",
            "Urgent call to action about digital well-being",
            "Blends documentary with dramatic reenactments effectively"
        ],
        platforms: [
            { name: "Netflix", icon: "fab fa-netflix", url: "#" }
        ]
    },
    {
        id: 43,
        title: "Free Solo",
        year: "2018",
        duration: "100 min",
        rating: 8.1,
        genres: ["Documentary", "Adventure", "Sport"],
        poster: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070",
        description: "Follow Alex Honnold as he attempts to become the first person to ever free solo climb El Capitan in Yosemite National Park.",
        whyWatch: [
            "Academy Award-winning documentary about extreme sports",
            "Heart-stopping footage of free solo climbing",
            "Deep psychological exploration of risk and achievement",
            "Stunning cinematography in Yosemite National Park"
        ],
        platforms: [
            { name: "Disney+", icon: "fab fa-disney", url: "#" },
            { name: "Hulu", icon: "fab fa-hulu", url: "#" }
        ]
    },
    {
        id: 44,
        title: "Our Planet",
        year: "2019",
        duration: "TV Series",
        rating: 9.3,
        genres: ["Documentary", "Nature"],
        poster: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1974",
        description: "Experience our planet's natural beauty and examine how climate change impacts all living creatures in this ambitious documentary of spectacular scope.",
        whyWatch: [
            "Stunning 4K cinematography showcasing Earth's diverse ecosystems",
            "Important environmental message about conservation and climate change",
            "Narrated by the iconic Sir David Attenborough",
            "Reveals rarely-seen animal behaviors and habitats"
        ],
        platforms: [
            { name: "Netflix", icon: "fab fa-netflix", url: "#" }
        ]
    },
    {
        id: 45,
        title: "The Last Dance",
        year: "2020",
        duration: "TV Series",
        rating: 9.1,
        genres: ["Documentary", "Sport", "Biography"],
        poster: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090",
        description: "Charting the rise of the 1990s Chicago Bulls, led by Michael Jordan, one of the most notable dynasties in sports history.",
        whyWatch: [
            "Unprecedented access to Michael Jordan and the Chicago Bulls",
            "Never-before-seen footage from the 1997-98 season",
            "Compelling storytelling about sports legacy and teamwork",
            "Insight into the psychology of a champion"
        ],
        platforms: [
            { name: "Netflix", icon: "fab fa-netflix", url: "#" }
        ]
    },
    {
        id: 46,
        title: "My Octopus Teacher",
        year: "2020",
        duration: "85 min",
        rating: 8.1,
        genres: ["Documentary", "Nature"],
        poster: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070",
        description: "A filmmaker forges an unusual friendship with an octopus living in a South African kelp forest, learning as the animal shares the mysteries of her world.",
        whyWatch: [
            "Academy Award-winning documentary about interspecies friendship",
            "Breathtaking underwater cinematography",
            "Profound meditation on human-nature connection",
            "Emotionally powerful and scientifically fascinating"
        ],
        platforms: [
            { name: "Netflix", icon: "fab fa-netflix", url: "#" }
        ]
    },
    {
        id: 47,
        title: "13th",
        year: "2016",
        duration: "100 min",
        rating: 8.2,
        genres: ["Documentary", "History", "Crime"],
        poster: "https://images.unsplash.com/photo-1585208798174-7afe72dc0fbb?q=80&w=2070",
        description: "An in-depth look at the prison system in the United States and how it reveals the nation's history of racial inequality.",
        whyWatch: [
            "Oscar-nominated documentary about systemic racism",
            "Comprehensive analysis of mass incarceration in America",
            "Powerful historical context and social commentary",
            "Expert interviews and compelling statistics"
        ],
        platforms: [
            { name: "Netflix", icon: "fab fa-netflix", url: "#" }
        ]
    },
    {
        id: 48,
        title: "Cosmos: A Spacetime Odyssey",
        year: "2014",
        duration: "TV Series",
        rating: 9.3,
        genres: ["Documentary", "Science"],
        poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2071",
        description: "An exploration of our discovery of the laws of nature and coordinates in space and time.",
        whyWatch: [
            "Neil deGrasse Tyson's engaging and accessible narration",
            "Breathtaking visualizations of cosmic phenomena",
            "Connects scientific discovery with human history and culture",
            "Inspiring exploration of our place in the universe"
        ],
        platforms: [
            { name: "Disney+", icon: "fab fa-disney", url: "#" },
            { name: "Hulu", icon: "fab fa-hulu", url: "#" }
        ]
    },
    {
        id: 49,
        title: "Apollo 11",
        year: "2019",
        duration: "93 min",
        rating: 8.1,
        genres: ["Documentary", "History", "Science"],
        poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2071",
        description: "A look at the Apollo 11 mission to land on the moon led by commander Neil Armstrong and pilots Buzz Aldrin and Michael Collins.",
        whyWatch: [
            "Recently discovered 70mm footage from the original mission",
            "No narration or interviews, just pure historical footage",
            "Immersive experience of the moon landing achievement",
            "Stunning restoration of archival materials"
        ],
        platforms: [
            { name: "Hulu", icon: "fab fa-hulu", url: "#" },
            { name: "Prime Video", icon: "fab fa-amazon", url: "#" }
        ]
    },
    {
        id: 50,
        title: "Seaspiracy",
        year: "2021",
        duration: "89 min",
        rating: 7.4,
        genres: ["Documentary"],
        poster: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070",
        description: "Passionate about ocean life, a filmmaker sets out to document the harm that humans do to marine species - and uncovers alarming global corruption.",
        whyWatch: [
            "Revealing investigation into commercial fishing practices",
            "Important environmental message about ocean conservation",
            "Shocking revelations about the fishing industry",
            "Call to action for sustainable seafood choices"
        ],
        platforms: [
            { name: "Netflix", icon: "fab fa-netflix", url: "#" }
        ]
    }
];