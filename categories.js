const COUNTRIES = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
    "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
];

const COMPANIES = [
    "Apple", "Microsoft", "Amazon", "Google", "Facebook", "Tesla", "Berkshire Hathaway", "TSMC", "NVIDIA", "Tencent",
    "Visa", "Johnson & Johnson", "JPMorgan Chase", "Walmart", "Samsung", "Mastercard", "Procter & Gamble", "UnitedHealth", "Home Depot", "Bank of America",
    "Disney", "Nestle", "Roche", "Netflix", "Adobe", "Salesforce", "Coca-Cola", "Nike", "Toyota", "Comcast",
    "PepsiCo", "Verizon", "Oracle", "Pfizer", "Intel", "Cisco", "Novartis", "Merck", "McDonald's", "AT&T",
    "Abbott", "Costco", "Accenture", "Medtronic", "Thermo Fisher", "Broadcom", "Qualcomm", "Danaher", "L'Oreal", "LVMH",
    "Union Pacific", "Honeywell", "IBM", "Texas Instruments", "Morgan Stanley", "Intuit", "Lowe's", "Starbucks", "Sony", "Goldman Sachs",
    "American Express", "BlackRock", "Boeing", "General Electric", "3M", "Target", "CVS Health", "Anthem", "Deere", "Gilead",
    "Honda", "BMW", "Mercedes-Benz", "Volkswagen", "Ford", "General Motors", "Hyundai", "Nissan", "Ferrari", "Porsche",
    "Adidas", "Puma", "Gucci", "Prada", "Chanel", "Hermes", "Louis Vuitton", "Zara", "H&M", "Uniqlo",
    "IKEA", "Lego", "Rolex", "Red Bull", "Spotify", "Uber", "Airbnb", "FedEx", "UPS", "DHL"
];

const SINGERS = [
    "Taylor Swift", "Ed Sheeran", "Beyonce", "Adele", "Justin Bieber", "Ariana Grande", "Drake", "Rihanna", "The Weeknd", "Bruno Mars",
    "Lady Gaga", "Katy Perry", "Shawn Mendes", "Dua Lipa", "Billie Eilish", "Harry Styles", "Post Malone", "Selena Gomez", "Miley Cyrus", "Demi Lovato",
    "Eminem", "Kanye West", "Jay-Z", "Kendrick Lamar", "Travis Scott", "Cardi B", "Nicki Minaj", "Snoop Dogg", "Dr. Dre", "50 Cent",
    "Michael Jackson", "Madonna", "Whitney Houston", "Prince", "Elvis Presley", "Freddie Mercury", "David Bowie", "Elton John", "Stevie Wonder", "Aretha Franklin",
    "Britney Spears", "Justin Timberlake", "Christina Aguilera", "Shakira", "Jennifer Lopez", "Mariah Carey", "Celine Dion", "Cher", "Tina Turner", "Diana Ross",
    "Frank Sinatra", "Bob Dylan", "Paul McCartney", "John Lennon", "George Harrison", "Ringo Starr", "Mick Jagger", "Keith Richards", "Bono", "Bruce Springsteen",
    "Kurt Cobain", "Axl Rose", "Steven Tyler", "Jon Bon Jovi", "Sting", "Phil Collins", "Rod Stewart", "Eric Clapton", "Bryan Adams", "Billy Joel",
    "Usher", "Alicia Keys", "John Legend", "Chris Brown", "Ne-Yo", "Akon", "Pitbull", "Enrique Iglesias", "Ricky Martin", "Luis Fonsi",
    "Arijit Singh", "Shreya Goshal", "Diljit Dosanjh"
];

const TV_SHOWS = [
    "Breaking Bad", "Game of Thrones", "Stranger Things", "Friends", "The Office", "The Big Bang Theory", "Grey's Anatomy", "The Simpsons", "Family Guy", "South Park",
    "The Mandalorian", "The Witcher", "Squid Game", "Money Heist", "Dark", "Sherlock", "Doctor Who", "Black Mirror", "The Crown", "Bridgerton",
    "Seinfeld", "How I Met Your Mother", "Modern Family", "Brooklyn Nine-Nine", "Parks and Recreation", "Arrested Development", "Community", "30 Rock", "Scrubs", "It's Always Sunny in Philadelphia",
    "Lost", "The Walking Dead", "Westworld", "Succession", "Better Call Saul", "Ozark", "Peaky Blinders", "Vikings", "Narcos", "Chernobyl",
    "The Sopranos", "The Wire", "Mad Men", "Twin Peaks", "The X-Files", "Buffy the Vampire Slayer", "Supernatural", "Smallville", "Arrow", "The Flash",
    "Rick and Morty", "BoJack Horseman", "Avatar: The Last Airbender", "SpongeBob SquarePants", "Tom and Jerry", "Looney Tunes", "Scooby-Doo", "Pokemon", "Dragon Ball Z", "Naruto"
];

const ACTORS = [
    // Hollywood
    "Tom Hanks", "Leonardo DiCaprio", "Robert Downey Jr.", "Scarlett Johansson", "Brad Pitt", "Angelina Jolie", "Johnny Depp", "Jennifer Lawrence",
    "Dwayne Johnson", "Will Smith", "Tom Cruise", "Emma Watson", "Chris Hemsworth", "Julia Roberts", "Matt Damon", "Meryl Streep",
    "Morgan Freeman", "Natalie Portman", "Ryan Reynolds", "Anne Hathaway", "George Clooney", "Sandra Bullock", "Christian Bale", "Nicole Kidman",
    "Keanu Reeves", "Margot Robbie", "Hugh Jackman", "Charlize Theron", "Mark Wahlberg", "Gal Gadot", "Vin Diesel", "Jennifer Aniston",
    "Chris Evans", "Emma Stone", "Ben Affleck", "Jessica Alba", "Adam Sandler", "Megan Fox", "Will Ferrell", "Cameron Diaz",
    // Bollywood
    "Shah Rukh Khan", "Amitabh Bachchan", "Salman Khan", "Aamir Khan", "Akshay Kumar", "Deepika Padukone", "Priyanka Chopra", "Ranveer Singh",
    "Ranbir Kapoor", "Alia Bhatt", "Kareena Kapoor", "Hrithik Roshan", "Katrina Kaif", "Ajay Devgn", "Anushka Sharma", "Varun Dhawan",
    "Sidharth Malhotra", "Vicky Kaushal", "Kartik Aaryan", "Tiger Shroff", "Shraddha Kapoor", "Kriti Sanon", "Ayushmann Khurrana", "Rajkummar Rao",
    "Nawazuddin Siddiqui", "Irrfan Khan", "Manoj Bajpayee", "Tabu", "Vidya Balan", "Kangana Ranaut", "Shahid Kapoor", "Saif Ali Khan",
    "Aishwarya Rai Bachchan", "Madhuri Dixit", "Kajol", "Rani Mukerji", "Suniel Shetty", "Sanjay Dutt", "John Abraham", "Emraan Hashmi"
];

// Helper to consolidate data
function getGameData() {
    return {
        "Countries": COUNTRIES,
        "Companies": COMPANIES,
        "Singers": SINGERS,
        "TV Shows": TV_SHOWS,
        "Actors": ACTORS
    };
}
