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
    "dateOfBirth":"1992-10-05"
}

```

- Responses

Success

```
{
    "message": "Account created succesfully",
    "data": {
        "accountName": "denis  gari",
        "accountNumber": "8259830937",
        "dateOfBirth": "1992-10-05",
        "accountType": "savings",
        "balance": 0,
        "_id": "64f10505331a588c06bd2453",
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
         "accountNumber": "8259830937",
}

```

- Responses

Success

```
{
    "message": "account fetched successfully",
    "data": {
        "_id": "64f10505331a588c06bd2453",
        "accountName": "denis  gari",
        "accountNumber": "8259830937",
        "dateOfBirth": "1992-10-05",
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
                "_id": "64f10505331a588c06bd2453",
                "accountName": "denis  gari",
                "accountNumber": "8259830937",
                "dateOfBirth": "1992-10-05",
                "accountType": "savings",
                "balance": 0,
                "__v": 0,
                "id": "64f10505331a588c06bd2453"
            },
            {
                "_id": "64f10597331a588c06bd2456",
                "accountName": "france europe",
                "accountNumber": "0865910614",
                "dateOfBirth": "1990-10-05",
                "accountType": "current",
                "balance": 0,
                "__v": 0,
                "id": "64f10597331a588c06bd2456"
            },
            {
                "_id": "64f105d4331a588c06bd2458",
                "accountName": "eden hazard",
                "accountNumber": "2750799075",
                "dateOfBirth": "1973-12-09",
                "accountType": "savings",
                "balance": 0,
                "__v": 0,
                "id": "64f105d4331a588c06bd2458"
            }
        ],
        "totalDocs": 3,
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
