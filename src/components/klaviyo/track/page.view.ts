// Define an interface for the page information
interface PageData {
  title: string;
  url: string;
  referrer: string;
}

// Function to track page views
export function trackPageView(page: PageData): void {
  let klaviyo = (window as any).klaviyo || [];
  let pageInfo = {
    Title: page.title,
    URL: page.url,
    Referrer: page.referrer,
  };

  // Push the page view event to Klaviyo
  klaviyo.push(['track', 'Page Viewed', pageInfo]);
}

// Function to setup page view tracking
export function setupPageViewTracking(): void {
  // Assuming you have access to the necessary page data where this function is called
  const pageData: PageData = {
    title: document.title,
    url: window.location.href,
    referrer: document.referrer,
  };

  // Call trackPageView when the component or page is loaded
  trackPageView(pageData);
}
