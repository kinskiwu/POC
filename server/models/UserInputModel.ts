import { Schema, model } from 'mongoose';
import type { UserInput } from '@/server/types/datamodels';

const userInputSchema = new Schema<UserInput>({
  input: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
  
module.exports = model('UserInput', userInputSchema);