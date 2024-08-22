var countries =
[
	{ id: "ad", names: [ "Andorra" ], zoom: 400 },
	{ id: "ae", names: [ "United Arab Emirates", "UAE" ], zoom: 300 },
	{ id: "af", names: [ "Afghanistan" ] },
	{ id: "ag", names: [ "Antigua and Barbuda" ], zoom: 700 },
	{ id: "al", names: [ "Albania" ], zoom: 400 },
	{ id: "am", names: [ "Armenia" ], zoom: 400 },
	{ id: "ao", names: [ "Angola" ] },
	{ id: "ar", names: [ "Argentina" ] },
	{ id: "at", names: [ "Austria" ], zoom: 300 },
	{ id: "au", names: [ "Australia" ] },
	{ id: "az", names: [ "Azerbaijan" ], zoom: 400 },
	{ id: "ba", names: [ "Bosnia and Herzegovina" ], zoom: 300 },
	{ id: "bb", names: [ "Barbados" ], zoom: 700 },
	{ id: "bd", names: [ "Bangladesh" ] },
	{ id: "be", names: [ "Belgium" ], zoom: 300 },
	{ id: "bf", names: [ "Burkina Faso" ] },
	{ id: "bg", names: [ "Bulgaria" ], zoom: 300 },
	{ id: "bh", names: [ "Bahrain" ], zoom: 400 },
	{ id: "bi", names: [ "Burundi" ], zoom: 300 },
	{ id: "bj", names: [ "Benin" ], zoom: 300 },
	{ id: "bn", names: [ "Brunei" ], zoom: 400 },
	{ id: "bo", names: [ "Bolivia" ] },
	{ id: "br", names: [ "Brazil" ] },
	{ id: "bs", names: [ "Bahamas" ], zoom: 400 },
	{ id: "bt", names: [ "Bhutan" ], zoom: 300 },
	{ id: "bw", names: [ "Botswana" ] },
	{ id: "by", names: [ "Belarus" ] },
	{ id: "bz", names: [ "Belize" ], zoom: 400 },
	{ id: "ca", names: [ "Canada" ] },
	{ id: "cd", names: [ "Democratic Republic of the Congo", "DR Congo", "D.R. Congo", "D. R. Congo", "D R Congo", "DRC" ] },
	{ id: "cf", names: [ "Central African Republic", "CAR" ] },
	{ id: "cg", names: [ "Republic of the Congo", "Congo Republic", "Congo" ] },
	{ id: "ch", names: [ "Switzerland" ], zoom: 400 },
	{ id: "ci", names: [ "Ivory Coast", "Côte d'Ivoire", "Cote d'Ivoire" ] },
	{ id: "cl", names: [ "Chile" ] },
	{ id: "cm", names: [ "Cameroon" ] },
	{ id: "cn", names: [ "China" ] },
	{ id: "co", names: [ "Colombia" ] },
	{ id: "cr", names: [ "Costa Rica" ], zoom: 400 },
	{ id: "cu", names: [ "Cuba" ], zoom: 300 },
	{ id: "cv", names: [ "Cape Verde", "Cabo Verde" ], zoom: 400 },
	{ id: "cy", names: [ "Cyprus" ], zoom: 400 },
	{ id: "cz", names: [ "Czech Republic", "Czechia" ], zoom: 300 },
	{ id: "de", names: [ "Germany" ] },
	{ id: "dj", names: [ "Djibouti" ], zoom: 400 },
	{ id: "dk", names: [ "Denmark" ], zoom: 300 },
	{ id: "dm", names: [ "Dominica" ], zoom: 700 },
	{ id: "do", names: [ "Dominican Republic" ], zoom: 400 },
	{ id: "dz", names: [ "Algeria" ] },
	{ id: "ec", names: [ "Ecuador" ] },
	{ id: "ee", names: [ "Estonia" ], zoom: 300 },
	{ id: "eg", names: [ "Egypt" ] },
	{ id: "er", names: [ "Eritrea" ], zoom: 300 },
	{ id: "es", names: [ "Spain" ] },
	{ id: "et", names: [ "Ethiopia" ] },
	{ id: "fi", names: [ "Finland" ] },
	{ id: "fj", names: [ "Fiji" ], zoom: 400 },
	{ id: "fm", names: [ "Federated States of Micronesia", "Micronesia" ], zoom: 400 },
	{ id: "fr", names: [ "France" ] },
	{ id: "ga", names: [ "Gabon" ] },
	{ id: "gb", names: [ "United Kingdom", "UK" ] },
	{ id: "gd", names: [ "Grenada" ], zoom: 700 },
	{ id: "ge", names: [ "Georgia" ], zoom: 400 },
	{ id: "gh", names: [ "Ghana" ] },
	{ id: "gm", names: [ "The Gambia", "Gambia" ], zoom: 400 },
	{ id: "gn", names: [ "Guinea" ] },
	{ id: "gq", names: [ "Equatorial Guinea" ], zoom: 400 },
	{ id: "gr", names: [ "Greece" ], zoom: 400 },
	{ id: "gt", names: [ "Guatemala" ], zoom: 400 },
	{ id: "gw", names: [ "Guinea-Bissau", "Guinea Bissau" ], zoom: 400 },
	{ id: "gy", names: [ "Guyana" ] },
	{ id: "hn", names: [ "Honduras" ], zoom: 400 },
	{ id: "hr", names: [ "Croatia" ], zoom: 300 },
	{ id: "ht", names: [ "Haiti" ], zoom: 400 },
	{ id: "hu", names: [ "Hungary" ], zoom: 300 },
	{ id: "id", names: [ "Indonesia" ] },
	{ id: "ie", names: [ "Ireland", "Republic of Ireland" ], zoom: 300 },
	{ id: "il", names: [ "Israel" ], zoom: 500 },
	{ id: "in", names: [ "India" ] },
	{ id: "ir", names: [ "Iran" ] },
	{ id: "iq", names: [ "Iraq" ] },
	{ id: "is", names: [ "Iceland" ] },
	{ id: "it", names: [ "Italy" ] },
	{ id: "jm", names: [ "Jamaica" ], zoom: 400 },
	{ id: "jo", names: [ "Jordan" ], zoom: 300 },
	{ id: "jp", names: [ "Japan" ] },
	{ id: "ke", names: [ "Kenya" ] },
	{ id: "kg", names: [ "Kyrgyzstan" ] },
	{ id: "kh", names: [ "Cambodia" ] },
	{ id: "ki", names: [ "Kiribati" ], zoom: 400 },
	{ id: "km", names: [ "Comoros" ], zoom: 400 },
	{ id: "kn", names: [ "Saint Kitts and Nevis", "St. Kitts and Nevis", "St Kitts and Nevis" ], zoom: 700 },
	{ id: "kp", names: [ "North Korea", "Democratic People's Republic of Korea", "DPRK" ] },
	{ id: "kr", names: [ "South Korea", "Republic of Korea" ] },
	{ id: "kw", names: [ "Kuwait" ], zoom: 500 },
	{ id: "kz", names: [ "Kazakhstan" ] },
	{ id: "la", names: [ "Laos" ] },
	{ id: "lb", names: [ "Lebanon" ], zoom: 500 },
	{ id: "lc", names: [ "Saint Lucia", "St. Lucia", "St Lucia" ], zoom: 700 },
	{ id: "li", names: [ "Liechtenstein" ], zoom: 400 },
	{ id: "lk", names: [ "Sri Lanka" ] },
	{ id: "lr", names: [ "Liberia" ], zoom: 300 },
	{ id: "ls", names: [ "Lesotho" ], zoom: 300 },
	{ id: "lt", names: [ "Lithuania" ], zoom: 300 },
	{ id: "lu", names: [ "Luxembourg" ], zoom: 400 },
	{ id: "lv", names: [ "Latvia" ], zoom: 300 },
	{ id: "ly", names: [ "Libya" ] },
	{ id: "ma", names: [ "Morocco" ] },
	{ id: "mc", names: [ "Monaco" ], zoom: 400 },
	{ id: "md", names: [ "Moldova" ], zoom: 400 },
	{ id: "me", names: [ "Montenegro" ], zoom: 700 },
	{ id: "mg", names: [ "Madagascar" ] },
	{ id: "mh", names: [ "Marshall Islands" ], zoom: 400 },
	{ id: "mk", names: [ "North Macedonia" ], zoom: 400 },
	{ id: "ml", names: [ "Mali" ] },
	{ id: "mm", names: [ "Myanmar", "Burma" ] },
	{ id: "mn", names: [ "Mongolia" ] },
	{ id: "mr", names: [ "Mauritania" ] },
	{ id: "mt", names: [ "Malta" ], zoom: 400 },
	{ id: "mu", names: [ "Mauritius" ], zoom: 400 },
	{ id: "mv", names: [ "Maldives" ], zoom: 300 },
	{ id: "mw", names: [ "Malawi" ], zoom: 300 },
	{ id: "mx", names: [ "Mexico" ] },
	{ id: "my", names: [ "Malaysia" ] },
	{ id: "mz", names: [ "Mozambique" ] },
	{ id: "na", names: [ "Namibia" ] },
	{ id: "ne", names: [ "Niger" ] },
	{ id: "ng", names: [ "Nigeria" ] },
	{ id: "ni", names: [ "Nicaragua" ], zoom: 400 },
	{ id: "nl", names: [ "Netherlands", "The Netherlands" ], zoom: 300 },
	{ id: "no", names: [ "Norway" ] },
	{ id: "np", names: [ "Nepal" ], zoom: 300 },
	{ id: "nr", names: [ "Nauru" ] },
	{ id: "nz", names: [ "New Zealand" ] },
	{ id: "om", names: [ "Oman" ] },
	{ id: "pa", names: [ "Panama" ], zoom: 400 },
	{ id: "pe", names: [ "Peru" ] },
	{ id: "pg", names: [ "Papua New Guinea", "PNG" ] },
	{ id: "ph", names: [ "Philippines" ] },
	{ id: "pl", names: [ "Poland" ], zoom: 300 },
	{ id: "pk", names: [ "Pakistan" ] },
	{ id: "ps", names: [ "Palestine" ], zoom: 600 },
	{ id: "pt", names: [ "Portugal" ], zoom: 300 },
	{ id: "pw", names: [ "Palau" ], zoom: 400 },
	{ id: "py", names: [ "Paraguay" ] },
	{ id: "qa", names: [ "Qatar" ], zoom: 400 },
	{ id: "ro", names: [ "Romania" ], zoom: 300 },
	{ id: "rs", names: [ "Serbia" ], zoom: 300 },
	{ id: "ru", names: [ "Russia", "Russian Federation" ] },
	{ id: "rw", names: [ "Rwanda" ], zoom: 300 },
	{ id: "sa", names: [ "Saudi Arabia" ] },
	{ id: "sb", names: [ "Solomon Islands" ], zoom: 400 },
	{ id: "sc", names: [ "Seychelles" ], zoom: 400 },
	{ id: "sd", names: [ "Sudan" ] },
	{ id: "se", names: [ "Sweden" ] },
	{ id: "sg", names: [ "Singapore" ], zoom: 400 },
	{ id: "si", names: [ "Slovenia" ], zoom: 400 },
	{ id: "sk", names: [ "Slovakia" ], zoom: 300 },
	{ id: "sl", names: [ "Sierra Leone" ], zoom: 300 },
	{ id: "sm", names: [ "San Marino" ], zoom: 700 },
	{ id: "sn", names: [ "Senegal" ] },
	{ id: "so", names: [ "Somalia" ] },
	{ id: "sr", names: [ "Suriname" ] },
	{ id: "ss", names: [ "South Sudan" ] },
	{ id: "st", names: [ "São Tomé and Príncipe", "Sao Tome and Principe" ], zoom: 400 },
	{ id: "sv", names: [ "El Salvador" ], zoom: 400 },
	{ id: "sy", names: [ "Syria" ] },
	{ id: "sz", names: [ "Eswatini", "Swaziland" ], zoom: 300 },
	{ id: "td", names: [ "Chad" ] },
	{ id: "tg", names: [ "Togo" ], zoom: 300 },
	{ id: "th", names: [ "Thailand" ] },
	{ id: "tj", names: [ "Tajikistan" ] },
	{ id: "tl", names: [ "East Timor", "Timor-Leste", "Timor Leste" ], zoom: 400 },
	{ id: "tm", names: [ "Turkmenistan" ] },
	{ id: "tn", names: [ "Tunisia" ] },
	{ id: "to", names: [ "Tonga" ], zoom: 400 },
	{ id: "tr", names: [ "Turkey", "Türkiye", "Turkiye" ] },
	{ id: "tt", names: [ "Trinidad and Tobago" ], zoom: 700 },
	{ id: "tv", names: [ "Tuvalu" ], zoom: 400 },
	{ id: "tz", names: [ "Tanzania" ] },
	{ id: "ua", names: [ "Ukraine" ] },
	{ id: "ug", names: [ "Uganda" ] },
	{ id: "us", names: [ "United States of America", "United States", "USA", "US" ] },
	{ id: "uy", names: [ "Uruguay" ] },
	{ id: "uz", names: [ "Uzbekistan" ] },
	{ id: "va", names: [ "Vatican City", "Vatican" ], zoom: 700 },
	{ id: "vc", names: [ "Saint Vincent and the Grenadines", "St. Vincent and the Grenadines", "St Vincent and the Grenadines" ], zoom: 700 },
	{ id: "ve", names: [ "Venezuela" ] },
	{ id: "vn", names: [ "Vietnam" ] },
	{ id: "vu", names: [ "Vanuatu" ], zoom: 400 },
	{ id: "ws", names: [ "Samoa", "Western Samoa" ], zoom: 400 },
	{ id: "xk", names: [ "Kosovo" ], zoom: 700 },
	{ id: "ye", names: [ "Yemen" ] },
	{ id: "za", names: [ "South Africa" ] },
	{ id: "zm", names: [ "Zambia" ] },
	{ id: "zw", names: [ "Zimbabwe" ] },
]
;
