export interface NavigationItem {
    label: string;
    href: string;
    children?: NavigationItem[];
}
export interface PracticeArea {
    id: string;
    title: string;
    description: string;
    icon: string;
    href: string;
}
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
export interface CaseStudy {
    id: string;
    title: string;
    category: string;
    description: string;
    result: string;
    image: string;
    year: number;
}
export interface Testimonial {
    id: string;
    name: string;
    position: string;
    company: string;
    content: string;
    rating: number;
    image?: string;
}
export interface ContactInfo {
    address: string;
    phone: string;
    email: string;
    hours: string;
}
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
//# sourceMappingURL=index.d.ts.map