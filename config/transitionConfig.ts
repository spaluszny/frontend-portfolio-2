export const PAGE_TRANSITIONS = {
  '/': {
    enabled: true,
    color: '#DCEAFF',   // light blue
    darkColor: '#5B7FDB' // vivid blue (Tailwind blue-500)
  },
  '/about': {
    enabled: true,
    color: '#F3E7FF',   // light purple
    darkColor: '#8B6BC4' // vivid purple (Tailwind purple-500)
  },
  '/resume': {
    enabled: true,
    color: '#DBFCE6',   // light green
    darkColor: '#5A9B7A' // vivid green (Tailwind green-500)
  },
  '/contact': {
    enabled: true,
    color: '#FDE6F4',   // light pink
    darkColor: '#B8768F' // vivid pink (Tailwind pink-500)
  },
  default: {
    enabled: false,
    color: '#82A0FF',
    darkColor: '#6366F1' // indigo, close to your original default hue
  },
}