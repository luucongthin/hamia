using System.Dynamic;
using System.Web.Mvc;
using ISpeakDashboard.DB;
using ISpeakDashboard.Models;

namespace ISpeakDashboard.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            dynamic _lstModel = new ExpandoObject();
            UserInfoModel _userInfo = new UserInfoModel();
            Session["auth_sesion"] = "1";
            string _userID = !string.IsNullOrEmpty((string)Session["auth_sesion"]) ? Session["auth_sesion"].ToString() : "";

            //_userInfo = GetUserInfo(_userID);
            _userInfo.Fullname = "THINLC";
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

        public ActionResult Login()
        {
            return View();
        }

        public ActionResult CheckUserLogin(UserLoginModel user) {

            UserInfoModel _userInfo = new UserInfoModel();

            _userInfo = BUS.CheckUserLogin(user);

            if (_userInfo.Id != "")
            {
                Session["auth_sesion"] = _userInfo.Id;
                return RedirectToAction("Index");
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
    }
}