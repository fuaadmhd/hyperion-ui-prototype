# Project Hyperion - UI Prototype

## Overview

A fully navigable, static UI prototype of the Project Hyperion financial modeling platform. This is a **non-functional prototype** focused purely on visualizing the user interface, navigation flows, and interaction patterns across all key screens.

### Key Features

- **Workspace & Model Library** - Browse and manage financial models
- **Hybrid Modeling Canvas** - Node-based visual modeling with React Flow
- **AI Co-Pilot Interface** - Interactive AI assistant for model building
- **Version Control & Scenarios** - Git-like branching for scenario analysis
- **Dashboard Builder** - Create interactive dashboards and reports
- **Data Sources** - Manage connected data providers

## Technology Stack

- **React 19** with Vite for fast development
- **React Router** for navigation
- **React Flow** for node-based canvas visualization
- **Recharts** for data visualizations
- **Tailwind CSS 4** for styling
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── workspace/      # Model cards, library, sidebar
│   ├── canvas/         # Node canvas, palettes, grid view
│   ├── ai/             # Co-pilot chat, audit panel
│   ├── version-control/# Version history, branches, scenarios
│   ├── dashboard/      # Dashboard builder, charts, KPIs
│   └── common/         # Reusable components
├── data/               # Mock data (JSON)
├── pages/              # Main page components
├── App.jsx             # Router configuration
└── main.jsx            # Application entry point
```

## Navigation

- **`/`** - Workspace (landing page)
- **`/model/:id`** - Modeling Canvas with visual/grid/code views
- **`/dashboard/:id`** - Dashboard Builder
- **`/data-sources`** - Data Sources management
- **`/library`** - Model Library
- **`/teams`** - Team Spaces

## Key Screens

### 1. Workspace
- Grid of model cards with status indicators
- Quick access to model library
- Team projects in sidebar

### 2. Modeling Canvas
- Visual node-based modeling interface
- Component palette with drag-and-drop
- Configuration panel for selected nodes
- Grid view for spreadsheet-style editing
- Version control and scenario management
- AI Co-Pilot integration

### 3. Dashboard Builder
- Interactive KPI cards
- Charts and visualizations
- Sensitivity analysis tables
- Share/export functionality with permissions

### 4. Data Sources
- Connected data provider management
- Status indicators and sync information
- Configuration interface

## Sample Data

The prototype includes realistic sample data:
- 3 financial models (DCF, LBO, M&A)
- Historical and forecast financial data
- Model templates and components
- Node configurations for visual modeling
- User profiles and team information

## What This Prototype Is NOT

- ❌ No actual data connections or APIs
- ❌ No real calculation engine
- ❌ No authentication/user management
- ❌ No backend/database
- ❌ No real version control system
- ❌ No actual AI/ML functionality

This is purely a **front-end visual prototype** to demonstrate UX/UI and gather stakeholder feedback.

## Design Principles

- **Dark theme** optimized for financial professionals
- **Clean, professional aesthetic** inspired by Bloomberg Terminal and Figma
- **Color-coded** node types and data flows
- **Consistent iconography** throughout
- **Smooth transitions** and hover states
- **Responsive** to desktop/large screens (1920x1080+)

## License

This is a prototype project for demonstration purposes.
