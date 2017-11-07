var recipes = {};


function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({}, object, { [key]: value })
};

function  destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key] = value
return object

}

function deleteFromObjectByKey(object, key) {

  var newObj = Object.assign({}, object)

  return object.key

}
//var obj = { foo: 'bar' }
 
//var newObj = Object.assign({}, obj)
 
//newObj // { foo: 'bar' }
