﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SAMPLE_API.Models.UserDTO
{
    public class UserDTO
    {
        public int ID { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string RoleID { get; set; }
        public string Role { get; set; }
        public string Permission { get; set; }
    }
}