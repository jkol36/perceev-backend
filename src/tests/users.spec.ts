import test from 'ava';
import { connect } from 'mongoose';
import faker from 'faker';

import { UserModel } from '../models';
import dotenv from 'dotenv';

test.before(t => {
  dotenv.config()
  t.assert(process.env.TEST_MONGODB_URL !== undefined)
})
test('create a user', async (t) => {
  await connect(process.env.TEST_MONGODB_URL, {useNewUrlParser: true});
  let user
  try {
    user = await new UserModel({
      createdAt: Date.now(),
      updatedAt: Date.now(),
      phone: 'test',
      password: '',
      downloadAppDate: Date.now(),
      followersCount: 0,
      followingCount: 0,
      role: 0,
      userType: 0,
      userName: 'jkol36',
      firstName: 'jonathan',
      lastName: 'Kolman',
      unit: 'test',
      ageJoin: 26,
      requiredPasswordUpdate: false,
      following: false,
      followers: [],
      followings: [],
      division: 'test',
      email: 'jonathankolman@gmail.com',
      devices: [],
      emailVerified: false,
    })
  }
  catch (e) {
    console.log(e)
  }
  await user.save()
  console.log(user.email)
  t.is(user.email, 'jonathankolman@gmail.com')
 
});

test('bulk insert users', async t => {
  let users = []
  for(let i=0; i< 100000; i++) {
    users.push({
      createdAt: Date.now(),
      updatedAt: Date.now(),
      phone: 'test',
      password: '',
      downloadAppDate: Date.now(),
      followersCount: 0,
      followingCount: 0,
      role: 0,
      userType: 0,
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      unit: faker.lorem.word(),
      ageJoin: faker.datatype.number(),
      requiredPasswordUpdate: false,
      following: false,
      followers: [],
      followings: [],
      division: 'test',
      email: faker.internet.email(),
      devices: [],
      emailVerified: faker.datatype.boolean(),
    })
  }
  const userObjects = await UserModel.collection.insertMany(users)
  t.assert(userObjects.acknowledged === true)

})
