import { getCollection } from 'astro:content';

export async function GET() {
  const articles = await getCollection('articles');
  
  const searchData = articles.map(article => ({
    title: article.data.title,
    excerpt: article.data.excerpt,
    category: article.data.category,
    author: article.data.author,
    date: article.data.date,
    slug: article.slug
  }));

  return new Response(JSON.stringify(searchData), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}