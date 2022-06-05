# Getting Started with Faux Users Package

## Quick Start

### `npm install faux-users-us`

`const create_users = require('faux-users-us')`

`const user = create_users.generateFullUser()`

### Example Output:
{\
    _id: 'ea402d0a-c8ea-4b9a-ba31-a05d90746822',\
    first_name: 'Rosalyn',\
    last_name: 'Williams',\
    username: 'Rosalyn#7577',\
    email: 'Rosalyn638@gmail.com',\
    phone: '(806) 623-9957',\
    address: {\
      street: '3836 Beeston Market',\
      city: 'Springdale',\
      state: 'Texas',\
      zip: '04499'\
    }\
  }

#### Full List of possible methods to build your own users:
getRandomFirstName\
getRandomLastName\
getRandomFullName\
getRandomFemaleFirstName\
getRandomFemaleFullName\
getRandomMaleFirstName\
getRandomMaleFullName\
generateRandomPhoneNumber\
generateRandomEmail\
generateRandomUsername\
getRandomStreetAddress\
getRandomCity\
getRandomState\
generateRandomZip\
generateFullAddress\
generateFullAddressOneLine\
generateFullUser\
generateFullUserArray

Check out the [github here](https://github.com/andrewsa1006/faux_users). Let me know if you have any questions.