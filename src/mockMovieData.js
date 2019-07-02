const mockMovieData = {
count: 7,
next: null,
previous: null,
results: [
{
title: "A New Hope",
episode_id: 4,
opening_crawl: "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....",
director: "George Lucas",
producer: "Gary Kurtz, Rick McCallum",
release_date: "1977-05-25",
characters: [
"https://swapi.co/api/people/1/",
"https://swapi.co/api/people/2/",
"https://swapi.co/api/people/3/",
"https://swapi.co/api/people/4/",
"https://swapi.co/api/people/5/",
"https://swapi.co/api/people/6/",
"https://swapi.co/api/people/7/",
"https://swapi.co/api/people/8/",
"https://swapi.co/api/people/9/",
"https://swapi.co/api/people/10/",
"https://swapi.co/api/people/12/",
"https://swapi.co/api/people/13/",
"https://swapi.co/api/people/14/",
"https://swapi.co/api/people/15/",
"https://swapi.co/api/people/16/",
"https://swapi.co/api/people/18/",
"https://swapi.co/api/people/19/",
"https://swapi.co/api/people/81/"
],
planets: [
"https://swapi.co/api/planets/2/",
"https://swapi.co/api/planets/3/",
"https://swapi.co/api/planets/1/"
],
starships: [
"https://swapi.co/api/starships/2/",
"https://swapi.co/api/starships/3/",
"https://swapi.co/api/starships/5/",
"https://swapi.co/api/starships/9/",
"https://swapi.co/api/starships/10/",
"https://swapi.co/api/starships/11/",
"https://swapi.co/api/starships/12/",
"https://swapi.co/api/starships/13/"
],
vehicles: [
"https://swapi.co/api/vehicles/4/",
"https://swapi.co/api/vehicles/6/",
"https://swapi.co/api/vehicles/7/",
"https://swapi.co/api/vehicles/8/"
],
species: [
"https://swapi.co/api/species/5/",
"https://swapi.co/api/species/3/",
"https://swapi.co/api/species/2/",
"https://swapi.co/api/species/1/",
"https://swapi.co/api/species/4/"
],
created: "2014-12-10T14:23:31.880000Z",
edited: "2015-04-11T09:46:52.774897Z",
url: "https://swapi.co/api/films/1/"
},
{
title: "Attack of the Clones",
episode_id: 2,
opening_crawl: "There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic. This separatist movement, under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain peace and order in the galaxy. Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi....",
director: "George Lucas",
producer: "Rick McCallum",
release_date: "2002-05-16",
characters: [
"https://swapi.co/api/people/2/",
"https://swapi.co/api/people/3/",
"https://swapi.co/api/people/6/",
"https://swapi.co/api/people/7/",
"https://swapi.co/api/people/10/",
"https://swapi.co/api/people/11/",
"https://swapi.co/api/people/20/",
"https://swapi.co/api/people/21/",
"https://swapi.co/api/people/22/",
"https://swapi.co/api/people/33/",
"https://swapi.co/api/people/36/",
"https://swapi.co/api/people/40/",
"https://swapi.co/api/people/43/",
"https://swapi.co/api/people/46/",
"https://swapi.co/api/people/51/",
"https://swapi.co/api/people/52/",
"https://swapi.co/api/people/53/",
"https://swapi.co/api/people/58/",
"https://swapi.co/api/people/59/",
"https://swapi.co/api/people/60/",
"https://swapi.co/api/people/61/",
"https://swapi.co/api/people/62/",
"https://swapi.co/api/people/63/",
"https://swapi.co/api/people/64/",
"https://swapi.co/api/people/65/",
"https://swapi.co/api/people/66/",
"https://swapi.co/api/people/67/",
"https://swapi.co/api/people/68/",
"https://swapi.co/api/people/69/",
"https://swapi.co/api/people/70/",
"https://swapi.co/api/people/71/",
"https://swapi.co/api/people/72/",
"https://swapi.co/api/people/73/",
"https://swapi.co/api/people/74/",
"https://swapi.co/api/people/75/",
"https://swapi.co/api/people/76/",
"https://swapi.co/api/people/77/",
"https://swapi.co/api/people/78/",
"https://swapi.co/api/people/82/",
"https://swapi.co/api/people/35/"
],
planets: [
"https://swapi.co/api/planets/8/",
"https://swapi.co/api/planets/9/",
"https://swapi.co/api/planets/10/",
"https://swapi.co/api/planets/11/",
"https://swapi.co/api/planets/1/"
],
starships: [
"https://swapi.co/api/starships/21/",
"https://swapi.co/api/starships/39/",
"https://swapi.co/api/starships/43/",
"https://swapi.co/api/starships/47/",
"https://swapi.co/api/starships/48/",
"https://swapi.co/api/starships/49/",
"https://swapi.co/api/starships/32/",
"https://swapi.co/api/starships/52/",
"https://swapi.co/api/starships/58/"
],
vehicles: [
"https://swapi.co/api/vehicles/4/",
"https://swapi.co/api/vehicles/44/",
"https://swapi.co/api/vehicles/45/",
"https://swapi.co/api/vehicles/46/",
"https://swapi.co/api/vehicles/50/",
"https://swapi.co/api/vehicles/51/",
"https://swapi.co/api/vehicles/53/",
"https://swapi.co/api/vehicles/54/",
"https://swapi.co/api/vehicles/55/",
"https://swapi.co/api/vehicles/56/",
"https://swapi.co/api/vehicles/57/"
],
species: [
"https://swapi.co/api/species/32/",
"https://swapi.co/api/species/33/",
"https://swapi.co/api/species/2/",
"https://swapi.co/api/species/35/",
"https://swapi.co/api/species/6/",
"https://swapi.co/api/species/1/",
"https://swapi.co/api/species/12/",
"https://swapi.co/api/species/34/",
"https://swapi.co/api/species/13/",
"https://swapi.co/api/species/15/",
"https://swapi.co/api/species/28/",
"https://swapi.co/api/species/29/",
"https://swapi.co/api/species/30/",
"https://swapi.co/api/species/31/"
],
created: "2014-12-20T10:57:57.886000Z",
edited: "2015-04-11T09:45:01.623982Z",
url: "https://swapi.co/api/films/5/"
},
{
title: "The Phantom Menace",
episode_id: 1,
opening_crawl: "Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo. While the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....",
director: "George Lucas",
producer: "Rick McCallum",
release_date: "1999-05-19",
characters: [
"https://swapi.co/api/people/2/",
"https://swapi.co/api/people/3/",
"https://swapi.co/api/people/10/",
"https://swapi.co/api/people/11/",
"https://swapi.co/api/people/16/",
"https://swapi.co/api/people/20/",
"https://swapi.co/api/people/21/",
"https://swapi.co/api/people/32/",
"https://swapi.co/api/people/33/",
"https://swapi.co/api/people/34/",
"https://swapi.co/api/people/36/",
"https://swapi.co/api/people/37/",
"https://swapi.co/api/people/38/",
"https://swapi.co/api/people/39/",
"https://swapi.co/api/people/40/",
"https://swapi.co/api/people/41/",
"https://swapi.co/api/people/42/",
"https://swapi.co/api/people/43/",
"https://swapi.co/api/people/44/",
"https://swapi.co/api/people/46/",
"https://swapi.co/api/people/48/",
"https://swapi.co/api/people/49/",
"https://swapi.co/api/people/50/",
"https://swapi.co/api/people/51/",
"https://swapi.co/api/people/52/",
"https://swapi.co/api/people/53/",
"https://swapi.co/api/people/54/",
"https://swapi.co/api/people/55/",
"https://swapi.co/api/people/56/",
"https://swapi.co/api/people/57/",
"https://swapi.co/api/people/58/",
"https://swapi.co/api/people/59/",
"https://swapi.co/api/people/47/",
"https://swapi.co/api/people/35/"
],
planets: [
"https://swapi.co/api/planets/8/",
"https://swapi.co/api/planets/9/",
"https://swapi.co/api/planets/1/"
],
starships: [
"https://swapi.co/api/starships/40/",
"https://swapi.co/api/starships/41/",
"https://swapi.co/api/starships/31/",
"https://swapi.co/api/starships/32/",
"https://swapi.co/api/starships/39/"
],
vehicles: [
"https://swapi.co/api/vehicles/33/",
"https://swapi.co/api/vehicles/34/",
"https://swapi.co/api/vehicles/35/",
"https://swapi.co/api/vehicles/36/",
"https://swapi.co/api/vehicles/37/",
"https://swapi.co/api/vehicles/38/",
"https://swapi.co/api/vehicles/42/"
],
species: [
"https://swapi.co/api/species/1/",
"https://swapi.co/api/species/2/",
"https://swapi.co/api/species/6/",
"https://swapi.co/api/species/11/",
"https://swapi.co/api/species/12/",
"https://swapi.co/api/species/13/",
"https://swapi.co/api/species/14/",
"https://swapi.co/api/species/15/",
"https://swapi.co/api/species/16/",
"https://swapi.co/api/species/17/",
"https://swapi.co/api/species/18/",
"https://swapi.co/api/species/19/",
"https://swapi.co/api/species/20/",
"https://swapi.co/api/species/21/",
"https://swapi.co/api/species/22/",
"https://swapi.co/api/species/23/",
"https://swapi.co/api/species/24/",
"https://swapi.co/api/species/25/",
"https://swapi.co/api/species/26/",
"https://swapi.co/api/species/27/"
],
created: "2014-12-19T16:52:55.740000Z",
edited: "2015-04-11T09:45:18.689301Z",
url: "https://swapi.co/api/films/4/"
},
{
title: "Revenge of the Sith",
episode_id: 3,
opening_crawl: "War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere. In a stunning move, the fiendish droid leader, General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate. As the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor....",
director: "George Lucas",
producer: "Rick McCallum",
release_date: "2005-05-19",
characters: [
"https://swapi.co/api/people/1/",
"https://swapi.co/api/people/2/",
"https://swapi.co/api/people/3/",
"https://swapi.co/api/people/4/",
"https://swapi.co/api/people/5/",
"https://swapi.co/api/people/6/",
"https://swapi.co/api/people/7/",
"https://swapi.co/api/people/10/",
"https://swapi.co/api/people/11/",
"https://swapi.co/api/people/12/",
"https://swapi.co/api/people/13/",
"https://swapi.co/api/people/20/",
"https://swapi.co/api/people/21/",
"https://swapi.co/api/people/33/",
"https://swapi.co/api/people/46/",
"https://swapi.co/api/people/51/",
"https://swapi.co/api/people/52/",
"https://swapi.co/api/people/53/",
"https://swapi.co/api/people/54/",
"https://swapi.co/api/people/55/",
"https://swapi.co/api/people/56/",
"https://swapi.co/api/people/58/",
"https://swapi.co/api/people/63/",
"https://swapi.co/api/people/64/",
"https://swapi.co/api/people/67/",
"https://swapi.co/api/people/68/",
"https://swapi.co/api/people/75/",
"https://swapi.co/api/people/78/",
"https://swapi.co/api/people/79/",
"https://swapi.co/api/people/80/",
"https://swapi.co/api/people/81/",
"https://swapi.co/api/people/82/",
"https://swapi.co/api/people/83/",
"https://swapi.co/api/people/35/"
],
planets: [
"https://swapi.co/api/planets/2/",
"https://swapi.co/api/planets/5/",
"https://swapi.co/api/planets/8/",
"https://swapi.co/api/planets/9/",
"https://swapi.co/api/planets/12/",
"https://swapi.co/api/planets/13/",
"https://swapi.co/api/planets/14/",
"https://swapi.co/api/planets/15/",
"https://swapi.co/api/planets/16/",
"https://swapi.co/api/planets/17/",
"https://swapi.co/api/planets/18/",
"https://swapi.co/api/planets/19/",
"https://swapi.co/api/planets/1/"
],
starships: [
"https://swapi.co/api/starships/48/",
"https://swapi.co/api/starships/59/",
"https://swapi.co/api/starships/61/",
"https://swapi.co/api/starships/32/",
"https://swapi.co/api/starships/63/",
"https://swapi.co/api/starships/64/",
"https://swapi.co/api/starships/65/",
"https://swapi.co/api/starships/66/",
"https://swapi.co/api/starships/74/",
"https://swapi.co/api/starships/75/",
"https://swapi.co/api/starships/2/",
"https://swapi.co/api/starships/68/"
],
vehicles: [
"https://swapi.co/api/vehicles/33/",
"https://swapi.co/api/vehicles/50/",
"https://swapi.co/api/vehicles/53/",
"https://swapi.co/api/vehicles/56/",
"https://swapi.co/api/vehicles/60/",
"https://swapi.co/api/vehicles/62/",
"https://swapi.co/api/vehicles/67/",
"https://swapi.co/api/vehicles/69/",
"https://swapi.co/api/vehicles/70/",
"https://swapi.co/api/vehicles/71/",
"https://swapi.co/api/vehicles/72/",
"https://swapi.co/api/vehicles/73/",
"https://swapi.co/api/vehicles/76/"
],
species: [
"https://swapi.co/api/species/19/",
"https://swapi.co/api/species/33/",
"https://swapi.co/api/species/2/",
"https://swapi.co/api/species/3/",
"https://swapi.co/api/species/36/",
"https://swapi.co/api/species/37/",
"https://swapi.co/api/species/6/",
"https://swapi.co/api/species/1/",
"https://swapi.co/api/species/34/",
"https://swapi.co/api/species/15/",
"https://swapi.co/api/species/35/",
"https://swapi.co/api/species/20/",
"https://swapi.co/api/species/23/",
"https://swapi.co/api/species/24/",
"https://swapi.co/api/species/25/",
"https://swapi.co/api/species/26/",
"https://swapi.co/api/species/27/",
"https://swapi.co/api/species/28/",
"https://swapi.co/api/species/29/",
"https://swapi.co/api/species/30/"
],
created: "2014-12-20T18:49:38.403000Z",
edited: "2015-04-11T09:45:44.862122Z",
url: "https://swapi.co/api/films/6/"
},
{
title: "Return of the Jedi",
episode_id: 6,
opening_crawl: "Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt. Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space station even more powerful than the first dreaded Death Star. When completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy...",
director: "Richard Marquand",
producer: "Howard G. Kazanjian, George Lucas, Rick McCallum",
release_date: "1983-05-25",
characters: [
"https://swapi.co/api/people/1/",
"https://swapi.co/api/people/2/",
"https://swapi.co/api/people/3/",
"https://swapi.co/api/people/4/",
"https://swapi.co/api/people/5/",
"https://swapi.co/api/people/10/",
"https://swapi.co/api/people/13/",
"https://swapi.co/api/people/14/",
"https://swapi.co/api/people/16/",
"https://swapi.co/api/people/18/",
"https://swapi.co/api/people/20/",
"https://swapi.co/api/people/21/",
"https://swapi.co/api/people/22/",
"https://swapi.co/api/people/25/",
"https://swapi.co/api/people/27/",
"https://swapi.co/api/people/28/",
"https://swapi.co/api/people/29/",
"https://swapi.co/api/people/30/",
"https://swapi.co/api/people/31/",
"https://swapi.co/api/people/45/"
],
planets: [
"https://swapi.co/api/planets/5/",
"https://swapi.co/api/planets/7/",
"https://swapi.co/api/planets/8/",
"https://swapi.co/api/planets/9/",
"https://swapi.co/api/planets/1/"
],
starships: [
"https://swapi.co/api/starships/15/",
"https://swapi.co/api/starships/10/",
"https://swapi.co/api/starships/11/",
"https://swapi.co/api/starships/12/",
"https://swapi.co/api/starships/22/",
"https://swapi.co/api/starships/23/",
"https://swapi.co/api/starships/27/",
"https://swapi.co/api/starships/28/",
"https://swapi.co/api/starships/29/",
"https://swapi.co/api/starships/3/",
"https://swapi.co/api/starships/17/",
"https://swapi.co/api/starships/2/"
],
vehicles: [
"https://swapi.co/api/vehicles/8/",
"https://swapi.co/api/vehicles/16/",
"https://swapi.co/api/vehicles/18/",
"https://swapi.co/api/vehicles/19/",
"https://swapi.co/api/vehicles/24/",
"https://swapi.co/api/vehicles/25/",
"https://swapi.co/api/vehicles/26/",
"https://swapi.co/api/vehicles/30/"
],
species: [
"https://swapi.co/api/species/1/",
"https://swapi.co/api/species/2/",
"https://swapi.co/api/species/3/",
"https://swapi.co/api/species/5/",
"https://swapi.co/api/species/6/",
"https://swapi.co/api/species/8/",
"https://swapi.co/api/species/9/",
"https://swapi.co/api/species/10/",
"https://swapi.co/api/species/15/"
],
created: "2014-12-18T10:39:33.255000Z",
edited: "2015-04-11T09:46:05.220365Z",
url: "https://swapi.co/api/films/3/"
},
{
title: "The Empire Strikes Back",
episode_id: 5,
opening_crawl: "It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy. Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth. The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space....",
director: "Irvin Kershner",
producer: "Gary Kurtz, Rick McCallum",
release_date: "1980-05-17",
characters: [
"https://swapi.co/api/people/1/",
"https://swapi.co/api/people/2/",
"https://swapi.co/api/people/3/",
"https://swapi.co/api/people/4/",
"https://swapi.co/api/people/5/",
"https://swapi.co/api/people/10/",
"https://swapi.co/api/people/13/",
"https://swapi.co/api/people/14/",
"https://swapi.co/api/people/18/",
"https://swapi.co/api/people/20/",
"https://swapi.co/api/people/21/",
"https://swapi.co/api/people/22/",
"https://swapi.co/api/people/23/",
"https://swapi.co/api/people/24/",
"https://swapi.co/api/people/25/",
"https://swapi.co/api/people/26/"
],
planets: [
"https://swapi.co/api/planets/4/",
"https://swapi.co/api/planets/5/",
"https://swapi.co/api/planets/6/",
"https://swapi.co/api/planets/27/"
],
starships: [
"https://swapi.co/api/starships/15/",
"https://swapi.co/api/starships/10/",
"https://swapi.co/api/starships/11/",
"https://swapi.co/api/starships/12/",
"https://swapi.co/api/starships/21/",
"https://swapi.co/api/starships/22/",
"https://swapi.co/api/starships/23/",
"https://swapi.co/api/starships/3/",
"https://swapi.co/api/starships/17/"
],
vehicles: [
"https://swapi.co/api/vehicles/8/",
"https://swapi.co/api/vehicles/14/",
"https://swapi.co/api/vehicles/16/",
"https://swapi.co/api/vehicles/18/",
"https://swapi.co/api/vehicles/19/",
"https://swapi.co/api/vehicles/20/"
],
species: [
"https://swapi.co/api/species/6/",
"https://swapi.co/api/species/7/",
"https://swapi.co/api/species/3/",
"https://swapi.co/api/species/2/",
"https://swapi.co/api/species/1/"
],
created: "2014-12-12T11:26:24.656000Z",
edited: "2017-04-19T10:57:29.544256Z",
url: "https://swapi.co/api/films/2/"
},
{
title: "The Force Awakens",
episode_id: 7,
opening_crawl: "Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi, has been destroyed. With the support of the REPUBLIC, General Leia Organa leads a brave RESISTANCE. She is desperate to find her brother Luke and gain his help in restoring peace and justice to the galaxy. Leia has sent her most daring pilot on a secret mission to Jakku, where an old ally has discovered a clue to Luke's whereabouts....",
director: "J. J. Abrams",
producer: "Kathleen Kennedy, J. J. Abrams, Bryan Burk",
release_date: "2015-12-11",
characters: [
"https://swapi.co/api/people/1/",
"https://swapi.co/api/people/3/",
"https://swapi.co/api/people/5/",
"https://swapi.co/api/people/13/",
"https://swapi.co/api/people/14/",
"https://swapi.co/api/people/27/",
"https://swapi.co/api/people/84/",
"https://swapi.co/api/people/85/",
"https://swapi.co/api/people/86/",
"https://swapi.co/api/people/87/",
"https://swapi.co/api/people/88/"
],
planets: [
"https://swapi.co/api/planets/61/"
],
starships: [
"https://swapi.co/api/starships/77/",
"https://swapi.co/api/starships/10/"
],
vehicles: [ ],
species: [
"https://swapi.co/api/species/3/",
"https://swapi.co/api/species/2/",
"https://swapi.co/api/species/1/"
],
created: "2015-04-17T06:51:30.504780Z",
edited: "2015-12-17T14:31:47.617768Z",
url: "https://swapi.co/api/films/7/"
}
]
}

export default mockMovieData