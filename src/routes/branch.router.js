import express from 'express';
import { BranchController } from '../controllers/index.js';

const branchRouter = express.Router();


branchRouter.get('/:id', BranchController.getOneBranch);
branchRouter.get('/', BranchController.getAllBranch);
branchRouter.post('/', BranchController.createBranch);
branchRouter.patch('/', BranchController.editBranch);
branchRouter.delete('/:id', BranchController.deleteBranch);

export default branchRouter;
