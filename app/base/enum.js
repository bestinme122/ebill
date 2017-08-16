var _enum = {
  ShopStatus : {
    Active : 1,
    Inactive : -1
  },
  ArticleStatus: {
    Active: 1,
    Inactive: -1
  },
  OrderStatus : {
    Created: 1,
    Complete: 2,
    Overdue: 3
  },
  OrderLineStatus : {
    Created: 1,
    Cancelled: -1
  },
  UserStatus : {
    Active: 1,
    Pending: 2,
    Inactive: -1
  },
  PermisionStatus: {
    Active : 1,
    Inactive: -1
  },
  RoleStatus: {
    Active : 1,
    Inactive: -1
  }

};

module.exports = _enum;
