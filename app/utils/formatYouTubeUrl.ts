export function formatYouTubeUrl(url: string): string {
  if (!url) return "";

  try {
    const parsedUrl = new URL(url);

    // Caso seja o formato normal: https://www.youtube.com/watch?v=XXXXX
    if (parsedUrl.hostname.includes("youtube.com") && parsedUrl.searchParams.get("v")) {
      const videoId = parsedUrl.searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Caso seja um link curto: https://youtu.be/XXXXX
    if (parsedUrl.hostname === "youtu.be") {
      const videoId = parsedUrl.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Caso já seja embed
    if (parsedUrl.pathname.includes("/embed/")) {
      return url;
    }

    return "";
  } catch (error) {
    console.error("Invalid YouTube URL:", error);
    return "";
  }
}
