export type Category = 'children' | 'christian' | 'law-of-attraction' | 'diaries'

export interface Product {
  id: string
  title: string
  subtitle: string
  price: number
  category: Category
  emoji: string
  description: string
  personalisationFields: string[]
  badge?: string
}

export const products: Product[] = [
  {
    id: 'little-hero',
    title: 'The Little Hero',
    subtitle: 'A story starring your child',
    price: 49.95,
    category: 'children',
    emoji: '⭐',
    description: 'A magical adventure where YOUR child is the hero. Personalised with their name, appearance, and hometown — a keepsake they will treasure forever.',
    personalisationFields: ['Child\'s Name', 'Age', 'Hair Colour', 'Eye Colour', 'City/Town', 'Dedication Message'],
    badge: 'Best Seller',
  },
  {
    id: 'bedtime-blessings',
    title: 'Bedtime Blessings',
    subtitle: 'Goodnight stories with faith',
    price: 44.95,
    category: 'children',
    emoji: '🌙',
    description: 'Gentle bedtime stories woven with Christian values — kindness, gratitude, and love. Your child\'s name featured throughout.',
    personalisationFields: ['Child\'s Name', 'Age', 'Favourite Animal', 'Dedication Message'],
  },
  {
    id: 'gods-promise',
    title: "God's Promise to You",
    subtitle: 'A personalised scripture journey',
    price: 54.95,
    category: 'christian',
    emoji: '✝️',
    description: 'A beautifully bound book of scripture and reflection, personalised with your name and meaningful verses. A powerful gift for baptisms, confirmations and milestones.',
    personalisationFields: ['Your Name', 'Favourite Scripture', 'Milestone Occasion', 'Dedication Message'],
    badge: 'New',
  },
  {
    id: 'walk-in-faith',
    title: 'Walk In Faith',
    subtitle: 'Your 90-day devotional',
    price: 39.95,
    category: 'christian',
    emoji: '🕊️',
    description: '90 days of devotions, prayers and reflection prompts — all personalised to your spiritual journey and goals.',
    personalisationFields: ['Your Name', 'Spiritual Goal', 'Start Date', 'Dedication Message'],
  },
  {
    id: 'abundance-blueprint',
    title: 'The Abundance Blueprint',
    subtitle: 'Your law of attraction guide',
    price: 59.95,
    category: 'law-of-attraction',
    emoji: '🌟',
    description: 'A personalised roadmap to manifesting your dreams. Written for YOU — your goals, your vision, your name on every page.',
    personalisationFields: ['Your Name', 'Top 3 Goals', 'Affirmation Theme', 'Dedication Message'],
    badge: 'Premium',
  },
  {
    id: 'vision-journal',
    title: 'The Vision Journal',
    subtitle: 'Manifest your future daily',
    price: 34.95,
    category: 'law-of-attraction',
    emoji: '🔮',
    description: 'Daily prompts, gratitude pages and visualisation exercises personalised to your intentions. 365 days of intentional living.',
    personalisationFields: ['Your Name', 'Main Intention', 'Affirmation'],
  },
  {
    id: 'my-story-diary',
    title: 'My Story Diary',
    subtitle: 'Your life, your chapters',
    price: 39.95,
    category: 'diaries',
    emoji: '📖',
    description: 'A beautifully personalised diary that starts with YOUR story — name on the cover, custom intro page, and guided prompts to document your life.',
    personalisationFields: ['Your Name', 'Year', 'Cover Colour', 'Dedication Message'],
  },
  {
    id: 'family-legacy',
    title: 'Family Legacy Book',
    subtitle: 'Capture your family story',
    price: 79.95,
    category: 'diaries',
    emoji: '👨‍👩‍👧‍👦',
    description: 'A guided family memoir book personalised with your family name and story prompts. Pass it down through generations.',
    personalisationFields: ['Family Name', 'Family Members', 'Est. Year', 'Dedication Message'],
    badge: 'Gift Favourite',
  },
]

export const categories = [
  { id: 'children', label: "Children's Books", emoji: '⭐', description: 'Stories starring your little one' },
  { id: 'christian', label: 'Christian Values', emoji: '✝️', description: 'Faith-based books & devotionals' },
  { id: 'law-of-attraction', label: 'Law of Attraction', emoji: '🌟', description: 'Manifest your best life' },
  { id: 'diaries', label: 'Diaries & Journals', emoji: '📖', description: 'Capture your story' },
]
