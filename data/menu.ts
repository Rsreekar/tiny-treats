export type MenuItem = { id: string; name: string; category: string; description?: string; price?: string; image: string; page: number }

export const menuItems: MenuItem[] = [
  { id: 'popsicles', name: 'Mini Popsicles', category: 'Signature Items', description: 'Tiny, colourful pops with big flavour.', price: '20 rs each', image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=900&q=85', page: 3 },
  { id: 'french-toast', name: 'Nutella French Toast', category: 'Signature Desserts', description: 'Toast stuffed with Nutella, chocolate drizzle and dips.', price: '275 rs', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=85', page: 4 },
  { id: 'brownie-bowl', name: 'Brownie Bowls', category: 'Signature Desserts', description: 'Warm brownie goodness in a bowl.', price: '280 rs', image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=900&q=85', page: 4 },
  { id: 'smores', name: 'Skillet S’mores', category: 'Signature Desserts', description: 'Melted chocolate topped with marshmallows and brownies.', price: '240 rs', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85', page: 4 },
  { id: 'pancakes', name: 'Mini Nutella Pancakes', category: 'Signature Desserts', description: 'Soft stacks with a chocolatey finish.', price: '205 rs', image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85', page: 4 },
  { id: 'sandwich', name: 'Chicken Sandwich', category: 'Savoury Bites', description: 'A savoury Tiny Treats favourite.', price: '190 rs', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85', page: 6 },
]

export const combos = [
  { name: 'Chicken Burger + Peri Peri Fries + Extras', price: '349 rs', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85' },
  { name: 'Veg Sandwich + Salted Fries + Extras', price: '300 rs', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85' },
  { name: 'Mini Pancakes + Mini Pops 4 + Cold Coffee', price: '410 rs', image: '' },
  { name: 'Skillet S’mores + Chocolate Pops 3 + Belgian Chocolate Shake', price: '509 rs', image: '' },
]

export const menuPages = [
  { page: 1, title: 'Cover' }, { page: 2, title: 'Signature Items' }, { page: 3, title: 'Mini Popsicles' },
  { page: 4, title: 'Signature Desserts' }, { page: 5, title: 'Coffee + Milkshakes' }, { page: 6, title: 'Savoury Bites' }, { page: 7, title: 'Hunger Combos' },
]

export const categories = [
  ['Signature Items', 2], ['Mini Popsicles', 3], ['Signature Desserts', 4], ['Coffee + Milkshakes', 5], ['Scooping Flavours', 5], ['Savoury Bites', 6], ['Extras', 6], ['Hunger Combos', 7],
] as const

export const gallery = [
  { title: 'Tiny Treats after dark', kind: 'Our storefront', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2003.JPEG-8bzf24IuBIHQcSPshfq2QJbQCKJDmc.jpeg' },
  { title: 'Chill cravings', kind: 'Ice Cream', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=85' },
  { title: 'Pops of joy', kind: 'Popsicles', image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=900&q=85' },
  { title: 'Coffee break', kind: 'Coffee', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85' },
  { title: 'Shake it up', kind: 'Milkshakes', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85' },
  { title: 'Savoury side', kind: 'Savoury', image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=900&q=85' },
]

export const business = { address: 'Tiny Treats', mapUrl: 'https://maps.app.goo.gl/G8a2EohGWpwJxn7Z7?g_st=ac', phone: '', whatsapp: '', hours: '3:00 PM – 11:00 PM', instagram: '' }
