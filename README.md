- Steps

- Clone the repository:

- git clone https://github.com/yourusername/your-repo.git cd your-repo

- Install dependencies:

- npm install

- Create a .env file in the root directory and add the following:

- PORT=3000
- MONGO_URI=your_mongodb_connection_string

- Start the server:

npm start

API Endpoints

1. Create a Load (POST /load)

Endpoint: POST /api/load

```
Request Body:

{
  "facility": {
    "loadingPoint": "delhi",
    "unloadingPoint": "jaipur",
    "loadingDate": "12-04-2025",
    "unloadingDate": "14-04-2025"
  },
  "productType": "chemicals",
  "truckType": "canter",
  "noOfTrucks": 1,
  "weight": 100.0,
  "comment": "Urgent Delivery",
  "shipperId": "shipper:12345",
  "date": "11-04-2025"
}

Response:

{
  "loadId": "load:abcd1234",
  "facility": {
    "loadingPoint": "delhi",
    "unloadingPoint": "jaipur",
    "loadingDate": "12-04-2025",
    "unloadingDate": "14-04-2025"
  },
  "productType": "chemicals",
  "truckType": "canter",
  "noOfTrucks": 1,
  "weight": 100.0,
  "comment": "Urgent Delivery",
  "shipperId": "shipper:12345",
  "date": "11-04-2025"
}

```

2. Get All Loads (GET /load)

Endpoint: GET /api/load

Response:

```

[
  {
    "loadId": "load:abcd1234",
    "facility": {
      "loadingPoint": "delhi",
      "unloadingPoint": "jaipur",
      "loadingDate": "12-04-2025",
      "unloadingDate": "14-04-2025"
    },
    "productType": "chemicals",
    "truckType": "canter",
    "noOfTrucks": 1,
    "weight": 100.0,
    "comment": "Urgent Delivery",
    "shipperId": "shipper:12345",
    "date": "11-04-2025"
  }
]


```

3. Get Load by ID (GET /load/{loadId})

Endpoint: GET /api/load/:loadId

Response:

```

[
  {
    "loadId": "load:abcd1234",
    "facility": {
      "loadingPoint": "delhi",
      "unloadingPoint": "jaipur",
      "loadingDate": "12-04-2025",
      "unloadingDate": "14-04-2025"
    },
    "productType": "chemicals",
    "truckType": "canter",
    "noOfTrucks": 1,
    "weight": 100.0,
    "comment": "Urgent Delivery",
    "shipperId": "shipper:12345",
    "date": "11-04-2025"
  }
]


```

4. Update Load (PUT /load/{loadId})

Endpoint: PUT /api/load/:loadId

```
Request Body:

{
  "truckType": "container",
  "comment": "Delayed by 1 day"
}

Response:

{
  "loadId": "load:abcd1234",
  "facility": {
    "loadingPoint": "delhi",
    "unloadingPoint": "jaipur",
    "loadingDate": "12-04-2025",
    "unloadingDate": "14-04-2025"
  },
  "productType": "chemicals",
  "truckType": "container",
  "noOfTrucks": 1,
  "weight": 100.0,
  "comment": "Delayed by 1 day",
  "shipperId": "shipper:12345",
  "date": "11-04-2025"
}


```

5. Delete Load (PUT /load/{loadId})

Endpoint: DELETE /api/load/:loadId

```
Response:

{
  "message": "Load deleted successfully"
}


```
