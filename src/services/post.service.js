import Post from "../app/models/post.model";

class PostService {
    async all() {
        return await Post.find();
    }

    async findById(id) {
        return await Post.findById(id);
    }

    async create(data) {
        return await Post.create(data);
    }

    async update(id, data) {
        return await Post.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await Post.findByIdAndRemove(id);
    }
}

export default new PostService();