<pre>
Directory structure:
└── codershubinc-open-api-ts/
    ├── README.md
    ├── api-endpoints.md
    ├── CONTRIBUTING.md
    ├── LICENSE
    ├── nest-cli.json
    ├── package.json
    ├── structure.md
    ├── tsconfig.build.json
    ├── tsconfig.json
    ├── tsconfig.prod.json
    ├── vercel.json
    ├── .eslintrc.js
    ├── .prettierrc
    ├── src/
    │   ├── app.controller.spec.ts
    │   ├── app.controller.ts
    │   ├── app.module.ts
    │   ├── app.service.ts
    │   ├── main.ts
    │   ├── api/
    │   │   └── v0.1/
    │   │       ├── index.module.ts
    │   │       ├── avatars/
    │   │       │   ├── avatar.controller.ts
    │   │       │   ├── avatar.module.ts
    │   │       │   ├── avatar.service.ts
    │   │       │   └── utils/
    │   │       │       ├── avatar.constants.ts
    │   │       │       └── avatar.url.ts
    │   │       ├── trade/
    │   │       │   ├── trade.controller.ts
    │   │       │   ├── trade.module.ts
    │   │       │   ├── trade.service.ts
    │   │       │   ├── data/
    │   │       │   │   ├── index.ts
    │   │       │   │   ├── high_low/
    │   │       │   │   │   ├── AAME.ts
    │   │       │   │   │   ├── AAPL.ts
    │   │       │   │   │   ├── AIRS.ts
    │   │       │   │   │   ├── AMZN.ts
    │   │       │   │   │   ├── APA.ts
    │   │       │   │   │   ├── APP.ts
    │   │       │   │   │   ├── ATAI.ts
    │   │       │   │   │   ├── ATGL.ts
    │   │       │   │   │   ├── ATHE.ts
    │   │       │   │   │   ├── AUTL.ts
    │   │       │   │   │   ├── DB.ts
    │   │       │   │   │   ├── DBI.ts
    │   │       │   │   │   ├── DBX.ts
    │   │       │   │   │   ├── DUOL.ts
    │   │       │   │   │   ├── IBM.ts
    │   │       │   │   │   ├── index.ts
    │   │       │   │   │   ├── SBFM.ts
    │   │       │   │   │   ├── SHOT.ts
    │   │       │   │   │   └── SKYQ.ts
    │   │       │   │   └── overview/
    │   │       │   │       ├── AAME.ts
    │   │       │   │       ├── AAPL.ts
    │   │       │   │       ├── AIRS.ts
    │   │       │   │       ├── AMZN.ts
    │   │       │   │       ├── APA.ts
    │   │       │   │       ├── APP.ts
    │   │       │   │       ├── ATAI.ts
    │   │       │   │       ├── ATGL.ts
    │   │       │   │       ├── ATHE.ts
    │   │       │   │       ├── AUTL.ts
    │   │       │   │       ├── DB.ts
    │   │       │   │       ├── DBI.ts
    │   │       │   │       ├── DBX.ts
    │   │       │   │       ├── DUOL.ts
    │   │       │   │       ├── IBM.ts
    │   │       │   │       ├── index.ts
    │   │       │   │       ├── SBFM.ts
    │   │       │   │       ├── SHOT.ts
    │   │       │   │       └── SKYQ.ts
    │   │       │   └── utils/
    │   │       │       ├── constants.ts
    │   │       │       └── getData.ts
    │   │       └── user/
    │   │           ├── user.controller.ts
    │   │           ├── user.module.ts
    │   │           ├── user.service.ts
    │   │           └── util/
    │   │               ├── createUserDataFromData.ts
    │   │               └── getUserData.ts
    │   └── common/
    │       ├── data/
    │       │   └── contryData/
    │       │       ├── data/
    │       │       │   ├── AU/
    │       │       │   │   ├── cities.ts
    │       │       │   │   ├── femaleFirstName.ts
    │       │       │   │   ├── firstName.ts
    │       │       │   │   ├── index.ts
    │       │       │   │   ├── lastName.ts
    │       │       │   │   ├── maleFirstName.ts
    │       │       │   │   ├── states.ts
    │       │       │   │   └── streets.ts
    │       │       │   ├── BR/
    │       │       │   │   ├── cities.ts
    │       │       │   │   ├── femaleFirstName.ts
    │       │       │   │   ├── firstName.ts
    │       │       │   │   ├── index.ts
    │       │       │   │   ├── lastName.ts
    │       │       │   │   ├── maleFirstName.ts
    │       │       │   │   ├── states.ts
    │       │       │   │   └── streets.ts
    │       │       │   ├── CA/
    │       │       │   │   ├── cities.ts
    │       │       │   │   ├── femaleFirstName.ts
    │       │       │   │   ├── firstName.ts
    │       │       │   │   ├── index.ts
    │       │       │   │   ├── lastName.ts
    │       │       │   │   ├── maleFirstName.ts
    │       │       │   │   ├── states.ts
    │       │       │   │   └── streets.ts
    │       │       │   ├── CH/
    │       │       │   │   ├── cities.ts
    │       │       │   │   ├── femaleFirstName.ts
    │       │       │   │   ├── firstName.ts
    │       │       │   │   ├── index.ts
    │       │       │   │   ├── lastName.ts
    │       │       │   │   ├── maleFirstName.ts
    │       │       │   │   ├── states.ts
    │       │       │   │   └── streets.ts
    │       │       │   ├── DE/
    │       │       │   │   ├── cities.ts
    │       │       │   │   ├── femaleFirstName.ts
    │       │       │   │   ├── firstName.ts
    │       │       │   │   ├── index.ts
    │       │       │   │   ├── lastName.ts
    │       │       │   │   ├── maleFirstName.ts
    │       │       │   │   ├── states.ts
    │       │       │   │   └── streets.ts
    │       │       │   ├── DK/
    │       │       │   │   ├── cities.ts
    │       │       │   │   ├── femaleFirstName.ts
    │       │       │   │   ├── firstName.ts
    │       │       │   │   ├── index.ts
    │       │       │   │   ├── lastName.ts
    │       │       │   │   ├── maleFirstName.ts
    │       │       │   │   ├── states.ts
    │       │       │   │   └── streets.ts
    │       │       │   ├── ES/
    │       │       │   │   ├── cities.ts
    │       │       │   │   ├── femaleFirstName.ts
    │       │       │   │   ├── firstName.ts
    │       │       │   │   ├── index.ts
    │       │       │   │   ├── lastName.ts
    │       │       │   │   ├── maleFirstName.ts
    │       │       │   │   ├── states.ts
    │       │       │   │   └── streets.ts
    │       │       │   ├── GB/
    │       │       │   │   ├── cities.ts
    │       │       │   │   ├── femaleFirstName.ts
    │       │       │   │   ├── firstName.ts
    │       │       │   │   ├── index.ts
    │       │       │   │   ├── lastName.ts
    │       │       │   │   ├── maleFirstName.ts
    │       │       │   │   ├── states.ts
    │       │       │   │   └── streets.ts
    │       │       │   ├── IN/
    │       │       │   │   ├── cities.ts
    │       │       │   │   ├── femaleFirstName.ts
    │       │       │   │   ├── firstName.ts
    │       │       │   │   ├── index.ts
    │       │       │   │   ├── lastName.ts
    │       │       │   │   ├── maleFirstName.ts
    │       │       │   │   ├── states.ts
    │       │       │   │   └── streets.ts
    │       │       │   └── US/
    │       │       │       ├── cities.ts
    │       │       │       ├── femaleFirstName.ts
    │       │       │       ├── firstName.ts
    │       │       │       ├── index.ts
    │       │       │       ├── lastName.ts
    │       │       │       ├── maleFirstName.ts
    │       │       │       ├── middleName.ts
    │       │       │       ├── states.ts
    │       │       │       ├── streets.ts
    │       │       │       └── timeZone.ts
    │       │       └── utils/
    │       │           ├── constants/
    │       │           │   ├── allContryCodes.ts
    │       │           │   └── index.ts
    │       │           ├── handler/
    │       │           │   └── contry.data.controller.ts
    │       │           └── interfaces/
    │       │               └── contry.data.interface.ts
    │       ├── handlers/
    │       │   └── async.handler.ts
    │       ├── helpers/
    │       │   ├── error.api.ts
    │       │   └── responce.api.ts
    │       ├── interfaces/
    │       │   └── asyncHandler.interface.ts
    │       └── util/
    │           ├── crypto.util.ts
    │           └── random.util.ts
    └── test/
        ├── app.e2e-spec.ts
        └── jest-e2e.json

</pre>
