const Realm = require('realm');

export const EventSchema = {
	name: 'Event',
	primaryKey: 'id',
	properties: {
		id: 'int',
		name: 'string',
    location: 'string',
    type: 'string',
    creator: 'string'
	}
};

export const UserSchema = {
  name: 'User',
  primaryKey: 'email',
  properties: {
    email: 'string',
    username: 'string',
    password: 'string',
  }
};


const realmConfig = {
  path: 'database.realm',
  schema: [EventSchema]
}

const realmConfiguration = {
  path: 'db.realm',
  schema: [EventSchema, UserSchema]
}

function insertEvent(newEvent) {
// Get the default Realm with support for our objects
Realm.open(realmConfiguration)
  .then(realm => {
    realm.write(() => {
      realm.create('Event', newEvent);
    });
  })
  .catch(error => {
    console.log(error);
  });
}

export const queryAllEvents = () => new Promise((resolve, reject) => {    
    Realm.open(realmConfiguration)
      .then(realm => {  
        let allEvents = realm.objects('Event');    
        resolve(allEvents);  
      }).catch((error) => {        
        reject(error);  
    });;
});

export const resetRealmFile = () => new Promise((resolve, reject) => {    
    Realm.open(realmConfiguration)
      .then(realm => {  
      realm.write(() => {
        realm.deleteAll(); //delete all objects
        resolve();
      }); 
      }).catch((error) => {        
        reject(error);  
    });;
});

export const fullResetRealmFile = () => new Promise((resolve, reject) => {    
  Realm.deleteFile(realmConfig);
});


// function getPath() {
//   let path = Realm.defaultPath;
//   console.log (path);
// }

//Realm.deleteFile(realmConfig); //Delete old database file

// function deleteModels() {
// Realm.open(realmConfig)
//   .then(realm => {
//     realm.write(() => {
//       realm.deleteModel('User');
//       realm.deleteModel('Event');
//     });
//   })
//   .catch(error => {
//     console.log(error);
//   });
// }

export default { insertEvent };
