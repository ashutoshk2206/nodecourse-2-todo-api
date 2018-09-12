const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b979997ecaf8c4060fc4164';

if(!ObjectID.isValid(id)) {
    console.log('Id not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos: ', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo: ', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by id: ', todo);
}).catch((e) => console.log(e));

// var id = '5b979997ecaf8c4060fc4164';

// if(!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id: ', todo);
// }).catch((e) => console.log(e));

var id = '5b976074f46a0946d4e2fb6b';
User.findById(id).then((user) => {
    if (!user) {
        return console.log('id not found');
    }
    console.log('User: ', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));