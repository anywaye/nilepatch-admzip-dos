const express = require('express');
const AdmZip = require('adm-zip');
const app = express();

// VULNERABLE: uses adm-zip 0.6.0 which has DoS via inflateAsync
// CVE-2026-114102: malformed ZIP crashes Node.js process
app.get('/extract', (req, res) => {
    const zip = new AdmZip(req.query.file);
    zip.extractAllTo('/tmp/extracted', true);
    res.send('Extracted');
});

app.get('/read', async (req, res) => {
    const zip = new AdmZip(req.query.file);
    const data = await zip.readFileAsync(req.query.entry);
    res.send(data.toString());
});

app.listen(3000, () => console.log('Server running on port 3000'));
