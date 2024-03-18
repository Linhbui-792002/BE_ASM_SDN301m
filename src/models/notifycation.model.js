import mongoose from 'mongoose';
import BranchModel from './branch.model.js';
import UserModel from './user.model.js';

const DOCUMENT_NAME = 'Notifycation';
const COLLECTION_NAME = 'Notifycations';

const notifycationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    context: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
    },
    branch: {
      _id: {
        type: mongoose.Types.ObjectId,
        ref: BranchModel,
        required: true,
      },
      name: {
        type: String
      },
    },
    createdBy: {
      _id: {
        type: mongoose.Types.ObjectId,
        ref: UserModel
      },
      firstName: {
        type: String
      },
      lastName:{
        type:String
      }
    },
    updatedBy: {
      _id: {
        type: mongoose.Types.ObjectId,
        ref: UserModel
      },
      firstName: {
        type: String
      },
      lastName:{
        type:String
      }
    },
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const NotifycationModel = mongoose.model(DOCUMENT_NAME, notifycationSchema);

export default NotifycationModel;
