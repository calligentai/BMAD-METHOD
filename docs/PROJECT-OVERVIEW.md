# Project Simulation Overview

This document provides a quick overlay describing how this simulation project layers on top of the upstream BMAD Method repository.

## Purpose
Define, execute, and analyze domain-specific simulations with a standardized BMAD workflow.

## Goals
- Fast iterative modeling
- Automated measurement & data collection
- Structured analysis & decision support

## High-Level Scope
| Area | Description |
|------|-------------|
| Domain | Simulation / modeling |
| Core Engine | Custom logic under `core/` |
| Data | Generated & stored locally (later external DB) |
| Reporting | Derived KPIs + dashboards |
| Integration | BMAD agents orchestrate lifecycle |

## Key Documents
- PRD: `docs/prd/PRD.md`
- Architecture: `docs/architecture/ARCHITECTURE.md`
- Sharded PRD Sections: `docs/prd/sections/`

## Next Steps
1. Flesh out PRD.
2. Draft architecture diagram & component responsibilities.
3. Implement minimal simulation loop.
4. Add measurement hooks.
5. Automate analysis.

---
Owned by: Simulation Team
