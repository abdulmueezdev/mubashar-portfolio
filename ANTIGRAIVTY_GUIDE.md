# Antigraivty Universal Project Bootstrap Guide

## Quick Start for Any New Project

### 1. Link to the Hub
```bash
# In your new project directory
ln -s ~/Documents/Antigraivty_Data/.agents/skills ./.agents/skills
ln -s ~/Documents/Antigraivty_Data/MCPS ./MCPS
```

### 2. Activate Skills
All skills are automatically available via the central registry.
Trigger phrases:
"Use @skill-name" → Loads skill from ~/.agents/skills/
"Use the UI/UX Pro Max skill" → Reads full_context.md for path

### 3. Activate GSD
Trigger: "use this to make the task dummy"
Response: Must invoke /gsd-new-project or /gsd-quick

### 4. Activate Ralph Loop
Trigger: "use ralphloop to [task]"
Prerequisite: Antigravity launched with --remote-debugging-port=9000
Extension: abhishekbhakat.ralph-loop-for-antigravity

### 5. Activate MCPs
All 5 MCPs are configured in ~/Documents/Antigraivty_Data/MCPS/mcp_config.json
Trigger phrases:
"Use 21st mcp to build [element]" or "/ui [prompt]"
"Add button using shadcn registry"
"Use GSAP Master MCP to animate..."
"Use Magic UI MCP to add blur fade..."
"Use Skiper UI MCP to search..."

### 6. Design-to-Code Workflow
Stitch design: "Use stitch-design skill"
Generate screens: "Use generate-design skill"
Convert to React: "Use react-components skill"
Extract DESIGN.md: "Use design-md skill"
