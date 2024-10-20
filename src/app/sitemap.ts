export default function Sitemap() {
  return [
    {
      url: 'https://skinsage.vercel.app',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
