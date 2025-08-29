import json
from pathlib import Path
from core.engine.simulation_engine import SimulationEngine, SimulationConfig
from core.metrics.collector import MetricsCollector

def test_engine_runs(tmp_path: Path):
    metrics = MetricsCollector()
    engine = SimulationEngine(SimulationConfig(steps=2, step_delay_sec=0.0), emit_metric=metrics.emit)
    result = engine.run()
    assert result["steps"] == 2
    assert any(k == "duration_sec" for k, _, _ in metrics.records)
