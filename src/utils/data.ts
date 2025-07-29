import { NavigationItem, PracticeArea, TeamMember, CaseStudy, Testimonial, ContactInfo } from '../types';

export const navigation: NavigationItem[] = [
  { label: 'Home', href: '#' },
  { 
    label: 'About', 
    href: '#about',
    children: [
      { label: 'Our Firm', href: '#about' },
      { label: 'Our Team', href: '#team' },
      { label: 'Our History', href: '#history' }
    ]
  },
  { 
    label: 'Practice Areas', 
    href: '#practice-areas',
    children: [
      { label: 'Family Law', href: '#family-law' },
      { label: 'Criminal Law', href: '#criminal-law' },
      { label: 'Personal Injury', href: '#personal-injury' },
      { label: 'Business Law', href: '#business-law' },
      { label: 'Real Estate Law', href: '#real-estate-law' },
      { label: 'Education Law', href: '#education-law' }
    ]
  },
  { label: 'Cases', href: '#cases' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' }
];

export const practiceAreas: PracticeArea[] = [
  {
    id: 'family-law',
    title: 'Family Law',
    description: 'Comprehensive legal services for family matters including divorce, custody, and adoption proceedings.',
    icon: 'family',
    href: '#family-law'
  },
  {
    id: 'personal-injury',
    title: 'Personal Injury',
    description: 'Dedicated representation for victims of accidents, workplace injuries, and medical malpractice.',
    icon: 'injury',
    href: '#personal-injury'
  },
  {
    id: 'criminal-law',
    title: 'Criminal Law',
    description: 'Expert defense for criminal charges with experienced trial attorneys and proven track record.',
    icon: 'criminal',
    href: '#criminal-law'
  },
  {
    id: 'education-law',
    title: 'Education Law',
    description: 'Specialized legal services for educational institutions, students, and academic matters.',
    icon: 'education',
    href: '#education-law'
  },
  {
    id: 'real-estate-law',
    title: 'Real Estate Law',
    description: 'Complete real estate legal services including transactions, disputes, and property matters.',
    icon: 'realestate',
    href: '#real-estate-law'
  },
  {
    id: 'business-law',
    title: 'Business Law',
    description: 'Corporate legal services including business formation, contracts, and commercial litigation.',
    icon: 'business',
    href: '#business-law'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'darcy-alec',
    name: 'Darcy Alec',
    position: 'Senior Partner, Family Lawyer',
    bio: 'With over 15 years of experience in family law, Darcy has successfully handled thousands of cases involving divorce, custody, and adoption.',
    image: '/assets/images/team/darcy-alec.jpg',
    specialties: ['Family Law', 'Divorce', 'Child Custody', 'Adoption'],
    education: ['Harvard Law School', 'Yale University'],
    email: 'darcy.alec@barristar.com',
    phone: '(555) 123-4567'
  },
  {
    id: 'daniel-dambeldor',
    name: 'Daniel Dambeldor',
    position: 'Criminal Defense Attorney',
    bio: 'Daniel is a seasoned criminal defense attorney with a track record of successful defenses in complex criminal cases.',
    image: '/assets/images/team/daniel-dambeldor.jpg',
    specialties: ['Criminal Defense', 'Trial Litigation', 'Appeals'],
    education: ['Stanford Law School', 'UC Berkeley'],
    email: 'daniel.dambeldor@barristar.com',
    phone: '(555) 123-4568'
  },
  {
    id: 'william-stephen',
    name: 'William Stephen',
    position: 'Family Law Specialist',
    bio: 'William focuses on complex family law matters and has extensive experience in high-net-worth divorce cases.',
    image: '/assets/images/team/william-stephen.jpg',
    specialties: ['Family Law', 'High-Net-Worth Divorce', 'Prenuptial Agreements'],
    education: ['Columbia Law School', 'Princeton University'],
    email: 'william.stephen@barristar.com',
    phone: '(555) 123-4569'
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'family-custody-case',
    title: 'Complex Child Custody Victory',
    category: 'Family Law',
    description: 'Successfully secured primary custody for our client in a complex international custody dispute.',
    result: 'Primary custody awarded to client with favorable visitation schedule.',
    image: '/assets/images/cases/family-case.jpg',
    year: 2023
  },
  {
    id: 'criminal-defense-acquittal',
    title: 'Criminal Defense Acquittal',
    category: 'Criminal Law',
    description: 'Achieved full acquittal for client facing serious felony charges through meticulous case preparation.',
    result: 'Complete acquittal on all charges.',
    image: '/assets/images/cases/criminal-case.jpg',
    year: 2023
  },
  {
    id: 'personal-injury-settlement',
    title: 'Personal Injury Settlement',
    category: 'Personal Injury',
    description: 'Secured substantial settlement for client injured in workplace accident.',
    result: '$2.5M settlement for workplace injury case.',
    image: '/assets/images/cases/injury-case.jpg',
    year: 2022
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Racky Goaver',
    position: 'CEO',
    company: 'American BDS',
    content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour variations of passages',
    rating: 5,
    image: '/assets/images/testimonials/racky-goaver.jpg'
  },
  {
    id: 'testimonial-2',
    name: 'Goaver Racky',
    position: 'CEO',
    company: 'American BDS',
    content: 'The legal team at Barristar provided exceptional service during our complex business merger. Their expertise and attention to detail were invaluable.',
    rating: 5,
    image: '/assets/images/testimonials/goaver-racky.jpg'
  }
];

export const contactInfo: ContactInfo = {
  address: '121 King Street, Melbourne, Australia',
  phone: '3164-5456854',
  email: 'info@barristar.com',
  hours: '9AM - 5PM, Monday - Friday'
};