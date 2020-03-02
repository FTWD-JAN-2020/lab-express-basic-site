const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + "/views/home.html")
})


app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + "/views/about.html")
})

app.get('/works', (req, res, next) => {
    res.sendFile(__dirname + "/views/works.html")
})


app.get('/info', (req, res, next) => {
    res.json({
        "total": 22,
        "result": [
        {
        "categories": [],
        "created_at": "2020-01-05 13:42:18.823766",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "eyybzzcqse6ls_xwlbyscg",
        "updated_at": "2020-01-05 13:42:18.823766",
        "url": "https://api.chucknorris.io/jokes/eyybzzcqse6ls_xwlbyscg",
        "value": "Chuck Norris invented a language that incorporates karate and roundhouse kicks. So next time Chuck Norris is kicking your ass, don?t be offended or hurt, he may be just trying to tell you he likes your hat."
        },
        {
        "categories": [],
        "created_at": "2020-01-05 13:42:19.104863",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "lyyuxeoxtwqd-oibq6_zqa",
        "updated_at": "2020-01-05 13:42:19.104863",
        "url": "https://api.chucknorris.io/jokes/lyyuxeoxtwqd-oibq6_zqa",
        "value": "Chuck Norris invented his own type of karate. It's called Chuck-Will-Kill."
        },
        {
        "categories": [
        "explicit"
        ],
        "created_at": "2020-01-05 13:42:19.576875",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "qlxspmpzrveg1eiexcufwg",
        "updated_at": "2020-01-05 13:42:19.576875",
        "url": "https://api.chucknorris.io/jokes/qlxspmpzrveg1eiexcufwg",
        "value": "An anagram for Walker Texas Ranger is KARATE WRANGLER SEX. I don't know what that is, but it sounds AWESOME."
        },
        {
        "categories": [
        "movie"
        ],
        "created_at": "2020-01-05 13:42:19.576875",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "dol4jfp2sdmfrkx3srhrmg",
        "updated_at": "2020-01-05 13:42:19.576875",
        "url": "https://api.chucknorris.io/jokes/dol4jfp2sdmfrkx3srhrmg",
        "value": "Teenage Mutant Ninja Turtles is based on a true story: Chuck Norris once swallowed a turtle whole, and when he crapped it out, the turtle was six feet tall and had learned karate."
        },
        {
        "categories": [],
        "created_at": "2020-01-05 13:42:19.897976",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "MIB3fLpdSOSG8orvfINHiA",
        "updated_at": "2020-01-05 13:42:19.897976",
        "url": "https://api.chucknorris.io/jokes/MIB3fLpdSOSG8orvfINHiA",
        "value": "Teenage Mutant Ninja Turtles is based on a true story: Chuck Norris once ate a whole turtle and when he crapped it out it was six feet tall and had learned karate."
        },
        {
        "categories": [],
        "created_at": "2020-01-05 13:42:19.897976",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "FkULWBTyQreefpAgiv88FA",
        "updated_at": "2020-01-05 13:42:19.897976",
        "url": "https://api.chucknorris.io/jokes/FkULWBTyQreefpAgiv88FA",
        "value": "During karate training Chuck Norris prefers to use an elephant scrotum as a speed bag."
        },
        {
        "categories": [],
        "created_at": "2020-01-05 13:42:21.179347",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "lmm9ihfAQp2ZWym9KLnFcg",
        "updated_at": "2020-01-05 13:42:21.179347",
        "url": "https://api.chucknorris.io/jokes/lmm9ihfAQp2ZWym9KLnFcg",
        "value": "Chuck Norris doesn't know karate. Karate knows Chuck Norris - as its only master."
        },
        {
        "categories": [],
        "created_at": "2020-01-05 13:42:22.980058",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "E4cTkg9JRUKdjCQh4CTpNA",
        "updated_at": "2020-01-05 13:42:22.980058",
        "url": "https://api.chucknorris.io/jokes/E4cTkg9JRUKdjCQh4CTpNA",
        "value": "Chuck Norris once acquired two Harley-Davidsons by Karate-chopping a muscle car in half."
        },
        {
        "categories": [],
        "created_at": "2020-01-05 13:42:23.880601",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "JkM3wDPcTOSQQUQwmgcNMg",
        "updated_at": "2020-01-05 13:42:23.880601",
        "url": "https://api.chucknorris.io/jokes/JkM3wDPcTOSQQUQwmgcNMg",
        "value": "Ever wonder how bacon was created? Chuck Norris karate chopped a pig so many times so all that was left were thin strips of meat. He then cooked them with his fire breathing ability and so bacon was invented. His beard suggested the name."
        },
        {
        "categories": [],
        "created_at": "2020-01-05 13:42:23.880601",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "xO7rZ3aeRZ-4w0E3_sDRbw",
        "updated_at": "2020-01-05 13:42:23.880601",
        "url": "https://api.chucknorris.io/jokes/xO7rZ3aeRZ-4w0E3_sDRbw",
        "value": "For a split of a nanosec I had disbelief in Chuck Norris, but quickly I noticed that this particular nanosec was splitted by his karatepunch."
        },
        {
        "categories": [],
        "created_at": "2020-01-05 13:42:24.40636",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "Ky2m6klgS0WcWt1cWo6M2A",
        "updated_at": "2020-01-05 13:42:24.40636",
        "url": "https://api.chucknorris.io/jokes/Ky2m6klgS0WcWt1cWo6M2A",
        "value": "Chuck Norris was banned from competing in the National Karate Championship. Everyone he competed with the year before ended up in the Special Olympics."
        },
        {
        "categories": [],
        "created_at": "2020-01-05 13:42:25.099703",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "ek9Nok9aSPqwT-DcuSTAEA",
        "updated_at": "2020-01-05 13:42:25.099703",
        "url": "https://api.chucknorris.io/jokes/ek9Nok9aSPqwT-DcuSTAEA",
        "value": "Chuck Norris frequently signs up for beginner karate classes so he can accidentally roundhouse kick kids in the neck."
        },
        {
        "categories": [],
        "created_at": "2020-01-05 13:42:25.628594",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "kdJCg4cmRZ6w74I3MptLMA",
        "updated_at": "2020-01-05 13:42:25.628594",
        "url": "https://api.chucknorris.io/jokes/kdJCg4cmRZ6w74I3MptLMA",
        "value": "Chun kuk do- founded by Chuck Norris in 1990- is an amalgamation of Korean tang soo do, shotokan karate, subak, taekkyon, judo and Brazilian jiu-jitsu. In other words, it's the juice that powers his epic roundhouse kicks."
        },
        {
        "categories": [],
        "created_at": "2020-01-05 13:42:25.628594",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "0MQbfP3PTBC2TvsL_C0w4A",
        "updated_at": "2020-01-05 13:42:25.628594",
        "url": "https://api.chucknorris.io/jokes/0MQbfP3PTBC2TvsL_C0w4A",
        "value": "Little known fact: Chuck Norris is rumored to have been the original choice to play evil Cobra Kai sensei John Kreese in The Karate Kid. Presumably he turned the role down because, realistically, no student trained by Chuck Norris could ever possibly lose a match."
        },
        {
        "categories": [],
        "created_at": "2020-01-05 13:42:25.905626",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "0wIjXd4ASTS5Kogij9NTFA",
        "updated_at": "2020-01-05 13:42:25.905626",
        "url": "https://api.chucknorris.io/jokes/0wIjXd4ASTS5Kogij9NTFA",
        "value": "Chuck Norris never went to karate class, he was born kicking butt."
        },
        {
        "categories": [],
        "created_at": "2020-01-05 13:42:26.766831",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "6DnR00l9SjOlb4ybLLEl6Q",
        "updated_at": "2020-01-05 13:42:26.766831",
        "url": "https://api.chucknorris.io/jokes/6DnR00l9SjOlb4ybLLEl6Q",
        "value": "All people say that the future is robots and futuristic buildings and technology. The real future is Chuck Norris as the ruler of the world. And ruler of roundhouse kicks and karate."
        },
        {
        "categories": [],
        "created_at": "2020-01-05 13:42:26.991637",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "AOkjM2-fSjalqzOsyRuLEw",
        "updated_at": "2020-01-05 13:42:26.991637",
        "url": "https://api.chucknorris.io/jokes/AOkjM2-fSjalqzOsyRuLEw",
        "value": "Chuck Norris once rappelled 12,000 ft. down a mountain cliff to save a baby eagle chick that had fallen from its nest. After he returned the chick to its nest, the mother eagle flew in carrying a dead rabbit. Chuck Norris killed her instantly with a karate chop for being neglectful and threw her feathered carcass off the cliff. Then he ripped the rabbit apart with his teeth and lovingly fed the eagle chick mouth to beak. Chuck Norris is epic."
        },
        {
        "categories": [],
        "created_at": "2020-01-05 13:42:28.664997",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "1kIzBSo9QZ2ImoKeKemXUA",
        "updated_at": "2020-01-05 13:42:28.664997",
        "url": "https://api.chucknorris.io/jokes/1kIzBSo9QZ2ImoKeKemXUA",
        "value": "When Chuck Norris kills yo mamma don't cry he was just telling her he likes her sweater in karate"
        },
        {
        "categories": [],
        "created_at": "2020-01-05 13:42:28.984661",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "8PdIsuZHRbCNAloUXoj25g",
        "updated_at": "2020-01-05 13:42:28.984661",
        "url": "https://api.chucknorris.io/jokes/8PdIsuZHRbCNAloUXoj25g",
        "value": "Chuck Norris once ate an entire ream of rice paper and shat out origami swans and Mister Miyagi from Karate Kid."
        },
        {
        "categories": [],
        "created_at": "2020-01-05 13:42:28.984661",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "54PO81BfQnihhsv2er10vg",
        "updated_at": "2020-01-05 13:42:28.984661",
        "url": "https://api.chucknorris.io/jokes/54PO81BfQnihhsv2er10vg",
        "value": "Chuck Norris won a Pulitzer for his \"Karate for Dummies\" booklet."
        },
        {
        "categories": [
        "political"
        ],
        "created_at": "2020-01-05 13:42:29.855523",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "rusbceqptosnj7risv3xpq",
        "updated_at": "2020-01-05 13:42:29.855523",
        "url": "https://api.chucknorris.io/jokes/rusbceqptosnj7risv3xpq",
        "value": "Chuck Norris is responsible for China's over-population. He hosted a Karate tournament in Beijing and all women within 1,000 miles became pregnant instantly."
        },
        {
        "categories": [],
        "created_at": "2020-01-05 13:42:30.177068",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "mxNuTnRDQvyud88Ntb2y7A",
        "updated_at": "2020-01-05 13:42:30.177068",
        "url": "https://api.chucknorris.io/jokes/mxNuTnRDQvyud88Ntb2y7A",
        "value": "Chuck Norris once had diarrhea, he shat karate"
        }
        ]
        })
})



app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening on port ',3000)
})



