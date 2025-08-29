"""Minimal simulation engine loop.

Responsibilities:
- Initialize with config
- Run steps until termination condition
- Emit metrics via callback
"""
from __future__ import annotations
from dataclasses import dataclass
from typing import Any, Callable, Dict, Optional
import time

MetricEmitter = Callable[[str, float | int | str | bool], None]

@dataclass
class SimulationConfig:
    steps: int = 10
    step_delay_sec: float = 0.0

class SimulationEngine:
    def __init__(self, config: SimulationConfig, emit_metric: Optional[MetricEmitter] = None):
        self.config = config
        self.emit_metric = emit_metric or (lambda k, v: None)
        self._running = False

    def run(self) -> Dict[str, Any]:
        self._running = True
        start = time.time()
        self.emit_metric("run_started", start)
        for step in range(self.config.steps):
            if not self._running:
                break
            # Placeholder computation logic
            computed_value = step * 2
            self.emit_metric("step", step)
            self.emit_metric("computed_value", computed_value)
            if self.config.step_delay_sec:
                time.sleep(self.config.step_delay_sec)
        end = time.time()
        duration = end - start
        self.emit_metric("run_completed", end)
        self.emit_metric("duration_sec", duration)
        return {"steps": self.config.steps, "duration_sec": duration}

    def stop(self):
        self._running = False
