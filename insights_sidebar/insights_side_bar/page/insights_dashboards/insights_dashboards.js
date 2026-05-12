frappe.pages['insights-dashboards'].on_page_load = function(wrapper) {

    let page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'Insights Dashboards',
        single_column: true
    });

    render_dashboard_page(page);
};

frappe.pages['insights-dashboards'].on_page_show = function(wrapper) {

    let page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'Insights Dashboards',
        single_column: true
    });

    render_dashboard_page(page);
};

function render_dashboard_page(page) {

    const route = frappe.get_route();

    const config_name = route[1];

    $(page.body).html(`
        <div class="custom-dashboard-layout"
             style="
                display:flex;
                width:100%;
             ">

            <div class="custom-dashboard-sidebar"
                 style="width:220px;">
            </div>

            <div class="custom-dashboard-content"
                 style="
                    flex:1;
                    padding-left:15px;
                 ">
                 Loading...
            </div>
        </div>
    `);

    if (!config_name) {

        $('.custom-dashboard-content').html(`
            <div style="padding:20px;">
                Select Dashboard
            </div>
        `);

        return;
    }

    frappe.call({
        method: 'insights_sidebar.api.get_dashboard_url',
        args: {
            config_name: config_name
        },
        callback: function(r) {

            if (!r.message) {

                $('.custom-dashboard-content').html(`
                    <div style="padding:20px;">
                        Dashboard not found
                    </div>
                `);

                return;
            }

            $('.custom-dashboard-content').html(`
                <iframe
                    src="${r.message}"
                    style="
                        width:100%;
                        height:calc(100vh - 120px);
                        border:none;
                        background:white;
                    "
                ></iframe>
            `);
        }
    });

    setTimeout(() => {
        render_custom_sidebar();
    }, 300);
}