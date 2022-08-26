/**
 * usePageMeta - Composable hook to setup meta tags for a page
 *
 * @example
 * <script lang setup>
 *   usePageMeta('Home');
 * </script>
 *
 * @param title - The og:title of the page
 * @param desc - The og:description of the page
 * @param image - The og:image of the page
 */
export const usePageMeta = (
  title: string,
  desc?: string,
  image?: string
): any => {
  const config = useAppConfig();

  const {
    site: { name, twitter, url: siteUrl, image: siteImage, description },
    umami: { uri: umamiUri, websiteId },
  } = config;

  desc = desc || description;
  image = image || siteImage;

  return useHead({
    title,
    titleTemplate: `Portfolio - %s`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: desc },
      { name: "og:title", content: title },
      { name: "og:site_name", content: name },
      { name: "og:description", content: desc },
      { name: "og:type", content: "website" },
      { name: "og:url", content: siteUrl },
      { name: "og:image", content: image },

      /** Twitter Section */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: twitter },
      { name: "twitter:creator", content: twitter },
      { name: "twitter:title", content: name },
      { name: "twitter:description", content: desc },
      { name: "twitter:image", content: image },
    ],
    link: [{ rel: "icon", type: "image/jpeg", href: "/favicon.jpeg" }],
    script: !process.dev
      ? [
          {
            src: umamiUri,
            dataWebsiteId: websiteId,
            async: true,
            defer: true,
          },
        ]
      : [],
  });
};
