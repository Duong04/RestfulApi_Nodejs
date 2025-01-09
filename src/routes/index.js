import posts from './posts.js';
import categories from './categories.js';

const versionApi = process.env.VERSION_API;
const route = (app) => {
    app.use(`/posts`, posts);
    app.use(`${versionApi}/categories`, categories);
}

export default route;