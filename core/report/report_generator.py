"""Simple report generator from metrics."""
from __future__ import annotations
from pathlib import Path
from typing import Dict, Any, Iterable, Tuple
import json

def generate_report(output_dir: str | Path, run_result: Dict[str, Any], events: Iterable[Tuple[str, Any, float]]):
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    # Save summary JSON
    (output_path / "run_summary.json").write_text(json.dumps(run_result, indent=2), encoding="utf-8")

    # Save raw events
    lines = [f"{k},{v},{ts}" for k, v, ts in events]
    (output_path / "events.csv").write_text("key,value,timestamp\n" + "\n".join(lines), encoding="utf-8")
