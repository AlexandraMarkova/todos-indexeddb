import Dexie from 'dexie';

//set the database

export const db = new Dexie('db');
//create the database store
db.version(1).stores({
  posts: 'id',
});
db.open().catch(err => {
  console.log(err.stack || err);
});
