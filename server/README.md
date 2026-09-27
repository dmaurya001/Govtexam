# GovtExamHub — AI Mock Generation & Scheduler Backend

This is the automated AI question generation and paper scheduling backend for **GovtExamHub**.

---

## 🚀 Key Features

1. **IST Daily Slot Engine**:
   - 9 continuous slots every 2 hours starting at **04:00 AM IST**:
     `04:00`, `06:00`, `08:00`, `10:00`, `12:00`, `14:00`, `16:00`, `18:00`, `20:00`.
   - Slot 9 (`20:00 - 03:59 IST`) crosses midnight and **NEVER closes**.
   - Cycle calculation is strictly based on `Asia/Kolkata` timezone.
2. **AI-Powered Paper Generation**:
   - Primary: Google Gemini (`gemini-1.5-flash`)
   - Secondary / Validation Fallback: OpenAI (`gpt-4o-mini`)
   - Multi-stage validation: bilingual formatting, 4 distinct options, single correct answer, fingerprint duplicate rejection.
3. **Idempotent Scheduler**:
   - Pre-generates papers 30 minutes in advance.
   - Publishes at exact slot boundaries.
   - Server restarts or duplicate triggers do NOT create duplicate papers.
4. **Official Exam Patterns**:
   - NEET UG (180 Qs, 720 Marks, 4 subjects)
   - SSC CGL Tier-1 (100 Qs, 200 Marks)
   - B.Sc. Nursing (100 Qs, 100 Marks)
   - Banking, Railway, UPSSSC, Police, Teaching, NIELIT CCC & O Level, etc.
   - UPSC and UPPSC are strictly removed.
5. **Seamless Offline Fallback**:
   - If this server is offline, the frontend seamlessly uses its deterministic client-side slot engine without breaking anything.

---

## 🛠️ Environment Configuration

Copy `.env.example` to `.env`:

```env
# AI API Keys
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-1.5-flash

OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4o-mini

# Server Port & Environment
PORT=3001
NODE_ENV=production
ALLOWED_ORIGINS=*

# Admin Secret
ADMIN_SECRET=govtexamhub_secret_896062
```

---

## 🌐 Free Cloud Deployment (Recommended)

### Option A: Render.com (Free)
1. Push your repository to GitHub or upload the `server/` directory.
2. Go to [Render Dashboard](https://dashboard.render.com/) → **New Web Service**.
3. Select your repository.
4. Set:
   - **Root Directory**: `server`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variables:
   - `GEMINI_API_KEY`: *(Your Google AI Studio API key)*
   - `OPENAI_API_KEY`: *(Your OpenAI API key, optional fallback)*
   - `ADMIN_SECRET`: `govtexamhub_secret_896062`
6. Click **Deploy Web Service**.
7. Copy your assigned Render URL (e.g. `https://govtexamhub-backend.onrender.com`).

---

### Option B: Railway.app
1. Go to [Railway.app](https://railway.app/) → **New Project** → **Deploy from GitHub repo**.
2. Set root directory to `/server`.
3. Add `GEMINI_API_KEY` and other environment variables.
4. Railway will automatically build using `npm install` and run `npm start`.

---

## 💻 Running Locally

When Node.js (v18+) is installed on your computer:
```bash
cd server
npm install
npm start
```
Server starts on `http://localhost:3001`.

---

## 🔗 Connecting Frontend to the Backend

In `index.html`, add this script before `daily_slot_service.js` (or in a config tag):

```html
<script>
  // Point to your live Render/Railway URL (or localhost:3001 for local dev)
  window.GOVTEXAMHUB_API_URL = "https://your-backend-app.onrender.com/api";
</script>
```

If not specified, the frontend defaults to `http://localhost:3001/api`. If unreachable, it falls back seamlessly to the offline deterministic generator.

---

## 📡 API Reference

### Public Student Endpoints
- `GET /api/slots/current` — Current slot, cycleDate, seconds until next slot.
- `GET /api/exams` — List of all registered exams with verified patterns.
- `GET /api/exams/:examId` — Official pattern for a specific exam.
- `GET /api/papers/active?examId=:examId` — Current active published paper for this slot & cycle date.
- `GET /api/papers/slot/:slotNumber/:examId` — Specific slot paper.

### Admin Endpoints (Header: `x-admin-secret: <secret>`)
- `GET /api/admin/status` — Server and scheduler health.
- `GET /api/admin/slots?cycleDate=YYYY-MM-DD&examId=:examId` — Status of all 9 daily slots.
- `GET /api/admin/logs` — AI generation history and validation logs.
- `POST /api/admin/generate` — Body: `{ "examId": "neet", "slotNumber": 3 }` (generate now).
- `POST /api/admin/publish` — Body: `{ "paperKey": "..." }`
