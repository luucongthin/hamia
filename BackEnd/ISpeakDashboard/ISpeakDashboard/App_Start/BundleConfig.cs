using System.Web;
using System.Web.Optimization;

namespace ISpeakDashboard
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/theme").Include(
                    "~/Assets/vendors/js/vendors.min.js",
                    "~/Assets/vendors/js/ui/jquery.sticky.js",
                    "~/Assets/vendors/js/charts/apexcharts.min.js",
                    "~/Assets/vendors/js/extensions/tether.min.js",
                    "~/Assets/js/core/app-menu.js",
                    "~/Assets/js/core/app.js",
                    //"~/Assets/vendors/js/extensions/shepherd.min.js",
                    "~/Assets/js/scripts/components.js"));

            bundles.Add(new ScriptBundle("~/bundles/dashboard").Include(
                    "~/Assets/vendors/js/vendors.min.js",
                    "~/Assets/js/scripts/pages/dashboard-analytics.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                    "~/Assets/vendors/css/vendors.min.css",
                    "~/Assets/vendors/css/charts/apexcharts.css",
                    "~/Assets/vendors/css/extensions/tether-theme-arrows.css",
                    "~/Assets/vendors/css/extensions/tether.min.css",
                    "~/Assets/vendors/css/extensions/shepherd-theme-default.css",
                    "~/Assets/css/bootstrap.css",
                    "~/Assets/css/bootstrap-extended.css",
                    "~/Assets/css/colors.css",
                    "~/Assets/css/components.css",
                    "~/Assets/css/themes/dark-layout.css",
                    "~/Assets/css/themes/semi-dark-layout.css",
                    "~/Assets/css/core/menu/menu-types/horizontal-menu.css",
                    "~/Assets/css/core/colors/palette-gradient.css",
                    "~/Assets/css/pages/dashboard-analytics.css",
                    "~/Assets/css/pages/card-analytics.css",
                    "~/Assets/css/plugins/tour/tour.css",
                    "~/Assets/css/pages/authentication.css",
                    "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/css/login").Include(
                    "~/Content/login.css"));
        }
    }
}
