// Headshots live in public/headshots. Photos are matched by name, so keep names
// here spelled exactly as below. Anyone without an entry falls back to initials.
const headshots: Record<string, string> = {
  "Katie Vonder Haar": "/headshots/Corporate/Katherine Vondar Haar Director of Corporate Sponsorships.webp",
  "Larissa Lippe": "/headshots/Leadership/Larissa Lippe.webp",
  "Lumina Lu": "/headshots/Leadership/Lumina Lu.webp",
  "Jacqueline Lao": "/headshots/Operations/Jacqueline Lao.webp",
  "Grant Smialek": "/headshots/Finance/Grant Smialek Director of Finance.webp",
  "Handersen Lee": "/headshots/Marketing/Handersen Lee.webp",
  "Alex Lautin": "/headshots/Software & Systems/Alex Lautin.webp",
  "Jamie Shen": "/headshots/Corporate/Jamie Shen.webp",
  "Mika Dewar": "/headshots/Ignite/Mika Dewar Director of Ignite.webp",
  "Mara Visentin": "/headshots/Excellerator/Mara Visentin.webp",
  "Justin Jang": "/headshots/Excellerator/Justin Jang.webp",
  "Jonah Ohiri": "/headshots/HackATL/Jonah Ohiri.webp",
  "Roza Muminova": "/headshots/HackATL/Roza Muminova.webp",
  "Sahil Gandhi": "/headshots/Corporate/Sahil Gandhi.webp",
  "Sophia Kwon": "/headshots/Marketing/Sophia Kwon.webp",
  "Alexander Lee": "/headshots/Software & Systems/Alexander Lee.webp",
};

const getHeadshotPath = (name: string): string => headshots[name] ?? "";

export interface Member {
  name: string;
  title: string;
  imagePath: string;
  isLeadership: boolean;
}

const leader = (name: string, title: string): Member =>
  ({ name, title, imagePath: getHeadshotPath(name), isLeadership: true });

const associate = (name: string): Member =>
  ({ name, title: "Associate", imagePath: "", isLeadership: false });

export const leadershipTeam: Member[] = [
  leader("Katie Vonder Haar", "Co-President"),
  leader("Larissa Lippe", "Co-President"),
  leader("Lumina Lu", "Executive Vice President"),
];

export interface Unit {
  id: string;
  name: string;
  type: "Division" | "Initiative";
  description: string;
  skills?: string[];
  directors: Member[];
  associates: Member[];
  groupImagePath?: string; // Optional path for a group photo of the unit
}

export const unitsData: Unit[] = [
  {
    id: "hackatl", name: "HackATL", type: "Initiative",
    description: "Atlanta's premier 48-hour hackathon and pitching competition where students transform innovative ideas into running startups alongside like-minded entrepreneurs from across the nation.",
    directors: [
      leader("Jonah Ohiri", "Director of HackATL"),
      leader("Roza Muminova", "Director of HackATL"),
    ],
    associates: ["Hunter Richmond", "Avery Yang", "Daniel Torre", "Hemani Patel"].map(associate),
  },
  {
    id: "excellerator", name: "Excellerator", type: "Initiative",
    description: "A startup incubator designed to help take student-led early stage startups off the ground with comprehensive support on Customer Discovery, MVP development, pitching, and business strategy.",
    directors: [
      leader("Justin Jang", "Director of Excellerator"),
      leader("Mara Visentin", "Director of Excellerator"),
    ],
    associates: ["Camille Lee", "Saahir Chhabra", "Miles Golden", "Vinay Prajapathi"].map(associate),
  },
  {
    id: "givc", name: "GIVC", type: "Initiative",
    description: "Girls into VC (GIVC) is a national organization that strives to close the gender gap in venture capital. They provide education sessions with their own curriculum and work closely with fellows to learn about VC, with a portfolio fellows can have at their disposal at the end of the semester. They also hold speaker events and panels for the Emory community.",
    directors: [
      leader("Mika Dewar", "Director of GIVC"),
    ],
    associates: ["Genevieve Masci", "Sophie Newman", "Jessica Li", "Olivia Marrale"].map(associate),
  },
  {
    id: "corporate-partnerships", name: "Corporate Partnerships", type: "Division",
    description: "Manages external relationships with companies and organizations. Focuses on securing sponsorships, partnerships, and collaboration opportunities that benefit EEVM's initiatives and provide students with networking and career opportunities.",
    skills: ["Relationship building and networking", "Communication and presentation skills", "Business development experience", "Professional email correspondence"],
    directors: [
      leader("Jamie Shen", "Director of Corporate Partnerships"),
      leader("Sahil Gandhi", "Director of Corporate Partnerships"),
    ],
    associates: ["Hector Jesus Acevedo-Polo", "Miu Goda", "William Wei"].map(associate),
  },
  {
    id: "operations-strategy", name: "Operations & Strategy", type: "Division",
    description: "Ensures smooth day-to-day functioning of EEVM. Handles logistics, event planning, internal processes, and operational efficiency across all divisions and initiatives.",
    skills: ["Project management and organization", "Event planning and coordination", "Process optimization", "Detail-oriented execution"],
    directors: [
      leader("Jacqueline Lao", "Director of Operations & Strategy"),
    ],
    associates: ["Evangeline Park", "Colin Kinsey", "Gianna White", "Maddie Ross", "Nam Nam Nai"].map(associate),
  },
  {
    id: "marketing", name: "Marketing", type: "Division",
    description: "Bridges the gap between EEVM and the Emory/ATL community! We make sure the student body knows about all our cool initiatives through creative content, social media, and event promotion.",
    skills: ["Content Creation (Photo/Video Editing, Copy-writing, Design)", "Proactive, takes initiative", "Creative and cross-functional thinking", "Experience in Adobe Softwares (Photoshop, Illustrator)"],
    directors: [
      leader("Handersen Lee", "Director of Marketing"),
      leader("Sophia Kwon", "Director of Marketing"),
    ],
    associates: ["Cindy Zhang", "Jennifer He", "Jolie Bernard", "Rita Feng"].map(associate),
  },
  {
    id: "software-systems", name: "Software & Systems", type: "Division",
    description: "Develops and maintains EEVM's digital presence and technical infrastructure. Responsible for website development, application systems, and technical solutions that support the organization's goals.",
    skills: ["Web development (HTML, CSS, JavaScript)", "Programming languages (Python, React, etc.)", "Database management", "UI/UX design principles"],
    directors: [
      leader("Alex Lautin", "Director of Software & Systems"),
      leader("Alexander Lee", "Director of Software & Systems"),
    ],
    associates: ["Stephan Yazvinski", "Alexander Jiang"].map(associate),
  },
  {
    id: "finance", name: "Finance", type: "Division",
    description: "Manages EEVM's budgeting and expenditures. Works with all divisions to optimize our organization and accelerate growth through sound financial planning and oversight.",
    skills: ["Financial control and budgeting", "Detail-oriented analysis", "Experience with Microsoft Excel or Google Sheets", "Cross-functional collaboration"],
    directors: [
      leader("Grant Smialek", "Director of Finance"),
    ],
    associates: ["Aaryaman Jha", "Carys Peden", "Sophia Braskamp", "Akshay Maheshwari", "James Keel", "Sarah Mietus"].map(associate),
  },
];
