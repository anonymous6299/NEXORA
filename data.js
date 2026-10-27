// constant data for multiple pages

const DATA = {
  // svg props
  SVG_PROPS: {
    SVGOthers: {
      fill: "none",
      stroke: "currentColor",
    },
    PathOthers: {
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  },


  // action svg d values
  D_Val_Action: {
    bookmark: "M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z",
    download: "m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    notes: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
  },


  // svg d values for btns in article page
  D_Val_Article: [
    "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z",

    "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3",

    "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
  ],

  news: {
    "response": {
      "status": "ok",
      "userTier": "developer",
      "total": 2698106,
      "startIndex": 1,
      "pageSize": 10,
      "currentPage": 1,
      "pages": 269811,
      "orderBy": "newest",
      "results": [
        {
          id: 'sport/live/2026/oct/21/south-africa-v-australia-second-test-day-four-cricket-st-georges-park-gqeberha-live-updates',
          type: 'liveblog',
          sectionId: 'sport',
          sectionName: 'Sport',
          webPublicationDate: '2026-10-21T11:15:17Z',
          webTitle: 'South Africa v Australia: second men’s cricket Test, day four – live',
          webUrl: 'https://www.theguardian.com/sport/live/2026/oct/21/south-africa-v-australia-second-test-day-four-cricket-st-georges-park-gqeberha-live-updates',
          apiUrl: 'https://content.guardianapis.com/sport/live/2026/oct/21/south-africa-v-australia-second-test-day-four-cricket-st-georges-park-gqeberha-live-updates',
          fields: {
            trailText: ' Australia resume their first innings with a mountain to climb against the Proteas in Gqeberha. Join our writers for updates',
            byline: 'Geoff Lemon (now) and Daniel Gallan (later)',
            thumbnail: 'https://media.guim.co.uk/be2b2ac1c075468f27cc19af8b5ae01f993e903c/454_0_3335_2668/500.jpg'
          },
          isHosted: false,
          pillarId: 'pillar/sport',
          pillarName: 'Sport',
        },
        {
          id: 'politics/live/2026/oct/21/jackdaw-gasfield-labour-andy-burnham-zack-polanski-uk-politics-latest-news',
          type: 'liveblog',
          sectionId: 'politics',
          sectionName: 'Politics',
          webPublicationDate: '2026-10-21T11:14:13Z',
          webTitle: 'Burnham faces Badenoch at PMQs after Jackdaw gasfield approved – UK politics live',
          webUrl: 'https://www.theguardian.com/politics/live/2026/oct/21/jackdaw-gasfield-labour-andy-burnham-zack-polanski-uk-politics-latest-news',
          apiUrl: 'https://content.guardianapis.com/politics/live/2026/oct/21/jackdaw-gasfield-labour-andy-burnham-zack-polanski-uk-politics-latest-news',
          fields: {
            trailText: 'The Jackdaw field will start supplying gas to homes and businesses from the end of the month, the government said',
            byline: 'Andrew Sparrow',
            thumbnail: 'https://media.guim.co.uk/6e8ba5c47c1e50cec9f335d9e6acbf2cde1004f4/1031_0_5157_4126/500.jpg'
          },
          isHosted: false,
          pillarId: 'pillar/news',
          pillarName: 'News',
        },
        {
          id: 'business/live/2026/oct/21/uk-inflation-jump-rising-motor-fuels-cost-jackdaw-gas-field-latest-news-updates',
          type: 'liveblog',
          sectionId: 'business',
          sectionName: 'Business',
          webPublicationDate: '2026-10-21T11:12:54Z',
          webTitle: 'Total UK government debt hits £3tn for first time while inflation jumps to highest in nearly a year – business live',
          webUrl: 'https://www.theguardian.com/business/live/2026/oct/21/uk-inflation-jump-rising-motor-fuels-cost-jackdaw-gas-field-latest-news-updates',
          apiUrl: 'https://content.guardianapis.com/business/live/2026/oct/21/uk-inflation-jump-rising-motor-fuels-cost-jackdaw-gas-field-latest-news-updates',
          fields: {
            trailText: 'French government bond yields highest since 2002 as country rocked by protests; UK approves controversial North Sea gasfield Jackdaw',
            byline: 'Julia Kollewe',
            thumbnail: 'https://media.guim.co.uk/0704a051cf34b4e413070fc91bc4f1e95d37619a/655_0_6797_5438/500.jpg'
          },
          isHosted: false,
          pillarId: 'pillar/news',
          pillarName: 'News',
        },
        {
          id: 'politics/2026/oct/21/bereaved-civil-service-families-tax-bills-pension-scheme-delays-capita-death-in-benefit-claims',
          type: 'article',
          sectionId: 'politics',
          sectionName: 'Politics',
          webPublicationDate: '2026-10-21T11:12:49Z',
          webTitle: 'Bereaved civil service families could face ‘unjust’ tax bills due to pension scheme delays',
          webUrl: 'https://www.theguardian.com/politics/2026/oct/21/bereaved-civil-service-families-tax-bills-pension-scheme-delays-capita-death-in-benefit-claims',
          apiUrl: 'https://content.guardianapis.com/politics/2026/oct/21/bereaved-civil-service-families-tax-bills-pension-scheme-delays-capita-death-in-benefit-claims',
          fields: {
            trailText: 'MPs say ‘chaos’ at Capita-run scheme could mean some claims miss tax-free time limit on lump sum payments',
            byline: 'Anna Tims',
            thumbnail: 'https://media.guim.co.uk/7e05629c61b0333e56dc3fe3ceba89fbfbcf46d2/688_0_6880_5504/500.jpg'
          },
          isHosted: false,
          pillarId: 'pillar/news',
          pillarName: 'News',
        },
        {
          id: 'us-news/ng-interactive/2026/oct/21/louisiana-eviction-courts-system',
          type: 'interactive',
          sectionId: 'us-news',
          sectionName: 'US news',
          webPublicationDate: '2026-10-21T11:00:04Z',
          webTitle: '‘Sham tribunal’: one family’s battle with Louisiana’s ‘feudal’ eviction courts',
          webUrl: 'https://www.theguardian.com/us-news/ng-interactive/2026/oct/21/louisiana-eviction-courts-system',
          apiUrl: 'https://content.guardianapis.com/us-news/ng-interactive/2026/oct/21/louisiana-eviction-courts-system',
          fields: {
            trailText: 'In rural Louisiana, eviction hearings are held at kitchen tables and other unorthodox venues – and many justices have little legal training',
            byline: 'Oliver Laughland and Will Craft with photography by Annie Flanagan',
            thumbnail: 'https://media.guim.co.uk/28744338567c9a6ace41dba2b08cef8fb86cd826/17_0_3167_2534/500.jpg'
          },
          isHosted: false,
          pillarId: 'pillar/news',
          pillarName: 'News',
        },
        {
          id: 'football/2026/oct/21/manchester-city-fifa-rules-grassroots-philipp-lahm',
          type: 'article',
          sectionId: 'football',
          sectionName: 'Football',
          webPublicationDate: '2026-10-21T11:00:04Z',
          webTitle: 'Football must not be detached from its roots as was the case with Manchester City | Philipp Lahm',
          webUrl: 'https://www.theguardian.com/football/2026/oct/21/manchester-city-fifa-rules-grassroots-philipp-lahm',
          apiUrl: 'https://content.guardianapis.com/football/2026/oct/21/manchester-city-fifa-rules-grassroots-philipp-lahm',
          fields: {
            trailText: 'City behaved much like other top clubs but their rule-breaking deserves to be punished. The Bundesliga, where members have a controlling stake, can show the way forward',
            byline: 'Philipp Lahm',
            thumbnail: 'https://media.guim.co.uk/e3291a2244a700715dd2419646e7512cb1e4cb12/324_0_4139_3312/500.jpg'
          },
          isHosted: false,
          pillarId: 'pillar/sport',
          pillarName: 'Sport',
        },
        {
          id: 'us-news/ng-interactive/2026/oct/21/louisiana-justice-of-peace-courts-methodology',
          type: 'interactive',
          sectionId: 'us-news',
          sectionName: 'US news',
          webPublicationDate: '2026-10-21T11:00:03Z',
          webTitle: 'How the Guardian reported on Louisiana’s justice of the peace courts',
          webUrl: 'https://www.theguardian.com/us-news/ng-interactive/2026/oct/21/louisiana-justice-of-peace-courts-methodology',
          apiUrl: 'https://content.guardianapis.com/us-news/ng-interactive/2026/oct/21/louisiana-justice-of-peace-courts-methodology',
          fields: {
            trailText: 'Reporters scanned more than 11,000 pages and processed thousands of hand-written and often incomplete records',
            byline: 'Will Craft and Tom Richards with Rachel Shur',
            thumbnail: 'https://media.guim.co.uk/85adc058493b4219f688bdd21b2be358213d1a14/0_173_3316_2654/500.jpg'
          },
          isHosted: false,
          pillarId: 'pillar/news',
          pillarName: 'News',
        },
        {
          id: 'sport/2026/oct/21/austin-gp-about-much-more-than-potential-kimi-antonelli-first-f1-world-title',
          type: 'article',
          sectionId: 'sport',
          sectionName: 'Sport',
          webPublicationDate: '2026-10-21T11:00:03Z',
          webTitle: ' Austin GP is about much more than potential for Antonelli’s first F1 world title',
          webUrl: 'https://www.theguardian.com/sport/2026/oct/21/austin-gp-about-much-more-than-potential-kimi-antonelli-first-f1-world-title',
          apiUrl: 'https://content.guardianapis.com/sport/2026/oct/21/austin-gp-about-much-more-than-potential-kimi-antonelli-first-f1-world-title',
          fields: {
            trailText: 'The young Italian driver’s maiden championship is all but secured but Mercedes upgrades will inform next year’s run to the line',
            byline: 'Giles Richards in Austin',
            thumbnail: 'https://media.guim.co.uk/b7b507c1570357d7d2a5587e125a8a33c1a10667/120_92_3593_2874/500.jpg'
          },
          isHosted: false,
          pillarId: 'pillar/sport',
          pillarName: 'Sport',
        },
        {
          id: 'global-development/2026/oct/21/el-salvador-crackdown-president-bukele-mass-arrest-allegations-torture-killing-prison',
          type: 'article',
          sectionId: 'global-development',
          sectionName: 'Global development',
          webPublicationDate: '2026-10-21T11:00:02Z',
          webTitle: '‘I never saw my son, until they handed him over in a bag’: inside El Salvador’s brutal crime crackdown',
          webUrl: 'https://www.theguardian.com/global-development/2026/oct/21/el-salvador-crackdown-president-bukele-mass-arrest-allegations-torture-killing-prison',
          apiUrl: 'https://content.guardianapis.com/global-development/2026/oct/21/el-salvador-crackdown-president-bukele-mass-arrest-allegations-torture-killing-prison',
          fields: {
            trailText: 'President Nayib Bukele’s campaign of mass arrest has been marked by allegations of torture and killing. Four years on, 120,000 people are still in prison',
            byline: 'Harriet Barber',
            thumbnail: 'https://media.guim.co.uk/7b84fc671ba68a2bf683a28d81cccfd23ef9dcbe/120_99_2709_2168/500.jpg'
          },
          isHosted: false,
          pillarId: 'pillar/news',
          pillarName: 'News',
        },
        {
          id: 'uk-news/2026/oct/21/stratford-internationalinternational-trains-budget-boost',
          type: 'article',
          sectionId: 'uk-news',
          sectionName: 'UK news',
          webPublicationDate: '2026-10-21T10:59:12Z',
          webTitle: 'Stratford International on track to get cross-Channel trains in budget boost',
          webUrl: 'https://www.theguardian.com/uk-news/2026/oct/21/stratford-internationalinternational-trains-budget-boost',
          apiUrl: 'https://content.guardianapis.com/uk-news/2026/oct/21/stratford-internationalinternational-trains-budget-boost',
          fields: {
            trailText: 'Sadiq Khan says upgrade would unlock station’s potential and allow it to live up to its name and be truly international',
            byline: 'Joanna Partridge',
            thumbnail: 'https://media.guim.co.uk/56b6cdee5adaae08a5660ee1f509c79ec8c515f7/0_0_4267_3413/500.jpg'
          },
          isHosted: false,
          pillarId: 'pillar/news',
          pillarName: 'News',
        }, {
          "id": "world/2026/oct/24/israel-soldiers-raze-west-bank-neighbourhood-hebron-families-from-homes",
          "type": "article",
          "sectionId": "world",
          "sectionName": "World news",
          "webPublicationDate": "2026-10-25T06:24:46Z",
          "webTitle": "Israeli soldiers raze neighbourhood in Hebron, driving families from homes",
          "webUrl": "https://www.theguardian.com/world/2026/oct/24/israel-soldiers-raze-west-bank-neighbourhood-hebron-families-from-homes",
          "apiUrl": "https://content.guardianapis.com/world/2026/oct/24/israel-soldiers-raze-west-bank-neighbourhood-hebron-families-from-homes",
          "fields": {
            "trailText": "PM Benjamin Netanyahu vows ‘to destroy this place’ in retaliation for militant attack on army checkpoint",
            "byline": "Julian Borger in Jerusalem",
            "thumbnail": "https://media.guim.co.uk/070c0491a86f1916db6f7b08a147bb7b4fa7f848/458_0_4583_3667/500.jpg"
          },
          "isHosted": false,
          "pillarId": "pillar/news",
          "pillarName": "News"
        },
        {
          "id": "tv-and-radio/2026/oct/25/tv-tonight-a-horny-drama-stuffed-with-sex-in-a-car-toilet-and-city-farm",
          "type": "article",
          "sectionId": "tv-and-radio",
          "sectionName": "Television & radio",
          "webPublicationDate": "2026-10-25T06:15:54Z",
          "webTitle": "TV tonight: a horny drama stuffed with sex in a car, toilet and … city farm ",
          "webUrl": "https://www.theguardian.com/tv-and-radio/2026/oct/25/tv-tonight-a-horny-drama-stuffed-with-sex-in-a-car-toilet-and-city-farm",
          "apiUrl": "https://content.guardianapis.com/tv-and-radio/2026/oct/25/tv-tonight-a-horny-drama-stuffed-with-sex-in-a-car-toilet-and-city-farm",
          "fields": {
            "trailText": "Adultery is a moreish series starring Romola Garai and Dominic Cooper. Plus, hit gang thriller This City Is Ours is back. Here’s what to watch this evening",
            "byline": "Hollie Richardson, Phil Harrison, Graeme Virtue, Jack Seale and Ellen E Jones",
            "thumbnail": "https://media.guim.co.uk/e473d90ec31c7bdfaab061f06770c712e0bcb6aa/757_140_7665_6132/500.jpg"
          },
          "isHosted": false,
          "pillarId": "pillar/arts",
          "pillarName": "Arts"
        },
        {
          "id": "uk-news/2026/oct/25/emirati-linked-firms-manchester-land",
          "type": "article",
          "sectionId": "uk-news",
          "sectionName": "UK news",
          "webPublicationDate": "2026-10-25T06:00:55Z",
          "webTitle": "Emirati-linked firms’ ownership of Manchester land ‘up 39%’ in ten years",
          "webUrl": "https://www.theguardian.com/uk-news/2026/oct/25/emirati-linked-firms-manchester-land",
          "apiUrl": "https://content.guardianapis.com/uk-news/2026/oct/25/emirati-linked-firms-manchester-land",
          "fields": {
            "trailText": "Economic ties face scrutiny after scandal over Manchester City’s financial rules",
            "byline": "Carmen Aguilar García, Michael Goodier, Josh Halliday and Philip McMahon",
            "thumbnail": "https://media.guim.co.uk/f548fe402a84152e9358e51424f2d696202430cb/720_0_7200_5760/500.jpg"
          },
          "isHosted": false,
          "pillarId": "pillar/news",
          "pillarName": "News"
        },
        {
          "id": "science/2026/oct/25/scientists-rediscover-ancient-roman-colour-changing-glass",
          "type": "article",
          "sectionId": "science",
          "sectionName": "Science",
          "webPublicationDate": "2026-10-25T06:00:55Z",
          "webTitle": "‘It’s magic’: scientists rediscover how to make ancient Roman colour-changing glass",
          "webUrl": "https://www.theguardian.com/science/2026/oct/25/scientists-rediscover-ancient-roman-colour-changing-glass",
          "apiUrl": "https://content.guardianapis.com/science/2026/oct/25/scientists-rediscover-ancient-roman-colour-changing-glass",
          "fields": {
            "trailText": "Exclusive: Optical engineering that went into 1,600-year-old Lycurgus Cup has baffled experts for centuries",
            "byline": "Dalya Alberge",
            "thumbnail": "https://media.guim.co.uk/5adc5850e4e7c935070f9c27e018c2b8db42ba73/0_897_4512_3610/500.jpg"
          },
          "isHosted": false,
          "pillarId": "pillar/news",
          "pillarName": "News"
        },
        {
          "id": "food/2026/oct/25/outlier-glasgow-g1-grace-dent-restaurant-review",
          "type": "article",
          "sectionId": "food",
          "sectionName": "Food",
          "webPublicationDate": "2026-10-25T06:00:55Z",
          "webTitle": "Outlier, Glasgow G1: ‘This kind of carefully orchestrated can’t-be-arsedness is really quite magical’ – restaurant review | Grace Dent on restaurants",
          "webUrl": "https://www.theguardian.com/food/2026/oct/25/outlier-glasgow-g1-grace-dent-restaurant-review",
          "apiUrl": "https://content.guardianapis.com/food/2026/oct/25/outlier-glasgow-g1-grace-dent-restaurant-review",
          "fields": {
            "trailText": "You cannot fake fabulous by simply buying in cool crockery and a freezer full of someone else’s pastry",
            "byline": "Grace Dent",
            "thumbnail": "https://media.guim.co.uk/2749104c9c31ec699d82bd4ab4a43a46173c2355/0_0_5840_4672/500.jpg"
          },
          "isHosted": false,
          "pillarId": "pillar/lifestyle",
          "pillarName": "Lifestyle"
        },
        {
          "id": "news/ng-interactive/2026/oct/25/thats-the-way-the-city-works-how-the-uae-changed-the-face-of-andy-burnhams-manchester",
          "type": "interactive",
          "sectionId": "news",
          "sectionName": "News",
          "webPublicationDate": "2026-10-25T06:00:54Z",
          "webTitle": "‘That’s the way the city works’: how the UAE changed the face of Andy Burnham’s Manchester",
          "webUrl": "https://www.theguardian.com/news/ng-interactive/2026/oct/25/thats-the-way-the-city-works-how-the-uae-changed-the-face-of-andy-burnhams-manchester",
          "apiUrl": "https://content.guardianapis.com/news/ng-interactive/2026/oct/25/thats-the-way-the-city-works-how-the-uae-changed-the-face-of-andy-burnhams-manchester",
          "fields": {
            "trailText": "The story of the emirates’ presence in Manchester winds from the Arab Spring to some of the most deprived places in England – with complicated results\u003Cbr\u003E\u003Cbr\u003E",
            "byline": "Josh Halliday",
            "thumbnail": "https://media.guim.co.uk/5d18e78d301848ee476161295fad0e090dc4951a/0_0_5000_4000/500.jpg"
          },
          "isHosted": false,
          "pillarId": "pillar/news",
          "pillarName": "News"
        },
        {
          "id": "world/2026/oct/25/gaza-suffering-campaign-fodder-palestinians-fear-worst-israel-election",
          "type": "article",
          "sectionId": "world",
          "sectionName": "World news",
          "webPublicationDate": "2026-10-25T06:00:54Z",
          "webTitle": "‘Gaza’s suffering has become campaign fodder’: Palestinians fear the worst from Israel election",
          "webUrl": "https://www.theguardian.com/world/2026/oct/25/gaza-suffering-campaign-fodder-palestinians-fear-worst-israel-election",
          "apiUrl": "https://content.guardianapis.com/world/2026/oct/25/gaza-suffering-campaign-fodder-palestinians-fear-worst-israel-election",
          "fields": {
            "trailText": "Humanitarian catastrophe largely ignored as rivals Gadi Eisenkot and Benjamin Netanyahu vow to end Hamas rule",
            "byline": "Seham Tantesh in Gaza and Lorenzo Tondo",
            "thumbnail": "https://media.guim.co.uk/06fe9fcd10ec9a5f068328aac3ae4eacff597b5a/326_0_4141_3313/500.jpg"
          },
          "isHosted": false,
          "pillarId": "pillar/news",
          "pillarName": "News"
        },
        {
          "id": "lifeandstyle/2026/oct/25/gave-ex-house-half-savings-now-resentful",
          "type": "article",
          "sectionId": "lifeandstyle",
          "sectionName": "Life and style",
          "webPublicationDate": "2026-10-25T06:00:54Z",
          "webTitle": "I gave my ex our house and half my savings, but now I feel resentful | Ask Annalisa Barbieri",
          "webUrl": "https://www.theguardian.com/lifeandstyle/2026/oct/25/gave-ex-house-half-savings-now-resentful",
          "apiUrl": "https://content.guardianapis.com/lifeandstyle/2026/oct/25/gave-ex-house-half-savings-now-resentful",
          "fields": {
            "trailText": "Your feelings are understandable. Exploring and accepting them may help you move on",
            "byline": "Annalisa Barbieri",
            "thumbnail": "https://media.guim.co.uk/b26725319d3e4dc03ff9509367c9ef8cc66f9e35/1304_0_7808_6250/500.jpg"
          },
          "isHosted": false,
          "pillarId": "pillar/lifestyle",
          "pillarName": "Lifestyle"
        },
        {
          "id": "stage/2026/oct/25/derren-brown-only-human-review-gasp-inducing-stunts-apollo-london",
          "type": "article",
          "sectionId": "stage",
          "sectionName": "Stage",
          "webPublicationDate": "2026-10-25T06:00:53Z",
          "webTitle": "Derren Brown turns into Nostradamus – and I predict you’ll submit to one gasp-inducing stunt after another",
          "webUrl": "https://www.theguardian.com/stage/2026/oct/25/derren-brown-only-human-review-gasp-inducing-stunts-apollo-london",
          "apiUrl": "https://content.guardianapis.com/stage/2026/oct/25/derren-brown-only-human-review-gasp-inducing-stunts-apollo-london",
          "fields": {
            "trailText": "Prophecies are impossibly fulfilled by the superstar who takes his cue from the legendary French seer in his show Only Human",
            "byline": "Brian Logan",
            "thumbnail": "https://media.guim.co.uk/b173bf590e9950f4523c1b09f5ee968cd828d7db/443_0_2851_2281/500.jpg"
          },
          "isHosted": false,
          "pillarId": "pillar/arts",
          "pillarName": "Arts"
        },
        {
          "id": "australia-news/2026/oct/25/a-place-in-the-history-books-but-no-toastie-my-time-on-board-western-sydney-airports-inaugural-flight",
          "type": "article",
          "sectionId": "australia-news",
          "sectionName": "Australia news",
          "webPublicationDate": "2026-10-25T05:31:47Z",
          "webTitle": "A place in the history books but no toastie: my time on board Western Sydney airport’s inaugural flight",
          "webUrl": "https://www.theguardian.com/australia-news/2026/oct/25/a-place-in-the-history-books-but-no-toastie-my-time-on-board-western-sydney-airports-inaugural-flight",
          "apiUrl": "https://content.guardianapis.com/australia-news/2026/oct/25/a-place-in-the-history-books-but-no-toastie-my-time-on-board-western-sydney-airports-inaugural-flight",
          "fields": {
            "trailText": "The mood is jubilant on the Airbus A320 Neo as aviation enthusiasts and locals thrill at their place on the first flight",
            "byline": "Catie McLeod Consumer affairs reporter",
            "thumbnail": "https://media.guim.co.uk/c4ef6adb10d6caa82c95f00ff7690d2a4237574b/126_0_3718_2976/500.jpg"
          },
          "isHosted": false,
          "pillarId": "pillar/news",
          "pillarName": "News"
        },
        {
          id: 'us-news/ng-interactive/2026/oct/21/louisiana-eviction-courts-system',
          type: 'interactive',
          sectionId: 'us-news',
          sectionName: 'US news',
          webPublicationDate: '2026-10-21T11:00:04Z',
          webTitle: '‘Sham tribunal’: one family’s battle with Louisiana’s ‘feudal’ eviction courts',
          webUrl: 'https://www.theguardian.com/us-news/ng-interactive/2026/oct/21/louisiana-eviction-courts-system',
          apiUrl: 'https://content.guardianapis.com/us-news/ng-interactive/2026/oct/21/louisiana-eviction-courts-system',
          fields: {
            trailText: 'In rural Louisiana, eviction hearings are held at kitchen tables and other unorthodox venues – and many justices have little legal training',
            byline: 'Oliver Laughland and Will Craft with photography by Annie Flanagan',
            thumbnail: 'https://media.guim.co.uk/28744338567c9a6ace41dba2b08cef8fb86cd826/17_0_3167_2534/500.jpg'
          },
          isHosted: false,
          pillarId: 'pillar/news',
          pillarName: 'News',
        },
        {
          id: 'football/2026/oct/21/manchester-city-fifa-rules-grassroots-philipp-lahm',
          type: 'article',
          sectionId: 'football',
          sectionName: 'Football',
          webPublicationDate: '2026-10-21T11:00:04Z',
          webTitle: 'Football must not be detached from its roots as was the case with Manchester City | Philipp Lahm',
          webUrl: 'https://www.theguardian.com/football/2026/oct/21/manchester-city-fifa-rules-grassroots-philipp-lahm',
          apiUrl: 'https://content.guardianapis.com/football/2026/oct/21/manchester-city-fifa-rules-grassroots-philipp-lahm',
          fields: {
            trailText: 'City behaved much like other top clubs but their rule-breaking deserves to be punished. The Bundesliga, where members have a controlling stake, can show the way forward',
            byline: 'Philipp Lahm',
            thumbnail: 'https://media.guim.co.uk/e3291a2244a700715dd2419646e7512cb1e4cb12/324_0_4139_3312/500.jpg'
          },
          isHosted: false,
          pillarId: 'pillar/sport',
          pillarName: 'Sport',
        },
        {
          id: 'us-news/ng-interactive/2026/oct/21/louisiana-justice-of-peace-courts-methodology',
          type: 'interactive',
          sectionId: 'us-news',
          sectionName: 'US news',
          webPublicationDate: '2026-10-21T11:00:03Z',
          webTitle: 'How the Guardian reported on Louisiana’s justice of the peace courts',
          webUrl: 'https://www.theguardian.com/us-news/ng-interactive/2026/oct/21/louisiana-justice-of-peace-courts-methodology',
          apiUrl: 'https://content.guardianapis.com/us-news/ng-interactive/2026/oct/21/louisiana-justice-of-peace-courts-methodology',
          fields: {
            trailText: 'Reporters scanned more than 11,000 pages and processed thousands of hand-written and often incomplete records',
            byline: 'Will Craft and Tom Richards with Rachel Shur',
            thumbnail: 'https://media.guim.co.uk/85adc058493b4219f688bdd21b2be358213d1a14/0_173_3316_2654/500.jpg'
          },
          isHosted: false,
          pillarId: 'pillar/news',
          pillarName: 'News',
        }
      ]
    }
  },

  rl_articles: [
    {
      "category": "Business",
      "title": "Federal Reserve Signals Rate Shift as Inflation Holds at 2.1%",
      "summary": "The Fed's latest statement hints at a new rate cycle as consumer prices stabilize for the third consecutive quarter.",
      "source": "Wall Street Journal",
      "date": "2026-08-30",
      "image": "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=900&h=500&fit=crop&auto=format",
      "actions": ["bookmark", "download"]
    },
    {
      "category": "Health",
      "title": "WHO Declares End of Mpox Public Health Emergency",
      "summary": "The World Health Organization officially closes its fourth Public Health Emergency of International Concern in three years, citing declining case counts across 47 affected nations.",
      "source": "Reuters",
      "date": "2026-08-25",
      "image": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&h=500&fit=crop&auto=format",
      "actions": ["bookmark", "notes"]
    }
  ],



  // filter country and language
  countries: ["India", "France", "Japan", "Brazil", "Germany"],
  languages: ["Hindi", "French", "Japanese", "Portuguese", "German"],




  // static data-about page
  aboutContent: ["Developed during the seventh semester, NEXORA studies how a digital news platform can reduce information fatigue without taking control away from the reader. The project combines topic, date, language, and country preferences with an editorial reading experience designed around clarity and focus.", " The prototype demonstrates the complete front-end journey: discovering stories, reading an individual article, saving content for later or offline access, and recording concise side notes. It also considers practical interface states such as pagination, loading feedback, empty results, and recoverable errors."],
  projectFocus: ["Personalized discovery", "Distraction-free reading", "Offline accessibility", "Personal knowledge capture"],
  data: [
    { "student name": "Gaurav Joshi" },
    { "enrollment number": "02615612723" },
    { "section": "F - 15" },
    { "programme": "Bachelor of Technology" },
    { "branch": "Computer Science & Technology" },
    { "semester": "VII Semester" },
    { "academic session": "2026 — 2027" },
    { "institution": "ADGIPS / GGSIPU" },
    { "project title": "NEXORA — Personalized Information Discovery & Reading Platform" },
  ],




  // static data-contact page
  T_Data: [
    { "department": "Computer Science & Technology" },
    { "academic level": "B.Tech · VII Semester" },
    { "project category": "University Minor Project" },
    { "response": "Academic enquiries are reviewed by the student project team" }
  ],
  C_Data: [
    {
      "gmail": "gauravjoshi1456@gmail.com",
      "description": "Academic and project enquiries"
    },
    {
      "github profile": "github.com/anonymous6299",
      "description": "Development work and technical profile"
    },
    {
      "source repository": "github.com/anonymous6299/NEXORA",
      "description": "Project source code and documentation"
    }
  ],
  filters: {
    topics: [
      "Select","World", "Politics", "Business", "Technology", "Science",
      "Environment", "Sport", "Culture", "Education", "Health"
    ],
    country: [
      "Country","India", "US", "UK", "Australia", "China",
      "Russia", "Ukraine", "Japan", "Germany", "France"
    ],
    languages: [
      "Lang","English", "Spanish", "German", "French", "Arabic"
    ],
    langISO:["Lang","en","es","de","fr","ar"]
  }
}
export default DATA
