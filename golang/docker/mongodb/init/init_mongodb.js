db = connect("root:root@localhost:27017/admin");
db = db.getSiblingDB('mongodb_exam');
db.createUser({
'user': "user123",
'pwd': "pw123",
'roles': [{
    'role': 'dbOwner',
    'db': 'mongodb_exam'}]});
// user created

conn = connect("user123:pw123@localhost:27017/mongodb_exam");
db = db.getSiblingDB('mongodb_exam');
db.test.insertOne(
    {
      title: "The Favourite",
      genres: [ "Drama", "History" ],
      runtime: 121,
      rated: "R",
      year: 2018,
      directors: [ "Yorgos Lanthimos" ],
      cast: [ "Olivia Colman", "Emma Stone", "Rachel Weisz" ],
      type: "movie"
    }
)
// add new collection