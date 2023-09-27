import { faker } from "@faker-js/faker";
const randomName = faker.name.fullName();
const userName = faker.finance.accountName();
const avatar = faker.image.avatar();
const randomNumber = faker.phone.number();
const randomCountry = faker.address.county();


export const InformationUser = {
  userName: userName,
  Point: "3223",
};

export const Current_Lineup = [
  {
    Avatar: avatar,
    Player: randomName,
  },
  {
    Avatar: avatar,
    Player: randomName,
  },
  {
    Avatar: avatar,
    Player: randomName,
  },
  {
    Avatar: avatar,
    Player: randomName,
  },
  {
    Avatar: avatar,
    Player: randomName,
  },
];

export const Country = [
  {
    country: randomCountry,
    second_country: randomCountry,
  },
];

export const Latest_Result = [
  {
    Avatar: avatar,
    Player: randomName,
    Point_Player: randomNumber,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Point_Player: randomNumber,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Point_Player: randomNumber,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Point_Player: randomNumber,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Point_Player: randomNumber,
  },
];

export const Player_Collections = [
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
];



export const Openning_Player = [
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    Player: randomName,
    Country: randomCountry,
  },

];
export const Detail_Player = [
  {
    namePlayer: randomName,
    Country: randomCountry,
    Number: randomNumber,
  },
  {
    namePlayer: randomName,
    Country: randomCountry,
    Number: randomNumber,
  },
  {
    namePlayer: randomName,
    Country: randomCountry,
    Number: randomNumber,
  },
  {
    namePlayer: randomName,
    Country: randomCountry,
    Number: randomNumber,
  },
  {
    namePlayer: randomName,
    Country: randomCountry,
    Number: randomNumber,
  },
  {
    namePlayer: randomName,
    Country: randomCountry,
    Number: randomNumber,
  },
  {
    namePlayer: randomName,
    Country: randomCountry,
    Number: randomNumber,
  },
  {
    namePlayer: randomName,
    Country: randomCountry,
    Number: randomNumber,
  },
];

export const Transfer_Player = [
  {
    Avatar: avatar,
    Detail: "Cầu thủ bảng A",
    Hire: "CT$: 3.500",
  },
  {
    Avatar: avatar,
    Detail: "Cầu thủ bảng B",
    Hire: "CT$: 3.500",
  },
  {
    Avatar: avatar,
    Detail: "Cầu thủ bảng C",
    Hire: "CT$: 3.500",
  },
  {
    Avatar: avatar,
    Detail: "Cầu thủ bảng D",
    Hire: "CT$: 3.500",
  },
  {
    Avatar: avatar,
    Detail: "Cầu thủ bảng E",
    Hire: "CT$: 3.500",
  },
];

export const Opening_Player = [
  {
    Avatar: avatar,
    namePlayer: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    namePlayer: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    namePlayer: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    namePlayer: randomName,
    Country: randomCountry,
  },
  {
    Avatar: avatar,
    namePlayer: randomName,
    Country: randomCountry,
  },
];

export const Ranking = [
  {
    rankList: '1',
    userName: randomName,
    userPoint: randomNumber,
  },
  {
    rankList: '2',
    userName: randomName,
    userPoint: randomNumber,
  },
  {
    rankList: '3',
    userName: randomName,
    userPoint: randomNumber,
  },
  {
    rankList: '4',
    userName: randomName,
    userPoint: randomNumber,
  },
  {
    rankList: '5',
    userName: randomName,
    userPoint: randomNumber,
  },
  {
    rankList: '6',
    userName: randomName,
    userPoint: randomNumber,
  },
  {
    rankList: '7',
    userName: randomName,
    userPoint: randomNumber,
  },
  {
    rankList: '8',
    userName: randomName,
    userPoint: randomNumber,
  },
  {
    rankList: '9',
    userName: randomName,
    userPoint: randomNumber,
  },
];

export const Reward_Ranking = [
  {
    First: "100.000 CT$",
    Second: "20.000 CT$",
    Third: "10.000 CT$",
    Fourth: "5.000 CT$",
    Fifth: "2.000 CT$",
  },
];
