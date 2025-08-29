"""Configuration loading utilities.

Supports JSON or YAML inputs for simulation parameters.
"""
from __future__ import annotations
import json
from pathlib import Path
from typing import Any, Dict

try:
    import yaml  # type: ignore
except ImportError:  # pragma: no cover
    yaml = None  # type: ignore


def load_config(path: str | Path) -> Dict[str, Any]:
    p = Path(path)
    if not p.exists():
        raise FileNotFoundError(f"Config file not found: {p}")
    text = p.read_text(encoding="utf-8")
    if p.suffix.lower() in {".yaml", ".yml"}:
        if yaml is None:
            raise RuntimeError("PyYAML not installed; install pyyaml to use YAML configs")
        return yaml.safe_load(text) or {}
    elif p.suffix.lower() == ".json":
        return json.loads(text)
    else:
        raise ValueError(f"Unsupported config format: {p.suffix}")
