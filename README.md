# open-api-ts

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Directory Structure

```
bun.lock
Dockerfile
index.ts
package.json
README.md
config/
    tsconfig.json
    tsconfig.prod.json
    vercel.json
src/
    api/
        v0.1/
            user/
                controller/
                    user.controller.ts
                interface/
                routes/
                utils/
    common/
        data/
            userData/
        handlers/
            async.handler.ts
        interfaces/
            asyncHandler.interface.ts
        util/
            crypto.util.ts
            random.util.ts
```
