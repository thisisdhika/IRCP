const weeklyDataPeopleCount = {
  type: "day",
  peopleInCount: {
    data: [
      { name: "People In Count", date: "10-3-2021", count: 7 },
      { name: "People In Count", date: "11-3-2021", count: 4 },
      { name: "People In Count", date: "12-3-2021", count: 3.5 },
      { name: "People In Count", date: "13-3-2021", count: 5 },
      { name: "People In Count", date: "14-3-2021", count: 5 },
      { name: "People In Count", date: "15-3-2021" },
      { name: "People In Count", date: "16-3-2021" },
    ],
  },
  peopleOutCount: {
    data: [
      { name: "People Out Count", date: "10-3-2021", count: 4 },
      { name: "People Out Count", date: "11-3-2021", count: 7 },
      { name: "People Out Count", date: "12-3-2021", count: 6 },
      { name: "People Out Count", date: "13-3-2021", count: 3 },
      { name: "People Out Count", date: "14-3-2021", count: 8 },
      { name: "People Out Count", date: "15-3-2021" },
      { name: "People Out Count", date: "16-3-2021" },
    ],
  },
};

const monthlyDataPeopleCount = {
  type: "week",
  peopleInCount: {
    data: [
      { name: "People In Count", date: "7-3-2021", count: 75 },
      { name: "People In Count", date: "14-3-2021", count: 88 },
      { name: "People In Count", date: "21-3-2021", count: 15 },
      { name: "People In Count", date: "28-3-2021" },
      { name: "People In Count", date: "4-4-2021" },
    ],
  },
  peopleOutCount: {
    data: [
      { name: "People Out Count", date: "7-3-2021", count: 95 },
      { name: "People Out Count", date: "14-3-2021", count: 75 },
      { name: "People Out Count", date: "21-3-2021", count: 20 },
      { name: "People Out Count", date: "28-3-2021" },
      { name: "People Out Count", date: "4-4-2021" },
    ],
  },
};

const yearlyDataPeopleCount = {
  type: "date",
  peopleInCount: {
    data: [
      { name: "People In Count", date: "1-2-2021", count: 488 },
      { name: "People In Count", date: "1-3-2021", count: 512 },
      { name: "People In Count", date: "1-4-2021", count: 204 },
      { name: "People In Count", date: "1-5-2021" },
      { name: "People In Count", date: "1-6-2021" },
      { name: "People In Count", date: "1-7-2021" },
      { name: "People In Count", date: "1-8-2021" },
      { name: "People In Count", date: "1-9-2021" },
      { name: "People In Count", date: "1-10-2021" },
      { name: "People In Count", date: "1-11-2021" },
      { name: "People In Count", date: "1-12-2021" },
      { name: "People In Count", date: "1-1-2022" },
    ],
  },
  peopleOutCount: {
    data: [
      { name: "People Out Count", date: "1-2-2021", count: 475 },
      { name: "People Out Count", date: "1-3-2021", count: 499 },
      { name: "People Out Count", date: "1-4-2021", count: 232 },
      { name: "People Out Count", date: "1-5-2021" },
      { name: "People Out Count", date: "1-6-2021" },
      { name: "People Out Count", date: "1-7-2021" },
      { name: "People Out Count", date: "1-8-2021" },
      { name: "People Out Count", date: "1-9-2021" },
      { name: "People Out Count", date: "1-10-2021" },
      { name: "People Out Count", date: "1-11-2021" },
      { name: "People Out Count", date: "1-12-2021" },
      { name: "People Out Count", date: "1-1-2022" },
    ],
  },
};

const reportDataPeopleCount = {
  yearlyDataPeopleCount,
  weeklyDataPeopleCount,
  monthlyDataPeopleCount,
};

export default reportDataPeopleCount;
