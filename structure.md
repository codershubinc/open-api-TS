# Directory Structure

```
api-endpoints.md
bun.lock
CONTRIBUTING.md
LICENSE
nest-cli.json
package.json
README.md
structure.md
tsconfig.build.json
tsconfig.json
tsconfig.prod.json
vercel.json
src/
|-- app.controller.spec.ts
|-- app.controller.ts
|-- app.module.ts
|-- app.service.ts
|-- main.ts
|-- api/
|   |-- v0.1/
|   |   |-- index.module.ts
|   |   |-- avatars/
|   |   |   |-- avatar.controller.ts
|   |   |   |-- avatar.module.ts
|   |   |   |-- avatar.service.ts
|   |   |   |-- utils/
|   |   |   |   |-- avatar.constants.ts
|   |   |   |   |-- avatar.url.ts
|   |   |-- user/
|   |       |-- user.controller.ts
|   |       |-- user.module.ts
|   |       |-- user.service.ts
|   |       |-- util/
|   |           |-- createUserDataFromData.ts
|   |           |-- getUserData.ts
|-- common/
|   |-- data/
|       |-- contryData/
|           |-- data/
|               |-- AU/
|               |   |-- cities.ts
|               |   |-- femaleFirstName.ts
|               |   |-- firstName.ts
|               |   |-- index.ts
|               |   |-- lastName.ts
|               |   |-- maleFirstName.ts
|               |   |-- states.ts
|               |   |-- streets.ts
|               |-- BR/
|               |   |-- cities.ts
|               |   |-- femaleFirstName.ts
|               |   |-- firstName.ts
|               |   |-- index.ts
|               |   |-- lastName.ts
|               |   |-- maleFirstName.ts
|               |   |-- states.ts
|               |   |-- streets.ts
|               |-- CA/
|               |   |-- cities.ts
|               |   |-- femaleFirstName.ts
|               |   |-- firstName.ts
|               |   |-- index.ts
|               |   |-- lastName.ts
|               |   |-- maleFirstName.ts
|               |   |-- states.ts
|               |   |-- streets.ts
|               |-- CH/
|               |   |-- cities.ts
|               |   |-- femaleFirstName.ts
|               |   |-- firstName.ts
|               |   |-- index.ts
|               |   |-- lastName.ts
|               |   |-- maleFirstName.ts
|               |   |-- states.ts
|               |   |-- streets.ts
|               |-- DE/
|               |   |-- cities.ts
|               |   |-- femaleFirstName.ts
|               |   |-- firstName.ts
|               |   |-- index.ts
|               |   |-- lastName.ts
|               |   |-- maleFirstName.ts
|               |   |-- states.ts
|               |   |-- streets.ts
|               |-- DK/
|               |   |-- cities.ts
|               |   |-- femaleFirstName.ts
|               |   |-- firstName.ts
|               |   |-- index.ts
|               |   |-- lastName.ts
|               |   |-- maleFirstName.ts
|               |   |-- states.ts
|               |   |-- streets.ts
|               |-- ES/
|               |   |-- cities.ts
|               |   |-- femaleFirstName.ts
|               |   |-- firstName.ts
|               |   |-- index.ts
|               |   |-- lastName.ts
|               |   |-- maleFirstName.ts
|               |   |-- states.ts
|               |   |-- streets.ts
|               |-- GB/
|               |   |-- ...
|               |-- IN/
|               |   |-- ...
|               |-- US/
|-- utils/
|   |-- constants/
|   |-- handler/
|   |-- interfaces/
|-- handlers/
|   |-- async.handler.ts
|-- helpers/
|   |-- error.api.ts
|   |-- responce.api.ts
|-- interfaces/
|   |-- asyncHandler.interface.ts
|-- util/
|   |-- crypto.util.ts
|   |-- random.util.ts
test/
|-- app.e2e-spec.ts
|-- jest-e2e.json
```
