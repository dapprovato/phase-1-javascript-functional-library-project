function myEach(collection, callBack) {
    let newCollection = collection
    if (typeof collection === 'object') {
        newCollection = Object.entries(collection).map(function (entry) {
            return entry[1]
        })
    }
    newCollection.forEach(function (item) {
        callBack(item)
    })
    return collection
}

function myMap(collection, callBack) {
    let newCollection = collection
    if (typeof collection === 'object' && !Array.isArray(collection)) {
        newCollection = Object.entries(collection).map(function (entry) {
            return entry[1]
        })
    }
    const newArray = newCollection.map(function (item) {
        return callBack(item)
    })
    return newArray
}

function myReduce(collection, callBack, acc) {
    let newCollection = collection
    if (typeof collection === 'object' && !Array.isArray(collection)) {
        newCollection = Object.entries(collection).map(function (entry) {
            return entry[1]
        })
    }
    let totalObj;
    if (!acc){
        totalObj = newCollection.reduce(callBack)
    } else {
        totalObj = newCollection.reduce(callBack, acc)
    }
    return totalObj
}

function myFind(collection, predicate) {
    const foundObj = collection.find(predicate)
    return foundObj
}

function myFilter(collection, predicate) {
    let newCollection = collection
    if (typeof collection === 'object' && !Array.isArray(collection)) {
        newCollection = Object.entries(collection).map(function (entry) {
            return entry[1]
        })
    }
    const filterObj = newCollection.filter(predicate)
    return filterObj
}

function mySize(collection) {
    let newCollection = collection
    if (typeof collection === 'object' && !Array.isArray(collection)) {
        newCollection = Object.entries(collection).map(function (entry) {
            return entry[0]
        })
    }
    return newCollection.length
}

function myFirst(array, n) {
    if (!n) {
        return array[0]
    }
    return array.splice(0, n)
}   

function myLast(array, n) {
    if (!n) {
        return array[array.length-1]
    }
    return array.slice(array.length-n, array.length)
    // return array.splice(n, array.length-2)
}

console.log(myLast([1, 2, 3, 4], 3))

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}