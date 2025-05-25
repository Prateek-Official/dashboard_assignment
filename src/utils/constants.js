export const paths = ["CRM", "Account", "Account Details"];

export const emailList = [
  "PrateekVerma@Onechanneladmin.com",
  "JohnDoe123@Onechanneladmin.com",
  "Shakitman123@Onechanneladmin.com",
  "Gangadhar123@Onchanneladmin.com",
];

export const tabs = [
  "Dashboard",
  "Orders",
  "Address",
  "Notes",
  "Tasks",
  "Contacts",
  "Credit History",
];

export const lastMonthData = [
  {
    id: Math.random(),
    icon: "bag",
    heading: "Total Orders",
    data: "123",
    profitLoss: "profit",
    percent: "28%",
    update: "From The Last Month",
  },
  {
    id: Math.random(),
    icon: "wallet",
    heading: "Total Taken",
    data: "123",
    profitLoss: "loss",
    percent: "15%",
    update: "From The Last Month",
  },
  {
    id: Math.random(),
    icon: "dollar",
    heading: "Total Revenue",
    data: "123",
    profitLoss: "profit",
    percent: "28%",
    update: "From The Last Month",
  },
  {
    id: Math.random(),
    icon: "watch",
    heading: "Pending Orders",
    data: "$1234.99",
    profitLoss: "profit",
    percent: "28%",
    update: "From The Last Month",
  },
  {
    id: Math.random(),
    icon: "sync",
    heading: "Pending Returns",
    data: "$1234.99",
    profitLoss: "loss",
    percent: "28%",
    update: "From The Last Month",
  },
];

export const cardsPerPage = 3;

export const categories = [
  "All Categories",
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
];

export const years = ["2020", "2021", "2022", "2023", "2024", "2025"];

export const orderData = [
  {
    icon: "square",
    heading: "All",
    data: "50",
    marginBot: "true",
  },
  {
    icon: "watch",
    heading: "Pending",
    data: "50",
    marginBot: "true",
  },
  {
    icon: "tick",
    heading: "Delivered",
    data: "123",
    marginBot: "false",
  },
  {
    icon: "party",
    heading: "New",
    data: "50",
    marginBot: "true",
  },
  {
    icon: "truck",
    heading: "Dispatched",
    data: "50",
    marginBot: "true",
  },
  {
    icon: "cancel",
    heading: "Cancelled",
    data: "50",
    marginBot: "false",
  },
];

export const doughnutData = {
  labels: ["A", "B", "C", "D", "E"],
  datasets: [
    {
      label: "Order Status",
      data: [20, 20, 20, 20, 20],
      backgroundColor: ["#f75d5f", "#f7a23b", "#fcc630", "#0fca7b", "#8478ff"],
    },
  ],
};

export const doughnutOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: "#fff",
      formatter: (value) => value + "%",
      font: {
        weight: "bold",
        size: 16,
      },
    },
  },
};

export const months = [
  "Jan 2023",
  "Feb 2023",
  "Mar 2023",
  "Apr 2023",
  "May 2023",
  "June 2023",
  "July 2023",
  "Aug 2023",
  "Sep 2023",
  "Oct 2023",
  "Nov 2023",
  "Dec 2023",
];

export const revenueTabs = ["Revenue", "Orders", "Customer"];

export const recentOrderHeadDetails = [
  "ORDER ID",
  "PRODUCTS",
  "CUSTOMER",
  "CHANNEL",
  "TOTAL",
  "DELIVERY DATE",
];

export const recentCustomerList = [
  {
    id: "275936",
    quantity: "x1",
    item: "Mobile",
    customer: "ebay",
    channel: "Gabriella Golden",
    total: "400.00",
    delivery: "Today",
  },
  {
    id: "415368",
    quantity: "x4",
    item: "Shirt",
    customer: "Walmart",
    channel: "Harris Santana",
    total: "151.00",
    delivery: "Today",
  },
  {
    id: "564792",
    quantity: "x2",
    item: "Perfume",
    customer: "facebook",
    channel: "Lillia Ponce",
    total: "167.00",
    delivery: "Tomorrow",
  },
  {
    id: "357159",
    quantity: "x3",
    item: "watch",
    customer: "amazon",
    channel: "Rehan Chase",
    total: "262.00",
    delivery: "Tomorrow",
  },
  {
    id: "741963",
    quantity: "x5",
    item: "Lipstick",
    customer: "etsy",
    channel: "Maxim Bray",
    total: "319.00",
    delivery: "05/01/2025",
  },
];

export const recentActivityMessages = [
  {
    id: Math.random(),
    sender: "Shaktimaan",
    text: "Sent Message to",
    receiver: "Gangadhar",
    timeStamp: "5/25/2025, 08:01:13 pm",
    replies: [
      {
        id: Math.random(),
        sender: "Gangadhar",
        text: "Replay your message",
        receiver: "Hello",
        timeStamp: "5/25/2025, 12:43:13 pm",
        replies: {},
      },
    ],
  },

  {
    id: Math.random(),
    sender: "Shakitmaan",
    text: "Accept Order from",
    receiver: "Flipkart",
    timeStamp: "5/25/2025, 06:43:13 pm",
    replies: [
      {
        id: Math.random(),
        sender: "White Walker",
        text: "Replay your message",
        receiver: "Flipkart",
        timeStamp: "5/25/2025, 10:43:13 pm",
        replies: {},
      },
      {
        id: Math.random(),
        sender: "White Walker",
        text: "Replay your message",
        receiver: "Flipkart",
        timeStamp: "5/25/2025, 10:43:13 pm",
        replies: {},
      },
    ],
  },

  {
    id: Math.random(),
    sender: "World War Hulk",
    text: "Accept Order from",
    receiver: "Amazon",
    timeStamp: "5/24/2025, 12:43:13 pm",
    replies: [],
  },

  {
    id: Math.random(),
    sender: "Christian Wood",
    text: "Accept Order from",
    receiver: "Amazon",
    timeStamp: "5/22/2025, 10:43:13 pm",
    replies: [],
  },
];

export const monthsByIndex = {
  1: "JAN",
  2: "FEB",
  3: "MAR",
  4: "APR",
  5: "MAY",
  6: "JUN",
  7: "JUL",
  8: "AUG",
  9: "SEP",
  10: "OCT",
  11: "NOV",
  12: "DEC",
};

export const recentActivityMessages2 = [
  {
    id: Math.random(),
    sender: "Shaktimaan",
    text: "Sent Message to",
    receiver: "Gangadhar",
    day: "today",
    timeStamp: "1 min ago",
    replies: [
      {
        id: Math.random(),
        sender: "Gangadhar",
        text: "Replay your message",
        receiver: "Hello",
        day: "today",
        timeStamp: "1 min ago",
        replies: {},
      },
    ],
  },

  {
    id: Math.random(),
    sender: "Shakitmaan",
    text: "Accept Order from",
    receiver: "Flipkart",
    day: "today",
    timeStamp: "1 min ago",
    replies: [
      {
        id: Math.random(),
        sender: "White Walker",
        text: "Replay your message",
        receiver: "Flipkart",
        day: "today",
        timeStamp: "1 min ago",
        replies: {},
      },
      {
        id: Math.random(),
        sender: "White Walker",
        text: "Replay your message",
        receiver: "Flipkart",
        day: "today",
        timeStamp: "1 min ago",
        replies: {},
      },
    ],
  },

  {
    id: Math.random(),
    sender: "World War Hulk",
    text: "Accept Order from",
    receiver: "Amazon",
    day: "yesterday",
    timeStamp: "12:30PM",
    replies: [],
  },

  {
    id: Math.random(),
    sender: "Christian Wood",
    text: "Accept Order from",
    receiver: "Amazon",
    day: "24 MAY 2025",
    timeStamp: "11:20AM",
    replies: [],
  },
];
