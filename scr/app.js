
const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

const connectionUrl='mongodb://127.0.0.1:27017'

const dbname='task'

MongoClient.connect=(connectionUrl , (error,res)=>{

    if (error) {
       return console.log('error connection')
        
    }
       console.log('done connect')

    const db = res.db(dbname)

    db.getcollection ('users').insertOne(
        {
        name : "salma",
        age : 20,
        city: 'alex'

    }),(error1 , data1)=>{
        if (error1) {
          return  console.log('error has occured')
        }
        console.log("done1")

    }
////////////////////////////////////////////////
    db.collection ('users').insertOne(
        {
        name : "mariam",
        age : 22,
        city: 'aswan'

    }),(error1 , data1)=>{
        if (error1) {
          return  console.log('error has occured')
        }
        console.log('done2')

    }

/////////////////////////////////////

db.collection ('users').insertMany(
    [
    {
    name : "mohamed",
    age : 20,
    city: 'alex'

}
,
{
    name : "sami",
    age : 25,
    city: 'india'

}    
,
{
    name : "ali",
    age : 18,
    city: 'cairo'

},
{
    name : "rana",
    age : 22,
    city: 'mansoura'

}
,{
    name : "dina",
    age : 27,
    city: 'tanta'

}
,{
    name : "salah",
    age : 27,
    city: 'london'

}
,{
    name : "adham",
    age : 20,
    city: 'sudan'

}
,{
    name : "attia",
    age : 27,
    city: 'germany'

}
,{
    name : "kamal",
    age : 27,
    city: 'damnhor'

}
,{
    name : "noha",
    age : 27,
    city: 'luxor'

}
,

]
),(error2 , data2)=>{
    if (error2) {
        console.log('error inset data')
    }
    console.log(data2.insertedCount)

}

/////////////////////////////////

db.collection ('users').tofind({age:27}).count((error3 , users)=>{
    if (error3) {
        console.log('404 error')
    }
    console.log(users)

})


////////////////////////


db.collection ('users').tofind({age:27}).limit(3).count((error4 , users)=>{
    if (error4) {
        console.log('404 error')
    }
    console.log(users)

})


/////////////////////////////

db.collection("users").updateOne({_id:mongodb.ObjectId('')},{

    $set:{name : 'tarek'},
    $inc: {age:4}

}).
then((error1)=>{console.log('new error ')})
.catch((data1)=>{console.log("prefect")})

db.collection("users").updateOne({_id:mongodb.ObjectId('')},{

    $set:{name : 'adel'},
    $inc: {age:4}

}).
then((error2)=>{console.log('new error ')})
.catch((data2)=>{console.log("prefect")})


db.collection("users").updateOne({_id:mongodb.ObjectId('')},{

    $set:{name : 'lara'},
    $inc: {age:4}

}).
then((error3)=>{console.log('new error ')})
.catch((data3)=>{console.log("prefect")})

db.collection("users").updateOne({_id:mongodb.ObjectId('')},{

    $set:{name : 'marwan'},
    $inc: {age:4}

})
.then((error4)=>{console.log('new error ')})
.catch((data4)=>{console.log("prefect")})


////////////////////////////////////

db.collection("users").updateMany({},{

    $inc: {age:10}

})
.then((error5)=>{console.log('new error ')})
.catch((data5)=>{console.log("prefect")})


})

//////////////////////////////////////

db.collection("users").deleteMany({age:41},{})
.then((error4)=>{console.log('new error ')})
.catch((data4)=>{console.log("prefect")


})
