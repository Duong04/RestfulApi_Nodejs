import PostService from "../../services/post.service";

class PostController {
    async all(req, res) {
        try {
            const posts = await PostService.all();

            successResponse(res, posts);
        } catch (error) {
            errorResponse(res, error);
        }
    }

    async findById(req, res) {
        try {
            const post = await PostService.findById(req.params.id);

            successResponse(res, post);
        } catch (error) {
            errorResponse(res, error);
        }
    }

    async create(req, res) {
        try {
            
            const post = await PostService.create(req.body);

            successResponse(res, post, 'Created Successfully');
        } catch (error) {
            errorResponse(res, error);
        }
    }

    async update(req, res) {
        try {
            const post = await PostService.update(req.params.id, req.body);

            successResponse(res, post, 'Updated Successfully');
        } catch (error) {
            errorResponse(res, error);
        }
    }

    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id);

            successResponse(res, post, 'Delete Successfully');
        } catch (error) {
            errorResponse(res, error);
        }
    }
}

export default new PostController();