# Insights Sidebar

## Overview

Insights Sidebar is a custom Frappe application that provides a sidebar navigation for Insights Dashboards.

The app automatically displays available dashboards in the sidebar and allows users to open dashboards quickly from a single place.

---

# Required Applications

Before using this app, the following applications must already be installed:

- Frappe
- ERPNext (Optional)
- Insights (Mandatory)

Check installed apps:

```bash
bench --site your-site-name list-apps
```

Example:

```text
frappe
erpnext
insights
insights_sidebar
```

---

# Important Prerequisites

Before configuring the sidebar, make sure the following items already exist.

## 1. Insights Dashboards

Dashboards must be created inside the Insights module.

Navigation:

```text
Insights → Dashboards
```

If dashboards are not created, the sidebar will not display any items.

---

## 2. Dashboard Names

Dashboard names should be:

- Unique
- Clear
- User-friendly

Examples:

- Sales Dashboard
- HR Dashboard
- Inventory Dashboard
- Finance Dashboard

---

## 3. Roles and Permissions

Users must have permission to access:

- Insights
- Dashboards
- Sidebar Doctype

Recommended roles:

- System Manager
- Insights Manager
- Custom Analytics User

---

# Sidebar Configuration

## Open Sidebar Doctype

Navigation:

```text
Awesome Bar → Insights Sidebar
```

---

# Creating Sidebar Records

Create a new sidebar record and fill the following fields.

| Field | Description |
|---|---|
| Label | Name displayed in sidebar |
| Dashboard Name | Exact dashboard name from Insights |
| Role | Role allowed to access the dashboard |
| Route | Dashboard route/path |
| Enabled | Enable or disable sidebar item |

---

# Important Notes

## Dashboard Name

The Dashboard Name must exactly match the dashboard created in Insights.

Correct Example:

```text
Sales Dashboard
```

Wrong Example:

```text
sales dashboard
SalesDashboard
```

---

## Label

The Label is the name shown in the sidebar.

Example:

```text
Sales Analytics
```

---

## Role

Assign the role that should access the dashboard.

Examples:

- Sales User
- HR Manager
- System Manager

Users without the assigned role will not see the sidebar item.

---

# How Sidebar Works

1. User opens the application
2. Sidebar loads available records
3. Role permissions are checked
4. Dashboard links are displayed
5. Clicking the item opens the Insights dashboard

---

# Example Configuration

| Label | Dashboard Name | Role |
|---|---|---|
| Sales Analytics | Sales Dashboard | Sales User |
| HR Reports | HR Dashboard | HR Manager |
| Inventory Analytics | Inventory Dashboard | Stock User |

---
