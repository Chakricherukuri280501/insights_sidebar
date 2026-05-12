import frappe


@frappe.whitelist()
def get_sidebar_items():

    user = frappe.session.user

    user_roles = frappe.get_roles(user)

    docs = frappe.get_all(
        "Insights Sidebar",
        fields=["name", "label", "dashboard"]
    )

    items = []

    for d in docs:

        doc = frappe.get_doc(
            "Insights Sidebar",
            d.name
        )

        allowed_roles = []

        if doc.roles:

            allowed_roles = [
                row.role
                for row in doc.roles
                if row.role
            ]

        if allowed_roles:

            if not set(user_roles).intersection(set(allowed_roles)):
                continue

        items.append({
            "label": doc.label,
            "dashboard": doc.dashboard
        })

    return items