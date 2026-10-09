# OS Memory Lab – Page Replacement Simulator

Interactive simulator for **FIFO** and **Optimal** page replacement (Operating Systems project).
React + Vite + Tailwind CSS + Lucide (charts are built-in SVG). No backend; works fully offline after dependencies are installed.

## Run it

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Build for submission / hosting: `npm run build` (output in `dist/`).

## Pages

| Page | What it shows |
|---|---|
| Dashboard | Summary of references, faults, hits, hit ratio, algorithm, frames, and status after a run |
| Simulator | Configuration, run / step / reset, speed, reference string, step explanation, and frame table |
| Algorithms | FIFO and Optimal explained with pseudocode, pros/cons, and comparison table |
| Memory Visualization | RAM frames with addresses, incoming request, evicted page, and page table with valid bits |
| Performance | FIFO vs Optimal charts, faults vs frame count, and Belady's anomaly detection |
| Learn | Concepts, page-fault handling steps, formulas, and viva Q&A |

## Project structure

```text
src/
  lib/algorithms.js              FIFO + Optimal logic
  context/SimulationContext.jsx  Shared simulation state and playback controls
  components/                    Header, Sidebar, reusable UI, visualizations
  pages/                         Dashboard, Simulator, Algorithms, Memory Visualization, Performance, Learn
```

## Verified results (3 frames)

| Reference string | FIFO faults | Optimal faults |
|---|---:|---:|
| 7 0 1 2 0 3 0 4 2 3 | 9 | 6 |
| 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1 | 15 | 9 |
| 1 2 3 4 1 2 5 1 2 3 4 5 | 9 (10 with 4 frames: Belady's anomaly) | 7 |
