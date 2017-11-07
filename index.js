var recipes = {};


function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({}, object, { [key]: value })
};

function  destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key] = value
return object

}

function deleteFromObjectByKey(object, key) {


  return object.key 

}
var obj = { foo: 'bar' }

var newObj = Object.assign({}, obj)

newObj // { foo: 'bar' }

delete newObj.foo // true
