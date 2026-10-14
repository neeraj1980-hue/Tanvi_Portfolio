export interface PersonalInfo {
  name: string;
  tagline: string;
  bioShort: string;
  bioLong: string[];
  dob: string;
  birthDateFormatted: string;
  location: string;
  addressFull: string;
  institution: string;
  degree: string;
  phone: string;
  email: string;
  hobbies: string[];
  sports: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: number;
    highlight: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
}

export interface InterestHobby {
  id: string;
  title: string;
  category: 'Arts & Culture' | 'Music' | 'Athletics & Sports';
  icon: string;
  description: string;
  attributes: string[];
  quote: string;
}

export const PERSONAL_DETAILS: PersonalInfo = {
  name: "Tanvi Dubey",
  tagline: "BBA Logistics Scholar • AI & Tech Enthusiast • Student Athlete",
  bioShort: "Driven BBA Logistics student with a sharp aptitude for modern AI tools, basic computer systems, and athletic discipline in sports. Dedicated to mastering supply chain efficiency and modern technology.",
  bioLong: [
    "Hello! I am Tanvi Dubey, an ambitious and enthusiastic student currently pursuing a Bachelor of Business Administration (BBA) in Logistics at Dr. MPS Memorial Group of Institutions in Agra.",
    "I believe in a balance between academic knowledge, digital fluency, and active lifestyle. With hands-on proficiency in basic computer operations and state-of-the-art AI productivity tools, I continuously explore how smart technology streamlines modern business workflows and logistical operations.",
    "Beyond the classroom, I am an enthusiastic sports player who thrives in competitive badminton and basketball, as well as finding artistic joy in dance and music."
  ],
  dob: "10 November 2007",
  birthDateFormatted: "November 10, 2007",
  location: "Agra, Uttar Pradesh, India",
  addressFull: "C Block 807, Ram Raghu Ananda Phase-2, Sikandra, Agra (Near Yatharth Hospital), Uttar Pradesh - 282007",
  institution: "Dr. MPS Memorial Group of Institutions",
  degree: "Bachelor of Business Administration (BBA) in Logistics",
  phone: "+91 9412632249",
  email: "tanvidubey10nov@gmail.com",
  hobbies: ["Dancing", "Listening to Songs & Music", "Badminton", "Basketball"],
  sports: ["Badminton", "Basketball"]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Modern Tools",
    description: "Leveraging artificial intelligence to accelerate learning, research, and daily workflow.",
    iconName: "Sparkles",
    skills: [
      { name: "Generative AI (ChatGPT, Claude, Gemini)", level: 88, highlight: "Research, drafting, brainstorming & prompt crafting" },
      { name: "Canva AI & Creative Suite", level: 85, highlight: "Presentations, graphic design & digital media" },
      { name: "AI Productivity & Automation Tools", level: 82, highlight: "Workflow optimization, note summarizing & task management" },
      { name: "Prompt Engineering Basics", level: 80, highlight: "Structuring precise prompts for optimal AI output" }
    ]
  },
  {
    title: "Computer & Office Essentials",
    description: "Solid foundational knowledge in core computing, data management, and documentation.",
    iconName: "Laptop",
    skills: [
      { name: "Microsoft Excel & Spreadsheets", level: 84, highlight: "Data entry, basic formulas, inventory tables & sorting" },
      { name: "Microsoft Word & Google Docs", level: 90, highlight: "Business reports, structured formatting & documentation" },
      { name: "PowerPoint & Slide Decks", level: 88, highlight: "Executive presentations, visual storytelling & transitions" },
      { name: "OS & File Management", level: 86, highlight: "Windows environment, cloud storage, file organization" }
    ]
  },
  {
    title: "Logistics & Business Administration",
    description: "Academic focus on foundational supply chain, operations, and business strategy.",
    iconName: "Truck",
    skills: [
      { name: "Supply Chain & Logistics Basics", level: 85, highlight: "Material movement, inventory management & distribution concepts" },
      { name: "Business Communication", level: 86, highlight: "Professional correspondence, email etiquette & reporting" },
      { name: "Organizational Coordination", level: 84, highlight: "Planning schedules, team task allocation & event coordination" },
      { name: "Market & Operational Analysis", level: 78, highlight: "Evaluating practical case studies and modern industry trends" }
    ]
  },
  {
    title: "Athletic & Soft Skills",
    description: "Strong personal discipline, agile teamwork, and energetic leadership fostered through sports.",
    iconName: "Award",
    skills: [
      { name: "Team Leadership & Spirit", level: 92, highlight: "Honed through basketball team play and group academic projects" },
      { name: "Reflexes & Agility", level: 90, highlight: "Refined through competitive badminton and high-energy sports" },
      { name: "Time Management & Discipline", level: 88, highlight: "Balancing rigorous academics, sports training & personal passions" },
      { name: "Creative Expression", level: 85, highlight: "Artistic rhythm and stage confidence developed through dance" }
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Business Administration (BBA) in Logistics",
    institution: "Dr. MPS Memorial Group of Institutions",
    location: "Agra, Uttar Pradesh",
    period: "2024 - Present (Current)",
    status: "In Progress",
    description: "Focusing on supply chain dynamics, transportation management, inventory tracking, organizational behavior, and modern enterprise management.",
    highlights: [
      "Specialized coursework in Supply Chain & Logistics Management",
      "Active participant in collegiate seminars and business workshops",
      "Building industry-relevant competencies in logistics technology and AI tools",
      "Active engagement in co-curricular student activities and team events"
    ]
  },
  {
    degree: "Higher Secondary Education (12th Grade / Intermediate)",
    institution: "Recognized Senior Secondary School",
    location: "Agra, Uttar Pradesh",
    period: "Completed",
    status: "Completed with Distinction",
    description: "Built strong fundamentals in commerce, business studies, basic economics, and analytical thinking.",
    highlights: [
      "Participated actively in inter-school badminton and sports meets",
      "Elected student coordinator for cultural programs and dance performances",
      "Developed high proficiency in computer operations and digital literacy"
    ]
  },
  {
    degree: "Secondary School Certificate (10th Grade)",
    institution: "Recognized High School",
    location: "Agra, Uttar Pradesh",
    period: "Completed",
    status: "Completed",
    description: "Solid foundation in science, mathematics, languages, and general computer science.",
    highlights: [
      "Awarded in school-level sports championships",
      "Consistent academic record with active participation in arts and dance"
    ]
  }
];

export const HOBBIES_DATA: InterestHobby[] = [
  {
    id: "dance",
    title: "Dance & Choreography",
    category: "Arts & Culture",
    icon: "Activity",
    description: "Dance is my creative outlet for expression, rhythm, and discipline. It cultivates stage confidence, physical poise, and vibrant energy that reflects across everything I do.",
    attributes: ["Rhythm & Coordination", "Stage Confidence", "Creative Flow", "High Energy"],
    quote: "“Dance is the hidden language of the soul — expressing joy and boundless energy through movement.”"
  },
  {
    id: "music",
    title: "Listening to Music & Songs",
    category: "Music",
    icon: "Music",
    description: "Music fuels my focus, keeps me inspired during study sessions, and provides relaxation. From soothing acoustic melodies to upbeat tracks, songs accompany my daily routine.",
    attributes: ["Focus Enhancement", "Emotional Well-being", "Melodic Inspiration", "Mood Elevation"],
    quote: "“Where words fail, music speaks. It brings calm to mind and inspiration to work.”"
  },
  {
    id: "badminton",
    title: "Badminton",
    category: "Athletics & Sports",
    icon: "Target",
    description: "Badminton sharpens my hand-eye coordination, quick decision-making under pressure, and mental stamina. The rapid tempo keeps me agile and laser-focused.",
    attributes: ["Lightning Reflexes", "Agility & Speed", "Strategic Placement", "Focus Under Pressure"],
    quote: "“On the court, every split-second counts — teaching speed, precision, and quick thinking.”"
  },
  {
    id: "basketball",
    title: "Basketball",
    category: "Athletics & Sports",
    icon: "Trophy",
    description: "Playing basketball has taught me the essence of team coordination, communication, court awareness, and perseverance to chase every rebound.",
    attributes: ["Team Dynamics", "Court Vision", "Endurance & Power", "Tactical Execution"],
    quote: "“Basketball isn't just about scoring; it's about trust, positioning, and winning together as a unit.”"
  }
];
