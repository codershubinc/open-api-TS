# open-api-ts

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.
