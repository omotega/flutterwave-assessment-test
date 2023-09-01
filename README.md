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
    "accountName":"eden hazard", 
    "accountType":"savings", 
    "dateOfBirth":"1973-12-09",
    "initialBalance":1000.00
}

```

- Responses

Success

```
{
    "message": "Account created succesfully",
    "data": {
        "accountName": "eden hazard",
        "accountNumber": "7640347077",
        "dateOfBirth": "1973-12-09",
        "accountType": "savings",
        "initialBalance": 1000,
        "_id": "64f1be0ef822286eb9e11d6d",
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
      "accountNumber": "7640347077"
}

```

- Responses

Success

```
{
    "message": "account fetched successfully",
    "data": {
        "_id": "64f1be0ef822286eb9e11d6d",
        "accountName": "eden hazard",
        "accountNumber": "7640347077",
        "dateOfBirth": "1973-12-09",
        "accountType": "savings",
        "initialBalance": 1000,
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
                "_id": "64f1be0ef822286eb9e11d6d",
                "accountName": "eden hazard",
                "accountNumber": "7640347077",
                "dateOfBirth": "1973-12-09",
                "accountType": "savings",
                "initialBalance": 1000,
                "__v": 0,
                "id": "64f1be0ef822286eb9e11d6d"
            },
            {
                "_id": "64f1be7bf822286eb9e11d70",
                "accountName": "david david",
                "accountNumber": "6507726331",
                "dateOfBirth": "1977-10-19",
                "accountType": "current",
                "initialBalance": 1500,
                "__v": 0,
                "id": "64f1be7bf822286eb9e11d70"
            }
        ],
        "totalDocs": 2,
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
