using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using MySql.Data.MySqlClient;

namespace ISpeakDashboard.DB
{
    public class Connection
    {
        public MySqlConnection _con;

        public MySqlConnection loadDB()
        {
            string constr = ConfigurationManager.ConnectionStrings["ISpeakDB"].ToString();
            _con = new MySqlConnection(constr);
            return _con;
        }
        public void open(MySqlConnection conn)
        {
            conn.Open();
        }
        public void close(MySqlConnection conn)
        {
            conn.Close();
        }
    }
}