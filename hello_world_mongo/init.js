
db.createUser({
  user: "admin",
  pwd: "password",
  roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
});

db.createCollection("users");

db.users.insertMany([
  {
    "name": "John",
    "email": "john@example.com",
    "age": 25
  },
  {
    "name": "Jane",
    "email": "jane@example.com",
    "age": 30
  },
  {
    "name": "Bob",
    "email": "bob@example.com",
    "age": 40
  }
]);
