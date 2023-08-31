# locale-map

## About locale-map
Locale is a developer tool for anyone who needs to know Nigeria, geographically at least. Locale’s API shows you all of Nigeria’s regions, states, and local government areas(LGAs).


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/omotega/locale-map.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Make a copy of the .env.example file to .env 

4. Execute yarn start and You will be able to access the API from localhost:8080

5. yarn seed to populate your database with the json data.


### Api Documentation

Link: https://app.theneo.io/locale/locale/locale



## APIs
---

### Signup User

- Route: /api/user/signup
- Method: POST
- Body: 
```

  {
    "name":"tenas",
    "email":"penas1@gmail.com",
    "password":"pwwertys"
}

```
- Responses

Success
```
{
    {
    "statusCode": 201,
    "message": "Signup successful",
    "data": {
        "user": {
            "user": {
                "name": "tenas ",
                "email": "penas1@gmail.com",
                "password": "$argon2id$v=19$m=65536,t=3,p=4$yFXJ6pyZCLbHbbgDtVrasQ$5mYAfroZEM5XnWDNgpHhtr96jKscR6rIdgueSPEcykk",
                "apiKey": "locale_296e8fc7-178c-4be6-a0c2-c0a7cad2d99f",
                "_id": "64aa026ed362aedf24e50b48",
                "createdAt": "2023-07-09T00:42:22.549Z",
                "updatedAt": "2023-07-09T00:42:22.549Z",
                "__v": 0
            }
        },
        "message": "you can only see this apikey once"
    }
}
}
```
---

### Login User

- Route: /api/v1/user/login
- Method: GET
- Body: 
```
{
    "email":"penas1@gmail.com",
    "password":"pwwertys"
}
```

- Responses

Success
```
{
    {
    "statusCode": 200,
    "message": "login successful",
    "data": {
        "user": {
            "_id": "64aa026ed362aedf24e50b48",
            "name": "tenas ",
            "email": "penas1@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$yFXJ6pyZCLbHbbgDtVrasQ$5mYAfroZEM5XnWDNgpHhtr96jKscR6rIdgueSPEcykk",
            "createdAt": "2023-07-09T00:42:22.549Z",
            "updatedAt": "2023-07-09T00:42:22.549Z",
            "__v": 0
        },
        "token": {}
    }
}
}
```

---
### Serach state

- Route: /api/location/searchstate
- Method: GET
- Header
    - Authorization: apiKey
- query parameter: 
```
{
   lga: Kano
}
```

- Responses

Success
```
{
    {
    "statusCode": 200,
    "message": "State found",
    "data": {
        "data": {
            "_id": "64a8952273f9036316a6e0b9",
            "state": "Kano",
            "capital": "Kano",
            "slogan": "Centre of Commerce",
            "senatorialDistricts": [
                "Kano South",
                "Kano Central",
                "Kano North"
            ],
            "lgas": [
                "Ajingi",
                "Albasu",
                "Bagwai",
                "Bebeji",
                "Bichi",
                "Bunkure",
                "Dala",
                "Dambatta",
                "Dawakin-Kudu",
                "Dawakin-Tofa",
                "Doguwa",
                "Fagge",
                "Gabasawa",
                "Garko",
                "Garun-Mallam",
                "Gaya",
                "Gezawa",
                "Gwale",
                "Gwarzo",
                "Kano-Municipal",
                "Karaye",
                "Kibiya",
                "Kiru",
                "Kumbotso",
                "Kunchi",
                "Kura",
                "Madobi",
                "Makoda",
                "Minjibir",
                "Nasarawa",
                "Rano",
                "Rimin-Gado",
                "Rogo",
                "Shanono",
                "Sumaila",
                "Takai",
                "Tarauni",
                "Tofa",
                "Tsanyawa",
                "Tudun-Wada",
                "Ungogo",
                "Warawa",
                "Wudil"
            ],
            "landmass": "20,131 km2 (7,773 sq mi)",
            "population": "9,401,288",
            "dialect": "Hausa",
            "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Nigeria_Akwa_Ibom_state_map.png/250px-Nigeria_Akwa_Ibom_state_map.png",
            "latitude": "11.9964",
            "longitude": "8.5167",
            "website": "http://www.kanostate.gov.ng/",
            "region": "North West",
            "createdDate": "1967-05-26T23:00:00.000Z",
            "createdBy": "Gen. Yakubu Gowon",
            "pastGovernors": [
                "Abdullahi Umar Ganduje",
                "Rabiu Musa Kwankwaso",
                "Ibrahim Shekarau",
                "Rabiu Musa Kwankwaso"
            ],
            "borders": [
                "Jigawa",
                "Katsina",
                "Bauchi",
                "Kaduna",
                "Katsina",
                "Zamfara",
                "Kebbi"
            ],
            "knownFor": [
                "Kano City Walls",
                "Kano Emir's Palace",
                "Kurmi Market",
                "Kofar Mata Dyeing Pit",
                "Kano City Walls",
                "Kano Emir's Palace",
                "Kurmi Market",
                "Kofar Mata Dyeing Pit"
            ],
            "__v": 0
        }
    }
}
}
```
---


### search lga(local government area)

- Route: /api/location/searchlga
- Method: GET
- Header
    - Authorization: apiKey
- query parameter: 
```
{
   state: kano
}
```
- Responses

Success
```
{
   {
    "statusCode": 200,
    "message": "local government found",
    "data": {
        "data": {
            "_id": "64a8952273f9036316a6e0b9",
            "state": "Kano",
            "capital": "Kano",
            "slogan": "Centre of Commerce",
            "senatorialDistricts": [
                "Kano South",
                "Kano Central",
                "Kano North"
            ],
            "lgas": [
                "Ajingi",
                "Albasu",
                "Bagwai",
                "Bebeji",
                "Bichi",
                "Bunkure",
                "Dala",
                "Dambatta",
                "Dawakin-Kudu",
                "Dawakin-Tofa",
                "Doguwa",
                "Fagge",
                "Gabasawa",
                "Garko",
                "Garun-Mallam",
                "Gaya",
                "Gezawa",
                "Gwale",
                "Gwarzo",
                "Kano-Municipal",
                "Karaye",
                "Kibiya",
                "Kiru",
                "Kumbotso",
                "Kunchi",
                "Kura",
                "Madobi",
                "Makoda",
                "Minjibir",
                "Nasarawa",
                "Rano",
                "Rimin-Gado",
                "Rogo",
                "Shanono",
                "Sumaila",
                "Takai",
                "Tarauni",
                "Tofa",
                "Tsanyawa",
                "Tudun-Wada",
                "Ungogo",
                "Warawa",
                "Wudil"
            ],
            "landmass": "20,131 km2 (7,773 sq mi)",
            "population": "9,401,288",
            "dialect": "Hausa",
            "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Nigeria_Akwa_Ibom_state_map.png/250px-Nigeria_Akwa_Ibom_state_map.png",
            "latitude": "11.9964",
            "longitude": "8.5167",
            "website": "http://www.kanostate.gov.ng/",
            "region": "North West",
            "createdDate": "1967-05-26T23:00:00.000Z",
            "createdBy": "Gen. Yakubu Gowon",
            "pastGovernors": [
                "Abdullahi Umar Ganduje",
                "Rabiu Musa Kwankwaso",
                "Ibrahim Shekarau",
                "Rabiu Musa Kwankwaso"
            ],
            "borders": [
                "Jigawa",
                "Katsina",
                "Bauchi",
                "Kaduna",
                "Katsina",
                "Zamfara",
                "Kebbi"
            ],
            "knownFor": [
                "Kano City Walls",
                "Kano Emir's Palace",
                "Kurmi Market",
                "Kofar Mata Dyeing Pit",
                "Kano City Walls",
                "Kano Emir's Palace",
                "Kurmi Market",
                "Kofar Mata Dyeing Pit"
            ],
            "__v": 0
        }
    }
} 
}
```
---

- Route: /api/location/searchregion
- Method: GET
- Header
    - Authorization: apiKey
- query parameter: 
```
{
   state: South East
}
```
- Responses

Success
```
{
   {
    "statusCode": 200,
    "message": "Region found",
    "data": {
        "data": [
            {
                "_id": "64a8952273f9036316a6e0a5",
                "state": "Abia",
                "capital": "Umuahia",
                "slogan": "God's Own State",
                "senatorialDistricts": [
                    "Abia Central",
                    "Abia North",
                    "Abia South"
                ],
                "lgas": [
                    "Aba North",
                    "Aba South",
                    "Arochukwu",
                    "Bende",
                    "Isuikwuato",
                    "Osisioma-Ngwa",
                    "Obioma-Ngwa",
                    "Ohafia",
                    "Ikwuano",
                    "Umu-Nneochi",
                    "Isiala Ngwa South",
                    "Isiala Ngwa North",
                    "Ugwunagbo",
                    "Ukwa West",
                    "Ukwa East",
                    "Umuahia South",
                    "Umuahia North"
                ],
                "landmass": "6,320 km2 (2,440 sq mi)",
                "population": "2,833,999",
                "dialect": "Igbo",
                "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Nigeria_Abia_state_map.png/250px-Nigeria_Abia_state_map.png",
                "latitude": "5.524913",
                "longitude": "7.494296",
                "website": "http://www.abiastate.gov.ng/",
                "region": "South East",
                "createdDate": "1991-08-26T23:00:00.000Z",
                "createdBy": "General Ibrahim Babangida",
                "pastGovernors": [
                    "Ogbonnaya Onu",
                    "Chris Akomas",
                    "Orji Uzor Kalu",
                    "Theodore Orji",
                    "Okezie Ikpeazu"
                ],
                "borders": [
                    "Akwa Ibom",
                    "Cross River",
                    "Ebonyi",
                    "Enugu",
                    "Imo",
                    "Rivers"
                ],
                "knownFor": [
                    "Enyimba International F.C.",
                    "Abia Warriors F.C.",
                    "Long Juju Slave Route, Arochukwu",
                    "Michael Okpara University of Agriculture",
                    "National War Museum",
                    "Azumini Blue River"
                ],
                "__v": 0
            },
            {
                "_id": "64a8952273f9036316a6e0af",
                "state": "Ebonyi",
                "capital": "Abakaliki",
                "slogan": "Salt of the Nation",
                "senatorialDistricts": [
                    "Ebonyi South",
                    "Ebonyi Central",
                    "Ebonyi North"
                ],
                "lgas": [
                    "Abakaliki",
                    "Afikpo-North",
                    "Afikpo-South",
                    "Bomadim",
                    "Ebonyi",
                    "Ezza-North",
                    "Ezza-South",
                    "Ikwo",
                    "Ishielu",
                    "Ivo",
                    "Izzi",
                    "Obaukwu",
                    "Ohakwu",
                    "Onicha",
                    "Ukaba"
                ],
                "landmass": "5,670 km2 (2,190 sq mi)",
                "population": "2,176,947",
                "dialect": "Igbo",
                "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Nigeria_Akwa_Ibom_state_map.png/250px-Nigeria_Akwa_Ibom_state_map.png",
                "latitude": "6.3167",
                "longitude": "8.1000",
                "website": "http://www.ebonyistate.gov.ng/",
                "region": "South East",
                "createdDate": "1996-09-30T23:00:00.000Z",
                "createdBy": "General Sani Abacha",
                "pastGovernors": [
                    "Sam Egwu",
                    "Martin Elechi",
                    "Dave Umahi"
                ],
                "borders": [
                    "Benue",
                    "Cross River",
                    "Enugu",
                    "Imo"
                ],
                "knownFor": [
                    "Mmahi Ezi Salt Lake, Okposi Okwu",
                    "Amachor Cave, Amagu",
                    "Ndibe Sand Beach, Afikpo",
                    "Greater Rice Husks, Abakaliki"
                ],
                "__v": 0
            },
            {
                "_id": "64a8952273f9036316a6e0a8",
                "state": "Anambra",
                "capital": "Awka",
                "slogan": "Light of the Nation",
                "senatorialDistricts": [
                    "Anambra Central",
                    "Anambra North",
                    "Anambra South"
                ],
                "lgas": [
                    "Aguata",
                    "Akwa North",
                    "Anambra",
                    "Anambra-West",
                    "Anaocha",
                    "Awka-North",
                    "Awka-South",
                    "Ayamelum",
                    "Dunukofia",
                    "Ekwusigo",
                    "Idemili-North",
                    "Idemili-South",
                    "Ihiala",
                    "Imo",
                    "Nibo",
                    "Njikoka",
                    "Nnewi-North",
                    "Nnewi-South",
                    "Ogbaru",
                    "Olumba",
                    "Onitsha-North",
                    "Onitsha-South",
                    "Orumba-North",
                    "Orumba-South",
                    "Oti",
                    "Otu-Ocha",
                    "Ubuluizor Ihiala",
                    "Uyi"
                ],
                "landmass": "4,844 km2 (1,870 sq mi)",
                "population": "4,182,032",
                "dialect": "Igbo",
                "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Nigeria_Akwa_Ibom_state_map.png/250px-Nigeria_Akwa_Ibom_state_map.png",
                "latitude": "6.2107",
                "longitude": "7.0323",
                "website": "http://www.anambrastate.gov.ng/",
                "region": "South East",
                "createdDate": "1991-08-26T23:00:00.000Z",
                "createdBy": "General Ibrahim Babangida",
                "pastGovernors": [
                    "Chukwuemeka Ezeife",
                    "Mike Attah",
                    "Chinwoke Mbadinuju",
                    "Chris Ngige",
                    "Peter Obi",
                    "Virginia Etiaba",
                    "Andy Uba",
                    "Chukwuemeka Ezeife",
                    "Chris Ngige",
                    "Peter Obi",
                    "Willie Obiano"
                ],
                "borders": [
                    "Kogi",
                    "Delta",
                    "Abia",
                    "Enugu",
                    "Imo"
                ],
                "knownFor": [
                    "Ogbunike Caves",
                    "Agulu Lake",
                    "Ogbaukwu Caves and Waterfalls"
                ],
                "__v": 0
            },
            {
                "_id": "64a8952273f9036316a6e0b5",
                "state": "Imo",
                "capital": "Owerri",
                "slogan": "Eastern Heartland",
                "senatorialDistricts": [
                    "Imo East",
                    "Imo North",
                    "Imo West"
                ],
                "lgas": [
                    "Aboh-Mbaise",
                    "Ahiazu-Mbaise",
                    "Dral-Esat",
                    "Ehime-Mbano",
                    "Ezeobodo",
                    "Ezinihitte",
                    "Ideato",
                    "Ideato-North",
                    "Ideato-South",
                    "Ihitte/Uboma",
                    "Ikeduru",
                    "Isiala-Mbano",
                    "Isu",
                    "Mbaitoli",
                    "Mbano",
                    "Ngor-Okpala",
                    "Njaba",
                    "Nkwerre",
                    "Nwangele",
                    "Obowo",
                    "Oguta",
                    "Ohaji-Egbema",
                    "Okigwe",
                    "Onuimo",
                    "Orlu",
                    "Oro-West",
                    "Orsu",
                    "Oru-East",
                    "Oru-West",
                    "Owerri-Municipal",
                    "Owerri-North",
                    "Owerri-West",
                    "Ugiri-Ike Ikeduru",
                    "Ugiri-Ikedikeduru",
                    "Unbano",
                    "Zinihitte"
                ],
                "landmass": "5,530 km2 (2,140 sq mi)",
                "population": "4,833,171",
                "dialect": "Igbo",
                "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Nigeria_Akwa_Ibom_state_map.png/250px-Nigeria_Akwa_Ibom_state_map.png",
                "latitude": "5.4833",
                "longitude": "7.0333",
                "website": "http://www.imostate.gov.ng/",
                "region": "South East",
                "createdDate": "1976-02-02T23:00:00.000Z",
                "createdBy": "Murtala Mohammed",
                "pastGovernors": [
                    "Sam Mbakwe",
                    "Evan Enwerem",
                    "Judas Iwu",
                    "Achike Udenwa",
                    "Ikedi Ohakim",
                    "Rochas Okorocha",
                    "Emeka Ihedioha"
                ],
                "borders": [
                    "Abia",
                    "Anambra",
                    "Ebonyi",
                    "Enugu",
                    "Rivers"
                ],
                "knownFor": [
                    "Oguta Lake, Oguta",
                    "Owerri Amusement Park, Owerri",
                    "Owerri Mall, Owerri",
                    "Owerri Zoo, Owerri"
                ],
                "__v": 0
            },
            {
                "_id": "64a8952273f9036316a6e0b2",
                "state": "Enugu",
                "capital": "Enugu",
                "slogan": "Coal City State",
                "senatorialDistricts": [
                    "Enugu North",
                    "Enugu East",
                    "Enugu West"
                ],
                "lgas": [
                    "Aninri",
                    "Awgu",
                    "Enugu-East",
                    "Enugu-North",
                    "Enugu-South",
                    "Ezeagu",
                    "Igbo-Etiti",
                    "Igbo-Eze-North",
                    "Igbo-Eze-South",
                    "Isi-Uzo",
                    "Nkanu-East",
                    "Nkanu-West",
                    "Nsukka",
                    "Nukanu East",
                    "Oji-River",
                    "Udenu",
                    "Udi",
                    "Uzo-Uwani"
                ],
                "landmass": "7,161 km2 (2,765 sq mi)",
                "population": "3,257,298",
                "dialect": "Igbo",
                "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Nigeria_Akwa_Ibom_state_map.png/250px-Nigeria_Akwa_Ibom_state_map.png",
                "latitude": "6.4500",
                "longitude": "7.5000",
                "website": "http://www.enugustate.gov.ng/",
                "region": "South East",
                "createdDate": "1991-08-26T23:00:00.000Z",
                "createdBy": "General Ibrahim Babangida",
                "pastGovernors": [
                    "Okwesilieze Nwodo",
                    "Chimaroke Nnamani",
                    "Sullivan Chime",
                    "Ifeanyi Ugwuanyi"
                ],
                "borders": [
                    "Abia",
                    "Anambra",
                    "Benue",
                    "Ebonyi",
                    "Kogi"
                ],
                "knownFor": [
                    "Enugu Rangers",
                    "Enugu State University of Science and Technology",
                    "University of Nigeria, Nsukka",
                    "Enugu State University Teaching Hospital",
                    "Enugu State Broadcasting Service",
                    "Enugu State College of Education (Technical)"
                ],
                "__v": 0
            }
        ]
    }
}
}
```
---

### search state with localgovernment(lga)

- Route: /api/location/searchstatewithlga
- Method: GET
- Header
    - Authorization: apiKey
- query: 
```
{
   state:lagos
}
```

- Responses

Success
```
{
   {
    "statusCode": 200,
    "message": "State found",
    "data": {
        "data": {
            "_id": "64a8952273f9036316a6e0bd",
            "state": "Lagos",
            "lgas": [
                "Agege",
                "Ajeromi-Ifelodun",
                "Alimosho",
                "Amuwo-Odofin",
                "Apapa",
                "Badagry",
                "Epe",
                "Eti-Osa",
                "Ibeju-Lekki",
                "Ifako-Ijaiye",
                "Ikeja",
                "Ikorodu",
                "Kosofe",
                "Lagos-Island",
                "Lagos-Mainland",
                "Mushin",
                "Ojo",
                "Oshodi-Isolo",
                "Shomolu",
                "Somolu",
                "Surulere"
            ],
            "__v": 0
        }
    }
}
}
```
---

### search region with state

- Route: /api/location/searchregionwithstate
- Method: GET
- Header
    - Authorization: apiKey
- Body: 
```
{
    region:South East
}
```

- Responses

Success
```
{
    {
    "statusCode": 200,
    "message": "Region found",
    "data": {
        "data": [
            {
                "_id": "64a8952273f9036316a6e0a5",
                "state": "Abia",
                "region": "South East",
                "__v": 0
            },
            {
                "_id": "64a8952273f9036316a6e0af",
                "state": "Ebonyi",
                "region": "South East",
                "__v": 0
            },
            {
                "_id": "64a8952273f9036316a6e0a8",
                "state": "Anambra",
                "region": "South East",
                "__v": 0
            },
            {
                "_id": "64a8952273f9036316a6e0b5",
                "state": "Imo",
                "region": "South East",
                "__v": 0
            },
            {
                "_id": "64a8952273f9036316a6e0b2",
                "state": "Enugu",
                "region": "South East",
                "__v": 0
            }
        ]
    }
}
}
```
---