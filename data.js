
const initActions = (data) => {
  const resp = data.map((ele, pos) => {
    return { ...ele, actions: [] }
  })

  return resp
}

const DATA = {
  // svg props
  SVG_PROPS: {
    SVGOthers: {
      fill: "none",
      strokeWidth: 1.5,
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


  // months data
  MONTHS: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  articles: {
    "data": [
      {
        uuid: 'b6893e1d-3aa0-4e8e-a25e-ed0f41fbcbb1',
        title: 'McDermott keeps unchanged England squad for France',
        published_at: '2026-10-20T06:31:32.000Z',
        publisher: 'Oz Arab Media',
        actions: []
      },
      {
        uuid: 'b560c02e-a166-4419-be58-2a9ca69aea61',
        title: 'Case registered over ‘defamatory’ remarks against Tamil Nadu CM Vijay',
        published_at: '2026-10-20T06:19:19.000Z',
        publisher: 'The Hindu',
        actions: []
      },
      {
        uuid: 'f85cbb53-70a9-4c03-bef7-26b9865619ba',
        title: 'The Ustad Bismillah Khan Yuva Puraskar',
        published_at: '2026-10-20T06:08:35.000Z',
        publisher: 'INSIGHTS IAS',
        actions: []
      },
      {
        uuid: '78380943-68ca-4147-9521-b9c62a6fad36',
        title: "CPI(M) holds night march in Keralam’s Malappuram, seeks Gyanesh Kumar’s resignation over 'denial of voting rights’",
        published_at: '2026-10-20T06:08:07.000Z',
        publisher: 'The Hindu',
        actions: []
      },
      {
        uuid: '4014ebfb-57aa-451e-b778-5a51e63e3c5f',
        title: 'A2O Lite’s strong start tests whether Lee Soo-man’s K-pop formula still works',
        published_at: '2026-10-20T06:04:28.000Z',
        publisher: 'The Korea Herald',
        actions: []
      },
      {
        uuid: '2800066c-4c24-4c99-917c-0f699f3c5435',
        title: 'Study explores potential breast cancer benefits of neurokinin receptor antagonists',
        published_at: '2026-10-20T06:03:00.000Z',
        publisher: 'News-Medical',
        actions: []
      },
      {
        uuid: 'c11b80c6-33cb-4f55-9574-5587e7a599dc',
        title: 'Midfield war! Pedri and Vitinha set for epic ball battle as PSG clash with firing Barca',
        published_at: '2026-10-20T06:00:06.000Z',
        publisher: 'Goal.com',
        actions: []
      },
      {
        uuid: 'd1c1c1df-9402-4080-b2d5-7dd10769a23b',
        title: 'India’s cultural heritage defines its true identity, says Union Minister Shekhawat',
        published_at: '2026-10-20T05:57:24.000Z',
        publisher: 'The New Indian Express',
        actions: []
      },
      {
        uuid: '99c5f9b0-82ed-4ae0-8a9e-6894a92574bf',
        title: 'MS Dhoni’s Cheeky Ice Cream Prank On Sakshi Leaves Internet In Awe, Fans Call It His ‘Love Language’ (WATCH)',
        published_at: '2026-10-20T05:52:31.000Z',
        publisher: 'Asianet Newsable',
        actions: []
      },
      {
        uuid: 'fd3a8ca8-84ee-4e12-847b-ba714e064bbf',
        title: 'Alberta voters reject plan for referendum to leave Canada, CBC projects',
        published_at: '2026-10-20T05:50:00.000Z',
        publisher: 'The Guardian',
        actions: []
      }
    ],
    "meta": {
      "page_size": 10,
      "returned": 10,
      "has_more": true,
      "order_by": "recent",
      "filters": {
        "published_after": null,
        "published_before": null,
        "language": "en",
        "country": "IN",
        "topic": null,
        "publisher_uuid": null,
        "author_uuid": null,
        "q": null,
        "in_title": null,
        "in_body": null,
        "in_subtitle": null
      },
      "offset": 0,
      "next_offset": 10,
      "next_cursor": "eyJ2IjoxLCJvcmRlcl9ieSI6InJlY2VudCIsInNpZyI6ImYyZGEyODg5NDQ1ZTdiZTZlMTU1NDgzZmUzZmI4NTA5NjBmZDYwZjU0ZWQ3YTM2NWNjY2M2OTg5ZDliZGZkZWUiLCJsYXN0X3B1Ymxpc2hlZF9hdCI6IjIwMjYtMTAtMjBUMDU6NTA6MDAuMDAwWiIsImxhc3RfaWQiOjM0NjUxOTM1fQ"
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


export default DATA
