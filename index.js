const { v4: uuidv4 } = require("uuid");
const female_first_names = require("./assets/female_first_names");
const male_first_names = require("./assets/male_first_names");
const last_names = require("./assets/last_names");
const states = require("./assets/states");
const list_of_us_cities = require("list-of-us-cities");
const street_names = require("./assets/street_names");

// Utility Functions
const randomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const generateRandomThreeDigitNumber = () => {
  return ("0000" + Math.random()).slice(-3);
};

const generateRandomFourDigitNumber = () => {
  return ("0000" + Math.random()).slice(-4);
};

const generateRandomFiveDigitNumber = () => {
  return ("0000" + Math.random()).slice(-5);
};

// Functions for building a user
const getRandomFirstName = () => {
  const all_first_names = [...female_first_names, ...male_first_names];
  return randomElement(all_first_names);
};

const getRandomLastName = () => {
  return randomElement(last_names);
};

const getRandomFullName = () => {
  const all_first_names = [...female_first_names, ...male_first_names];
  return `${randomElement(all_first_names)} ${randomElement(last_names)}`;
};

const getRandomFemaleFirstName = () => {
  return randomElement(female_first_names);
};

const getRandomFemaleFullName = () => {
  return `${randomElement(female_first_names)} ${randomElement(last_names)}`;
};

const getRandomMaleFirstName = () => {
  return randomElement(male_first_names);
};

const getRandomMaleFullName = () => {
  return `${randomElement(male_first_names)} ${randomElement(last_names)}`;
};

const generateRandomPhoneNumber = () => {
  return `(${generateRandomThreeDigitNumber()}) ${generateRandomThreeDigitNumber()}-${generateRandomFourDigitNumber()}`;
};

const generateRandomEmail = (first_name) => {
  const domains = ["gmail.com", "aol.net", "yahoo.com"];
  if (first_name) {
    return `${first_name}${generateRandomThreeDigitNumber()}@${randomElement(
      domains
    )}`;
  }
  return `${getRandomFirstName()}${generateRandomThreeDigitNumber()}@${randomElement(
    domains
  )}`;
};

const generateRandomUsername = (first_name) => {
  if (first_name) {
    return `${first_name}#${generateRandomFourDigitNumber()}`;
  }
  return `${getRandomFirstName()}#${generateRandomFourDigitNumber()}`;
};

const getRandomStreetAddress = () => {
  return `${generateRandomFourDigitNumber()} ${randomElement(street_names)}`;
};

const getRandomCity = () => {
  return randomElement(list_of_us_cities);
};

const getRandomState = () => {
  return randomElement(states);
};

const generateRandomZip = () => {
  return generateRandomFiveDigitNumber();
};

const generateFullAddress = () => {
  let address = `${getRandomStreetAddress()}\n${getRandomCity()}, ${getRandomState()} ${generateRandomZip()}`;
  return address;
};

const generateFullAddressOneLine = () => {
  let address = `${getRandomStreetAddress()} ${getRandomCity()}, ${getRandomState()} ${generateRandomZip()}`;
  return address;
};

const generateFullUser = () => {
  const fname = getRandomFirstName();
  const lname = getRandomLastName();
  const user = {
    _id: uuidv4(),
    first_name: fname,
    last_name: lname,
    username: generateRandomUsername(fname),
    email: generateRandomEmail(fname),
    phone: generateRandomPhoneNumber(),
    address: {
      street: getRandomStreetAddress(),
      city: getRandomCity(),
      state: getRandomState(),
      zip: generateRandomZip(),
    },
  };
  return user;
};

const generateFullUserArray = (num) => {
  const userList = [];
  for (let i = 0; i < num; i++) {
    let user = generateFullUser();
    userList.push(user);
  }
  return userList;
};

module.exports = {
  getRandomFirstName,
  getRandomLastName,
  getRandomFullName,
  getRandomFemaleFirstName,
  getRandomFemaleFullName,
  getRandomMaleFirstName,
  getRandomMaleFullName,
  generateRandomPhoneNumber,
  generateRandomEmail,
  generateRandomUsername,
  getRandomStreetAddress,
  getRandomCity,
  getRandomState,
  generateRandomZip,
  generateFullAddress,
  generateFullAddressOneLine,
  generateFullUser,
  generateFullUserArray,
};
