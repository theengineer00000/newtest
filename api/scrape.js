export default async function handler(req, res) {
  const pageUrl = "https://www.facebook.com/BeinFantasyPL";

  const fbResponse = await fetch(pageUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      "Accept-Language": "en-US,en;q=0.9"
    }
  });

  const html = await fbResponse.text();

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(html);
}
