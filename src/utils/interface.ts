export interface Portfolio {
  about: About;
  _id: any;
  username: any;
  email: any;
  role: any;
  timeline: Timeline[];
  skills: Skill[];
  youtube: any[];
  projects: Project[];
  social_handles: SocialHandle[];
  services: Service[];
  testimonials: Testimonial[];
  createdAt: any;
  updatedAt: any;
  refreshToken: any;
}

export interface About {
  name: any;
  title: any;
  subTitle: any;
  description: any;
  quote: any;
  exp_year: any;
  address: any;
  some_total: any;
  phoneNumber: any;
  avatar: any;
  alternateAvatars: any[];
}

export interface Avatar {
  public_id: any;
  url: any;
}

export interface Skill {
  enabled: any;
  name: any;
  sequence: any;
  percentage: any;
  image: any;
}

export interface Project {
  liveurl: any;
  githuburl: any;
  title: any;
  sequence: any;
  image: Image;
  description: any;
  techStack: string[];
  _id: any;
  enabled: any;
}

export interface Image {
  public_id: any;
  url: any;
}

export interface SocialHandle {
  platform: any;
  url: any;
  image: Image;
  enabled: any;
  _id: any;
}

export interface Service {
  name: any;
  charge: any;
  desc: any;
  enabled: any;
  _id: any;
  image: Image;
}

export interface Testimonial {
  image: Image;
  name: any;
  review: any;
  position: any;
  enabled: any;
  _id: any;
}

export interface Timeline {
  company_name: any;
  summary: any;
  sequence: any;
  startDate: any;
  endDate: any;
  jobTitle: any;
  jobLocation: any;
  bulletPoints: string[];
  forEducation: any;
  enabled: any;
  _id: any;
}
