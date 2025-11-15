import { BlogPost } from '@/types';
import fs from 'fs';
import path from 'path';

const POSTS_FILE = path.join(process.cwd(), 'src', 'data', 'posts.json');

/**
 * Reads all posts from the JSON file
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const fileContent = fs.readFileSync(POSTS_FILE, 'utf-8');
    const data = JSON.parse(fileContent);
    return data.posts || [];
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

/**
 * Gets a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}

/**
 * Saves posts to the JSON file
 */
export async function savePosts(posts: BlogPost[]): Promise<void> {
  try {
    const data = { posts };
    fs.writeFileSync(POSTS_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error saving posts:', error);
    throw error;
  }
}

/**
 * Adds or updates a post
 */
export async function upsertPost(post: BlogPost): Promise<void> {
  const posts = await getAllPosts();
  const existingIndex = posts.findIndex(p => p.id === post.id);

  if (existingIndex >= 0) {
    posts[existingIndex] = post;
  } else {
    posts.push(post);
  }

  // Sort by publishedAt descending
  posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  await savePosts(posts);
}

/**
 * Deletes a post by ID
 */
export async function deletePost(id: string): Promise<void> {
  const posts = await getAllPosts();
  const filteredPosts = posts.filter(p => p.id !== id);
  await savePosts(filteredPosts);
}

/**
 * Generates a slug from a title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Calculates reading time based on content length
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Transforms LinkedIn post data to BlogPost format
 */
export function transformLinkedInPost(linkedinData: any): BlogPost {
  const title = linkedinData.title || extractTitleFromContent(linkedinData.content);
  const slug = generateSlug(title);
  const readingTime = calculateReadingTime(linkedinData.content);

  return {
    id: linkedinData.id || `linkedin-${Date.now()}`,
    slug,
    title,
    excerpt: linkedinData.excerpt || linkedinData.content.substring(0, 200) + '...',
    content: linkedinData.content,
    publishedAt: linkedinData.publishedAt || new Date().toISOString(),
    tags: linkedinData.tags || [],
    readingTime,
    imageUrl: linkedinData.imageUrl,
    category: linkedinData.category || 'General',
    linkedinUrl: linkedinData.linkedinUrl,
    linkedinPostId: linkedinData.linkedinPostId,
    author: {
      name: linkedinData.author?.name || 'Enea Frontera',
      image: linkedinData.author?.image,
      linkedinUrl: linkedinData.author?.linkedinUrl || 'https://www.linkedin.com/in/enea-frontera-b97048268'
    },
    likes: linkedinData.likes || 0,
    comments: linkedinData.comments || 0,
    shares: linkedinData.shares || 0,
    updatedAt: linkedinData.updatedAt || new Date().toISOString()
  };
}

/**
 * Extracts a title from content (first line or first sentence)
 */
function extractTitleFromContent(content: string): string {
  // Try to get first line
  const firstLine = content.split('\n')[0].trim();
  if (firstLine.length > 10 && firstLine.length < 100) {
    return firstLine;
  }

  // Try to get first sentence
  const firstSentence = content.match(/^[^.!?]+[.!?]/)?.[0].trim();
  if (firstSentence && firstSentence.length > 10 && firstSentence.length < 100) {
    return firstSentence.replace(/[.!?]$/, '');
  }

  // Fallback: first 60 characters
  return content.substring(0, 60).trim() + '...';
}
