import CategoryService from "../../services/category.service";
import { successResponse, errorResponse } from "../../utils/response";

class CategoryController {
    async all(req, res) {
        try {
            const categories = await CategoryService.all();

            successResponse(res, categories);
        } catch (error) {
            errorResponse(res, error);
        }
    }

    async findById(req, res) {
        try {
            const category = await CategoryService.findById(req.params.id);

            successResponse(res, category);
        } catch (error) {
            errorResponse(res, error);
        }
    }

    async create(req, res) {
        try {
            
            const category = await CategoryService.create(req.body);

            successResponse(res, category, 'Created Successfully');
        } catch (error) {
            errorResponse(res, error);
        }
    }

    async update(req, res) {
        try {
            const category = await CategoryService.update(req.params.id, req.body);

            successResponse(res, category, 'Updated Successfully');
        } catch (error) {
            errorResponse(res, error);
        }
    }

    async delete(req, res) {
        try {
            const category = await CategoryService.delete(req.params.id);

            successResponse(res, category, 'Delete Successfully');
        } catch (error) {
            errorResponse(res, error);
        }
    }
}

export default new CategoryController();