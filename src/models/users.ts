import { Schema, model, Document } from 'mongoose';

interface User extends Document {
	createdAt: Date,
	updatedAt: Date,
	phone: string,
	password: string,
	downloadAppDate: Date,
	followersCount: number,
	followingCount: number,
	role: number,
	userType: number, // 0 = Athlete, other usertypes to be confirmed
	userName: string,
	firstName: string,
	lastName: string,
	unit: string,
	ageJoin: number,
	requiredPasswordUpdate: boolean,
	following: boolean,
	followers: [],
	followings: [],
	division: string,
  email: string,
  avatar?: string,
  devices: [],
  emailVerified: boolean,
  emailVerifiedAt: Date,
}

const schema = new Schema<User>({
 createdAt: Date,
 updatedAt: Date,
 phone: String,
 password: String,
 downloadAppDate: Date,
 followersCount: Number,
 followingCount: Number,
 role: Number, 
 userType: Number,
 userName: String,
 firstName: String,
 lastName: String,
 unit: String,
 ageJoin: Number,
 requiredPasswordUpdate: Boolean,
 following: Boolean,
 followers: Array,
 followings: Array,
 division: String,
 email: String,
 avatar: String,
 devices: Array,
 emailVerified: Boolean,
 emailVerifiedAt: Date
});

export const UserModel = model<User>('User', schema);