/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import config from '../../../config';
import bcrypt from 'bcrypt';
import { IUser, UserModel } from './user.interface';

const userSchema = new Schema<IUser, Record<string, never>>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round)
  );
  next();
});

export const User = model<IUser, UserModel>('User', userSchema);
