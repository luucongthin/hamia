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

        #region User
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

        #endregion

        #region Chart_1
        public static List<ChartModel_1> GetDataChart_1(int type, string from_date, string to_date)
        {
            List<ChartModel_1> _lstChart = new List<ChartModel_1>();
            MySqlConnection con = connection.loadDB();
            con.Open();

            string sql = "select " +
                            "FROM_UNIXTIME(U.created_at, 'Tháng %m-%Y') categories, " +
                            "sum(active) result, " +
                            "case " +
                                "when " + type + " = 0 then 20 " + // day
                                "when " + type + " = 1 then 100 " + // week
                                "when " + type + " = 2 then 400 " + // month
                            "end as target " +
                        "from users U " +
                        "inner join students S on U.id = S.user_id " +
                        "where active = 1 " +
                        "and FROM_UNIXTIME(U.created_at, '%Y-%m-%d') between '" + from_date + "' and '" + to_date + "' " +
                        "group by FROM_UNIXTIME(U.created_at, '%m') " +
                        "order by FROM_UNIXTIME(U.created_at, 'Tháng %m-%Y')";

            MySqlCommand cmd = new MySqlCommand(sql, con);


            MySqlDataReader _dataReader = cmd.ExecuteReader();
            if (_dataReader.HasRows)
            {
                while (_dataReader.Read())
                {
                    ChartModel_1 _chart = new ChartModel_1();
                    _chart.categories = _dataReader["categories"].ToString();
                    _chart.target = _dataReader["target"].ToString();
                    _chart.result = _dataReader["result"].ToString();
                    _lstChart.Add(_chart);
                }
            }
            _dataReader.Close();

            return _lstChart;
        }
        #endregion

        #region Chart_2
        public static ChartModel_2 GetDataChart_2(int type, string from_date, string to_date)
        {
            MySqlConnection con = connection.loadDB();
            ChartModel_2 _chart = new ChartModel_2();
            con.Open();

            string sql = "select  " +
                            "sum(case when CEIL((unix_timestamp(CURDATE()) - unix_timestamp(STR_TO_DATE(birthday,'%Y-%m-%d'))) / 31556926) <= 10  then 1 else 0 end) col_1, " +
                            "sum(case when CEIL((unix_timestamp(CURDATE()) - unix_timestamp(STR_TO_DATE(birthday,'%Y-%m-%d'))) / 31556926) > 10 " +
                                "and CEIL((unix_timestamp(CURDATE()) - unix_timestamp(STR_TO_DATE(birthday,'%Y-%m-%d'))) / 31556926) <= 15 " +
                                "then 1 else 0 end)  col_2, " +
                            "sum(case when CEIL((unix_timestamp(CURDATE()) - unix_timestamp(STR_TO_DATE(birthday,'%Y-%m-%d'))) / 31556926) > 15  then 1 else 0 end) col_3 " +
                        "from users U " +
                        "inner join students S on U.id = S.user_id " +
                        "where active = 1 " +
                        "and unix_timestamp(STR_TO_DATE(birthday,'%Y-%m-%d'))  > 0 " +
                        "and FROM_UNIXTIME(U.created_at, '%Y-%m-%d') between '" + from_date + "' and '" + to_date + "' ";

            MySqlCommand cmd = new MySqlCommand(sql, con);


            MySqlDataReader _dataReader = cmd.ExecuteReader();
            if (_dataReader.HasRows)
            {
                while (_dataReader.Read())
                {
                    _chart.col_1 = _dataReader["col_1"].ToString();
                    _chart.col_2 = _dataReader["col_2"].ToString();
                    _chart.col_3 = _dataReader["col_3"].ToString();
                }
            }
            _dataReader.Close();

            return _chart;
        }
        #endregion

        #region Chart_3
        public static List<ChartModel_1> GetDataChart_3(int type, string from_date, string to_date)
        {
            List<ChartModel_1> _lstChart = new List<ChartModel_1>();
            MySqlConnection con = connection.loadDB();
            con.Open();

            string sql = "select " +
                            "FROM_UNIXTIME(created_at, 'Tháng %m-%Y') categories, " +
                            "sum(is_trialed) result, " +
                            "case " +
                                "when " + type + " = 0 then 20 " + // day
                                "when " + type + " = 1 then 100 " + // week
                                "when " + type + " = 2 then 400 " + // month
                            "end as target " +
                        "from students " +
                        "where is_trialed = 1 " +
                        "and FROM_UNIXTIME(created_at, '%Y-%m-%d') between '" + from_date + "' and '" + to_date + "' " +
                        "group by FROM_UNIXTIME(created_at, '%m') " +
                        "order by FROM_UNIXTIME(created_at, 'Tháng %m-%Y')";

            MySqlCommand cmd = new MySqlCommand(sql, con);


            MySqlDataReader _dataReader = cmd.ExecuteReader();
            if (_dataReader.HasRows)
            {
                while (_dataReader.Read())
                {
                    ChartModel_1 _chart = new ChartModel_1();
                    _chart.categories = _dataReader["categories"].ToString();
                    _chart.target = _dataReader["target"].ToString();
                    _chart.result = _dataReader["result"].ToString();
                    _lstChart.Add(_chart);
                }
            }
            _dataReader.Close();

            return _lstChart;
        }
        #endregion

        #region Chart_4
        public static ChartModel_2 GetDataChart_4(int type, string from_date, string to_date)
        {
            MySqlConnection con = connection.loadDB();
            ChartModel_2 _chart = new ChartModel_2();
            con.Open();

            string sql = "select  " +
                            "sum(case when U.active = 1 then 1 else 0 end) col_1, " +
                            "sum(case when S.is_trialed = 1 then 1 else 0 end)  col_2 " +
                        "from users U " +
                        "inner join students S on U.id = S.user_id " +
                        "where unix_timestamp(STR_TO_DATE(birthday, '%Y-%m-%d')) > 0 " +
                        "and FROM_UNIXTIME(U.created_at, '%Y-%m-%d') between '" + from_date + "' and '" + to_date + "' ";

            MySqlCommand cmd = new MySqlCommand(sql, con);


            MySqlDataReader _dataReader = cmd.ExecuteReader();
            if (_dataReader.HasRows)
            {
                while (_dataReader.Read())
                {
                    _chart.col_1 = _dataReader["col_1"].ToString();
                    _chart.col_2 = _dataReader["col_2"].ToString();
                }
            }
            _dataReader.Close();

            return _chart;
        }
        #endregion

        #region Chart_5
        public static List<ChartModel_1> GetDataChart_5(int type, string from_date, string to_date)
        {
            List<ChartModel_1> _lstChart = new List<ChartModel_1>();
            MySqlConnection con = connection.loadDB();
            con.Open();

            string sql = "select " +
                            "FROM_UNIXTIME(U.created_at, 'Tháng %m-%Y') categories, " +
                            "sum(case when total_booking = 1 then 1 else 0 end) result " +
                        "from users U " +
                        "inner join students S on U.id = S.user_id " +
                        "where total_booking = 1 " +
                        "and FROM_UNIXTIME(U.created_at, '%Y-%m-%d') between '" + from_date + "' and '" + to_date + "' " +
                        "group by FROM_UNIXTIME(U.created_at, 'Tháng %m-%Y') " +
                        "order by FROM_UNIXTIME(U.created_at, 'Tháng %m-%Y')";

            MySqlCommand cmd = new MySqlCommand(sql, con);


            MySqlDataReader _dataReader = cmd.ExecuteReader();
            if (_dataReader.HasRows)
            {
                while (_dataReader.Read())
                {
                    ChartModel_1 _chart = new ChartModel_1();
                    _chart.categories = _dataReader["categories"].ToString();
                    _chart.result = _dataReader["result"].ToString();
                    _lstChart.Add(_chart);
                }
            }
            _dataReader.Close();

            return _lstChart;
        }
        #endregion

        #region Chart_6
        public static ChartModel_2 GetDataChart_6(int type, string from_date, string to_date)
        {
            MySqlConnection con = connection.loadDB();
            ChartModel_2 _chart = new ChartModel_2();
            con.Open();

            string sql = "select  " +
                            "sum(case when S.is_trialed = 1 then 1 else 0 end)  col_1, " +
                            "sum(case when S.total_booking = 1 then 1 else 0 end)  col_2 " +
                        "from users U " +
                        "inner join students S on U.id = S.user_id " +
                        "where FROM_UNIXTIME(U.created_at, '%Y-%m-%d') between '" + from_date + "' and '" + to_date + "' ";

            MySqlCommand cmd = new MySqlCommand(sql, con);

            MySqlDataReader _dataReader = cmd.ExecuteReader();
            if (_dataReader.HasRows)
            {
                while (_dataReader.Read())
                {
                    _chart.col_1 = _dataReader["col_1"].ToString();
                    _chart.col_2 = _dataReader["col_2"].ToString();
                }
            }
            _dataReader.Close();

            return _chart;
        }
        #endregion

        #region Chart_7
        public static ChartModel_2 GetDataChart_7(int type, string from_date, string to_date)
        {
            MySqlConnection con = connection.loadDB();
            ChartModel_2 _chart = new ChartModel_2();
            con.Open();

            string sql = "select  " +
                            "sum(case when U.active = 1 then 1 else 0 end)  col_1, " +
                            "sum(case when S.total_booking = 1 then 1 else 0 end)  col_2 " +
                        "from users U " +
                        "inner join students S on U.id = S.user_id " +
                        "where FROM_UNIXTIME(U.created_at, '%Y-%m-%d') between '" + from_date + "' and '" + to_date + "' ";

            MySqlCommand cmd = new MySqlCommand(sql, con);

            MySqlDataReader _dataReader = cmd.ExecuteReader();
            if (_dataReader.HasRows)
            {
                while (_dataReader.Read())
                {
                    _chart.col_1 = _dataReader["col_1"].ToString();
                    _chart.col_2 = _dataReader["col_2"].ToString();
                }
            }
            _dataReader.Close();

            return _chart;
        }
        #endregion

        #region Chart_8
        public static ChartModel_2 GetDataChart_8(int type, string from_date, string to_date)
        {
            MySqlConnection con = connection.loadDB();
            ChartModel_2 _chart = new ChartModel_2();
            con.Open();

            string sql = "select  " +
                            "sum(case when U.active = 1 then 1 else 0 end)  col_1, " +
                            "sum(case when S.total_booking = 1 then 1 else 0 end)  col_2 " +
                        "from users U " +
                        "inner join students S on U.id = S.user_id " +
                        "where FROM_UNIXTIME(U.created_at, '%Y-%m-%d') between '" + from_date + "' and '" + to_date + "' ";

            MySqlCommand cmd = new MySqlCommand(sql, con);

            MySqlDataReader _dataReader = cmd.ExecuteReader();
            if (_dataReader.HasRows)
            {
                while (_dataReader.Read())
                {
                    _chart.col_1 = _dataReader["col_1"].ToString();
                    _chart.col_2 = _dataReader["col_2"].ToString();
                }
            }
            _dataReader.Close();

            return _chart;
        }
        #endregion

        #region Chart_9
        public static List<ChartModel_1> GetDataChart_9(int type, string from_date, string to_date)
        {
            List<ChartModel_1> _lstChart = new List<ChartModel_1>();
            MySqlConnection con = connection.loadDB();
            con.Open();

            string sql = "select " +
                            "FROM_UNIXTIME(U.created_at, 'Tháng %m-%Y') categories, " +
                            "sum(total_money) result " +
                        "from users U " +
                        "inner join students S on U.id = S.user_id " +
                        "where FROM_UNIXTIME(U.created_at, '%Y-%m-%d') between '" + from_date + "' and '" + to_date + "' " +
                        "group by FROM_UNIXTIME(U.created_at, '%m') " +
                        "order by FROM_UNIXTIME(U.created_at, 'Tháng %m-%Y')";

            MySqlCommand cmd = new MySqlCommand(sql, con);


            MySqlDataReader _dataReader = cmd.ExecuteReader();
            if (_dataReader.HasRows)
            {
                while (_dataReader.Read())
                {
                    ChartModel_1 _chart = new ChartModel_1();
                    _chart.categories = _dataReader["categories"].ToString();
                    _chart.result = _dataReader["result"].ToString();
                    _lstChart.Add(_chart);
                }
            }
            _dataReader.Close();

            return _lstChart;
        }
        #endregion

        #region Chart_10
        public static ChartModel_2 GetDataChart_10(int type, string from_date, string to_date)
        {
            MySqlConnection con = connection.loadDB();
            ChartModel_2 _chart = new ChartModel_2();
            con.Open();

            string sql = "select  " +
                            "sum(total_money) col_1, " +
                            "case " +
                                "when " + type + " = 0 then 20000000 " + // day
                                "when " + type + " = 1 then 150000000 " + // week
                                "when " + type + " = 2 then 300000000 " + // month
                            "end as col_2 " +
                        "from users U " +
                        "inner join students S on U.id = S.user_id " +
                        "where FROM_UNIXTIME(U.created_at, '%Y-%m-%d') between '" + from_date + "' and '" + to_date + "' ";

            MySqlCommand cmd = new MySqlCommand(sql, con);

            MySqlDataReader _dataReader = cmd.ExecuteReader();
            if (_dataReader.HasRows)
            {
                while (_dataReader.Read())
                {
                    _chart.col_1 = _dataReader["col_1"].ToString();
                    _chart.col_2 = _dataReader["col_2"].ToString();
                }
            }
            _dataReader.Close();

            return _chart;
        }
        #endregion

        #region Chart_12
        public static List<ChartModel_1> GetDataChart_12(int type, string from_date, string to_date)
        {
            List<ChartModel_1> _lstChart = new List<ChartModel_1>();
            MySqlConnection con = connection.loadDB();
            con.Open();

            string sql = "select " +
                            "FROM_UNIXTIME(U.created_at, 'Tháng %m-%Y') categories, " +
                            "sum(case when S.total_booking > 1 then 1 else 0 end) result " +
                        "from users U " +
                        "inner join students S on U.id = S.user_id " +
                        "where total_booking > 1 " +
                        "and FROM_UNIXTIME(U.created_at, '%Y-%m-%d') between '" + from_date + "' and '" + to_date + "' " +
                        "group by FROM_UNIXTIME(U.created_at, '%m') " +
                        "order by FROM_UNIXTIME(U.created_at, 'Tháng %m-%Y')";

            MySqlCommand cmd = new MySqlCommand(sql, con);


            MySqlDataReader _dataReader = cmd.ExecuteReader();
            if (_dataReader.HasRows)
            {
                while (_dataReader.Read())
                {
                    ChartModel_1 _chart = new ChartModel_1();
                    _chart.categories = _dataReader["categories"].ToString();
                    _chart.result = _dataReader["result"].ToString();
                    _lstChart.Add(_chart);
                }
            }
            _dataReader.Close();

            return _lstChart;
        }
        #endregion

        #region Chart_13
        public static ChartModel_2 GetDataChart_13(int type, string from_date, string to_date)
        {
            MySqlConnection con = connection.loadDB();
            ChartModel_2 _chart = new ChartModel_2();
            con.Open();

            string sql = "select  " +
                            "sum(case when S.is_trialed = 1 then 1 else 0 end)  col_1, " +
                            "sum(case when S.total_booking > 1 then 1 else 0 end)  col_2 " +
                        "from users U " +
                        "inner join students S on U.id = S.user_id " +
                        "where FROM_UNIXTIME(U.created_at, '%Y-%m-%d') between '" + from_date + "' and '" + to_date + "' ";

            MySqlCommand cmd = new MySqlCommand(sql, con);

            MySqlDataReader _dataReader = cmd.ExecuteReader();
            if (_dataReader.HasRows)
            {
                while (_dataReader.Read())
                {
                    _chart.col_1 = _dataReader["col_1"].ToString();
                    _chart.col_2 = _dataReader["col_2"].ToString();
                }
            }
            _dataReader.Close();

            return _chart;
        }
        #endregion

        #region Chart_14
        public static ChartModel_2 GetDataChart_14(int type, string from_date, string to_date)
        {
            MySqlConnection con = connection.loadDB();
            ChartModel_2 _chart = new ChartModel_2();
            con.Open();

            string sql = "select  " +
                            "sum(case when U.active = 1 then 1 else 0 end)  col_1, " +
                            "sum(case when S.total_booking > 1 then 1 else 0 end)  col_2 " +
                        "from users U " +
                        "inner join students S on U.id = S.user_id " +
                        "where FROM_UNIXTIME(U.created_at, '%Y-%m-%d') between '" + from_date + "' and '" + to_date + "' ";

            MySqlCommand cmd = new MySqlCommand(sql, con);

            MySqlDataReader _dataReader = cmd.ExecuteReader();
            if (_dataReader.HasRows)
            {
                while (_dataReader.Read())
                {
                    _chart.col_1 = _dataReader["col_1"].ToString();
                    _chart.col_2 = _dataReader["col_2"].ToString();
                }
            }
            _dataReader.Close();

            return _chart;
        }
        #endregion

        #region Chart_15
        public static ChartModel_2 GetDataChart_15(int type, string from_date, string to_date)
        {
            MySqlConnection con = connection.loadDB();
            ChartModel_2 _chart = new ChartModel_2();
            con.Open();

            string sql = "select  " +
                            "sum(case when U.active = 1 then 1 else 0 end)  col_1, " +
                            "sum(case when S.total_booking > 1 then 1 else 0 end)  col_2 " +
                        "from users U " +
                        "inner join students S on U.id = S.user_id " +
                        "where FROM_UNIXTIME(U.created_at, '%Y-%m-%d') between '" + from_date + "' and '" + to_date + "' ";

            MySqlCommand cmd = new MySqlCommand(sql, con);

            MySqlDataReader _dataReader = cmd.ExecuteReader();
            if (_dataReader.HasRows)
            {
                while (_dataReader.Read())
                {
                    _chart.col_1 = _dataReader["col_1"].ToString();
                    _chart.col_2 = _dataReader["col_2"].ToString();
                }
            }
            _dataReader.Close();

            return _chart;
        }
        #endregion

    }
}