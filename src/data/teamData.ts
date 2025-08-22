// Function to get headshot path or return placeholder
const getHeadshotPath = (name: string, _division?: string): string => {
  const basePath = "/headshots";
  switch (name) {
    // Leadership
    case "James Liang": return `${basePath}/Leadership/James Liang Co-President.jpg`;
    case "Sarah Hao": return `${basePath}/Leadership/Sarah Hao Co-President.png`;
    case "Fiona Tran": return `${basePath}/Leadership/Fiona Tran Executive Vice President.JPG`;

    // Directors
    case "Santiago Vasquez": return `${basePath}/HackATL/Santiago Vazquez Director of HackATL.png`;
    case "Jamie Shen": return `${basePath}/HackATL/Jamie Shen Director of HackATL.jpeg`;
    case "Mika Dewar": return `${basePath}/Ignite/Mika Dewar Director of Ignite.jpeg`;
    case "Shahid Karnai": return `${basePath}/Ignite/Shahid Karnai Director of Ignite.jpeg`;
    case "Larissa Lippe": return `${basePath}/Excellerator /Larissa Lippe Director of Excellerator.jpg`;
    case "Katie Vonder Haar": 
      return `${basePath}/Corporate/Katherine Vondar Haar Director of Corporate Sponsorships.jpeg`;
    case "Ruchi Tipnis": return `${basePath}/Marketing & Design/Ruchi Tipnis Director of Marketing & Design.jpeg`;
    case "Lumina Lu": return `${basePath}/Marketing & Design/Lumina Lu Director of Marketing & Design.jpeg`;
    case "Richard Liu": return `${basePath}/Finance/Richard Liu Director of Finance.jpeg`;
    case "Stephannie Gallardo": return `${basePath}/Operations/Stephannie Gallardo Director of Operations.jpeg`;
    case "Kayleena Nguyen": return `${basePath}/Operations/Kayleena Nguyen Director of Operations.JPG`;

    // Associates - Add cases for associates if they have headshots
    // case "Gavin Poore": return `${basePath}/Operations/gavin_poore.jpeg`; // Assuming filename
    // case "Sophia Kwon": return `${basePath}/Marketing & Design/sophia_kwon.jpeg`; // Assuming filename
    // case "Ariel Prevor": return `${basePath}/Operations/ariel_prevor.JPG`; // Assuming filename

    // Default placeholder for those not found or without specific images yet
    case "Jonathan Li": // Fallthrough to default
    case "Stephan Yazvinski": // Fallthrough to default
    // Add other members who don't have specific headshots to fallthrough to default placeholder
    default:
      // console.warn(`Headshot not found for ${name}. Using placeholder.`);
      return "/placeholder_headshot.png"; // Ensure this placeholder exists in public folder
  }
};

export interface Member {
  name: string;
  title: string;
  email?: string;
  imagePath: string; 
  isLeadership: boolean;
}

export const leadershipTeam: Member[] = [
  { name: "James Liang", title: "Co-President", email: "jeliang@emory.edu", imagePath: getHeadshotPath("James Liang", "Leadership"), isLeadership: true },
  { name: "Sarah Hao", title: "Co-President", email: "sarah.hao@emory.edu", imagePath: getHeadshotPath("Sarah Hao", "Leadership"), isLeadership: true },
  { name: "Fiona Tran", title: "Executive Vice President", email: "fiona.tran@emory.edu", imagePath: getHeadshotPath("Fiona Tran", "Leadership"), isLeadership: true },
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

export const allDirectors: Member[] = [
  { name: "Santiago Vasquez", title: "Director of HackATL", email: "santiago.vazquez@emory.edu", imagePath: getHeadshotPath("Santiago Vasquez", "HackATL"), isLeadership: true },
  { name: "Jamie Shen", title: "Director of HackATL", email: "jamie.shen@emory.edu", imagePath: getHeadshotPath("Jamie Shen", "HackATL"), isLeadership: true },
  { name: "Mika Dewar", title: "Director of Ignite", email: "mika.dewar@emory.edu", imagePath: getHeadshotPath("Mika Dewar", "Ignite"), isLeadership: true },
  { name: "Shahid Karnai", title: "Director of Ignite", email: "shahid.karnai@emory.edu", imagePath: getHeadshotPath("Shahid Karnai", "Ignite"), isLeadership: true },
  { name: "Larissa Lippe", title: "Director of Excellerator", email: "larissa.lippe@emory.edu", imagePath: getHeadshotPath("Larissa Lippe", "Excellerator "), isLeadership: true }, // Note space in division name
  { name: "Katie Vonder Haar", title: "Director of Corporate Partnerships", email: "katie.vonder.haar@emory.edu", imagePath: getHeadshotPath("Katie Vonder Haar", "Corporate"), isLeadership: true },
  { name: "Ruchi Tipnis", title: "Co-Director of Marketing", email: "ruchi.tipnis@emory.edu", imagePath: getHeadshotPath("Ruchi Tipnis", "Marketing & Design"), isLeadership: true },
  { name: "Lumina Lu", title: "Co-Director of Marketing", email: "lumina.lu@emory.edu", imagePath: getHeadshotPath("Lumina Lu", "Marketing & Design"), isLeadership: true },
  { name: "Richard Liu", title: "Director of Finance", email: "richard.liu@emory.edu", imagePath: getHeadshotPath("Richard Liu", "Finance"), isLeadership: true },
  { name: "Stephannie Gallardo", title: "Co-Director of Operations", email: "stephannie.gallardo@emory.edu", imagePath: getHeadshotPath("Stephannie Gallardo", "Operations"), isLeadership: true },
  { name: "Kayleena Nguyen", title: "Co-Director of Operations", email: "kayleena.nguyen@emory.edu", imagePath: getHeadshotPath("Kayleena Nguyen", "Operations"), isLeadership: true },
  { name: "Stephan Yazvinski", title: "Director of Tech", email: "", imagePath: getHeadshotPath("Stephan Yazvinski", "Tech"), isLeadership: true },
];

export const unitsData: Unit[] = [
  {
    id: "hackatl", name: "HackATL", type: "Initiative",
    description: "Atlanta's premier 48-hour hackathon and pitching competition where students transform innovative ideas into running startups alongside like-minded entrepreneurs from across the nation.",
    directors: allDirectors.filter(d => d.title.includes("HackATL")),
    associates: [
      { name: "Malia Wakesho-Ajwang", title: "Associate", email: "malia.wakesho-ajwang@emory.edu", imagePath: getHeadshotPath("Malia Wakesho-Ajwang", "HackATL"), isLeadership: false },
      { name: "Chris Treston", title: "Associate", email: "", imagePath: getHeadshotPath("Chris Treston", "HackATL"), isLeadership: false },
      { name: "Sierra Benjamin", title: "Associate", email: "sierra.benjamin@gmail.com", imagePath: getHeadshotPath("Sierra Benjamin", "HackATL"), isLeadership: false },
    ]
  },
  {
    id: "ignite", name: "Ignite", type: "Initiative",
    description: "An entrepreneurship educational program & community that provides Emory students the knowledge, tools, and relationships to explore the entrepreneurial world through workshops, speaker series, and networking events.",
    directors: allDirectors.filter(d => d.title.includes("Ignite")),
    associates: [
      { name: "An Nguyen", title: "Associate", email: "an.nguyen3@emory.edu", imagePath: getHeadshotPath("An Nguyen", "Ignite"), isLeadership: false },
      { name: "Domenic Castellano", title: "Associate", email: "domenic.castellano@emory.edu", imagePath: getHeadshotPath("Domenic Castellano", "Ignite"), isLeadership: false },
      { name: "Taara Jonnalagadda", title: "Associate", email: "tljonna@emory.edu", imagePath: getHeadshotPath("Taara Jonnalagadda", "Ignite"), isLeadership: false },
    ]
  },
  {
    id: "excellerator", name: "Excellerator", type: "Initiative",
    description: "A startup incubator designed to help take student-led early stage startups off the ground with comprehensive support on Customer Discovery, MVP development, pitching, and business strategy.",
    directors: allDirectors.filter(d => d.title.includes("Excellerator")),
    associates: [
      { name: "Dimi Deju", title: "Associate", email: "dimi.deju@emory.edu", imagePath: getHeadshotPath("Dimi Deju", "Excellerator"), isLeadership: false },
    ]
  },
  {
    id: "corporate-partnerships", name: "Corporate Partnerships", type: "Division",
    description: "Manages external relationships with companies and organizations. Focuses on securing sponsorships, partnerships, and collaboration opportunities that benefit EEVM's initiatives and provide students with networking and career opportunities.",
    skills: ["Relationship building and networking", "Communication and presentation skills", "Business development experience", "Professional email correspondence"],
    directors: allDirectors.filter(d => d.title.includes("Corporate Partnerships")),
    associates: [
      { name: "Clifford Chew", title: "Associate", email: "clifford.chew@emory.edu", imagePath: getHeadshotPath("Clifford Chew", "Corporate Partnerships"), isLeadership: false },
      { name: "George Deng", title: "Associate", email: "gdeng6@emory.edu", imagePath: getHeadshotPath("George Deng", "Corporate Partnerships"), isLeadership: false },
      { name: "Veer Krishan Choudhari", title: "Associate", email: "veer.krishan.choudhari@emory.edu", imagePath: getHeadshotPath("Veer Krishan Choudhari", "Corporate Partnerships"), isLeadership: false },
      { name: "Grant Smialek", title: "Associate", email: "grant.smialek@emory.edu", imagePath: getHeadshotPath("Grant Smialek", "Corporate Partnerships"), isLeadership: false },
      { name: "Jakob Ostheimer", title: "Associate", email: "josthei@emory.edu", imagePath: getHeadshotPath("Jakob Ostheimer", "Corporate Partnerships"), isLeadership: false },
      { name: "Joel Ng", title: "Associate", email: "jyng2@emory.edu", imagePath: getHeadshotPath("Joel Ng", "Corporate Partnerships"), isLeadership: false },
    ]
  },
  {
    id: "operations", name: "Operations", type: "Division",
    description: "Ensures smooth day-to-day functioning of EEVM. Handles logistics, event planning, internal processes, and operational efficiency across all divisions and initiatives.",
    skills: ["Project management and organization", "Event planning and coordination", "Process optimization", "Detail-oriented execution"],
    directors: allDirectors.filter(d => d.title.includes("Operations")),
    associates: [
      { name: "Jeremy Patzelt", title: "Associate", email: "Jeremy.patzelt@emory.edu", imagePath: getHeadshotPath("Jeremy Patzelt", "Operations"), isLeadership: false },
      { name: "Sophie Hurwitz", title: "Associate", email: "sophie.hurwitz@emory.edu", imagePath: getHeadshotPath("Sophie Hurwitz", "Operations"), isLeadership: false },
      { name: "Gavin Poore", title: "Associate", email: "gavin.poore@emory.edu", imagePath: getHeadshotPath("Gavin Poore", "Operations"), isLeadership: false },
      { name: "Ariel Prevor", title: "Associate", email: "", imagePath: getHeadshotPath("Ariel Prevor", "Operations"), isLeadership: false },
    ]
  },
  {
    id: "marketing-design", name: "Marketing & Design", type: "Division",
    description: "Bridges the gap between EEVM and the Emory/ATL community! We make sure the student body knows about all our cool initiatives through creative content, social media, and event promotion.",
    skills: ["Content Creation (Photo/Video Editing, Copy-writing, Design)", "Proactive, takes initiative", "Creative and cross-functional thinking", "Experience in Adobe Softwares (Photoshop, Illustrator)"],
    directors: allDirectors.filter(d => d.title.includes("Marketing")),
    associates: [
      { name: "Vanshika Mittal", title: "Associate", email: "vanshika.mittal@emory.edu", imagePath: getHeadshotPath("Vanshika Mittal", "Marketing & Design"), isLeadership: false },
      { name: "Sarang Arun", title: "Associate", email: "", imagePath: getHeadshotPath("Sarang Arun", "Marketing & Design"), isLeadership: false },
      { name: "Sophia Kwon", title: "Associate", email: "sophia.kwon@emory.edu", imagePath: getHeadshotPath("Sophia Kwon", "Marketing & Design"), isLeadership: false },
      { name: "Lauren Won", title: "Associate", email: "lmwon@emory.edu", imagePath: getHeadshotPath("Lauren Won", "Marketing & Design"), isLeadership: false },
      { name: "Hailey Kong", title: "Associate", email: "", imagePath: getHeadshotPath("Hailey Kong", "Marketing & Design"), isLeadership: false },
    ]
  },
  {
    id: "tech", name: "Tech", type: "Division",
    description: "Develops and maintains EEVM's digital presence and technical infrastructure. Responsible for website development, application systems, and technical solutions that support the organization's goals.",
    skills: ["Web development (HTML, CSS, JavaScript)", "Programming languages (Python, React, etc.)", "Database management", "UI/UX design principles"],
    directors: allDirectors.filter(d => d.title.includes("Tech")),
    associates: [
      { name: "Malia Aubery-Zaria Wakesho-Ajwang", title: "Associate", email: "malia.wakesho-ajwang@emory.edu", imagePath: getHeadshotPath("Malia Aubery-Zaria Wakesho-Ajwang", "Tech"), isLeadership: false }, 
      { name: "Andy Blumberg", title: "Associate", email: "andy.blumberg@emory.edu", imagePath: getHeadshotPath("Andy Blumberg", "Tech"), isLeadership: false },
      { name: "Alex Lautin", title: "Associate", email: "alexander.lautin@emory.edu", imagePath: getHeadshotPath("Alex Lautin", "Tech"), isLeadership: false },
      { name: "Alex Lee", title: "Associate", email: "alexander.lee@emory.edu", imagePath: getHeadshotPath("Alex Lee", "Tech"), isLeadership: false },
    ]
  },
  {
    id: "finance", name: "Finance", type: "Division",
    description: "Manages EEVM's budgeting and expenditures. Works with all divisions to optimize our organization and accelerate growth through sound financial planning and oversight.",
    skills: ["Financial control and budgeting", "Detail-oriented analysis", "Experience with Microsoft Excel or Google Sheets", "Cross-functional collaboration"],
    directors: allDirectors.filter(d => d.title.includes("Finance")),
    associates: [
      { name: "Ashley Scherer", title: "Associate", email: "", imagePath: getHeadshotPath("Ashley Scherer", "Finance"), isLeadership: false },
      { name: "Sahil Gandhi", title: "Associate", email: "sahil.gandhi@emory.edu", imagePath: getHeadshotPath("Sahil Gandhi", "Finance"), isLeadership: false },
      { name: "Andrey Kosygin", title: "Associate", email: "akosygi@emory.edu", imagePath: getHeadshotPath("Andrey Kosygin", "Finance"), isLeadership: false },
    ]
  }
]; 
