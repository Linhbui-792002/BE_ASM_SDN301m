import mongoose from 'mongoose';

const DOCUMENT_NAME = 'Role';
const COLLECTION_NAME = 'Roles';

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    permission: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Permissions',
      },
    ],
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

const roleModel = mongoose.model(DOCUMENT_NAME, roleSchema);

export default roleModel;
