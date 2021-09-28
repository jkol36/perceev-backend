import { connect } from 'mongoose';

import { UserModel } from './models';

async () => {
  await connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
  let user
  try {
    user = await new UserModel({
      createdAt: Date.now(),
      updatedAt: Date.now(),
      phone: '2673105479',
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
  console.log('user is', user)
}