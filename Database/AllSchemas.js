const Realm = require('realm');

export const EventSchema = {
	name: 'Event',
	primaryKey: 'id',
	properties: {
		id: 'int',
		name: 'string'
	}
};

export const UserSchema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: 'int',
    username: 'string',
    password: 'string',
    events: 'Event[]'
  }
}


const realmConfig = {
  path: 'database.realm',
  schema: [EventSchema, UserSchema]
}

function insertEvent(newEvent) {
// Get the default Realm with support for our objects
Realm.open(realmConfig)
  .then(realm => {
    realm.write(() => {
      const myEvent = realm.create('Event', newEvent);
    });
    console.log('realm object created');
  })
  .catch(error => {
    console.log(error);
  });
}

function queryEvent() {
  // Get the default Realm with support for our objects
  let allEvents;
Realm.open(realmConfig)
  .then(realm => {
    allEvents = realm.objects('Event');
    console.log('realm object queried');
    console.log(allEvents);
  })
  .catch(error => {
    console.log(error);
  });
  return allEvents;
}

function getPath() {
  let path = Realm.defaultPath;
  console.log (path);
}

function deleteModels() {
Realm.open(realmConfig)
  .then(realm => {
    realm.write(() => {
      realm.deleteModel('User');
      realm.deleteModel('Event');
    });
  })
  .catch(error => {
    console.log(error);
  });
}

function deleteRealmFile() {
  Realm.deleteFile(realmConfig);
}
export default { queryEvent, insertEvent, getPath, deleteModels };
