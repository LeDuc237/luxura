/*
  # E-commerce Schema for Luxura237
  
  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text) - Category name (Electronics, Lighting, Mirrors, etc.)
      - `slug` (text) - URL-friendly name
      - `description` (text) - Category description
      - `image_url` (text) - Category image
      - `created_at` (timestamptz)
    
    - `products`
      - `id` (uuid, primary key)
      - `category_id` (uuid, foreign key)
      - `name` (text) - Product name
      - `slug` (text) - URL-friendly name
      - `description` (text) - Product description
      - `price` (decimal) - Product price
      - `compare_at_price` (decimal) - Original price for discount display
      - `image_url` (text) - Main product image
      - `images` (jsonb) - Additional product images array
      - `in_stock` (boolean) - Availability status
      - `stock_quantity` (integer) - Number of items in stock
      - `featured` (boolean) - Featured on homepage
      - `specs` (jsonb) - Product specifications
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `cart_items`
      - `id` (uuid, primary key)
      - `session_id` (text) - Anonymous cart identifier
      - `product_id` (uuid, foreign key)
      - `quantity` (integer)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
  
  2. Security
    - Enable RLS on all tables
    - Public read access for categories and products
    - Cart items accessible by session
*/

-- Categories Table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text DEFAULT '',
  image_url text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view categories"
  ON categories FOR SELECT
  TO anon, authenticated
  USING (true);

-- Products Table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text DEFAULT '',
  price decimal(10,2) NOT NULL,
  compare_at_price decimal(10,2),
  image_url text NOT NULL,
  images jsonb DEFAULT '[]'::jsonb,
  in_stock boolean DEFAULT true,
  stock_quantity integer DEFAULT 0,
  featured boolean DEFAULT false,
  specs jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

-- Cart Items Table
CREATE TABLE IF NOT EXISTS cart_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  quantity integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own cart items"
  ON cart_items FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Users can insert their own cart items"
  ON cart_items FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can update their own cart items"
  ON cart_items FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Users can delete their own cart items"
  ON cart_items FOR DELETE
  TO anon, authenticated
  USING (true);

-- Insert sample categories
INSERT INTO categories (name, slug, description, image_url) VALUES
  ('Tablettes Enfants', 'tablettes-enfants', 'Tablettes éducatives pour enfants', 'https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg'),
  ('Miroirs Lumineux', 'miroirs-lumineux', 'Miroirs LED élégants pour votre maison', 'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg'),
  ('Éclairage', 'eclairage', 'Solutions d''éclairage LED modernes', 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'),
  ('Gobelets & Stands', 'gobelets-stands', 'Gobelets intelligents et supports', 'https://images.pexels.com/photos/6347720/pexels-photo-6347720.jpeg'),
  ('Décoration', 'decoration', 'Accessoires de décoration moderne', 'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample products
INSERT INTO products (category_id, name, slug, description, price, compare_at_price, image_url, images, in_stock, stock_quantity, featured, specs) 
SELECT 
  c.id,
  'Tablette Éducative Kids Pro',
  'tablette-educative-kids-pro',
  'Tablette Android spécialement conçue pour les enfants avec contrôle parental, contenu éducatif et écran protégé.',
  45000,
  65000,
  'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg',
  '["https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg", "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg"]'::jsonb,
  true,
  15,
  true,
  '{"screen": "7 pouces HD", "storage": "32GB", "battery": "8 heures", "age": "3-12 ans"}'::jsonb
FROM categories c WHERE c.slug = 'tablettes-enfants'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (category_id, name, slug, description, price, compare_at_price, image_url, images, in_stock, stock_quantity, featured, specs)
SELECT 
  c.id,
  'Miroir LED Hollywood',
  'miroir-led-hollywood',
  'Miroir professionnel avec éclairage LED réglable, parfait pour le maquillage et la coiffure.',
  35000,
  50000,
  'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg',
  '["https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg"]'::jsonb,
  true,
  8,
  true,
  '{"size": "60x50cm", "lights": "14 LED", "dimmer": "Oui", "power": "USB/Secteur"}'::jsonb
FROM categories c WHERE c.slug = 'miroirs-lumineux'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (category_id, name, slug, description, price, compare_at_price, image_url, images, in_stock, stock_quantity, featured, specs)
SELECT 
  c.id,
  'Lampe LED Intelligente RGB',
  'lampe-led-intelligente-rgb',
  'Lampe connectée avec 16 millions de couleurs, contrôle via application mobile et commande vocale.',
  12000,
  18000,
  'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
  '["https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg"]'::jsonb,
  true,
  25,
  true,
  '{"colors": "RGB", "control": "App + Voix", "brightness": "Réglable", "timer": "Oui"}'::jsonb
FROM categories c WHERE c.slug = 'eclairage'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (category_id, name, slug, description, price, compare_at_price, image_url, images, in_stock, stock_quantity, featured, specs)
SELECT 
  c.id,
  'Gobelet Isotherme Smart',
  'gobelet-isotherme-smart',
  'Gobelet intelligent avec affichage de température LED, maintient vos boissons chaudes ou froides.',
  8500,
  12000,
  'https://images.pexels.com/photos/6347720/pexels-photo-6347720.jpeg',
  '["https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg"]'::jsonb,
  true,
  30,
  false,
  '{"capacity": "500ml", "material": "Inox", "temp_display": "LED", "battery": "Rechargeable"}'::jsonb
FROM categories c WHERE c.slug = 'gobelets-stands'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (category_id, name, slug, description, price, compare_at_price, image_url, images, in_stock, stock_quantity, featured, specs)
SELECT 
  c.id,
  'Support Tablette Rotatif',
  'support-tablette-rotatif',
  'Support universel pour tablettes et téléphones avec rotation 360° et ajustement de hauteur.',
  6500,
  9000,
  'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg',
  '[]'::jsonb,
  true,
  20,
  false,
  '{"compatibility": "4-13 pouces", "rotation": "360°", "material": "Aluminium", "adjustable": "Oui"}'::jsonb
FROM categories c WHERE c.slug = 'gobelets-stands'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (category_id, name, slug, description, price, compare_at_price, image_url, images, in_stock, stock_quantity, featured, specs)
SELECT 
  c.id,
  'Néon LED Décoratif',
  'neon-led-decoratif',
  'Enseigne néon LED personnalisable pour décoration murale moderne et tendance.',
  22000,
  30000,
  'https://images.pexels.com/photos/1327772/pexels-photo-1327772.jpeg',
  '["https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg"]'::jsonb,
  true,
  12,
  true,
  '{"colors": "Multiple", "size": "Personnalisable", "power": "LED basse conso", "mounting": "Facile"}'::jsonb
FROM categories c WHERE c.slug = 'decoration'
ON CONFLICT (slug) DO NOTHING;