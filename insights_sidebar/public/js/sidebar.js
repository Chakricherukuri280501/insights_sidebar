frappe.router.on('change', () => {

    const route = frappe.get_route();

    if (!route.length) {
        return;
    }

    if (route[0] !== 'insights-dashboards') {
        return;
    }

    setTimeout(() => {

        // prevent duplicate rendering
        if ($('#custom-insights-sidebar').length) {
            return;
        }

        frappe.call({
            method: "insights_sidebar.api.get_sidebar_items",
            callback: function(r) {

                if (!r.message || !r.message.length) {

                    frappe.msgprint("No dashboards available");

                    return;
                }
                let dashboard_name = route.length > 1 ? route[1] : null;

                let sidebar = `
                    <div id="custom-insights-sidebar"
                        style="
                            width:250px;
                            border-right:1px solid #ddd;
                            padding:15px;
                            background:#fff;
                            overflow:auto;
                            height:100vh;
                            flex-shrink:0;
                        ">

                        <h4>Insights Dashboards</h4>
                `;

                r.message.forEach(item => {

                    sidebar += `
                        <div style="margin-bottom:10px;">

                            <a
                                href="/app/insights-dashboards/${item.dashboard}"
                                style="
                                    text-decoration:none;
                                    color:#333;
                                "
                            >
                                ${item.label}
                            </a>

                        </div>
                    `;
                });

                sidebar += `</div>`;

                let content = `
                    <div
                        id="custom-dashboard-content"
                        style="
                            flex:1;
                            padding:20px;
                        "
                    >
                        <h3>Select Dashboard</h3>
                    </div>
                `;

                if (dashboard_name) {

                    content = `
                        <div
                            id="custom-dashboard-content"
                            style="
                                flex:1;
                                padding-left:10px;
                            "
                        >

                            <iframe
                                src="/insights/dashboard/${dashboard_name}"
                                style="
                                    width:100%;
                                    height:100vh;
                                    border:none;
                                    background:white;
                                "
                            ></iframe>

                        </div>
                    `;
                }

                $('.layout-main-section').html(`
                    <div
                        id="custom-dashboard-wrapper"
                        style="
                            display:flex;
                            width:100%;
                        "
                    >

                        ${sidebar}

                        ${content}

                    </div>
                `);
            }
        });

    }, 300);
});