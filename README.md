# Open API TS

This project is an open API implementation using TypeScript. It provides a set of common data and utilities for various countries, including city names, first names, last names, and more.

## Features

- Common data for multiple countries
- Utility functions for data handling
- Modular structure for easy extension

## API Endpoints

### UserController

#### Get User by Country

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

#### Example Request

```bash
curl -X GET "http://localhost:3000/user/US"
```

#### Example Response

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

## Dependencies

- @nestjs/common: ^10.0.0
- @nestjs/core: ^10.0.0
- @nestjs/platform-express: ^10.0.0
- axios: ^1.8.1
- reflect-metadata: ^0.2.0
- rxjs: ^7.8.1

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
$ git clone <repository-url>
$ cd open-api-TS
$ bun install or $ npm install
```

## Running Tests

To run tests, use the provided scripts in `package.json`:

```bash
$ npm test
$ npm run test:watch
$ npm run test:cov
$ npm run test:debug
$ npm run test:e2e
```

For more information on the available API endpoints, please refer to the [API Endpoints Documentation](src/api/v0.1/api-endpoints.md).

## Contributing

We welcome contributions! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
