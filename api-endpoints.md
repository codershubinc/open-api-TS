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
- **Error Response:**
  - **Code:** 404 NOT FOUND
  - **Content:** 
    ```json
    {
      "status": "error",
      "message": "Country not found"
    }
    ```
  - **Code:** 500 INTERNAL SERVER ERROR
  - **Content:** 
    ```json
    {
      "status": "error",
      "message": "Internal server error"
    }
    ```

### Example Request

```bash
curl -X GET "http://localhost:3000/user/US"
```

### Example Response

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
