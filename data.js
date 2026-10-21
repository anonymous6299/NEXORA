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
          actions: []
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
          actions: []
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
          actions: []
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
          actions: []
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
          actions: []
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
          actions: []
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
          actions: []
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
          actions: []
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
          actions: []
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
          actions: []
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
  ]
}
const initActions = (data) => {
  const resp = data.map((ele, pos) => {
    return { ...ele, actions: [] }
  })

  return resp
}


export default DATA
