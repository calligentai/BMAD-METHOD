"""CLI entrypoint for running a simulation."""
from __future__ import annotations
import argparse
from pathlib import Path
from .config.loader import load_config
from .engine.simulation_engine import SimulationEngine, SimulationConfig
from .metrics.collector import MetricsCollector
from .report.report_generator import generate_report


def parse_args():
    parser = argparse.ArgumentParser(description="Run a simulation scenario")
    parser.add_argument("--config", required=False, help="Path to config file (YAML/JSON)")
    parser.add_argument("--steps", type=int, default=10, help="Number of steps if no config provided")
    parser.add_argument("--step-delay", type=float, default=0.0, help="Step delay seconds")
    parser.add_argument("--out", default="out_runs", help="Output directory for reports")
    return parser.parse_args()


def main():
    args = parse_args()
    cfg_data = {}
    if args.config:
        cfg_data = load_config(args.config)
    steps = cfg_data.get("steps", args.steps)
    step_delay = cfg_data.get("step_delay_sec", args.step_delay)

    metrics = MetricsCollector()
    engine = SimulationEngine(SimulationConfig(steps=steps, step_delay_sec=step_delay), emit_metric=metrics.emit)
    result = engine.run()
    summary = metrics.summarize()
    result.update(summary)

    # Write report
    run_dir = Path(args.out) / f"run_{result['steps']}_steps"
    generate_report(run_dir, result, metrics.records)
    print(f"Run complete. Summary: {result}. Artifacts in {run_dir}")

if __name__ == "__main__":  # pragma: no cover
    main()
