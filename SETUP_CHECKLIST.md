# Indiekit Setup Checklist

## ✅ Completed

- [x] Dependencies installed (`npm install`)
- [x] Configuration file reviewed (indiekit.config.js)
- [x] Environment template created (.env.example)

## 📋 Manual Steps Required

### 1. **Create GitHub Personal Access Token**

- [ ] Go to https://github.com/settings/tokens
- [ ] Click "Generate new token" → "Generate new token (classic)"
- [ ] Name: `Indiekit Server`
- [ ] Select scopes:
  - `repo` (full control of private repositories)
  - `workflow` (update GitHub Action workflows)
- [ ] Copy the token (you won't see it again!)
- [ ] Add to `.env`: `GITHUB_TOKEN=ghp_...`

### 2. **Set Up GitHub Repository**

- [ ] Create or designate a GitHub repository for your posts/media
- [ ] Make sure your account has access
- [ ] Add to `.env`:
  - `GITHUB_USER=your_username`
  - `GITHUB_REPO=repository_name`
  - `GITHUB_BRANCH=main` (or your branch name)

### 3. **Create Mastodon App (if you want syndication)**

- [ ] Go to your Mastodon instance Settings → Development → New application
- [ ] Name: `Indiekit`
- [ ] Redirect URI: `http://localhost:3000/auth` (or your server URL)
- [ ] Scopes: `write:statuses` (only needed permission)
- [ ] Save and get the access token
- [ ] Add to `.env`:
  - `MASTODON_URL=https://your.mastodon.instance`
  - `MASTODON_USER=your_username`
  - `MASTODON_ACCESS_TOKEN=...`

### 4. **Set Up MongoDB**

- [ ] Choose hosting:
  - **Option A**: MongoDB Atlas (free cloud) - https://www.mongodb.com/cloud/atlas
  - **Option B**: Local MongoDB - `brew install mongodb-community`
  - **Option C**: Docker - use `docker-compose.yml` provided
- [ ] Get connection string
- [ ] Add to `.env`: `MONGO_URL=mongodb://...`

### 5. **Generate Secret Keys**

- [ ] Run: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
- [ ] Do this twice for PASSWORD_SECRET and SECRET
- [ ] Add to `.env`:
  - `PASSWORD_SECRET=...`
  - `SECRET=...`

### 6. **Set Up Publication URL**

- [ ] Decide where your server will be hosted (local, VPS, Railway, etc.)
- [ ] Add to `.env`: `PUBLICATION_URL=https://yourdomain.com`

### 7. **Create .env File**

- [ ] Copy `.env.example` to `.env`
- [ ] Fill in all values from steps 1-6
- [ ] **Do NOT commit .env to git**

### 8. **Start the Server**

```bash
npm start
```

Server will run at `http://localhost:3000`

### 9. **(Optional) Deploy with Docker**

```bash
docker-compose up
```

## 📚 Additional Resources

- Indiekit Docs: https://getindiekit.com
- IndieWeb: https://indieweb.org
- Configuration Reference: https://getindiekit.com/configuration/

---

**Next Step**: Copy `.env.example` to `.env` and start filling in your values!
