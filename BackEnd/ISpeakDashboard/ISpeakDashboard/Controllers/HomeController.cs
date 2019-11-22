using System.Collections.Generic;
using System.Dynamic;
using System.Web.Mvc;
using ISpeakDashboard.DB;
using ISpeakDashboard.Models;


namespace ISpeakDashboard.Controllers
{
    public class HomeController : Controller
    {
        private BUS _BUS;

        public HomeController() {
            _BUS = new BUS();
        }

        public ActionResult Student()
        {
            dynamic _lstModel = new ExpandoObject();
            UserInfoModel _userInfo = new UserInfoModel();

            string _userID = !string.IsNullOrEmpty((string)Session["auth_sesion"]) ? Session["auth_sesion"].ToString() : "";

            //_userInfo = GetUserInfo(_userID);
            _userInfo.Fullname = "ADMIN";
            _lstModel.UserInfo = _userInfo;

            ViewBag.UserName = _userInfo.Fullname;

            if (_userID == "")
            {
                return RedirectToAction("Login");
            }
            else {
                return View();
            }
        }

        public ActionResult Teacher()
        {
            dynamic _lstModel = new ExpandoObject();
            UserInfoModel _userInfo = new UserInfoModel();

            string _userID = !string.IsNullOrEmpty((string)Session["auth_sesion"]) ? Session["auth_sesion"].ToString() : "";

            //_userInfo = GetUserInfo(_userID);
            _userInfo.Fullname = "ADMIN";
            _lstModel.UserInfo = _userInfo;

            ViewBag.UserName = _userInfo.Fullname;

            if (_userID == "")
            {
                return RedirectToAction("Login");
            }
            else
            {
                return View();
            }
        }

        public ActionResult Login()
        {
            return View();
        }

        public JsonResult Chart_1(int type, string fromDate, string toDate) {

            List<ChartModel_1> dataRes = new List<ChartModel_1>();

            dataRes = BUS.GetDataChart_1(type, fromDate, toDate);

            return Json(dataRes, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Chart_2(int type, string fromDate, string toDate)
        {

            ChartModel_2 dataRes = new ChartModel_2();

            dataRes = BUS.GetDataChart_2(type, fromDate, toDate);

            return Json(dataRes, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Chart_3(int type, string fromDate, string toDate)
        {

            List<ChartModel_1> dataRes = new List<ChartModel_1>();

            dataRes = BUS.GetDataChart_3(type, fromDate, toDate);

            return Json(dataRes, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Chart_4(int type, string fromDate, string toDate)
        {

            ChartModel_2 dataRes = new ChartModel_2();

            dataRes = BUS.GetDataChart_4(type, fromDate, toDate);

            return Json(dataRes, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Chart_5(int type, string fromDate, string toDate)
        {

            List<ChartModel_1> dataRes = new List<ChartModel_1>();

            dataRes = BUS.GetDataChart_5(type, fromDate, toDate);

            return Json(dataRes, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Chart_6(int type, string fromDate, string toDate)
        {

            ChartModel_2 dataRes = new ChartModel_2();

            dataRes = BUS.GetDataChart_6(type, fromDate, toDate);

            return Json(dataRes, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Chart_7(int type, string fromDate, string toDate)
        {

            ChartModel_2 dataRes = new ChartModel_2();

            dataRes = BUS.GetDataChart_7(type, fromDate, toDate);

            return Json(dataRes, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Chart_8(int type, string fromDate, string toDate)
        {

            ChartModel_2 dataRes = new ChartModel_2();

            dataRes = BUS.GetDataChart_8(type, fromDate, toDate);

            return Json(dataRes, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Chart_9(int type, string fromDate, string toDate)
        {

            List<ChartModel_1> dataRes = new List<ChartModel_1>();

            dataRes = BUS.GetDataChart_9(type, fromDate, toDate);

            return Json(dataRes, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Chart_10(int type, string fromDate, string toDate)
        {

            ChartModel_2 dataRes = new ChartModel_2();

            dataRes = BUS.GetDataChart_10(type, fromDate, toDate);

            return Json(dataRes, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Chart_12(int type, string fromDate, string toDate)
        {

            List<ChartModel_1> dataRes = new List<ChartModel_1>();

            dataRes = BUS.GetDataChart_12(type, fromDate, toDate);

            return Json(dataRes, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Chart_13(int type, string fromDate, string toDate)
        {

            ChartModel_2 dataRes = new ChartModel_2();

            dataRes = BUS.GetDataChart_13(type, fromDate, toDate);

            return Json(dataRes, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Chart_14(int type, string fromDate, string toDate)
        {

            ChartModel_2 dataRes = new ChartModel_2();

            dataRes = BUS.GetDataChart_14(type, fromDate, toDate);

            return Json(dataRes, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Chart_15(int type, string fromDate, string toDate)
        {

            ChartModel_2 dataRes = new ChartModel_2();

            dataRes = BUS.GetDataChart_15(type, fromDate, toDate);

            return Json(dataRes, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Chart_16(int type, string fromDate, string toDate)
        {

            List<ChartModel_1> dataRes = new List<ChartModel_1>();

            dataRes = BUS.GetDataChart_16(type, fromDate, toDate);

            return Json(dataRes, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Chart_17(int type, string fromDate, string toDate)
        {

            List<ChartModel_2> dataRes = new List<ChartModel_2>();

            dataRes = BUS.GetDataChart_17(type, fromDate, toDate);

            return Json(dataRes, JsonRequestBehavior.AllowGet);
        }

        #region Check user
        public ActionResult CheckUserLogin(UserLoginModel user) {

            UserInfoModel _userInfo = new UserInfoModel();

            //_userInfo = BUS.CheckUserLogin(user);
            _userInfo.Id = "1";

            if (_userInfo.Id != "")
            {
                Session["auth_sesion"] = _userInfo.Id;
                return RedirectToAction("Student");
            }
            else {
                return RedirectToAction("Login");
            }

        }

        public UserInfoModel GetUserInfo(string userID)
        {

            UserInfoModel _userInfo = new UserInfoModel();

            _userInfo = BUS.GetUserInfo(userID);

            return _userInfo;
        }
        #endregion
    }
}