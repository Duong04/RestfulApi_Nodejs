import Category from "../app/models/category.model";

class CategoryService {
    async create(data) {
        return await Category.create(data);
    }

    async all() {
        return await Category.find();
    }

    async findById(id) {
        return await Category.findById(id);
    }

    async update(id, data) {
        return await Category.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await Category.findByIdAndDelete(id);
    }
}

export default new CategoryService();