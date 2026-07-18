# Waitlist backends (Formspree blocked)

Your site supports **4 providers**. Edit the top of `app.js`:

```js
const WAITLIST_PROVIDER = "flask"; // or "formsubmit" | "web3forms" | "formspree"
```

---

## 1. Flask + SQLite (default — works offline) ✅

**Best for local testing right now.**

1. Start the API:
   ```powershell
   cd Desktop\push-protocol-landing
   & "C:\Users\USER\AppData\Local\Programs\Python\Python312\python.exe" app.py
   ```
2. Keep the site on `http://127.0.0.1:8080`
3. Submit the waitlist → data lands in **`push_waitlist.db`**
4. View signups:
   ```powershell
   & "C:\Users\USER\AppData\Local\Programs\Python\Python312\python.exe" view_data.py
   ```

When you go public, host `app.py` on **Railway**, **Render**, or **Fly.io** (free tiers) and set:

```js
const FLASK_URL = "https://your-api.onrender.com/api/waitlist";
```

---

## 2. FormSubmit.co (free cloud email, no Formspree)

1. In `app.js` set:
   ```js
   const WAITLIST_PROVIDER = "formsubmit";
   const FORMSUBMIT_EMAIL = "you@gmail.com"; // YOUR real email
   ```
2. Submit once → check inbox (and spam) for a **confirmation link** from FormSubmit
3. After you confirm, every signup emails you a table of fields

Docs: https://formsubmit.co/

---

## 3. Web3Forms (ACTIVE)

Already wired in `app.js`:

```js
const WAITLIST_PROVIDER = "web3forms";
const WEB3FORMS_ACCESS_KEY = "e9019ed0-76a8-4d7e-9987-1acd09ec132c";
```

1. Open the site on `http://127.0.0.1:8080` (not file://)
2. Submit waitlist (email + wallet)
3. Check Web3Forms dashboard + your email

No Flask server needed for waitlist.

---

## 4. Formspree (only if unblocked later)

```js
const WAITLIST_PROVIDER = "formspree";
```

Uses `https://formspree.io/f/meeyayyl`.

---

## Backup always on

Every submit is also stored in the browser:

```js
pushWaitlist.list()
pushWaitlist.export()
```

---

## Recommendation

| Situation | Use |
|-----------|-----|
| Testing on your PC | **`flask`** |
| Want email, no server | **`formsubmit`** or **`web3forms`** |
| Public production | Host Flask **or** Web3Forms |
