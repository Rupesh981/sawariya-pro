// Team Content
import type { TeamMember, TeamContent } from "../types";

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Radhika Vashisth",
    role: "Chief Pathologist",
    qualification: "MBBS, MD (Pathology)",
    bio: "Over 20 years of experience in clinical pathology and laboratory medicine.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&auto=format",
    alt: "Dr. Radhika Vashisth, Chief Pathologist",
  },
  {
    name: "Dr. Ankit Sangwan",
    role: "Microbiologist",
    qualification: "MSc, PhD (Microbiology)",
    bio: "Expert in infectious disease diagnostics and antimicrobial testing.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&auto=format",
    alt: "Dr. Ankit Sangwan, Microbiologist",
  },
  {
    name: "Ms. Manisha Saini",
    role: "Senior Medical Biochemist",
    qualification: "MSc (Medical Biotechnology)",
    bio: "Specialist in hormone analysis and metabolic disorders testing.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&auto=format",
    alt: "Ms. Manisha Saini, Senior Medical Biochemist",
  },
  {
    name: "Mr. Vikas Sharma",
    role: "Lab Technician",
    qualification: "DMLT",
    bio: "Skilled in sample processing and advanced laboratory techniques.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop&auto=format",
    alt: "Mr. Vikas Sharma, Lab Technician",
  },
];

export const teamContent: TeamContent = {
  members: teamMembers,
};