"use server";

export type News = {
  id: number;
  title: string;
  author: string;
  status: "Published" | "Draft";
  date: string; // ISO date string
  content: string;
  media?: string; // URL to image or video
};

// Mock data
let newsData: News[] = [
  {
    id: 1,
    title: "New Flight Routes Announced",
    author: "Talegeta .",
    status: "Published",
    date: "2025-11-01",
    content: "Ethiopian Airlines is launching new routes across Africa.",
    media: "https://via.placeholder.com/150" // image URL
  },
  {
    id: 2,
    title: "Annual Financial Report",
    author: "Ab.",
    status: "Draft",
    date: "2025-11-02",
    content: "The annual financial report will be released soon.",
    media: "" // no media
  }
];

// ✅ Fetch all news
export async function fetchNews(): Promise<News[]> {
  return new Promise((resolve) => setTimeout(() => resolve(newsData), 300));
}

// ✅ Add news
export async function addNews(news: Omit<News, "id">): Promise<News> {
  const newNews: News = { id: newsData.length + 1, ...news };
  newsData.push(newNews);
  return newNews;
}

// ✅ Update news
export async function updateNews(news: News): Promise<News> {
  newsData = newsData.map((n) => (n.id === news.id ? news : n));
  return news;
}

// ✅ Delete news
export async function deleteNews(id: number): Promise<{ success: boolean }> {
  newsData = newsData.filter((n) => n.id !== id);
  return { success: true };
}
