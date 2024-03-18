import NotifycationModel from '../models/notifycation.model.js';
import BranchModel from '../models/branch.model.js'
import UserModel from '../models/user.model.js';
import { getInfoData } from '../utils/index.js';
import createHttpError from 'http-errors';

const getNotifies = async ({ page = 1, limit = 10 }) => {
  try {
    const skips = limit * (page - 1);
    const notifies = await NotifycationModel.find({})
      .sort({ createdAt: -1 })
      .skip(skips).limit(limit);
    const total = await NotifycationModel.countDocuments();
    const totalPages = Math.ceil(total / limit);
    const result = notifies.map(notification => {
      const createdBy = `${notification.createdBy?.lastName} ${notification.createdBy?.firstName}`;
      const updatedBy = `${notification.updatedBy?.lastName} ${notification.updatedBy?.firstName}`;
      const branchName = notification?.branch?.name
      return {
        _id: notification._id,
        title: notification.title,
        slug: notification.slug,
        context: notification.context,
        createdAt: notification.createdAt,
        updatedAt: notification.updatedAt,
        createdBy: createdBy,
        updatedBy: updatedBy,
        branch: branchName
      };
    });

    return {
      data: result,
      pageIndex: page,
      pageSize: limit,
      totalRecords: total,
      totalPages: totalPages
    };
  } catch (error) {
    throw new Error(error.toString());
  }
};



const getNotifyById = async ({ id }) => {
  try {

    const notifies = await NotifycationModel.findOne({ _id: id })
    if (!notifies) {
      throw createHttpError.NotFound(`Notify ${_id} not existing.`)
    }
    return notifies
  } catch (error) {
    throw new Error(error.toString());
  }
};



const addNotify = async ({ title, context, slug, branchId, createdBy }) => {
  try {
    const existBranch = await BranchModel.findOne({ _id: branchId }).exec()
    if (!existBranch) throw createHttpError.Conflict(`${branchId} already existing.`)

    const branch = {
      _id: existBranch._id,
      name: existBranch.name
    }

    const existSlug = await NotifycationModel.findOne({ slug: slug })
    if (existSlug) throw createHttpError.Conflict(`${slug} already existing.`)

    const notify = await NotifycationModel.create({ title, context, slug, branch, createdBy })
    return notify;
  } catch (error) {
    throw new Error(error.toString());
  }
};

const editNotify = async ({ _id, title, context, slug, branchId, updatedBy }) => {
  try {
    const existBranch = await BranchModel.findOne({ _id: branchId }).exec()
    if (!existBranch) throw createHttpError.Conflict(`${branchId} already existing.`)
    const branch = {
      _id: existBranch._id,
      name: existBranch.name
    }

    const existingSlug = await NotifycationModel.findOne({ slug: slug, _id: { $ne: _id } });
    console.log(existingSlug, 'existingSlug')
    if (existingSlug) {
      throw createHttpError.Conflict(`${slug} already exists for another ID.`);
    }

    const updateBranch = await NotifycationModel.findOneAndUpdate(
      { _id: _id },
      { title, slug, context, branch, updatedBy },
      { new: true }
    );
    if (!updateBranch) {
      throw createHttpError.NotFound(`Branch ${_id} not existing.`)
    }
    const notifies = await NotifycationModel.findOne({ _id: _id })
    if (!notifies) {
      throw createHttpError.NotFound(`Notify ${_id} not existing.`)
    }
    return notifies
  } catch (error) {
    throw new Error(error.toString());
  }
};

const deleteNotify = async ({ id}) => {
  try {

    const notify = await NotifycationModel.findOneAndDelete(
      { _id: id },
    );
    if (!notify) {
      throw createHttpError.NotFound(`Notify ${id} not existing.`)
    }
    return notify._doc;
  } catch (error) {
    throw new Error(error.toString());
  }
};


export default {
  addNotify,
  getNotifies,
  getNotifyById,
  editNotify,
  deleteNotify
};
