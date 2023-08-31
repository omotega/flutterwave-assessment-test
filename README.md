# flutterwave-assessment-test


## Technologies used

1. Mongoose

2. MongoDb

3. Express

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/omotega/flutterwave-assessment-test.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Make a copy of the .env.example file to .env 

4. Execute yarn dev and You will be able to access the API from localhost:5400


## Hosted Api link

Link: https://bankla.onrender.com


## APIs

### create Account

- Route: /api/account/createaccount
- Method: POST
- Body: 
```

 {
    "accountName":"denis  gari", 
    "accountType":"savings", 
    "dateOfBirth":{
        "month":"january",
        "date":10,
        "year":1998
    }
}

```
- Responses

Success
```
{
    "message": "Account created succesfully",
    "data": {
        "accountName": "denis  gari",
        "accountNumber": "7277240470",
        "dateOfBirth": {
            "month": "january",
            "date": 10,
            "year": 1998
        },
        "accountType": "savings",
        "balance": 0,
        "_id": "64f0af65bb061f9e4328e187",
        "__v": 0
    }
}
```

---

### fetch Account

- Route: /api/account/getaccount
- Method: GET
- Body: 
```

{
    "accountNumber": "7277240470"
}

```
- Responses

Success
```
{
    "message": "account fetched successfully",
    "data": {
        "_id": "64f0af65bb061f9e4328e187",
        "accountName": "denis  gari",
        "accountNumber": "7277240470",
        "dateOfBirth": {
            "month": "january",
            "date": 10,
            "year": 1998
        },
        "accountType": "savings",
        "balance": 0,
        "__v": 0
    }
}
```


---

### fetch All Account

- Route: /api/account/getallaccounts
- Method: GET

- Responses

Success
```
{
    "message": "account fetched successfully",
    "data": {
        "docs": [
            {
                "_id": "64ef7ac95f8ffcb16c04b478",
                "accountName": "omoyib oghenetega",
                "accountNumber": 6240631757,
                "dateOfBirth": "may-10-1998",
                "accountType": "savings",
                "balance": 0,
                "__v": 0,
                "id": "64ef7ac95f8ffcb16c04b478"
            },
            {
                "_id": "64f08016ab44ff2c12d963ab",
                "accountName": "omoyib oghenetega",
                "accountNumber": 1645462004,
                "dateOfBirth": {
                    "month": "january",
                    "day": 10,
                    "year": 1998
                },
                "accountType": "savings",
                "balance": 0,
                "__v": 0,
                "id": "64f08016ab44ff2c12d963ab"
            },
            {
                "_id": "64f08edaf542370279102bb7",
                "accountName": "omoyib oghenetega",
                "accountNumber": 5970423412,
                "dateOfBirth": {
                    "month": "january",
                    "date": 10,
                    "year": 1998
                },
                "accountType": "savings",
                "balance": {
                    "$numberDecimal": "0"
                },
                "__v": 0,
                "id": "64f08edaf542370279102bb7"
            },
            {
                "_id": "64f0954ab7c033173e0bc781",
                "accountName": "omoyib oghenetega",
                "accountNumber": "3314588503",
                "dateOfBirth": {
                    "month": "january",
                    "date": 10,
                    "year": 1998
                },
                "accountType": "savings",
                "balance": 0,
                "__v": 0,
                "id": "64f0954ab7c033173e0bc781"
            },
            {
                "_id": "64f0af65bb061f9e4328e187",
                "accountName": "denis  gari",
                "accountNumber": "7277240470",
                "dateOfBirth": {
                    "month": "january",
                    "date": 10,
                    "year": 1998
                },
                "accountType": "savings",
                "balance": 0,
                "__v": 0,
                "id": "64f0af65bb061f9e4328e187"
            }
        ],
        "totalDocs": 5,
        "limit": 10,
        "totalPages": 1,
        "page": 1,
        "pagingCounter": 1,
        "hasPrevPage": false,
        "hasNextPage": false,
        "prevPage": null,
        "nextPage": null
    }
}
```