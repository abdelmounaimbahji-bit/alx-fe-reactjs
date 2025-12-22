const BASE = "https://www.googleapis.com/books/v1";

/* New Arrivals */
export async function getNewArrivals(limit = 12) {
  try {
    const res = await fetch(
      `${BASE}/volumes?q=subject:fiction&orderBy=newest&maxResults=${limit}`
    );
    const data = await res.json();

    return (data.items || []).map((item) => ({
      key: item.id,
      title: item.volumeInfo.title,
      author: item.volumeInfo.authors?.[0] || "Unknown",
      cover:
        item.volumeInfo.imageLinks?.thumbnail ||
        "https://via.placeholder.com/150",
    }));
  } catch (error) {
    console.error("getNewArrivals error:", error);
    return [];
  }
}

/* Books by Category */
export async function getBooksByCategory(category, limit = 12) {
  try {
    const res = await fetch(
      `${BASE}/volumes?q=subject:${encodeURIComponent(category)}&maxResults=${limit}`
    );
    const data = await res.json();

    return (data.items || []).map((item) => ({
      key: item.id,
      title: item.volumeInfo.title,
      author: item.volumeInfo.authors?.[0] || "Unknown",
      cover:
        item.volumeInfo.imageLinks?.thumbnail ||
        "https://via.placeholder.com/150",
    }));
  } catch (error) {
    console.error("getBooksByCategory error:", category, error);
    return [];
  }
}

/* Search Books */
export async function searchBooks(query, limit = 12) {
  try {
    const res = await fetch(
      `${BASE}/volumes?q=${encodeURIComponent(query)}&maxResults=${limit}`
    );
    const data = await res.json();

    return (data.items || []).map((item) => ({
      key: item.id,
      title: item.volumeInfo.title,
      author: item.volumeInfo.authors?.[0] || "Unknown",
      cover:
        item.volumeInfo.imageLinks?.thumbnail ||
        "https://via.placeholder.com/150",
    }));
  } catch (error) {
    console.error("searchBooks error:", error);
    return [];
  }
}
