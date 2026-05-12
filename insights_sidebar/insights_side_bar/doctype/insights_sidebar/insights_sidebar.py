import frappe
from frappe.model.document import Document


class InsightsSidebar(Document):

    def on_update(self):
        frappe.clear_cache()

    def on_trash(self):
        frappe.clear_cache()