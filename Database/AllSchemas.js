const Realm = require('realm');

export const EventSchema = {
	name: 'event',
	primaryKey: 'id',
	properties: {
		id: 'int',
		name: 'string'
	}
};


const realmConfig = {
  path: 'database.realm',
  schema: [EventSchema]
}

function insertEvent() {
// Get the default Realm with support for our objects
Realm.open({schema: [EventSchema]})
  .then(realm => {
    realm.write(() => {
      const myEvent = realm.create('event', {
        id: 2,
        name: 'my event',
      });
    });
    console.log('realm object created');
  })
  .catch(error => {
    console.log('realm error');
  });
}

function queryEvent() {
  // Get the default Realm with support for our objects
Realm.open({schema: [EventSchema]})
  .then(realm => {
    let allEvents = realm.objects('event');
    console.log('realm object queried');
    console.log(allEvents);
  })
  .catch(error => {
    console.log('error');
  });
}

function getPath() {
  let path = Realm.defaultPath;
  console.log (path);
  Realm.deleteFile(realmConfig);
}

function deleteModels() {
Realm.open({schema: [EventSchema]})
  .then(realm => {
    realm.write(() => {

    });
  })
  .catch(error => {
    console.log(error);
  });
}
export default { queryEvent, insertEvent, getPath, deleteModels };
