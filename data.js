const articles = {
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
}

const rl_articles= [
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
        "actions": ["bookmark","notes"]
    }
]

const D_Val = {
    bookmark:"M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z",
    download:"M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z",
    notes:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
}

const initActions = (data) => {
    const resp = data.map((ele,pos)=>{
        return {...ele,actions:[]}
    })

    return resp
} 
export {articles,rl_articles,D_Val}
