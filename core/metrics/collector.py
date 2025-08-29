"""Metrics collection utilities."""
from __future__ import annotations
from dataclasses import dataclass, field
from typing import Dict, List, Tuple, Any
import time

@dataclass
class MetricsCollector:
    records: List[Tuple[str, Any, float]] = field(default_factory=list)

    def emit(self, key: str, value: Any):
        self.records.append((key, value, time.time()))

    def summarize(self) -> Dict[str, Any]:
        summary: Dict[str, Any] = {}
        durations = [v for k, v, _ in self.records if k == "duration_sec"]
        if durations:
            summary["last_run_duration_sec"] = durations[-1]
        summary["total_events"] = len(self.records)
        return summary
