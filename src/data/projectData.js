/**
 * Project Data
 *
 * Each project should follow this structure:
 * {
 *   id: string,                    // Unique identifier (kebab-case) - used to load /projects/{id}/content.md
 *   name: string,                  // Display name
 *   summary: string,               // Brief summary for cards + TLDR view
 *   backgroundImage: string,       // Main/card image URL (for project cards)
 *   heroImage: string,             // Hero section image (optional, defaults to backgroundImage)
 *   galleryImages: string[],       // Array of gallery image URLs (for carousel)
 *   role: string,                  // Role title (e.g., "UI/UX Designer")
 *   duration: string,              // Project duration (e.g., "6 months")
 *   team: string,                  // Team/company name
 * }
 *
 * Content is loaded from markdown files at: /public/projects/{id}/content.md
 */

// Project Data
export const projects = [
  {
    id: "cromzz",
    name: "Cromzz",
    summary: "A fitness tracking app designed to help users achieve their health goals",
    backgroundImage: "projects/cromzz/overview.jpeg",
    backgroundImageMobile: "",
    heroImage: "",
    galleryImages: [
      "projects/cromzz/overall.png",
      "projects/cromzz/competition.png",
      "projects/cromzz/ramat.png",
      "projects/cromzz/create.png"
    ],
    role: "Co-founder, Lead UI/UX Designer",
    duration: "1 year",
    team: ""
  },
  {
    id: "griffin",
    name: "Griffin",
    summary: "Griffin is a strategic operations platform that centralizes cash flow management, transaction oversight, customer management, and marketing campaign execution into a single, unified system.",
    backgroundImage: "projects/griffin/Overview.png",
    backgroundImageMobile: "",
    heroImage: "projects/griffin/Overview.png",
    galleryImages: ["projects/griffin/gallery1.png", "projects/griffin/gallery2.png", "projects/griffin/gallery3.png", "projects/griffin/gallery4.png"],
    role: "UI/UX Designer",
    duration: "6 months",
    team: "Broadway Gaming"
  },
  {
    id: "this",
    name: "This Website",
    summary: "A personal portfolio website showcasing design projects and skills",
    backgroundImage: "projects/this/overview.png",
    backgroundImageMobile: "projects/this/overview_mobile.png",
    heroImage: "",
    galleryImages: [],
    role: "",
    duration: "",
    team: ""
  }
];

export default projects;
