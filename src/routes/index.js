import posts from './posts.js';
import categories from './categories.js';
import auth from './auth.js';

const versionApi = process.env.VERSION_API;
const route = (app) => {
    app.use(`${versionApi}/posts`, posts);
    app.use(`${versionApi}/categories`, categories);
    app.use(`${versionApi}/auth`, auth);
}

export default route;