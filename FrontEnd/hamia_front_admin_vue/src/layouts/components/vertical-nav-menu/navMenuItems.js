/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  // {
  //   url: "/apps/email",
  //   name: "Email",
  //   slug: "email",
  //   icon: "MailIcon",
  //   i18n: "Email",
  // },
  {
    url: '/admin/categories',
    name: "Quản lý Industry",
    icon: "HomeIcon",
    slug: "categories",
    i18n: "Quản lý Industry"
  },
  {
    url: null,
    name: "Quản lý Legislation",
    icon: "PackageIcon",
    i18n: "Quản lý Legislation",
    submenu: [
      {
        url: "/admin/legislation",
        name: "NTM",
        slug: "NTM",
        icon: "MailIcon",
        i18n: "NTM"
      }
    ]
  },
  {
    url: '/admin/locations',
    name: "Quản lý khu vực địa lý",
    icon: "",
    slug: "locations",
    i18n: "Quản lý khu vực địa lý"
  },
  {
    url: '/admin/stores',
    name: "Quản lý cơ sở dinh doanh",
    icon: "",
    slug: "stores",
    i18n: "Quản lý cơ sở dinh doanh"
  },
  {
    url: '/admin/users',
    name: "Quản lý User",
    icon: "",
    slug: "users",
    i18n: "Quản lý User"
  }
]

