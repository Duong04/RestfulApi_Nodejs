import posts from './posts.js';
import categories from './categories.js';
import auth from './auth.js';
import { auth as AuthApi } from '../app/middleware/auth.middleware.js';

const versionApi = process.env.VERSION_API;
const route = (app) => {
    app.use(`${versionApi}/posts`, AuthApi, posts);
    app.use(`${versionApi}/categories`, AuthApi, categories);
    app.use(`${versionApi}/auth`, auth);
}

export default route;