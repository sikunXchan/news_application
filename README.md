# TechLingua News (Tech & English Learning Platform)

> **Master cutting-edge software engineering and technical English simultaneously.**

A next-generation tech news and interactive language learning web application designed for developers, programmers, and technology enthusiasts.

## 🚀 Key Features

1. **Full English Tech Content**:
   - Covers latest developments in AI & LLMs, Frontend (React 19, Web APIs), Cloud & Backend (Edge KV, Raft), DevOps & Systems (Distroless, K8s), and Cybersecurity (PQC, TLS 1.3).
   - Difficulty ratings (`Beginner`, `Intermediate`, `Advanced`).
   - English 3-point key summaries and architectural takeaways with bilingual toggle.

2. **Interactive Long-Press Smart Dictionary (長押しスマート辞書)**:
   - **Mobile**: Long-press (400ms) any word in the titles or article text to trigger the dictionary popover with tactile haptic feedback.
   - **Desktop**: Click, long-press, or select any word to inspect.
   - **Rich Vocabulary Insights**: Shows phonetic IPA, native pronunciation (TTS), Japanese translation, and **programming/tech-specific context and usage**.
   - Built-in offline dictionary (1000+ tech terms) + Free Dictionary API fallback.

3. **My Vocabulary Wordbook & Flashcards**:
   - Bookmark any word directly from news articles.
   - 3D flip flashcards for SRS memory drills with completion confetti animations.
   - Filter words by status (`All`, `Learning`, `Mastered`).
   - Persisted automatically in `localStorage`.

4. **Full Reader & Audio Listening (TTS)**:
   - Distraction-free reader view.
   - Adjustable speech rate (0.8x, 1.0x, 1.2x) for listening and shadowing practice.
   - In-depth grammar & technical phrase breakdown.
   - Multiple-choice comprehension & vocabulary quiz.

5. **Modern SaaS / Developer UI**:
   - Dark Mode / Light Mode with seamless transitions.
   - Glassmorphic card design and responsive mobile-first layout.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Lucide Icons, Canvas Confetti
- **Audio**: Web Speech API (Text-to-Speech)
- **Data Engine**: RSS Parser, Google GenAI SDK (`@google/genai`)

## 💻 Getting Started

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build
```