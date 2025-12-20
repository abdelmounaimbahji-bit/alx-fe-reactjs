const BASE = "https://openlibrary.org";

/* نجيبو الكتب الجديدة (new arrivals) */
export async function getNewArrivals(limit = 12) {
  const res = await fetch(`${BASE}/subjects/new_fiction.json?limit=${limit}`);
  const data = await res.json();
  return data.works.map((w) => ({
    key: w.key,
    title: w.title,
    author: w.authors?.[0]?.name || "Unknown",
    cover: w.cover_id
      ? `https://covers.openlibrary.org/b/id/${w.cover_id}-M.jpg`
      : "https://via.placeholder.com/150",
  }));
}

/* نجيبو الكتب حسب الكاتيغوري */
export async function getBooksByCategory(category, limit = 12) {
  const res = await fetch(`${BASE}/subjects/${category.toLowerCase().replace(" ", "_")}.json?limit=${limit}`);
  const data = await res.json();
  return data.works.map((w) => ({
    key: w.key,
    title: w.title,
    author: w.authors?.[0]?.name || "Unknown",
    cover: w.cover_id
      ? `https://covers.openlibrary.org/b/id/${w.cover_id}-M.jpg`
      : "https://via.placeholder.com/150",
  }));
}

/* بحث بسيط */
export async function searchBooks(query, limit = 12) {
  const res = await fetch(`${BASE}/search.json?q=${encodeURIComponent(query)}&limit=${limit}`);
  const data = await res.json();
  return data.docs.map((d) => ({
    key: d.key,
    title: d.title,
    author: d.author_name?.[0] || "Unknown",
    cover: d.cover_i
      ? `https://covers.openlibrary.org/b/id/${d.cover_i}-M.jpg`
      : "https://via.placeholder.com/150",
  }));
}