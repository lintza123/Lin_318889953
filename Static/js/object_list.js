//Users//

//Volunteers://
const volunteers = [{
  UserName: "lintza123",
  Name: "לין צדיקריו",
  Password: "lin12345",
  Mail: "lintza@gmail.com",
  Phone: "054-9495349",
  Description: "אוהבת לעזור ולתרום לחברה",
  Image: '<img src="" alt="בלי תמונה">',
  Age: 23,
  Gender: "נקבה"
},
  {
    UserName:"Moti888",
    Name:"מוטי כהן",
    Password:"Mot55555",
    Mail:"Moti@gmail.com",
    Phone:"054-6543322",
    Description:"אוהב לעזור ולתרום לחברה",
    Image:'<img src="" alt="בלי תמונה>',
    Age:27,Gender:"זכר"
  },
  {
    UserName:"MayaLev123",
    Name: "מאיה לב",
    Password:"Maya4545",
    Mail:"MayaLev8@gmail.com",
    Phone:"054-6789043",
    Description:" ",
    Image:'<img src="" alt="בלי תמונה>',
    Age:18,Gender:"נקבה"
  }];

//Associations://

const associations=[{
  UserName:"YadArad1",
  Name:"יד לערד",
  Password:"Yad12345",
  Mail:"yadArad4@gmail.com",
  Phone:"054-7777777",
  Description:"עזרה למשפחות נזקקות וניצולי שואה",
  Image:'<img src="" alt="בלי תמונה">',
  Type:"משפחות נזקקות",
  LocationAssociation:"ערד",
  FoundationDate:"1/12/2006",
  ActiveVol:10,
  URLAso:"https://aradnik.co.il",
  AssociationDays:"א-ה",
  AssociationHours:"16:00-19:00"
},
  {
    UserName:"Hertz123",
    Name:"אבא הרצל",
    Password:"Hertz1234",
    Mail:"Hertz1@gmail.com",
    Phone:"054-5678901",
    Description:"עזרה לנזקקים באמצעות תיקון מוצרי חשמל",
    Image:'<img src="" alt="בלי תמונה">',
    Type:"משפחות נזקקות",
    LocationAssociation:"תל אביב",
    FoundationDate:"2/6/2008",
    ActiveVol:30,
    URLAso:"https://alefbet.org.il",
    AssociationDays:"א-ה",
    AssociationHours:"10:00-20:00"
  },
  {
    UserName:"Olds55",
    Name:"אגודה למען הקשישים",
    Password:"AgoOld12",
    Mail:"agoForOld@gmail.com",
    Phone:"054-7777777",
    Description:"פיתוח מערכת שירותים למען הקשישים בקרית ים",
    Image:'<img src="" alt="בלי תמונה">',
    Type:"משפחות נזקקות",
    LocationAssociation:"חיפה",
    FoundationDate:"14/4/2010",
    ActiveVol:50,
    URLAso:"https://www.israeltoremet.org/",
    AssociationDays:"א,ג",
    AssociationHours:"15:00-19:00"
  }];

//Activity Event://

const communityEvent=[{
  EventNumber:1,
  EventName: "שטיפת מכוניות למטרת צדקה",
  Purpose: "גיוס כספים למשפחות נזקקות על ידי שטיפת מכוניות",
  InitiatorName:"לין צדיקריו",
  StartDate:"12/12/2022",
  EndDate:"12/12/2022",
  BeginningTime:'08:00',
  EndTime:'12:30',
  Location:"חניון קניון גבעתיים",
  MinimumVolunteers: 10,
  MaximumVolunteers:50,
  RequiredEquipment:"סבון, מטליות, ספוגים",
  Notes: "",
  PhoneUser:"054-9495349"
},
  {
    EventNumber:2,
    EventName:"צביעת גן השעשועים",
    Purpose:"להפיח מחדש חיים בגן השעשועים המוזנח והישן",
    InitiatorName:"מוטי כהן",
    StartDate:"20/12/2022",
    EndDate:"23/12/2022",
    BeginningTime:'16:00',
    EndTime:'19:00',
    Location:'שכונת מעוף, ערד',
    MinimumVolunteers: 15,
    MaximumVolunteers:40,
    RequiredEquipment:"מברשות צבע, צבעים שונים לצביעה",
    Notes:"שלושה ימים המוקדשים כדי לשמח את ילדי השכונה בגן שעשועים חדש ויפה",
    PhoneUser:"054-6543322"
  },
  {
    EventNumber:3,
    EventName:"תרומת בגדים",
    Purpose: "איסוף בגדים כדי להעניק למשפחות נזקקות",
    InitiatorName: " ",
    StartDate:"13/3/2023",
    EndDate:"14/3/2023",
    BeginningTime:"17:00",
    EndTime:"20:00",
    Location:"פארק לאומי, רמת גן",
    MinimumVolunteers:10,
    MaximumVolunteers:100,
    RequiredEquipment:"חולצות, נעליים, מכנסיים, ועוד...",
    Notes:"",
    PhoneUser:"054-7777777"
  }];
