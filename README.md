# 🧬 Project GENESIS - Frontend

**An AI-Powered Research Assistant that transforms curiosity into comprehensive research papers.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://trygenesis.vercel.app/)
[![Backend Repo](https://img.shields.io/badge/Backend-Repository-green)](https://github.com/Vedant-OGC/genesis-backend)
[![Built with Gemini 3](https://img.shields.io/badge/Powered%20by-Gemini%203-orange)](https://ai.google.dev/)

---

## 🌟 Overview

Project GENESIS is a cutting-edge AI research scientist that autonomously conducts multi-phase research, from initial web queries to structured academic papers. Built for the **Google Gemini 3 Hackathon**, GENESIS leverages the power of Gemini 3 Flash Preview to deliver real-time, streaming research insights.

### ✨ Key Features

- **🔬 Autonomous Research Pipeline**: 5-phase research workflow (Web Research → Thinking → Analysis → Structure → Paper)
- **⚡ Real-time Streaming**: Live Server-Sent Events (SSE) for instant feedback
- **🎨 Premium UI/UX**: Glassmorphic design with animated shader backgrounds
- **📝 Markdown Output**: Beautiful, formatted research papers
- **🔒 Admin Controls**: Built-in research kill switch for API quota management
- **📱 Responsive Design**: Works seamlessly across all devices

---

## 🏗️ Architecture

This repository contains the **frontend** of Project GENESIS. The backend API is hosted separately:

👉 **Backend Repository**: [Genesis Backend here](https://github.com/Vedant-OGC/genesis-backend)

### Tech Stack

**Frontend:**
- React 18 with Vite
- Vanilla CSS with advanced animations
- Three.js + @shadergradient/react for 3D backgrounds
- Marked.js for Markdown rendering
- Server-Sent Events (SSE) for real-time streaming

**Backend:**
- Python 3.11 + FastAPI
- Google Gemini 3 Flash Preview API
- Uvicorn ASGI server

**Deployment:**
- Frontend: Vercel
- Backend: Render.com

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- A running backend instance (see [backend repo](https://github.com/Vedant-OGC/genesis-backend))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vedant-OGC/genesis-frontend.git
   cd genesis-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure the API endpoint**
   
   Edit `src/config.js` to point to your backend:
   ```javascript
   export const API_BASE_URL = 'https://your-backend-url.onrender.com';
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 🎨 Design Highlights

### Glassmorphism & Liquid Borders
Project GENESIS features a premium glassmorphic design with animated gradient borders that create a "liquid glass" effect.

### 3D Shader Background
Powered by Three.js and custom shaders, the background creates an immersive, dynamic experience that responds to user interaction.

### Typewriter Placeholder
The input field features a smooth typewriter animation that cycles through example research questions.

---

## 📦 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

---

## 🔧 Configuration

### Research Kill Switch

To conserve API quota, you can disable live research in `src/config.js`:

```javascript
export const RESEARCH_ENABLED = false; // Disable research
```

When disabled, users see a friendly message instead of consuming API credits.

---

## 🎯 Features Breakdown

### 1. **Research Input**
- Smart placeholder with typewriter effect
- Real-time validation
- Keyboard shortcuts (Enter to submit)

### 2. **Phase Tracking**
- Visual progress through 5 research phases
- Animated phase transitions
- "Thinking" mode with expandable debug logs

### 3. **Research Output**
- Live-streamed markdown rendering
- Copy to clipboard
- Download as `.md` file
- Syntax highlighting for code blocks

### 4. **Approval System**
- Review proposed research structure before final paper generation
- Edit and refine structure
- One-click approval

---

## 🌐 Deployment

This project is deployed on **Vercel** for optimal performance and global CDN delivery.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Vedant-OGC/genesis-frontend)

1. Fork this repository
2. Connect to Vercel
3. Set environment variables (if needed)
4. Deploy!

---

## 🐛 Known Limitations

⚠️ **Google Gemini Free Tier Restriction**: The Gemini API free tier blocks requests from cloud servers (Render, AWS, etc.) and only works with residential IPs. This is a Google policy, not a code issue. 

**Workarounds:**
- Works perfectly in local development
- Consider enabling Google Cloud billing for production use
- Use the admin kill switch for public demos

---

## 📝 Project Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ResearchSection.jsx (Main research UI)
│   │   ├── PhaseTracker.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingScreen.jsx
│   │   └── ui/          # Reusable UI components
│   ├── config.js        # API & feature flags
│   ├── index.css        # Global styles
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🤝 Contributing

This is a hackathon project, but contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

This project is closed source and available under the [PROPRIETARY LICENSE AGREEMENT](LICENSE.md).

---

## 👨‍💻 Author

**Newton Mishra**

- GitHub: [@Vedant-OGC](https://github.com/Vedant-OGC)
- Project: Built for Google Gemini 3 Hackathon

---

## 🙏 Acknowledgments

- **Google Gemini Team** for the incredible Gemini 3 Flash Preview API
- **React & Vite** for the modern development experience
- **Vercel** for seamless deployment
- **Three.js** for stunning 3D graphics

---

## 🔗 Links

- **Live Demo**: [click here](https://trygenesis.vercel.app/)
- **Backend Repository**: [https://github.com/Vedant-OGC/genesis-backend](https://github.com/Vedant-OGC/genesis-backend)
- **Devpost Submission**: [Coming Soon]

---

<p align="center">
  <strong>Built with 🧬 by Newton Mishra for Google Gemini 3 Hackathon</strong>
</p>
