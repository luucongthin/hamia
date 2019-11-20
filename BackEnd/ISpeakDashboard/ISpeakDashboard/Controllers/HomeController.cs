﻿using System.Dynamic;
using System.Web.Mvc;
using ISpeakDashboard.DB;
using ISpeakDashboard.Models;

namespace ISpeakDashboard.Controllers
{
    public class HomeController : Controller
    {
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
    }
}