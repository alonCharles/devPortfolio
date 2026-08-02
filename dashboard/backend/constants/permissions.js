export const Permissions = {
  USERS: {
    CREATE: "users:create",
    VIEW: "users:view",
    EDIT: "users:update",
    DELETE: "users:delete",
  },

  DASHBOARD: {
    VIEW: "dashboard:view",
  },
  CUSTOMERS: {
    CREATE: "customers:create",
    VIEW: "customers:view",
    EDIT: "customers:update",
    DELETE: "customers:delete",
  },
  ACCOUNTS: {
    CREATE: "accounts:create",
    VIEW: "accounts:view",
    DELETE: "accounts:close",
  },
  TRANSACTIONS: {
    CREATE: "transactions:create",
    VIEW: "transactions:view",
    APPROVE: "transactions:approve",
    REJECT: "transactions:reject",
  },
};
