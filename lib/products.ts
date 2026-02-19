export interface Product {
  id: string
  slug: string
  name: string
  price: number
  category: 'pastries' | 'cakes' | 'breads' | 'macarons'
  image: string
  description: string
  ingredients: string
  nutrition: string
  delivery: string
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'classic-butter-croissant',
    name: 'Classic Butter Croissant',
    price: 4.5,
    category: 'pastries',
    image:
      'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=800&h=800&fit=crop&q=80',
    description:
      'Our signature croissant is crafted over three days using traditional French techniques and premium AOP butter. Each layer is meticulously folded to achieve a perfectly golden, honeycomb interior and a shatteringly crisp exterior.',
    ingredients:
      'French AOP butter, organic wheat flour, free-range eggs, sea salt, pure cane sugar, fresh yeast.',
    nutrition:
      'Calories: 280 | Fat: 16g | Carbs: 28g | Protein: 6g | Fiber: 1g',
    delivery:
      'Best enjoyed within 24 hours. Store in a cool, dry place. Reheat at 180C for 3-5 minutes for best results.',
  },
  {
    id: '2',
    slug: 'pain-au-chocolat',
    name: 'Pain au Chocolat',
    price: 5.25,
    category: 'pastries',
    image:
      'https://images.unsplash.com/photo-1681218424681-b4f8228ecea9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbiUyMGF1JTIwY2hvY29sYXR8ZW58MHx8MHx8fDA%3D',
    description:
      'Two generous batons of 64% Valrhona dark chocolate wrapped in our signature laminated dough. The chocolate melts into rivers of richness with every bite, perfectly complementing the buttery, flaky pastry.',
    ingredients:
      'French AOP butter, organic wheat flour, 64% Valrhona dark chocolate, free-range eggs, sea salt, pure cane sugar, fresh yeast.',
    nutrition:
      'Calories: 320 | Fat: 18g | Carbs: 34g | Protein: 7g | Fiber: 2g',
    delivery:
      'Best enjoyed within 24 hours. Store in a cool, dry place. Reheat at 180C for 3-5 minutes.',
  },
  {
    id: '3',
    slug: 'zesty-lemon-meringue',
    name: 'Zesty Lemon Meringue',
    price: 6.5,
    category: 'cakes',
    image:
      'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&h=800&fit=crop&q=80',
    description:
      'A delicate shortcrust pastry shell filled with our tangy Amalfi lemon curd, topped with a torched Swiss meringue that is crispy on the outside and marshmallow-soft within. A symphony of sweet and citrus.',
    ingredients:
      'Amalfi lemons, organic wheat flour, butter, eggs, sugar, sea salt, vanilla extract.',
    nutrition:
      'Calories: 350 | Fat: 14g | Carbs: 48g | Protein: 5g | Fiber: 1g',
    delivery:
      'Refrigerate and consume within 48 hours. Best served chilled.',
  },
  {
    id: '4',
    slug: 'rustic-country-sourdough',
    name: 'Rustic Country Sourdough',
    price: 8.0,
    category: 'breads',
    image:
      'https://plus.unsplash.com/premium_photo-1664640733898-d5c3f71f44e1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c291cmRvdWdofGVufDB8fDB8fHww',
    description:
      'A 48-hour fermented sourdough made with our 15-year-old starter. The thick, crackling crust gives way to a soft, tangy crumb with beautiful open structure. Every loaf is hand-scored and baked in a stone-deck oven.',
    ingredients:
      'Organic stoneground wheat flour, sourdough starter, sea salt, water.',
    nutrition:
      'Calories: 220 per slice | Fat: 1g | Carbs: 44g | Protein: 8g | Fiber: 3g',
    delivery:
      'Best enjoyed within 3 days. Store cut-side down at room temperature. Freezes well for up to 1 month.',
  },
  {
    id: '5',
    slug: 'assorted-macarons',
    name: 'Assorted Macarons',
    price: 32.0,
    category: 'macarons',
    image:
      'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&h=800&fit=crop&q=80',
    description:
      'A curated box of twelve hand-piped French macarons in our most popular flavours: Tahitian vanilla, Sicilian pistachio, Madagascar chocolate, rose petal, salted caramel, and seasonal fruit. Each shell is aged for 24 hours for the perfect chewy bite.',
    ingredients:
      'Almond flour, egg whites, sugar, natural flavourings, cocoa butter, seasonal fruits, vanilla bean.',
    nutrition:
      'Calories: 90 per macaron | Fat: 4g | Carbs: 12g | Protein: 2g',
    delivery:
      'Refrigerate and consume within 5 days. Remove from fridge 15 minutes before serving.',
  },
  {
    id: '6',
    slug: 'strawberry-fraisier',
    name: 'Strawberry Fraisier',
    price: 48.0,
    category: 'cakes',
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=800&fit=crop&q=80',
    description:
      'Layers of light genoise sponge, silky mousseline cream, and fresh Gariguette strawberries. Topped with a thin layer of marzipan and a seasonal berry garnish. Our most celebrated patisserie creation.',
    ingredients:
      'Fresh Gariguette strawberries, butter, eggs, flour, sugar, almond marzipan, vanilla bean, kirsch.',
    nutrition:
      'Calories: 380 per slice | Fat: 18g | Carbs: 46g | Protein: 6g | Fiber: 1g',
    delivery:
      'Refrigerate immediately. Consume within 48 hours. Serves 6-8.',
  },
]

export const categories = ['All', 'Pastries', 'Cakes', 'Breads', 'Macarons'] as const

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') return products
  return products.filter(
    (p) => p.category === category.toLowerCase()
  )
}
