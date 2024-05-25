"use strict";

// Add blog
// this will be a POST request

import connectToDB from "@/database";
import Joi from "joi";
import { NextResponse } from "next/server";
import Blog from "@/models/blog";

const AddNewBlog = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
});

export async function POST(req) {
    try {
        console.log('Connecting to database...');
        await connectToDB();
        console.log('Database connected.');

        console.log('Extracting blog data...');
        const extractBlogData = await req.json();
        console.log('Blog data extracted:', extractBlogData);

        const { title, description } = extractBlogData;
        const { error } = AddNewBlog.validate({ title, description });

        if (error) {
            console.log('Validation error:', error.details[0].message);
            return NextResponse.json({
                success: false,
                message: error.details[0].message,
            }, { status: 400 }); // Bad Request
        }

        console.log('Creating new blog item...');
        const newlyCreatedBlogItem = await Blog.create(extractBlogData);
        console.log('Blog item created:', newlyCreatedBlogItem);

        if (newlyCreatedBlogItem) {
            return NextResponse.json({
                success: true,
                message: 'Blog created successfully',
            }, { status: 201 }); // Created
        } else {
            console.log('Failed to create blog item.');
            return NextResponse.json({
                success: false,
                message: 'Something went wrong, please try again',
            }, { status: 500 }); // Internal Server Error
        }

    } catch (error) {
        console.error('Error creating blog:', error);
        return NextResponse.json({
            success: false,
            message: 'Something went wrong, please try again',
        }, { status: 500 }); // Internal Server Error
    }
}
