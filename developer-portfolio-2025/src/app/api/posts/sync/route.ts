import { NextRequest, NextResponse } from 'next/server';
import { upsertPost, transformLinkedInPost } from '@/lib/posts';

/**
 * POST /api/posts/sync
 * Syncs posts from LinkedIn
 *
 * Expected body format:
 * {
 *   "posts": [
 *     {
 *       "id": "linkedin-post-id",
 *       "title": "Post Title" (optional, will be extracted from content if not provided),
 *       "content": "Full post content",
 *       "excerpt": "Short description" (optional),
 *       "publishedAt": "2024-01-01T00:00:00Z",
 *       "tags": ["tag1", "tag2"],
 *       "category": "AI/ML",
 *       "imageUrl": "https://...",
 *       "linkedinUrl": "https://linkedin.com/posts/...",
 *       "linkedinPostId": "activity-id",
 *       "likes": 100,
 *       "comments": 20,
 *       "shares": 5
 *     }
 *   ]
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.posts || !Array.isArray(body.posts)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid request body. Expected { posts: [...] }'
        },
        { status: 400 }
      );
    }

    const syncedPosts = [];
    const errors = [];

    for (const linkedinPost of body.posts) {
      try {
        // Validate required fields
        if (!linkedinPost.content) {
          errors.push({
            post: linkedinPost,
            error: 'Content is required'
          });
          continue;
        }

        // Transform LinkedIn post to BlogPost format
        const blogPost = transformLinkedInPost(linkedinPost);

        // Save to storage
        await upsertPost(blogPost);
        syncedPosts.push(blogPost);
      } catch (error) {
        errors.push({
          post: linkedinPost,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    return NextResponse.json({
      success: true,
      synced: syncedPosts.length,
      errors: errors.length,
      posts: syncedPosts,
      errorDetails: errors.length > 0 ? errors : undefined
    });
  } catch (error) {
    console.error('Error syncing posts:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to sync posts',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
