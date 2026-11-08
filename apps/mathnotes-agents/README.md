# MathNotes Sovereign Command OS (`mathnotes-agents`)
### Executive Business Automation & Telemetry Cockpit for MathNotes.courses

[![MathNotes Production](https://img.shields.io/badge/Production-Live-success)](https://mathnotes.courses)
[![Paperclip Agents](https://img.shields.io/badge/Paperclip-MAT%20Synced-indigo)](https://agents.vmstudio.digital/MAT/dashboard)
[![Tutor LMS Pro](https://img.shields.io/badge/LMS-Tutor%20Pro%20v4.2-blue)](https://mathnotes.courses/courses/)
[![FluentCRM](https://img.shields.io/badge/CRM-FluentCRM%20v3.3-green)](https://mathnotes.courses)

---

## Overview

**MathNotes Command OS** is the sovereign business automation and executive cockpit designed specifically for [**MathNotes.courses**](https://mathnotes.courses).

Unlike generic enterprise apps, **MathNotes Command OS** is tailor-made for mathematics education, higher secondary curricula, and competitive exam tracks (IIT-JEE, UPSC CSAT, AP Calculus, Linear Algebra).

---

## Core Capabilities & Operational Modules

### 1. ⚡ Executive Cockpit (HUD)
- **Live Student Telemetry**: Synchronized with `/mathnotes/v1/teacher/analytics` (tracking 1,420+ active learners, enrollment growth, and tutor satisfaction).
- **Revenue & Enrollment Monitor**: Instant view of Tutor LMS course revenues and monthly cohort growth.
- **Fast Sovereign Actions**: One-tap LiteSpeed / Cloudflare cache purging and vector embedding resync.

### 2. 📐 Academic Studio (CAO Arya Desk)
- **Tutor LMS Curriculum Tree**: Live inspection of courseware, modules, and video lesson completion.
- **Autonomous DPP Synthesizer**: Trigger and review daily high-yield problem sets with NTA CBT $+4/-1$ marking schemes.
- **LaTeX Math Inspector**: Real-time KaTeX preview of mathematical proofs, formulas, and matrices.

### 3. 🚀 Growth & SEO Radar (VP Growth Kabir)
- **VM SEO Brain 50,000 Visitor Window**: Real-time countdown tracking daily required organic visits, Fresh Start trend scouting, and circuit breaker health.
- **Semantic Link Graph**: Audit orphan pages, authority nodes, and topical clusters across the site.

### 4. 👥 Student CRM & Funnels Desk
- **FluentCRM Live Stream**: Direct feed of incoming leads from List 3 (*Formula Sheet VIP Leads*).
- **3-Touch Automated Drip Funnel**: Monitor delivery of the automated welcome sequence (Instant PDF delivery $\to$ Conceptual Mastery $\to$ Socratic Bot Demo).

### 5. 🧠 AI Tutor & Model Router
- **Multi-Model Provider Hub**: Dynamic switching between Google Gemini 2.5 Flash, Anthropic Claude 3.5 Sonnet, and OpenAI GPT-4o.
- **Socratic Quality Assurance**: Inspect student interaction logs, token usage, and LaTeX rendering fidelity.

### 6. 📎 Paperclip Governance Console
- **Company MAT Executive Board**: Direct trigger console for:
  - **Arya**: Chief Academic Officer (Syllabus design & rigor)
  - **Kabir**: VP Growth & Acquisition (SEO clusters & lead magnets)
  - **Priya**: VP Community & Educator Relations (Teacher onboarding)
  - **Dev**: Platform & Mobile Architect (API health & app gateways)

---

## Tech Stack & Architecture

- **Framework**: React Native (Expo SDK 52) + TypeScript
- **Styling**: NativeWind / Tailwind CSS with Liquid Glass design tokens
- **Mathematical Typography**: KaTeX LaTeX typesetting
- **Backend Bridge**: WordPress REST API (`/wp-json/`) + `mathnotes-mobile-core-plugin` (v1.1.0)
- **Autonomous Engine**: Paperclip Host (`https://agents.vmstudio.digital`)

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/vmstudio-labs/mathnotes-agents.git
cd mathnotes-agents

# Install dependencies
npm install

# Start the Expo development server
npx expo start
```
