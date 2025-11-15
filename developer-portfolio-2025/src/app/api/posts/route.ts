import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/posts';

/**
 * GET /api/posts
 * Returns all blog posts
 */
export async function GET(request: NextRequest) {
  try {
    const posts = await getAllPosts();

    return NextResponse.json({
      success: true,
      posts,
      total: posts.length
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch posts'
      },
      { status: 500 }
    );
  }
}
