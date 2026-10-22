# nilepatch-admzip-dos

Node.js app using adm-zip 0.6.0 (vulnerable to CVE-2026-114102 DoS).

## Vulnerability

adm-zip before 0.6.1 contains a denial of service vulnerability. Malformed ZIP files with corrupted DEFLATE data crash the Node.js process because `inflateAsync` in `methods/inflater.js` lacks a zlib stream error listener.

## Expected fix

Upgrade adm-zip to 0.6.1 or later.

## Build

```sh
npm install
node index.js
```
