// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

// Practice area types
export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

// Team member types
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  specialties: string[];
  education: string[];
  email: string;
  phone: string;
}

// Case study types
export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  result: string;
  image: string;
  year: number;
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

// Contact information types
export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

// Blog post types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  image: string;
}