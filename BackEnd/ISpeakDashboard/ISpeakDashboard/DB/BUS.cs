using ISpeakDashboard.Models;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ISpeakDashboard.DB
{
    public class BUS
    {
        private static Connection connection = new Connection();

        public static UserInfoModel CheckUserLogin(UserLoginModel user)
        {
            UserInfoModel _userInfo = new UserInfoModel();
            MySqlConnection con = connection.loadDB();
            con.Open();

            string sql = "SELECT " + 
                        "   id," +
                        "   username, " +
                        "   fullname, " +
                        "   email, " +
                        "   mobile, " +
                        "   avatar " +
                        " FROM users " +
                        " WHERE username = @username " +
                        " AND password = @password";

            MySqlCommand cmd = new MySqlCommand(sql, con);

            cmd.Parameters.AddWithValue("username", user.UserName);
            cmd.Parameters.AddWithValue("password", user.Password);

            MySqlDataReader _dataReader = cmd.ExecuteReader();
            if (_dataReader.HasRows) {
                while (_dataReader.Read())
                {
                    _userInfo.Id = _dataReader["id"].ToString();
                    _userInfo.Username = _dataReader["username"].ToString();
                    _userInfo.Fullname = _dataReader["fullname"].ToString();
                    _userInfo.Email = _dataReader["email"].ToString();
                    _userInfo.Mobile = _dataReader["mobile"].ToString();
                    _userInfo.Avatar = _dataReader["avatar"].ToString();
                }
            }
            _dataReader.Close();

            return _userInfo;
        }

        public static UserInfoModel GetUserInfo(string id)
        {
            UserInfoModel _userInfo = new UserInfoModel();
            MySqlConnection con = connection.loadDB();
            con.Open();

            string sql = "SELECT " +
                        "   id," +
                        "   username, " +
                        "   fullname, " +
                        "   email, " +
                        "   mobile, " +
                        "   avatar " +
                        " FROM users " +
                        " WHERE id = @id ";

            MySqlCommand cmd = new MySqlCommand(sql, con);

            cmd.Parameters.AddWithValue("id", id);

            MySqlDataReader _dataReader = cmd.ExecuteReader();
            if (_dataReader.HasRows)
            {
                while (_dataReader.Read())
                {
                    _userInfo.Id = _dataReader["id"].ToString();
                    _userInfo.Username = _dataReader["username"].ToString();
                    _userInfo.Fullname = _dataReader["fullname"].ToString();
                    _userInfo.Email = _dataReader["email"].ToString();
                    _userInfo.Mobile = _dataReader["mobile"].ToString();
                    _userInfo.Avatar = _dataReader["avatar"].ToString();
                }
            }
            _dataReader.Close();

            return _userInfo;
        }
    }
}