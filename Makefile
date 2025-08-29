VENV?=sim_proj_venv
PY?=$(VENV)/bin/python
PIP?=$(VENV)/bin/pip
RUFF?=$(VENV)/bin/ruff
MYPY?=$(VENV)/bin/mypy
PYTEST?=$(VENV)/bin/pytest

.PHONY: help venv install run test lint type format check metrics clean clean-venv

help:
	@echo "Targets: venv install run test lint type format check metrics clean clean-venv"

venv:
	@test -d $(VENV) || python3 -m venv $(VENV)
	@$(PIP) install -q --upgrade pip
	@$(PIP) install -q .[dev]

install: venv
	@echo "Dependencies installed."

run: venv
	@$(PY) -m core.cli --steps 5 --out out_runs

test: venv
	@$(PYTEST)

lint: venv
	@$(RUFF) check . || true

type: venv
	@$(MYPY) core || true

format: venv
	@$(RUFF) check . --select I --fix
	@$(RUFF) format .

check: lint type test

metrics: run
	@echo "Recent run summary:" && tail -n 5 out_runs/run_*_steps/run_summary.json 2>/dev/null || true

clean:
	rm -rf build dist *.egg-info .pytest_cache .mypy_cache .ruff_cache out_runs out_runs_test

clean-venv:
	rm -rf $(VENV)

