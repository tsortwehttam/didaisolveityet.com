# Did AI Solve It Yet?

<img src="mascot.png" alt="Mascot - a robot sitting and thinking" width="128" />

Static site generator for a simple yes/no verdict site about whether AI has solved real-world problems yet.

## Commands

- `yarn build`: generate deployable static files in `dist/`
- `yarn verify`: run typecheck, tests, and build

## Routes

- `/`: homepage
- `/<slug>/`: HTML verdict page, for example `/cancer/`
- `/<slug>.json`: JSON verdict payload, for example `/cancer.json`
- `/index.json`: index of all verdicts

## Deploy

Upload the contents of `dist/` to an S3 bucket configured for static website hosting, then put CloudFront in front of it. The generated output already includes `404.html`, `robots.txt`, and `sitemap.xml`.

## License

See `LICENSE`.
