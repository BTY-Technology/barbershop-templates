import { TeamMember } from '@/types'

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Marcus Stone',
    role: 'Master Barber & Owner',
    bio: 'With over 15 years of experience, Marcus brings precision and artistry to every cut. Trained in traditional barbering techniques with a modern twist.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    specialties: ['Classic Cuts', 'Fade Mastery', 'Beard Sculpting'],
    experience: 15,
    social: {
      instagram: '@marcusstone_barber',
    },
  },
  {
    id: '2',
    name: 'Jake Rivera',
    role: 'Senior Barber',
    bio: 'Jake specializes in contemporary styles and creative fades. Known for his attention to detail and ability to bring any vision to life.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    specialties: ['Modern Fades', 'Creative Designs', 'Color Work'],
    experience: 8,
    social: {
      instagram: '@jake_cuts',
    },
  },
  {
    id: '3',
    name: 'Anthony Chen',
    role: 'Barber Stylist',
    bio: 'Anthony combines technical excellence with a keen eye for current trends. His clients appreciate his friendly demeanor and consistent results.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    specialties: ['Trend Styling', 'Texture Work', 'Consultation'],
    experience: 6,
    social: {
      instagram: '@anthonycuts',
    },
  },
  {
    id: '4',
    name: 'Deon Williams',
    role: 'Barber & Grooming Specialist',
    bio: 'Deon brings expertise in both cutting and grooming services. Particularly skilled in beard maintenance and hot towel shaves.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    specialties: ['Beard Care', 'Hot Shaves', 'Grooming'],
    experience: 10,
    social: {
      instagram: '@deon_barber',
    },
  },
]

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find((member) => member.id === id)
}
