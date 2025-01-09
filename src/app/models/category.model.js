import mongoose from "mongoose";
import slug from 'mongoose-slug-updater';

const Schema = mongoose.Schema;

const Category = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            slug: "name",
            required: false,
            unique: true
        }
    },
    {
        timestamps: true,
    }
);

mongoose.plugin(slug);

export default mongoose.model('Category', Category);