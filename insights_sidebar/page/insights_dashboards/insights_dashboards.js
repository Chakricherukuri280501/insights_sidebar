frappe.pages['insights-dashboards'].on_page_load = function(wrapper) {

    frappe.ui.make_app_page({
        parent: wrapper,
        title: 'Insights Dashboards',
        single_column: true
    });
};