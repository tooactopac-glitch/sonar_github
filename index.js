function sum(a,b) {
    return a + b;
}
function echo(param,param){
    return param;
}

const a = {
  "project": {
    "name": "BigProjectExample",
    "version": "1.0.0",
    "description": "This is a large JSON example for testing purposes",
    "createdAt": "2025-12-01T20:00:00Z",
    "maintainers": [
      {
        "name": "Alice Smith",
        "email": "alice@example.com",
        "roles": ["developer", "tester"]
      },
      {
        "name": "Bob Johnson",
        "email": "bob@example.com",
        "roles": ["project manager"]
      }
    ],
    "modules": [
      {
        "name": "auth",
        "status": "stable",
        "dependencies": ["database", "logger"],
        "files": [
          {"path": "auth/login.js", "lines": 120, "coverage": 85},
          {"path": "auth/register.js", "lines": 150, "coverage": 90}
        ]
      },
      {
        "name": "payment",
        "status": "beta",
        "dependencies": ["auth", "database", "mailer"],
        "files": [
          {"path": "payment/checkout.js", "lines": 200, "coverage": 70},
          {"path": "payment/refund.js", "lines": 180, "coverage": 65}
        ]
      },
      {
        "name": "analytics",
        "status": "alpha",
        "dependencies": [],
        "files": [
          {"path": "analytics/track.js", "lines": 300, "coverage": 50},
          {"path": "analytics/report.js", "lines": 250, "coverage": 60}
        ]
      }
    ],
    "settings": {
      "logging": {"level": "info", "output": ["console", "file"], "enabled": true},
      "security": {
        "tokenExpiration": 3600,
        "hashAlgorithm": "SHA256",
        "encryption": {"enabled": true, "algorithm": "AES-256"}
      },
      "features": {
        "notifications": true,
        "darkMode": false,
        "multiLanguage": ["en", "fr", "ar", "es"]
      }
    },
    "statistics": {
      "linesOfCode": 2000,
      "testCoverage": 72.5,
      "bugs": 3,
      "vulnerabilities": 1,
      "codeSmells": 15,
      "duplications": 2.3
    },
    "history": [
      {"version": "0.9.0", "date": "2025-11-01", "notes": "Initial beta release"},
      {"version": "0.9.5", "date": "2025-11-15", "notes": "Minor fixes and improvements"},
      {"version": "1.0.0", "date": "2025-12-01", "notes": "Stable release"}
    ],
    "misc": {
      "tags": ["json", "example", "large"],
      "metadata": null,
      "flags": [true, false, true]
    }
  }
}


const b = {
  "project": {
    "name": "BigProjectExample",
    "version": "1.0.0",
    "description": "This is a large JSON example for testing purposes",
    "createdAt": "2025-12-01T20:00:00Z",
    "maintainers": [
      {
        "name": "Alice Smith",
        "email": "alice@example.com",
        "roles": ["developer", "tester"]
      },
      {
        "name": "Bob Johnson",
        "email": "bob@example.com",
        "roles": ["project manager"]
      }
    ],
    "modules": [
      {
        "name": "auth",
        "status": "stable",
        "dependencies": ["database", "logger"],
        "files": [
          {"path": "auth/login.js", "lines": 120, "coverage": 85},
          {"path": "auth/register.js", "lines": 150, "coverage": 90}
        ]
      },
      {
        "name": "payment",
        "status": "beta",
        "dependencies": ["auth", "database", "mailer"],
        "files": [
          {"path": "payment/checkout.js", "lines": 200, "coverage": 70},
          {"path": "payment/refund.js", "lines": 180, "coverage": 65}
        ]
      },
      {
        "name": "analytics",
        "status": "alpha",
        "dependencies": [],
        "files": [
          {"path": "analytics/track.js", "lines": 300, "coverage": 50},
          {"path": "analytics/report.js", "lines": 250, "coverage": 60}
        ]
      }
    ],
    "settings": {
      "logging": {"level": "info", "output": ["console", "file"], "enabled": true},
      "security": {
        "tokenExpiration": 3600,
        "hashAlgorithm": "SHA256",
        "encryption": {"enabled": true, "algorithm": "AES-256"}
      },
      "features": {
        "notifications": true,
        "darkMode": false,
        "multiLanguage": ["en", "fr", "ar", "es"]
      }
    },
    "statistics": {
      "linesOfCode": 2000,
      "testCoverage": 72.5,
      "bugs": 3,
      "vulnerabilities": 1,
      "codeSmells": 15,
      "duplications": 2.3
    },
    "history": [
      {"version": "0.9.0", "date": "2025-11-01", "notes": "Initial beta release"},
      {"version": "0.9.5", "date": "2025-11-15", "notes": "Minor fixes and improvements"},
      {"version": "1.0.0", "date": "2025-12-01", "notes": "Stable release"}
    ],
    "misc": {
      "tags": ["json", "example", "large"],
      "metadata": null,
      "flags": [true, false, true]
    }
  }
}