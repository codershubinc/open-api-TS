# API Endpoints

## UserController

### Get User by Country

- **URL:** `/user/:country`
- **Method:** `GET`
- **URL Params:**
  - `country=[string]` (required)
- **Success Response:**

  - **Code:** 200
  - **Content:**

    ```json
    {
      "FirstName": "John",
      "LastName": "Doe",
      "Gender": "male",
      "Email": "john.doe@codershubinc.tech",
      "Phone": "123-456-7890",
      "Address": {
        "Street": "123 Main St",
        "City": "Anytown",
        "State": "Anystate",
        "Zip": "12345"
      }
    }
    ```

## tradeController

### Get Trade by Country

- **URL:** `/trade/:country`
- **Method:** `GET`
