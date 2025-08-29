# Architecture Overview

## Initial Component Map
| Component | Purpose | Location |
|-----------|---------|----------|
| Simulation Engine | Orchestrates scenario execution | `core/` |
| Config Loader | Parses YAML/JSON configs | `core/config/` (planned) |
| Metrics Collector | Gathers & writes run metrics | `core/metrics/` (planned) |
| Reporter | Generates summary artifacts | `core/report/` (planned) |
| CLI Entry | User-facing command runner | `core/cli.py` (planned) |

## Data Flow (Draft)
Config -> Engine -> Metrics + Artifacts -> Reports

## Extensibility Points
- Plug-in metrics modules
- Scenario parameter schema files
- Output formatter strategies

## Technical Decisions (Pending)
- Choose persistence (flat files vs SQLite)
- Logging framework
- Packaging layout (pure package vs monorepo style)

## Next Architecture Tasks
1. Define config schema (YAML).
2. Implement minimal engine loop.
3. Add structured metrics log writer.
4. Decide persistence backend.
5. Add simple CLI.

---
Version: 0.1.0 (Draft)
