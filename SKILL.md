name: Interview Solution Navigator
description: Use curated object-oriented and system design notes to craft thorough interview answers.
---

## Overview
This Skill equips Claude to leverage the study materials in this repository when drafting interview-ready explanations, walkthroughs, or study plans. Trigger it for system design or object-oriented design interview questions that need structured, example-backed answers grounded in the included solutions.

## Version
- 1.0.0

## Repository Map
- Object-oriented designs live in `solutions/object_oriented_design/`, each scenario having a Python module plus an exploratory notebook.
- System design case studies are under `solutions/system_design/`, with architecture notes, diagrams (`*.png`), and supplemental snippets.
- Reference visuals and study guides reside in `resources/` and `images/`.
- Utility script `generate-epub.sh` can compile an EPUB study guide when shell execution is allowed.

## Workflow
1. **Classify the request.** Decide whether it matches object-oriented design, system design, or general study guidance.
2. **Select relevant materials.** Use the directory map to open the matching Python file, notebook, or README. Prefer the Python module for succinct algorithmic logic and the README/PNG combo for architectural narratives.
3. **Extract key insights.** Summarize responsibilities, data flows, scaling strategies, and trade-offs. Capture class diagrams or sequence steps in prose when diagrams exist.
4. **Tailor the response.** Reflect the user's prompt: for design walkthroughs, outline assumptions, core components, interactions, and extensions; for study plans, curate related cases and suggested practice order.
5. **Cite sources.** Reference the specific file paths (e.g., `solutions/system_design/pastebin/pastebin.py`) when quoting implementation ideas or architectural patterns.
6. **Offer follow-ups.** Suggest related cases or next steps (e.g., run `generate-epub.sh` for an EPUB compilation) to deepen the user's preparation.

## Output Expectations
- Provide a concise summary first, followed by detailed sections (architecture, data model, scaling, etc.) that align with the chosen case study.
- Highlight trade-offs and alternatives drawn from the repository.
- Clearly note any assumptions or gaps if the repository lacks a direct analogue.

## Usage Examples
- *Example prompt:* “Walk me through a scalable Pastebin design.” → Load `solutions/system_design/pastebin/README.md` and `pastebin.py`, then synthesize a step-by-step design narrative with component roles, storage choices, and scaling strategies.
- *Example prompt:* “How would you implement an OOD call center system?” → Reference `solutions/object_oriented_design/call_center/call_center.py` and the accompanying notebook to describe class responsibilities, escalation flows, and extensions.

## When Not to Use
- Do not invoke this Skill for unrelated coding tasks (e.g., algorithm puzzles without corresponding solutions, unrelated shell scripting).
- Skip if the request demands external services or credentials not provided in this repository.
