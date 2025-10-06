# Project Hyperion - Complete Prototype Specification

## Overview

This document provides the complete specification for building a fully interactive prototype of Project Hyperion with 20 key screens, comprehensive AI features, real sample data, enhanced dashboard requirements, and innovative features like command palette and real-time collaboration.

---

## 🎯 Prototype Objectives

### Primary Goals
1. **Visual Demonstration**: Showcase all key screens and workflows with high-fidelity UI
2. **Interactive Experience**: Provide realistic interactions with sliders, filters, and controls
3. **AI Integration**: Demonstrate AI co-pilot capabilities throughout the platform
4. **Real Sample Data**: Use comprehensive, realistic financial datasets
5. **Stakeholder Feedback**: Enable early validation of UX/UI decisions

### Scope
- **20 Key Screens** with full navigation
- **AI-powered features** across modeling, dashboards, and analysis
- **Real-time collaboration** simulation
- **Command palette** for power users
- **Interactive dashboards** with sliders, filters, and scenario controls

---

## 📋 20 Key Screens Specification

### 1. **Authentication & Onboarding**

#### 1.1 Login Screen
- **Purpose**: User authentication entry point
- **Features**:
  - Email/password login form
  - SSO options (Google, Microsoft, Okta)
  - Remember me checkbox
  - Forgot password link
- **Design Elements**:
  - Dark theme background
  - Centered login card
  - Hyperion logo and branding
  - Subtle animation on load

#### 1.2 Onboarding Flow
- **Purpose**: New user introduction to platform capabilities
- **Features**:
  - 3-4 step wizard showing key features
  - Interactive demo elements
  - Skip option
  - Progress indicators
- **Content**:
  - Welcome message
  - Visual modeling introduction
  - AI co-pilot overview
  - Collaboration features

### 2. **Main Workspace**

#### 2.1 Workspace Dashboard (Home)
- **Purpose**: Central hub for all user models and projects
- **Components**:
  - **Header**: User profile, notifications (bell icon), search bar, settings
  - **Sidebar**: Navigation to all main sections
  - **Model Grid**: Card-based layout showing recent/starred models
  - **Quick Actions**: New model button, template library access
  - **Activity Feed**: Recent changes, collaborator updates
- **Model Cards Display**:
  - Model thumbnail/preview
  - Model name and description
  - Last modified timestamp
  - Owner/collaborator avatars
  - Status indicators (draft, active, archived)
  - Star/favorite toggle
  - Quick action menu (open, duplicate, share, delete)
- **Filters & Sorting**:
  - Filter by: Type (DCF, LBO, M&A), Status, Owner, Date range
  - Sort by: Recent, Alphabetical, Most used
  - Search functionality
- **Sample Data**:
  - 6-8 model cards with varied states
  - Mix of personal and team models
  - Different model types visible

#### 2.2 Model Library
- **Purpose**: Browse and select from pre-built templates
- **Features**:
  - **Categories**: DCF Models, LBO Models, M&A Analysis, Operating Models, Scenario Planning, Custom Templates
  - **Template Cards**:
    - Preview image
    - Template name and description
    - Complexity indicator (Basic, Intermediate, Advanced)
    - Use count/popularity
    - "Use Template" button
  - **Search & Filters**: By industry, complexity, use case
  - **Template Details Modal**:
    - Detailed description
    - Input requirements
    - Output examples
    - Preview of model structure
- **Sample Templates**: 15-20 diverse templates across categories

### 3. **Modeling Canvas Interface**

#### 3.1 Visual Modeling Canvas
- **Purpose**: Node-based model building with drag-and-drop
- **Layout**:
  - **Left Panel**: Component palette (collapsible)
  - **Center Canvas**: React Flow node canvas
  - **Right Panel**: Configuration/properties (context-aware)
  - **Top Toolbar**: View modes, zoom controls, save, share, version control
  - **Bottom Bar**: AI co-pilot launcher, status indicators
- **Component Palette Categories**:
  - **Data Inputs**: Market data, database queries, file uploads, API connections
  - **Assumptions**: Growth rates, discount rates, multiples, custom parameters
  - **Calculations**: Formulas, aggregations, time series operations
  - **Logic**: Python scripts, custom functions, conditional logic
  - **Visualizations**: Line charts, bar charts, tables, KPI cards
  - **Outputs**: Dashboard components, export nodes
- **Node Types & Properties**:
  - Each node shows icon, label, input/output ports
  - Color-coded by category
  - Connection validation (type-safe)
  - Hover shows preview/details
- **Canvas Interactions**:
  - Drag and drop nodes from palette
  - Connect nodes with edges
  - Multi-select (Cmd/Ctrl + click)
  - Canvas zoom (mouse wheel, zoom controls)
  - Pan (space + drag or middle mouse)
  - Auto-layout option
  - Mini-map for navigation
- **Sample Model**: DCF model with 15-20 interconnected nodes

#### 3.2 Grid View (Spreadsheet Mode)
- **Purpose**: Traditional spreadsheet interface for data entry
- **Features**:
  - Excel-like grid with rows/columns
  - Formula bar
  - Cell formatting options
  - Freeze panes
  - Sort and filter
  - Insert/delete rows/columns
  - Cell comments
- **Data Structure**:
  - Historical data (5 years)
  - Forecast period (5-10 years)
  - Calculation rows with formulas
  - Summary/total rows
- **Sample Data**: Realistic P&L, Balance Sheet, Cash Flow statements

#### 3.3 Code View (Python/Formula Editor)
- **Purpose**: Advanced users can write custom logic
- **Features**:
  - Syntax highlighting
  - Auto-completion
  - Inline documentation
  - Error detection
  - Variable explorer
  - Function library browser
- **Code Examples**:
  - Custom DCF calculation
  - Monte Carlo simulation
  - Regression analysis
  - Data transformation scripts

### 4. **AI Co-Pilot Interface**

#### 4.1 Chat Interface
- **Purpose**: Natural language interaction for model building
- **Components**:
  - **Floating Chat Window**: Minimizable, resizable
  - **Message History**: User queries and AI responses
  - **Input Field**: Multi-line text input with send button
  - **Suggested Actions**: Quick action chips
  - **Context Awareness**: Shows current canvas/model context
- **Sample Conversations**:
  ```
  User: "Forecast operating expenses for next 5 years growing at 3% annually"
  AI: "I've created an operating expense forecast model with:
       1. Data Input Node: Pulls last reported OpEx value
       2. Growth Assumption Node: Set to 3% annual growth
       3. Forecast Calculator: Applies compound growth over 5 years
       4. Visualization: Line chart showing projection
       
       The forecast shows OpEx growing from $2.1M to $2.4M. 
       Would you like me to add sensitivity analysis?"
  
  User: "Add a DCF valuation based on these cash flows"
  AI: "I'll create a DCF model. I need a few assumptions:
       - Discount Rate (WACC): [user input]
       - Terminal Growth Rate: [user input]
       - Forecast Period: [user input]
       Let me set up the nodes..."
  ```
- **AI Capabilities**:
  - Model generation from natural language
  - Node creation and connection
  - Formula suggestions
  - Error detection and fixes
  - Optimization recommendations
  - Data interpretation

#### 4.2 AI Audit Panel
- **Purpose**: Show AI's reasoning and model lineage
- **Features**:
  - List of AI-generated nodes
  - Assumptions made by AI
  - Confidence scores
  - Alternative approaches suggested
  - Edit/approve AI changes
  - Rollback option
- **Display**:
  - Timeline view of AI actions
  - Node-by-node breakdown
  - Assumption justifications
  - Data source references

#### 4.3 AI Insights Dashboard
- **Purpose**: Proactive AI suggestions and anomaly detection
- **Features**:
  - **Model Health Score**: Overall quality indicator
  - **Anomaly Alerts**: Unusual values or patterns
  - **Optimization Suggestions**: Performance improvements
  - **Validation Checks**: Logic errors, circular references
  - **Best Practices**: Industry standard comparisons
- **Sample Insights**:
  - "Revenue growth rate of 50% YoY is significantly above industry average of 15%"
  - "Consider adding sensitivity analysis for key assumptions"
  - "Detected potential circular reference in nodes A → B → C → A"

### 5. **Version Control & Scenarios**

#### 5.1 Version History Panel
- **Purpose**: Git-like version control for models
- **Features**:
  - **Commit Timeline**: List of all saved versions
  - **Commit Details**: Message, author, timestamp, changes
  - **Diff View**: Show what changed between versions
  - **Restore Option**: Rollback to previous version
  - **Branch Indicator**: Show current branch
- **Sample Data**:
  - 5-10 commits with realistic messages
  - Multiple authors (collaboration)
  - Various timestamps

#### 5.2 Branch Management
- **Purpose**: Create and manage parallel model versions
- **Features**:
  - **Branch List**: All active branches
  - **Current Branch Indicator**: Highlighted
  - **Create Branch**: Name and description
  - **Switch Branch**: Change active branch
  - **Merge Branch**: Merge changes from another branch
  - **Branch Graph**: Visual representation of branch structure
- **Branch Types**:
  - Main/Master: Production version
  - Scenario branches: Different assumptions
  - Feature branches: Testing new calculations
  - Team member branches: Individual work

#### 5.3 Scenario Comparison
- **Purpose**: Side-by-side comparison of different scenarios
- **Features**:
  - **Scenario Selector**: Dropdown to choose scenarios
  - **Comparison View**: Table/chart showing key metrics
  - **Assumption Differences**: Highlight changed parameters
  - **Waterfall Chart**: Show impact of assumption changes
  - **Export Comparison**: Generate comparison report
- **Sample Scenarios**:
  - Base Case: Conservative growth assumptions
  - Bull Case: Aggressive growth scenario
  - Bear Case: Economic downturn scenario
  - Market Expansion: New market entry scenario
- **Key Metrics Compared**:
  - Revenue
  - EBITDA
  - Free Cash Flow
  - Enterprise Value
  - IRR/MOIC (for LBO)

### 6. **Enhanced Dashboard Builder**

#### 6.1 Dashboard Editing Mode
- **Purpose**: Create custom dashboards with drag-and-drop
- **Features**:
  - **Widget Library**: Available dashboard components
  - **Canvas**: Grid layout for widget placement
  - **Widget Configuration**: Properties panel for selected widget
  - **Layout Controls**: Resize, reposition, delete widgets
  - **Preview Mode**: Toggle between edit and view
- **Widget Types**:
  - KPI Cards
  - Line/Bar/Pie Charts
  - Tables (sensitivity analysis, data grids)
  - Text/Markdown blocks
  - Filters and controls
  - Images/logos
- **Grid System**: 12-column responsive grid

#### 6.2 Interactive Dashboard Viewer
- **Purpose**: Decision-maker view with interactive controls
- **Components**:
  - **KPI Cards**: Display key metrics with trends
    - Current value (large font)
    - Change indicator (+/- percentage)
    - Trend sparkline
    - Comparison to previous period/target
  - **Charts**:
    - Revenue Trend: Line chart over time
    - Segment Performance: Grouped bar chart
    - EBITDA & Margin: Combination chart
    - Free Cash Flow: Line chart with forecast
  - **Sensitivity Analysis Table**:
    - 2-D matrix (e.g., Revenue Growth vs WACC)
    - Color-coded cells (green = high value, red = low)
    - Highlight selected combination
    - Export to Excel option
  - **Interactive Controls**:
    - **Assumption Sliders**:
      - WACC slider (7-12%, step 0.1%)
      - Revenue Growth slider (5-30%, step 0.5%)
      - Real-time value display
      - Tooltips explaining impact
    - **Scenario Selector**: Dropdown with pre-defined scenarios
    - **Time Period Filter**: Select date ranges
    - **Segment Filter**: Multi-select for business segments
  - **Real-time Impact Panel**:
    - "Valuation Adjustment: +15.3%"
    - "Enterprise Value: $142M → $164M"
    - "Impact on IRR: +2.4 points"
- **Edit/View Mode Toggle**:
  - View Mode: Read-only, sliders disabled
  - Edit Mode: Enable all interactive features
  - Lock icon indicator
- **Sample Data**:
  - Realistic financial metrics
  - Historical trends (5 years)
  - Forecast projections (5-10 years)
  - Multiple scenario datasets

#### 6.3 Dashboard Sharing & Permissions
- **Purpose**: Control access and sharing of dashboards
- **Features**:
  - **Share Modal**:
    - Generate shareable link
    - Set permissions (view, comment, edit)
    - Expiration date option
    - Password protection
  - **Export Options**:
    - PDF: Static report with all charts
    - PowerPoint: Slides with key visuals
    - Excel: Raw data export
    - Interactive Web: Embed code
  - **Permission Levels**:
    - Viewer: Read-only access
    - Commentor: Can add comments
    - Editor: Can modify dashboard
    - Admin: Can manage permissions
  - **Collaboration Features**:
    - Share with specific users/teams
    - Email notifications
    - Activity log
    - Comment threads

### 7. **Data Sources Management**

#### 7.1 Data Source Catalog
- **Purpose**: Manage all connected data providers
- **Layout**:
  - Grid of data source cards
  - Each card shows:
    - Provider logo/icon
    - Connection status (connected, configured, error)
    - Last sync time
    - Brief description
    - Configure button
- **Sample Data Sources**:
  - Bloomberg Terminal: Real-time market data
  - Internal ERP: Company financial data
  - FactSet: Financial analytics platform
  - Satellite Imagery API: Alternative data
  - Custom SQL Database: Proprietary datasets
  - Excel/CSV Upload: File-based data
- **Status Indicators**:
  - Green checkmark: Connected and syncing
  - Yellow clock: Configured but not syncing
  - Red X: Connection error

#### 7.2 Data Source Configuration
- **Purpose**: Set up and test data connections
- **Features**:
  - **Connection Settings**:
    - API keys/credentials (masked)
    - Endpoint URLs
    - Authentication method
    - Rate limit settings
  - **Data Mapping**:
    - Select datasets to import
    - Map fields to model variables
    - Set refresh schedule
  - **Test Connection**: Button to verify settings
  - **Sync History**: Log of recent sync operations
  - **Error Logs**: Detailed error messages
- **Configuration Panel**:
  - Tabbed interface (Connection, Mapping, Schedule, Logs)
  - Save/Cancel buttons
  - Advanced options toggle

#### 7.3 Data Preview & Exploration
- **Purpose**: Inspect imported data
- **Features**:
  - Table view of raw data
  - Column headers with data types
  - Search and filter
  - Sort by column
  - Sample rows (first 100)
  - Data quality metrics
  - Refresh data button

### 8. **Team Collaboration**

#### 8.1 Team Spaces Dashboard
- **Purpose**: Organize and collaborate on team projects
- **Features**:
  - **Team List**: All teams user belongs to
  - **Team Card**:
    - Team name and description
    - Member count and avatars
    - Active project count
    - Recent activity
  - **Create Team**: Button to start new team
  - **Team Projects**: Models shared within team
- **Sample Teams**:
  - Finance Team
  - Investment Committee
  - Corporate Development
  - External Advisors

#### 8.2 Team Project View
- **Purpose**: Team-specific workspace
- **Components**:
  - **Shared Models**: All models accessible to team
  - **Team Members**: List with roles and activity
  - **Activity Feed**: Recent changes by team members
  - **Team Settings**: Manage members and permissions
- **Member Roles**:
  - Owner: Full control
  - Admin: Manage members and settings
  - Editor: Create and edit models
  - Viewer: Read-only access

#### 8.3 Real-Time Collaboration
- **Purpose**: Show active users and changes in real-time
- **Features**:
  - **Active User Indicators**:
    - Avatars in top-right corner
    - Colored cursors on canvas
    - Username tooltips on hover
  - **Live Cursors**: See where others are working
  - **Change Highlights**: Flash when node is modified
  - **Presence Notifications**: "User X joined/left"
  - **Conflict Resolution**: Alert if simultaneous edits
- **Real-Time Comments**:
  - Pin comments to specific nodes
  - Threading/replies
  - @mentions for notifications
  - Resolve/unresolve toggle
  - Comment count badges

### 9. **Command Palette**

#### 9.1 Quick Actions Interface
- **Purpose**: Keyboard-driven power user feature
- **Trigger**: Cmd/Ctrl + K
- **Features**:
  - **Search Box**: Fuzzy search for all actions
  - **Action Categories**:
    - Navigation: "Go to Dashboard", "Open Model", "Switch to Grid View"
    - Creation: "New Model", "Add Node", "Create Dashboard"
    - Model Actions: "Save", "Share", "Export", "Branch"
    - AI Actions: "Ask Co-Pilot", "Run Validation", "Optimize Model"
    - Settings: "Preferences", "Keyboard Shortcuts", "Theme"
  - **Recent Actions**: Show frequently used commands
  - **Keyboard Shortcuts**: Display next to each action
  - **Nested Navigation**: Arrow keys to drill down
- **Visual Design**:
  - Semi-transparent overlay
  - Centered modal
  - Icons for each action
  - Keyboard hints
  - Category separators
- **Sample Commands**:
  ```
  > "new dcf model" → Creates new DCF from template
  > "share dashboard" → Opens share modal
  > "add revenue node" → Adds revenue calculation node to canvas
  > "git commit" → Saves current version with message
  > "compare scenarios" → Opens scenario comparison view
  ```

### 10. **Settings & Preferences**

#### 10.1 User Profile
- **Purpose**: Manage user account settings
- **Sections**:
  - **Profile Information**:
    - Name, email, avatar
    - Job title, company
    - Bio/description
  - **Preferences**:
    - Theme: Dark/Light/Auto
    - Default view mode: Visual/Grid/Code
    - Notifications settings
    - Language preference
  - **Security**:
    - Change password
    - Two-factor authentication
    - Active sessions
    - API tokens

#### 10.2 Workspace Settings
- **Purpose**: Configure workspace behavior
- **Options**:
  - Default model template
  - Auto-save interval
  - Version control settings
  - Data source preferences
  - Performance options

#### 10.3 Keyboard Shortcuts
- **Purpose**: Reference for all shortcuts
- **Layout**:
  - Categorized list of shortcuts
  - Search/filter functionality
  - Customization option (future)
- **Key Shortcuts**:
  - `Cmd/Ctrl + K`: Command palette
  - `Cmd/Ctrl + S`: Save
  - `Cmd/Ctrl + Z`: Undo
  - `Cmd/Ctrl + Y`: Redo
  - `Cmd/Ctrl + /`: Toggle AI co-pilot
  - `Space + Drag`: Pan canvas
  - `Cmd/Ctrl + Scroll`: Zoom canvas

### 11. **Notifications Center**

#### 11.1 Notification Panel
- **Purpose**: Central hub for all notifications
- **Types**:
  - Model updates (by collaborators)
  - Comments and @mentions
  - Share requests
  - Data sync completions
  - AI insights and alerts
  - System announcements
- **Features**:
  - Unread badge count
  - Mark as read
  - Filter by type
  - Clear all
  - Notification settings link
- **Layout**:
  - Dropdown panel from header bell icon
  - Grouped by date (Today, Yesterday, This Week)
  - Click notification to jump to context

### 12. **Search Interface**

#### 12.1 Global Search
- **Purpose**: Find anything across the platform
- **Features**:
  - Search bar in header
  - Real-time results as you type
  - **Result Categories**:
    - Models
    - Dashboards
    - Data sources
    - Team members
    - Documentation
  - **Advanced Filters**:
    - By type, date, owner, tags
  - **Recent Searches**: Show search history
- **Search Results Page**:
  - Categorized results
  - Preview snippets
  - Relevance sorting
  - Pagination

### 13. **Model Templates Gallery**

#### 13.1 Template Browser
- **Purpose**: Explore and preview templates before using
- **Layout**:
  - Grid view with large preview images
  - Filter sidebar
  - Sort options
- **Template Detail Page**:
  - Hero image/video demo
  - Detailed description
  - Key features list
  - Input requirements
  - Sample outputs
  - User reviews/ratings
  - "Use This Template" CTA button
  - Related templates

### 14. **Report Generator**

#### 14.1 Report Builder
- **Purpose**: Create formatted reports from models
- **Features**:
  - **Template Selection**: Pre-designed report layouts
  - **Content Sections**:
    - Executive summary
    - Assumptions
    - Key findings
    - Charts and visuals
    - Sensitivity analysis
    - Appendices
  - **Drag-and-Drop Editor**: Arrange sections
  - **Formatting Controls**: Fonts, colors, logos
  - **Preview Mode**: See final output
  - **Export Options**: PDF, Word, PowerPoint

### 15. **Audit Trail**

#### 15.1 Activity Log
- **Purpose**: Complete history of all model changes
- **Features**:
  - Chronological list of events
  - Filter by: User, Action type, Date range
  - Search functionality
  - Export audit log
- **Event Types**:
  - Model created/edited/deleted
  - Nodes added/modified/removed
  - Assumptions changed
  - Scenarios created
  - Data synced
  - Shares granted/revoked

### 16. **Integration Marketplace**

#### 16.1 Available Integrations
- **Purpose**: Discover and install third-party integrations
- **Layout**:
  - Grid of integration cards
  - Categories: Data sources, Exports, Tools, Analytics
- **Integration Card**:
  - Logo and name
  - Short description
  - Rating and review count
  - Install/Configure button
- **Sample Integrations**:
  - Salesforce connector
  - Tableau export
  - Slack notifications
  - Python execution environment
  - R statistical computing

### 17. **Help & Documentation**

#### 17.1 Help Center
- **Purpose**: User guides and documentation
- **Sections**:
  - Getting Started guide
  - Feature tutorials
  - Video walkthroughs
  - FAQs
  - Keyboard shortcuts
  - API documentation
- **Features**:
  - Search documentation
  - Contextual help (? icon in UI)
  - Interactive tutorials
  - Contact support

### 18. **Admin Panel** (for admin users)

#### 18.1 User Management
- **Purpose**: Manage organization users
- **Features**:
  - User list with roles
  - Invite new users
  - Deactivate users
  - Assign permissions
  - View user activity

#### 18.2 Usage Analytics
- **Purpose**: Monitor platform usage
- **Metrics**:
  - Active users
  - Model creation trends
  - Feature usage statistics
  - Storage consumption
  - API call volumes

### 19. **Model Comparison Tool**

#### 19.1 Side-by-Side Comparison
- **Purpose**: Compare multiple models or versions
- **Features**:
  - Select 2-4 models to compare
  - Table view of key metrics
  - Visual diff of node structures
  - Assumption comparison
  - Performance benchmarks
- **Use Cases**:
  - Compare different valuation approaches
  - Evaluate scenario variations
  - Review version changes

### 20. **Export & Publishing Hub**

#### 20.1 Export Manager
- **Purpose**: Centralized export functionality
- **Features**:
  - **Export Formats**:
    - Excel workbook
    - CSV datasets
    - PDF reports
    - JSON (for API)
    - Python/R scripts
  - **Export History**: Log of recent exports
  - **Scheduled Exports**: Automatic recurring exports
  - **Export Templates**: Save export configurations

#### 20.2 Publishing Options
- **Purpose**: Share models externally
- **Features**:
  - Generate public link
  - Embed code for websites
  - API endpoint generation
  - Webhook configurations
  - Publishing analytics

---

## 🤖 AI Features Specification

### AI Co-Pilot Capabilities

#### 1. Natural Language Model Building
- **Input Examples**:
  - "Build a 5-year DCF for a SaaS company with $10M ARR growing 30% annually"
  - "Add a sensitivity table for WACC ranging from 8% to 12%"
  - "Create a waterfall chart showing the revenue bridge"
- **AI Actions**:
  - Generates appropriate nodes
  - Connects them logically
  - Populates with sensible defaults
  - Asks clarifying questions when needed

#### 2. Intelligent Formula Suggestions
- Context-aware formula recommendations
- Auto-completion based on available data
- Error detection and correction suggestions
- Optimization tips (e.g., "Use vectorized operations for better performance")

#### 3. Data Interpretation
- Automatically detects data types
- Suggests appropriate visualizations
- Identifies trends and patterns
- Flags anomalies and outliers

#### 4. Model Validation
- **Checks Performed**:
  - Circular reference detection
  - Logic consistency validation
  - Industry benchmark comparisons
  - Common error patterns
- **Output**: Validation report with severity levels (Error, Warning, Info)

#### 5. Optimization Recommendations
- Performance improvements
- Simplification suggestions
- Best practice adherence
- Alternative approaches

#### 6. Conversational Analysis
- **Query Examples**:
  - "What's the implied valuation if revenue grows 25%?"
  - "Show me the sensitivity to WACC changes"
  - "Which assumptions have the biggest impact on FCF?"
- **AI Responses**: Natural language answers with supporting visuals

#### 7. Auto-Documentation
- Generates model documentation
- Explains calculation logic
- Documents assumptions and sources
- Creates glossary of terms

### AI Insights Dashboard

#### Proactive Insights
- **Model Health Score**: 0-100 scale based on completeness, accuracy, best practices
- **Anomaly Detection**: "Revenue growth of 120% YoY is unusual for this industry"
- **Benchmark Comparisons**: "Your EBITDA margin of 35% is above industry median of 22%"
- **Missing Data Alerts**: "5 cells in forecast period are empty"
- **Assumption Sensibility**: "Discount rate of 3% seems low for this risk profile"

#### AI Audit Trail
- Log of all AI-generated changes
- Reasoning for each suggestion
- Confidence scores
- Alternative approaches considered
- Ability to approve/reject/modify each suggestion

---

## 📊 Real Sample Data Specification

### Financial Models Data

#### DCF Model Dataset
```json
{
  "model_id": "dcf_techcorp_2024",
  "company": "TechCorp Inc.",
  "model_type": "DCF",
  "assumptions": {
    "wacc": 9.2,
    "terminal_growth_rate": 2.5,
    "forecast_years": 10,
    "revenue_growth_rates": [15, 18, 20, 22, 20, 18, 15, 12, 10, 8],
    "ebitda_margin": 28.5,
    "capex_as_percent_revenue": 5,
    "nwc_as_percent_revenue": 15,
    "tax_rate": 25
  },
  "historical_financials": {
    "years": [2019, 2020, 2021, 2022, 2023],
    "revenue": [2100, 2450, 3200, 4100, 5200],
    "ebitda": [450, 550, 800, 1100, 1478],
    "ebit": [380, 470, 700, 980, 1328],
    "net_income": [285, 353, 525, 735, 996],
    "fcf": [240, 310, 520, 750, 1020]
  },
  "forecast_financials": {
    "years": [2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033],
    "revenue": [6240, 7363, 8836, 10780, 12936, 15264, 17554, 19660, 21626, 23356],
    "ebitda": [1778, 2098, 2518, 3072, 3687, 4350, 5003, 5603, 6163, 6656],
    "ebit": [1566, 1861, 2262, 2778, 3357, 3977, 4598, 5175, 5722, 6204],
    "net_income": [1175, 1396, 1697, 2084, 2518, 2983, 3449, 3881, 4292, 4653],
    "fcf": [1050, 1260, 1530, 1890, 2270, 2680, 3080, 3450, 3800, 4120]
  },
  "valuation": {
    "pv_forecast_fcf": 12450,
    "terminal_value": 75230,
    "pv_terminal_value": 30850,
    "enterprise_value": 43300,
    "net_debt": -2500,
    "equity_value": 45800,
    "shares_outstanding": 100,
    "value_per_share": 458
  }
}
```

#### Segment Performance Data
```json
{
  "segments": [
    {
      "name": "Enterprise",
      "revenue": 3250,
      "revenue_growth": 18.5,
      "customers": 450,
      "customer_growth": 12,
      "churn_rate": 8,
      "arpu": 7222,
      "gross_margin": 72,
      "quarterly_trend": [720, 780, 850, 900]
    },
    {
      "name": "SMB",
      "revenue": 1520,
      "revenue_growth": 25.3,
      "customers": 3200,
      "customer_growth": 22,
      "churn_rate": 15,
      "arpu": 475,
      "gross_margin": 65,
      "quarterly_trend": [340, 370, 400, 410]
    },
    {
      "name": "Consumer",
      "revenue": 430,
      "revenue_growth": 8.2,
      "customers": 125000,
      "customer_growth": 5,
      "churn_rate": 25,
      "arpu": 3.44,
      "gross_margin": 45,
      "quarterly_trend": [95, 100, 115, 120]
    }
  ]
}
```

#### Scenario Datasets
```json
{
  "scenarios": [
    {
      "id": "base_case",
      "name": "Base Case",
      "description": "Conservative growth assumptions",
      "assumptions": {
        "wacc": 9.2,
        "revenue_growth": 15,
        "ebitda_margin": 28.5,
        "terminal_growth": 2.5
      },
      "valuation": {
        "enterprise_value": 43300,
        "equity_value": 45800,
        "irr": 22.5
      }
    },
    {
      "id": "aggressive_growth",
      "name": "Aggressive Growth",
      "description": "Accelerated market expansion",
      "assumptions": {
        "wacc": 8.5,
        "revenue_growth": 28,
        "ebitda_margin": 32,
        "terminal_growth": 3.5
      },
      "valuation": {
        "enterprise_value": 68500,
        "equity_value": 71000,
        "irr": 32.8
      }
    },
    {
      "id": "recession",
      "name": "Recession Scenario",
      "description": "Economic downturn impact",
      "assumptions": {
        "wacc": 11.5,
        "revenue_growth": 5,
        "ebitda_margin": 22,
        "terminal_growth": 1.5
      },
      "valuation": {
        "enterprise_value": 28200,
        "equity_value": 30700,
        "irr": 15.3
      }
    },
    {
      "id": "market_expansion",
      "name": "Market Expansion",
      "description": "New geography/product launch",
      "assumptions": {
        "wacc": 9.8,
        "revenue_growth": 22,
        "ebitda_margin": 26,
        "terminal_growth": 3.0
      },
      "valuation": {
        "enterprise_value": 54700,
        "equity_value": 57200,
        "irr": 26.4
      }
    }
  ]
}
```

#### Detailed KPI Metrics
```json
{
  "kpis": {
    "revenue_metrics": {
      "mrr": 433.3,
      "arr": 5200,
      "yoy_growth": 26.8,
      "qoq_growth": 8.5,
      "cagr_3y": 32.5
    },
    "profitability_metrics": {
      "gross_profit": 3692,
      "gross_margin": 71,
      "ebitda": 1478,
      "ebitda_margin": 28.5,
      "ebit": 1328,
      "ebit_margin": 25.5,
      "net_income": 996,
      "net_margin": 19.2
    },
    "cash_flow_metrics": {
      "operating_cf": 1250,
      "capex": 260,
      "fcf": 990,
      "fcf_margin": 19,
      "fcf_conversion": 99.4
    },
    "customer_metrics": {
      "total_customers": 128650,
      "new_customers": 15200,
      "churned_customers": 8450,
      "net_new_customers": 6750,
      "churn_rate": 6.6,
      "ltv": 1250,
      "cac": 180,
      "ltv_cac_ratio": 6.9
    },
    "operational_metrics": {
      "employees": 850,
      "revenue_per_employee": 6118,
      "rd_spend": 780,
      "rd_as_percent_revenue": 15,
      "sales_marketing_spend": 1560,
      "sm_as_percent_revenue": 30
    },
    "financial_health": {
      "cash": 8200,
      "debt": 5700,
      "net_cash": 2500,
      "current_ratio": 2.8,
      "quick_ratio": 2.3,
      "debt_to_equity": 0.35
    }
  }
}
```

### Mock User and Team Data
```json
{
  "users": [
    {
      "id": "user_001",
      "name": "Maya Chen",
      "email": "maya.chen@example.com",
      "avatar": "MC",
      "role": "Senior Analyst",
      "team": "Finance Team",
      "models_owned": 8,
      "last_active": "2 hours ago"
    },
    {
      "id": "user_002",
      "name": "David Park",
      "email": "david.park@example.com",
      "avatar": "DP",
      "role": "VP Finance",
      "team": "Finance Team",
      "models_owned": 5,
      "last_active": "1 day ago"
    },
    {
      "id": "user_003",
      "name": "Sarah Johnson",
      "email": "sarah.j@example.com",
      "avatar": "SJ",
      "role": "Investment Associate",
      "team": "Investment Committee",
      "models_owned": 12,
      "last_active": "10 minutes ago"
    }
  ],
  "teams": [
    {
      "id": "team_001",
      "name": "Finance Team",
      "description": "Corporate finance and planning",
      "member_count": 8,
      "model_count": 24,
      "created": "2023-01-15"
    },
    {
      "id": "team_002",
      "name": "Investment Committee",
      "description": "Deal evaluation and due diligence",
      "member_count": 5,
      "model_count": 18,
      "created": "2023-03-22"
    }
  ]
}
```

---

## 🎨 Design System & UI Guidelines

### Color Palette

#### Primary Colors
- **Background**: `#0A0E14` (gray-950)
- **Surface**: `#1A1F2E` (gray-900)
- **Surface Elevated**: `#252A3A` (gray-800)
- **Border**: `#2D3548` (gray-700)

#### Accent Colors
- **Primary (Blue)**: `#3B82F6` (Actions, links, selected states)
- **Success (Green)**: `#10B981` (Positive changes, connected status)
- **Warning (Yellow)**: `#F59E0B` (Alerts, pending states)
- **Error (Red)**: `#EF4444` (Errors, negative changes)
- **Info (Purple)**: `#8B5CF6` (Calculations, logic nodes)

#### Text Colors
- **Primary**: `#F9FAFB` (gray-50)
- **Secondary**: `#E5E7EB` (gray-200)
- **Tertiary**: `#9CA3AF` (gray-400)
- **Muted**: `#6B7280` (gray-500)

#### Node Type Colors
- **Data Inputs**: Blue (`#3B82F6`)
- **Assumptions**: Green (`#10B981`)
- **Calculations**: Purple (`#8B5CF6`)
- **Logic**: Orange (`#F97316`)
- **Visualizations**: Pink (`#EC4899`)

### Typography

#### Font Family
- **Primary**: Inter (system-ui fallback)
- **Monospace**: 'Fira Code', 'Courier New', monospace

#### Font Sizes
- **Display**: 36px (2.25rem)
- **Heading 1**: 28px (1.75rem)
- **Heading 2**: 24px (1.5rem)
- **Heading 3**: 20px (1.25rem)
- **Body Large**: 16px (1rem)
- **Body**: 14px (0.875rem)
- **Small**: 12px (0.75rem)
- **Tiny**: 10px (0.625rem)

#### Font Weights
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

### Spacing System
- **Base unit**: 4px
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px

### Border Radius
- **Small**: 4px
- **Medium**: 8px
- **Large**: 12px
- **XL**: 16px
- **Full**: 9999px (pills, avatars)

### Shadows
- **Small**: `0 1px 2px rgba(0, 0, 0, 0.3)`
- **Medium**: `0 4px 6px rgba(0, 0, 0, 0.3)`
- **Large**: `0 10px 15px rgba(0, 0, 0, 0.3)`
- **XL**: `0 20px 25px rgba(0, 0, 0, 0.3)`

### Component Specifications

#### Buttons
- **Primary**: Blue background, white text, hover darken
- **Secondary**: Gray background, white text, hover lighten
- **Tertiary**: Transparent, gray text, hover background
- **Danger**: Red background, white text, hover darken
- **Sizes**: Small (py-2 px-3), Medium (py-2 px-4), Large (py-3 px-6)

#### Cards
- Background: gray-900
- Border: 1px solid gray-800
- Border radius: 8px
- Padding: 16-24px
- Hover: Border color changes to gray-700

#### Inputs
- Background: gray-900
- Border: 1px solid gray-700
- Border radius: 6px
- Padding: 8px 12px
- Focus: Blue border, shadow
- Error: Red border

#### Modals
- Backdrop: Black with 50% opacity
- Container: gray-900 background
- Max width: 600px (md), 800px (lg), 1200px (xl)
- Border radius: 12px
- Padding: 24px
- Close button: Top-right corner

#### Tooltips
- Background: gray-800
- Text: white
- Border radius: 4px
- Padding: 6px 10px
- Max width: 200px
- Font size: 12px

---

## 🔄 Interactive Features Deep Dive

### Dashboard Sliders

#### WACC Slider
- **Range**: 7% to 12%
- **Step**: 0.1%
- **Default**: 9.2%
- **Display**: Real-time percentage value
- **Tooltip**: "Weighted Average Cost of Capital - The discount rate used in DCF calculation"
- **Impact Label**: "Lower WACC increases valuation"
- **Real-time Update**: Recalculate all dependent metrics on change

#### Revenue Growth Rate Slider
- **Range**: 5% to 30%
- **Step**: 0.5%
- **Default**: 15%
- **Display**: Real-time percentage value
- **Tooltip**: "Expected annual revenue growth rate"
- **Impact Label**: "Higher growth drives increased valuation and cash flows"
- **Real-time Update**: Recalculate revenue forecast and downstream metrics

#### EBITDA Margin Slider
- **Range**: 15% to 40%
- **Step**: 0.5%
- **Default**: 28.5%
- **Display**: Real-time percentage value
- **Tooltip**: "EBITDA as a percentage of revenue"
- **Impact Label**: "Higher margins improve profitability and cash generation"

### Filters

#### Time Period Filter
- **Type**: Date range picker
- **Presets**: Last 12 months, Last 3 years, Last 5 years, All time, Custom range
- **Format**: MM/YYYY or Q1 2024
- **Apply button**: Refresh data based on selection

#### Segment Filter
- **Type**: Multi-select dropdown
- **Options**: Enterprise, SMB, Consumer, All Segments
- **Select All**: Checkbox to toggle all
- **Apply button**: Filter charts and metrics

#### Scenario Filter
- **Type**: Single-select dropdown
- **Options**: Base Case, Aggressive Growth, Recession, Market Expansion
- **Quick Switch**: Button group for fast toggling
- **Auto-apply**: Changes take effect immediately

#### Model Type Filter (Workspace)
- **Type**: Checkbox list
- **Options**: DCF, LBO, M&A, Operating Model, Custom
- **Count badges**: Show number of models per type

### Scenario Controls

#### Scenario Selector
- **Location**: Top of dashboard, below title
- **Type**: Styled dropdown menu
- **Display**: Current scenario name
- **Options**: List all available scenarios with descriptions
- **Action on Select**: 
  - Update all assumptions
  - Recalculate all metrics
  - Refresh all charts
  - Show transition animation

#### Scenario Comparison Toggle
- **Type**: Switch/toggle
- **Function**: Enable side-by-side comparison mode
- **Effect**: Split screen showing 2-3 scenarios simultaneously

#### Create New Scenario
- **Trigger**: "+" button next to scenario selector
- **Modal**: 
  - Scenario name input
  - Description textarea
  - Base scenario dropdown (copy settings from)
  - Create button
- **Action**: Duplicate current model with new scenario branch

### Real-time Impact Panel

#### Components
- **Valuation Adjustment**: Percentage change from base case
  - Display: Large font, color-coded (green positive, red negative)
  - Example: "+15.3%" or "-8.7%"
- **Enterprise Value**: Before and after values
  - Display: "$142M → $164M"
- **Equity Value per Share**: Before and after
  - Display: "$458 → $527"
- **Impact Breakdown**: List of affected metrics
  - Revenue impact: +18.2%
  - EBITDA impact: +22.5%
  - FCF impact: +25.8%

#### Visual Design
- Card/panel style
- Sticky positioning (stays visible while scrolling)
- Collapse/expand toggle
- Animation on value changes (number counter effect)

### AI Insights Widget

#### Placement
- Right sidebar panel
- Collapsible section in dashboard
- Pop-up notifications for critical insights

#### Insight Types
1. **Anomaly Alerts**: 
   - Icon: Warning triangle
   - Example: "Revenue growth of 45% is 3x industry average"
   
2. **Optimization Tips**:
   - Icon: Light bulb
   - Example: "Consider testing WACC between 8-10% for sensitivity"
   
3. **Benchmark Comparisons**:
   - Icon: Bar chart
   - Example: "Your EBITDA margin of 32% exceeds industry median by 8 points"
   
4. **Data Quality Issues**:
   - Icon: Alert circle
   - Example: "Missing data in Q4 2022 revenue"

#### Actions
- **Dismiss**: Hide insight
- **Learn More**: Expand with detailed explanation
- **Apply Suggestion**: Auto-implement AI recommendation
- **Feedback**: Thumbs up/down for AI learning

---

## 🚀 Command Palette Specification

### Activation
- **Keyboard**: `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux)
- **Menu**: Help menu → "Command Palette"
- **Visual**: Modal overlay centered on screen

### Interface Design

#### Search Input
- **Placeholder**: "Type a command or search..."
- **Auto-focus**: Cursor in search box on open
- **Fuzzy search**: Matches partial strings
- **Keyboard navigation**: Arrow keys to select, Enter to execute

#### Command List
- **Categorized sections**:
  - Recent (5 most recent commands)
  - Navigation
  - Actions
  - AI Commands
  - Settings
- **Command format**:
  ```
  [Icon] Command Name
        Description (gray text)
        Keyboard Shortcut (right-aligned)
  ```

#### Visual Elements
- Semi-transparent dark backdrop (80% opacity)
- Modal width: 600px
- Max height: 400px (scrollable)
- Border radius: 12px
- Shadow: Large elevation
- Icons: Color-coded by category

### Command Categories

#### Navigation Commands
```
→ Go to Workspace           Jump to main workspace
→ Open Model                Search and open a model
→ Go to Dashboard           Navigate to dashboard builder
→ Go to Data Sources        Open data sources page
→ Go to Team Spaces         Navigate to teams
→ Go to Library             Open model library
→ Switch to Visual View     Change to visual canvas
→ Switch to Grid View       Change to spreadsheet view
→ Switch to Code View       Open code editor
```

#### Creation Commands
```
+ New DCF Model             Create DCF from template
+ New LBO Model             Create LBO from template
+ New Dashboard             Start new dashboard
+ Add Data Source           Connect new data source
+ Create Team               Set up new team workspace
+ New Scenario              Branch current model
```

#### Model Actions
```
💾 Save Model               Save current changes (Cmd+S)
🔄 Save New Version         Commit with message
📤 Share Model              Open sharing dialog
📥 Export to Excel          Download as XLSX
📊 Open Dashboard           View current model's dashboard
🌿 Create Branch            Start new scenario branch
🔀 Merge Branch             Merge scenario into main
```

#### AI Commands
```
🤖 Ask Co-Pilot             Open AI chat (Cmd+/)
✨ Generate Model           Create model from description
🔍 Validate Model           Run AI validation check
⚡ Optimize Model           Get AI optimization suggestions
🎯 Find Errors              Detect issues and anomalies
💡 Get Insights             Generate AI insights report
```

#### Node Operations (when on canvas)
```
📈 Add Revenue Node         Insert revenue calculation
📊 Add Formula Node         Insert formula calculator
🔢 Add Assumption Node      Insert assumption parameter
📉 Add Chart Node           Insert visualization
🔗 Connect Selected Nodes   Create edge between nodes
❌ Delete Selected          Remove selected nodes
```

#### Settings & Help
```
⚙️ Preferences              Open settings
🎨 Change Theme             Switch dark/light theme
⌨️ Keyboard Shortcuts       View all shortcuts
❓ Help Center              Open documentation
📧 Contact Support          Send support request
```

### Advanced Features

#### Command Chaining
- Execute multiple commands in sequence
- Example: `new model → add revenue node → add chart → save`

#### Recent Commands
- Track last 10 executed commands
- Show at top of palette for quick access
- Learn user patterns over time

#### Custom Commands
- Users can create shortcuts to frequent actions
- Assign custom keyboard shortcuts
- Save command macros

#### Context-Aware Commands
- Available commands change based on current view
- Canvas view shows node commands
- Dashboard view shows widget commands
- Grid view shows spreadsheet commands

---

## 👥 Real-Time Collaboration Specification

### Active User Presence

#### User Indicators
- **Avatar Stack**: Top-right corner showing active users
  - Display first 3 avatars, "+N more" for additional users
  - Colored border around avatar (unique per user)
  - Hover shows full name and current action
  - Click opens user info panel

#### Live Cursors
- **Cursor Display**: Show each user's mouse cursor on canvas
  - Unique color per user (consistent with avatar border)
  - Username label appears above cursor
  - Smooth animation as cursor moves
  - Fade out after 2 seconds of inactivity

#### Activity Indicators
- **Typing Indicator**: "User X is typing..." in chat/comments
- **Editing Node**: Highlight outline when another user edits a node
- **Viewing Dashboard**: Show who's viewing same dashboard
- **Lock Icon**: Show when user is editing a locked component

### Real-Time Updates

#### Change Broadcasting
- **Node Changes**: Update canvas for all users when node is modified
- **Flash Effect**: Brief highlight animation on changed elements
- **Undo/Redo**: Broadcast to all users with attribution
- **Assumption Changes**: Update dashboard metrics for all viewers

#### Conflict Resolution
- **Simultaneous Edits**: Alert when two users edit same element
  - Modal: "User X is also editing this node. Continue?"
  - Options: Take control, View their version, Merge changes
- **Auto-Save Conflicts**: Prompt to resolve before saving
- **Version Priority**: Last saved wins, with backup of both versions

### Collaborative Commenting

#### Comment Threads
- **Pin to Node**: Click node, add comment icon appears
- **Comment Bubble**: Visual indicator of comment presence
- **Count Badge**: Number of comments on node
- **Thread View**:
  - Original comment
  - Replies (nested)
  - @mentions with notifications
  - Timestamp and author
  - Edit/delete (own comments)
  - Resolve/unresolve toggle
  - Emoji reactions

#### Comment Notifications
- **In-App**: Bell icon with badge count
- **Real-Time**: Toast notification when mentioned
- **Email Digest**: Optional daily/weekly summary

#### Comment Management
- **Filter**: Show all, show only unresolved, show only mentions
- **Search**: Find comments by text or author
- **Resolve**: Mark comment as addressed
- **Link**: Generate shareable link to specific comment

### Session Management

#### Join/Leave Notifications
- **Toast Message**: "User X joined the session"
- **Activity Log**: Record of all session joins/leaves
- **Timeout**: Mark user inactive after 5 minutes

#### Session Ownership
- **Host**: User who opened model first
- **Transfer**: Host can transfer control to another user
- **Force Sync**: Host can force all users to specific view

### Collaborative Editing Modes

#### Edit Mode
- **Default**: All users can edit simultaneously
- **Lock Regions**: Users can lock specific nodes during editing
- **Turn-Based**: Optional mode where only one user edits at a time

#### View Mode
- **Follow Mode**: Users can "follow" another user's viewport
- **Presenter Mode**: One user controls view for all others
- **Independent**: Each user has independent view (default)

### Real-Time Chat

#### Chat Interface
- **Location**: Collapsible panel on right side
- **Features**:
  - Message history
  - User typing indicators
  - @mentions with auto-complete
  - Emoji picker
  - File attachments
  - Code snippet formatting
  - Link previews
- **Persistence**: Chat history saved with model

---

## 🎨 Innovative Features

### 1. **Smart Model Templates**
- AI-generated templates based on company description
- Industry-specific pre-configured models
- Template customization wizard

### 2. **Automated Data Refresh**
- Schedule automatic data updates from sources
- Email notifications on refresh completion or errors
- Version history of data refreshes

### 3. **Model Health Monitoring**
- Continuous validation checks
- Performance benchmarks
- Data quality scores
- Automated alerts for issues

### 4. **Collaborative Scenario Planning**
- Multiple users create scenarios simultaneously
- Vote on preferred scenarios
- Consensus view combining multiple inputs

### 5. **Interactive Presentations**
- Present dashboards with live controls
- Audience can suggest assumption changes via mobile
- Record presentation sessions

### 6. **API Access for Models**
- Generate REST API endpoints for models
- Query model outputs programmatically
- Webhook triggers on model updates

### 7. **Version Diffing**
- Visual diff showing exactly what changed
- Side-by-side comparison of versions
- Merge conflict resolution UI

### 8. **Keyboard Maestro**
- Power user shortcuts for everything
- Customizable key bindings
- Macro recording and playback

### 9. **Mobile Companion App**
- View dashboards on mobile
- Receive notifications
- Quick approval workflows
- Voice commands for AI co-pilot

### 10. **Integration Hub**
- Connect with Slack, Teams, Email
- Export to PowerPoint with templates
- Sync with Google Sheets, Excel
- Embed dashboards in Notion, Confluence

---

## 🔧 Technical Implementation Notes

### Technology Stack
- **Frontend**: React 19, Vite, Tailwind CSS 4
- **Routing**: React Router v7
- **Canvas**: React Flow (node-based modeling)
- **Charts**: Recharts (data visualizations)
- **Icons**: Lucide React
- **State Management**: React hooks (useState, useContext, useReducer)
- **Real-time**: WebSocket simulation (for prototype)
- **Data**: JSON mock data files

### Project Structure
```
src/
├── components/
│   ├── workspace/        # Home, model cards, library
│   ├── canvas/           # Visual modeling interface
│   ├── ai/               # AI co-pilot, insights, audit
│   ├── version-control/  # Git-like version management
│   ├── dashboard/        # Dashboard builder and viewer
│   ├── collaboration/    # Real-time features
│   ├── command-palette/  # Keyboard command interface
│   └── common/           # Shared UI components
├── data/                 # Mock JSON data
│   ├── mockModels.json
│   ├── mockSegments.json
│   ├── mockScenarios.json
│   ├── mockDetailedMetrics.json
│   ├── mockUsers.json
│   └── mockTeams.json
├── pages/                # Top-level page components
│   ├── Workspace.jsx
│   ├── ModelingCanvas.jsx
│   ├── DashboardPage.jsx
│   ├── DataSources.jsx
│   ├── TeamSpaces.jsx
│   └── [15 more pages]
├── hooks/                # Custom React hooks
├── utils/                # Helper functions
├── contexts/             # React contexts
├── App.jsx               # Router configuration
└── main.jsx              # Entry point
```

### Key Considerations

#### Performance
- Lazy loading for route components
- Virtualized lists for large datasets
- Debounced slider inputs
- Memoized calculations with useMemo
- Optimized re-renders with React.memo

#### Accessibility
- Keyboard navigation support
- ARIA labels on interactive elements
- Focus management
- Screen reader compatibility
- High contrast mode support

#### Responsiveness
- Desktop-first design (1920x1080+)
- Graceful degradation for smaller screens
- Collapsible sidebars
- Responsive grid layouts

#### Code Quality
- ESLint for code linting
- Consistent component structure
- PropTypes or TypeScript for type checking
- Comprehensive comments
- Modular, reusable components

---

## 📝 Implementation Phases

### Phase 1: Core Infrastructure (Weeks 1-2)
- [ ] Set up project structure
- [ ] Create all 20 page shells
- [ ] Implement routing
- [ ] Build common component library
- [ ] Create mock data files
- [ ] Design system implementation

### Phase 2: Workspace & Navigation (Weeks 3-4)
- [ ] Workspace dashboard
- [ ] Model library
- [ ] Header and sidebar navigation
- [ ] Search functionality
- [ ] Settings pages

### Phase 3: Modeling Canvas (Weeks 5-7)
- [ ] Visual canvas with React Flow
- [ ] Component palette
- [ ] Node types and connections
- [ ] Grid view
- [ ] Code view
- [ ] Configuration panels

### Phase 4: AI Features (Weeks 8-9)
- [ ] AI co-pilot chat interface
- [ ] Sample conversations
- [ ] AI audit panel
- [ ] AI insights dashboard
- [ ] Suggestion system

### Phase 5: Version Control (Week 10)
- [ ] Version history
- [ ] Branch management
- [ ] Scenario comparison
- [ ] Diff views

### Phase 6: Dashboard Builder (Weeks 11-13)
- [ ] Dashboard editing mode
- [ ] Widget library
- [ ] Interactive viewer
- [ ] Sliders and filters
- [ ] Scenario controls
- [ ] Real-time impact panel
- [ ] Chart components
- [ ] Share and export features

### Phase 7: Collaboration (Weeks 14-15)
- [ ] Team spaces
- [ ] Active user indicators
- [ ] Real-time cursors
- [ ] Commenting system
- [ ] Notifications

### Phase 8: Advanced Features (Weeks 16-17)
- [ ] Command palette
- [ ] Data sources management
- [ ] Integration marketplace
- [ ] Report generator
- [ ] Audit trail

### Phase 9: Polish & Testing (Weeks 18-20)
- [ ] Animations and transitions
- [ ] Responsive design refinements
- [ ] Cross-browser testing
- [ ] Performance optimization
- [ ] Documentation
- [ ] User testing sessions

---

## 🎯 Success Criteria

### Functional Requirements
- ✅ All 20 screens navigable
- ✅ Interactive sliders update metrics in real-time
- ✅ Scenario switching works correctly
- ✅ Charts display real sample data
- ✅ AI co-pilot demonstrates capabilities
- ✅ Command palette accessible and functional
- ✅ Collaboration features visible
- ✅ All mock data loaded correctly

### User Experience
- ✅ Intuitive navigation
- ✅ Consistent design language
- ✅ Smooth animations
- ✅ Fast load times
- ✅ Responsive interactions
- ✅ Clear visual hierarchy

### Stakeholder Validation
- ✅ Demonstrates all key features
- ✅ Realistic enough for feedback
- ✅ Professional appearance
- ✅ Showcases innovation
- ✅ Enables decision-making on product direction

---

## 📚 Documentation Deliverables

1. **README.md**: Project overview, setup instructions, navigation guide
2. **SPECIFICATION.md**: This comprehensive spec document
3. **DESIGN_SYSTEM.md**: Complete design system documentation
4. **COMPONENT_LIBRARY.md**: Catalog of all reusable components
5. **MOCK_DATA_GUIDE.md**: Description of all mock data structures
6. **USER_GUIDE.md**: How to navigate and use the prototype
7. **DEVELOPER_GUIDE.md**: Technical implementation details
8. **CHANGELOG.md**: Version history and updates

---

## 🔮 Future Enhancements (Post-Prototype)

### Backend Development
- Real database integration
- User authentication system
- API layer
- Calculation engine
- File storage

### Advanced AI
- Actual machine learning models
- Predictive analytics
- Automated optimization
- Natural language query engine

### Enterprise Features
- SSO integration
- Advanced permissions
- Audit logs
- Compliance tools
- White labeling

### Mobile Apps
- Native iOS app
- Native Android app
- Offline capabilities
- Mobile-optimized views

---

## 🎬 Conclusion

This specification provides a complete blueprint for building a fully interactive, feature-rich prototype of Project Hyperion. With 20 key screens, comprehensive AI features, real sample data, and innovative capabilities like command palette and real-time collaboration, this prototype will effectively demonstrate the vision and gather valuable stakeholder feedback.

The focus remains on creating a **high-fidelity visual prototype** that looks and feels like a production application, while being purely front-end with no actual backend calculations or data connections. This approach allows for rapid iteration and validation before committing to full development.

---

**Document Version**: 1.0  
**Last Updated**: 2025-10-06  
**Prepared for**: Pull Request #2 Review
