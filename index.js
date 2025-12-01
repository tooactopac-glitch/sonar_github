function sum(a,b) {
    return a + b;
}
function echo(param){
    return param;
}



const a = {
  "users": [
    {
      "id": 1,
      "name": "Alice Smith",
      "email": "alice.smith@example.com",
      "username": "alice_s",
      "role": "admin",
      "active": true,
      "createdAt": "2025-01-15T08:30:00Z",
      "profile": {
        "age": 29,
        "gender": "female",
        "address": {
          "street": "123 Main St",
          "city": "New York",
          "state": "NY",
          "zip": "10001",
          "country": "USA"
        },
        "phoneNumbers": ["+1-555-1234", "+1-555-5678"],
        "social": {
          "twitter": "@alice_smith",
          "linkedin": "alice-smith",
          "github": "aliceGitHub"
        },
        "preferences": {
          "newsletter": true,
          "notifications": ["email", "sms"],
          "language": "en"
        }
      }
    }
  ]
}
const b = {
  "users": [
    {
      "id": 1,
      "name": "Alice Smith",
      "email": "alice.smith@example.com",
      "username": "alice_s",
      "role": "admin",
      "active": true,
      "createdAt": "2025-01-15T08:30:00Z",
      "profile": {
        "age": 29,
        "gender": "female",
        "address": {
          "street": "123 Main St",
          "city": "New York",
          "state": "NY",
          "zip": "10001",
          "country": "USA"
        },
        "phoneNumbers": ["+1-555-1234", "+1-555-5678"],
        "social": {
          "twitter": "@alice_smith",
          "linkedin": "alice-smith",
          "github": "aliceGitHub"
        },
        "preferences": {
          "newsletter": true,
          "notifications": ["email", "sms"],
          "language": "en"
        }
      }
    }
  ]
}


module.exports = {sum}