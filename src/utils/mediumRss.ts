
export interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  guid: string;
  thumbnail?: string;
}

export const fetchMediumPosts = async (mediumUsername: string): Promise<MediumPost[]> => {
  try {
    // Use RSS2JSON service to convert Medium RSS to JSON
    const rssUrl = `https://medium.com/feed/@${mediumUsername}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    
    console.log('Fetching Medium posts for:', mediumUsername);
    
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Medium RSS data:', data);
    
    if (data.status !== 'ok') {
      throw new Error('Failed to fetch RSS feed');
    }
    
    return data.items.map((item: any) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
      guid: item.guid,
      thumbnail: item.thumbnail || extractImageFromDescription(item.description)
    }));
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return [];
  }
};

const extractImageFromDescription = (description: string): string | undefined => {
  const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
  return imgMatch ? imgMatch[1] : undefined;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
