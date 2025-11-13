export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const pageUrl = "https://www.facebook.com/BeinFantasyPL";

  const fbResponse = await fetch(pageUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      "Accept-Language": "en-US,en;q=0.9"
    }
  });

  const html = await fbResponse.text();

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" }
  });
}
