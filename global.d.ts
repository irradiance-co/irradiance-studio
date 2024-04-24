// In your existing global.d.ts file
declare global {
  interface Window {
    klaviyo: any; // You can specify a more detailed type here if needed
    _klOnsite: any[]; // Declare _klOnsite as an array of any type
  }
}

export {};
