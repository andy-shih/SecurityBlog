import type { CollectionEntry } from 'astro:content';
import { getLangFromId, getSlugFromId, type Lang } from '@/i18n';

export function sortPosts(posts: CollectionEntry<'blog'>[]) {
  return [...posts].sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export function getPostsByLang(posts: CollectionEntry<'blog'>[], lang: Lang) {
  return sortPosts(posts).filter((post) => getLangFromId(post.id) === lang);
}

export function getPostSlug(post: CollectionEntry<'blog'>) {
  return getSlugFromId(post.id);
}

export function getRecommendedPosts(posts: CollectionEntry<'blog'>[], currentPost: CollectionEntry<'blog'>, limit = 4) {
  const currentTags = new Set(currentPost.data.tags);

  return posts
    .filter((post) => post.id !== currentPost.id)
    .map((post) => ({
      post,
      score: post.data.tags.filter((tag) => currentTags.has(tag)).length
    }))
    .sort((a, b) => b.score - a.score || b.post.data.pubDate.getTime() - a.post.data.pubDate.getTime())
    .slice(0, limit)
    .map(({ post }) => post);
}
