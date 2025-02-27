import mongoose from "mongoose";
import slug from 'mongoose-slug-updater';

const Schema = mongoose.Schema;

const Post = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        view: {
            type: Number,
            required: false,
        },
        image: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: false,
            default: "draft",
        },
        slug: {
            type: String,
            slug: "title",
            required: false,
            unique: true
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",  
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

mongoose.plugin(slug);

export default mongoose.model('Post', Post);
