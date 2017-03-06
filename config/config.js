var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'EBill'
    },
    port: process.env.PORT || 3000,
    db_config: {
      database: 'ebill',
      username: 'ebill',
      password: 'ebill',
      options: {
        dialect: 'postgres',
        host: 'localhost',
        port: '5432'
      }
    },
    
    jwtSecret: "tyd_u&rcam-rasnvnd",
    jwtSession: {
        session: false
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'sources'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/sources-test',

    jwtSecret: "tyd_u&rcam-rasnvnd",
    jwtSession: {
        session: false
    }
  },

  production: {
    root: rootPath,
    app: {
      name: 'sources'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/sources-production',

    jwtSecret: "tyd_u&rcam-rasnvnd",
    jwtSession: {
        session: false
    }
  }
};

module.exports = config[env];
