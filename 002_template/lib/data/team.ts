import { TeamMember } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    id: 'marcus-blade',
    name: 'Marcus "Blade" Johnson',
    role: 'Master Barber & Owner',
    bio: 'With over 15 years of experience, Marcus has perfected the art of the fade and has trained under some of the industry\'s most renowned barbers. His signature style blends classic techniques with modern trends.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
    specialties: ['Fades', 'Beard Sculpting', 'Classic Cuts'],
    experience: 15,
    featured: true,
  },
  {
    id: 'jayden-sharp',
    name: 'Jayden Sharp',
    role: 'Senior Barber',
    bio: 'Jayden brings a fresh perspective with his background in fashion and styling. Known for his attention to detail and ability to create trending looks that suit each client\'s unique style.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600',
    specialties: ['Modern Styling', 'Color Treatments', 'Texture Work'],
    experience: 8,
    featured: true,
  },
  {
    id: 'tyrell-king',
    name: 'Tyrell King',
    role: 'Barber & Stylist',
    bio: 'Tyrell\'s precision and creativity have made him a favorite among clients who want bold, statement-making styles. He specializes in intricate designs and edgework.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600',
    specialties: ['Edge Work', 'Designs', 'Hot Towel Shaves'],
    experience: 6,
    featured: true,
  },
  {
    id: 'devin-ace',
    name: 'Devin "Ace" Williams',
    role: 'Barber',
    bio: 'Devin is passionate about the craft and constantly pushing himself to perfect every cut. His friendly demeanor and skill set make every client feel at home.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600',
    specialties: ['Buzz Cuts', 'Beard Trims', 'Kids Cuts'],
    experience: 4,
    featured: false,
  },
  {
    id: 'ramon-vega',
    name: 'Ramon Vega',
    role: 'Barber & Color Specialist',
    bio: 'Ramon brings technical expertise in color and chemical treatments. His artistic eye and technical skills deliver natural-looking color results every time.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600',
    specialties: ['Color Treatments', 'Gray Coverage', 'Executive Cuts'],
    experience: 10,
    featured: true,
  },
  {
    id: 'chris-fade',
    name: 'Chris Fade',
    role: 'Junior Barber',
    bio: 'The newest addition to our team, Chris is eager to learn and already showing incredible talent. He\'s building a loyal clientele with his dedication and precision.',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=600',
    specialties: ['Classic Cuts', 'Fades', 'Lineups'],
    experience: 2,
    featured: false,
  },
];

export const getFeaturedTeamMembers = (): TeamMember[] => {
  return teamMembers.filter(member => member.featured);
};

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamMembers.find(member => member.id === id);
};
