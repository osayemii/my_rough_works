// Watch data with images from public/images folder
// Each watch has a matching name, description, and price based on its image

export const watches = {
    vintage: [
        { 
            id: 1, 
            name: "Vintage Rolex Submariner 1960s", 
            price: "$12,500", 
            img: "/images/1.jpg",
            desc: "Classic 1960s diver's watch with iconic design. Features a rotating bezel and robust construction perfect for underwater adventures.",
            properties: {
                waterResistance: "200m",
                movement: "Automatic",
                caseMaterial: "Stainless Steel",
                crystal: "Acrylic"
            }
        },
        { 
            id: 2, 
            name: "Heritage Chronograph Gold", 
            price: "$8,900", 
            img: "/images/2.jpg",
            desc: "Elegant vintage chronograph with gold-toned case and brown leather strap. Features multiple subdials and refined detailing.",
            properties: {
                waterResistance: "50m",
                movement: "Mechanical",
                caseMaterial: "Gold-Plated",
                crystal: "Mineral Glass"
            }
        },
        { 
            id: 3, 
            name: "Classic Omega Seamaster Heritage", 
            price: "$10,200", 
            img: "/images/3.jpg",
            desc: "Timeless design with stainless steel case and black leather strap. A true icon of Swiss watchmaking heritage.",
            properties: {
                waterResistance: "150m",
                movement: "Automatic",
                caseMaterial: "Stainless Steel",
                crystal: "Sapphire"
            }
        },
        { 
            id: 4, 
            name: "Retro Tag Heuer Carrera", 
            price: "$9,750", 
            img: "/images/4.jpg",
            desc: "Iconic racing chronograph with silver dial and brown leather strap. Inspired by motorsport heritage.",
            properties: {
                waterResistance: "100m",
                movement: "Mechanical Chronograph",
                caseMaterial: "Stainless Steel",
                crystal: "Mineral Glass"
            }
        },
        { 
            id: 5, 
            name: "Antique Patek Philippe Calatrava", 
            price: "$15,300", 
            img: "/images/5.jpg",
            desc: "Sophisticated dress watch with white dial and black leather strap. Exemplifies timeless elegance.",
            properties: {
                waterResistance: "30m",
                movement: "Manual Wind",
                caseMaterial: "18K Gold",
                crystal: "Sapphire"
            }
        },
        { 
            id: 6, 
            name: "Vintage Military Field Watch", 
            price: "$6,800", 
            img: "/images/6.jpg",
            desc: "Rugged military-inspired timepiece with large numerals and durable construction. Built for reliability.",
            properties: {
                waterResistance: "100m",
                movement: "Mechanical",
                caseMaterial: "Stainless Steel",
                crystal: "Mineral Glass"
            }
        },
        { 
            id: 7, 
            name: "Classic Dress Watch Silver", 
            price: "$7,500", 
            img: "/images/7.jpg",
            desc: "Elegant silver-tone dress watch with minimalist design. Perfect for formal occasions and business attire.",
            properties: {
                waterResistance: "30m",
                movement: "Automatic",
                caseMaterial: "Stainless Steel",
                crystal: "Sapphire"
            }
        },
        { 
            id: 8, 
            name: "Heritage Pocket Watch", 
            price: "$5,200", 
            img: "/images/8 (2).jpg",
            desc: "Traditional pocket watch with intricate detailing and chain. A piece of horological history.",
            properties: {
                waterResistance: "30m",
                movement: "Mechanical",
                caseMaterial: "Brass",
                crystal: "Mineral Glass"
            }
        },
        { 
            id: 9, 
            name: "Vintage Aviator Watch", 
            price: "$8,200", 
            img: "/images/9.jpg",
            desc: "Pilot's watch with large, legible dial and leather strap. Designed for aviation professionals.",
            properties: {
                waterResistance: "100m",
                movement: "Automatic",
                caseMaterial: "Stainless Steel",
                crystal: "Mineral Glass"
            }
        },
        { 
            id: 10, 
            name: "Classic Leather Strap Timepiece", 
            price: "$6,500", 
            img: "/images/10.jpg",
            desc: "Traditional watch with brown leather strap and elegant dial. Combines heritage with modern reliability.",
            properties: {
                waterResistance: "50m",
                movement: "Mechanical",
                caseMaterial: "Stainless Steel",
                crystal: "Sapphire"
            }
        }
    ],
    luxury: [
        { 
            id: 11, 
            name: "Two-Tone Gold & Steel Chronograph", 
            price: "$38,000", 
            img: "/images/11.jpg",
            desc: "Sleek luxury chronograph with two-tone gold and steel case. Features blue-tinted dial and sophisticated design.",
            properties: {
                waterResistance: "100m",
                movement: "Automatic",
                caseMaterial: "18K Gold & Steel",
                crystal: "Sapphire"
            }
        },
        { 
            id: 12, 
            name: "Black Titanium Chronograph", 
            price: "$65,000", 
            img: "/images/12.jpg",
            desc: "Ultra-modern chronograph with black titanium case and advanced complications. A statement of technical excellence.",
            properties: {
                waterResistance: "200m",
                movement: "Automatic Chronograph",
                caseMaterial: "Titanium",
                crystal: "Sapphire with AR Coating"
            }
        },
        { 
            id: 13, 
            name: "Diamond-Encrusted Audemars Piguet", 
            price: "$120,000", 
            img: "/images/13.jpg",
            desc: "Lavish timepiece adorned with brilliant-cut diamonds and platinum case. The pinnacle of luxury watchmaking.",
            properties: {
                waterResistance: "50m",
                movement: "Automatic",
                caseMaterial: "Platinum & Diamonds",
                crystal: "Sapphire"
            }
        },
        { 
            id: 14, 
            name: "Rose Gold Vacheron Constantin", 
            price: "$95,000", 
            img: "/images/14.jpg",
            desc: "Exquisite rose gold watch with intricate detailing and brown leather strap. Handcrafted perfection.",
            properties: {
                waterResistance: "30m",
                movement: "Automatic",
                caseMaterial: "18K Rose Gold",
                crystal: "Sapphire"
            }
        },
        { 
            id: 15, 
            name: "Platinum Jaeger-LeCoultre Reverso", 
            price: "$110,000", 
            img: "/images/15.jpg",
            desc: "Sophisticated platinum watch with reversible case and black leather strap. A masterpiece of engineering.",
            properties: {
                waterResistance: "30m",
                movement: "Manual Wind",
                caseMaterial: "Platinum",
                crystal: "Sapphire"
            }
        },
        { 
            id: 16, 
            name: "Luxury Skeleton Automatic", 
            price: "$85,000", 
            img: "/images/16.jpg",
            desc: "Open-worked dial revealing the intricate mechanical movement. A showcase of horological artistry.",
            properties: {
                waterResistance: "30m",
                movement: "Automatic Skeleton",
                caseMaterial: "18K Gold",
                crystal: "Sapphire"
            }
        },
        { 
            id: 17, 
            name: "Grand Complication Perpetual Calendar", 
            price: "$150,000", 
            img: "/images/17.jpg",
            desc: "Ultra-complex timepiece with perpetual calendar, moon phase, and multiple complications. The ultimate collector's piece.",
            properties: {
                waterResistance: "30m",
                movement: "Automatic Perpetual Calendar",
                caseMaterial: "18K Gold",
                crystal: "Sapphire"
            }
        },
        { 
            id: 18, 
            name: "Luxury Tourbillon Masterpiece", 
            price: "$180,000", 
            img: "/images/19.jpg",
            desc: "Exclusive tourbillon watch with visible escapement. Represents the highest level of watchmaking craftsmanship.",
            properties: {
                waterResistance: "30m",
                movement: "Manual Wind Tourbillon",
                caseMaterial: "Platinum",
                crystal: "Sapphire"
            }
        },
        { 
            id: 19, 
            name: "Diamond Bezel Luxury Watch", 
            price: "$75,000", 
            img: "/images/20.jpg",
            desc: "Stunning timepiece with diamond-set bezel and elegant dial. Perfect for special occasions and red carpet events.",
            properties: {
                waterResistance: "50m",
                movement: "Automatic",
                caseMaterial: "18K Gold & Diamonds",
                crystal: "Sapphire"
            }
        },
        { 
            id: 20, 
            name: "Premium Swiss Chronometer", 
            price: "$42,000", 
            img: "/images/21.png",
            desc: "Certified Swiss chronometer with precision movement and elegant design. A symbol of Swiss excellence.",
            properties: {
                waterResistance: "100m",
                movement: "Automatic Chronometer",
                caseMaterial: "Stainless Steel & Gold",
                crystal: "Sapphire"
            }
        },
        { 
            id: 21, 
            name: "Luxury Moon Phase Watch", 
            price: "$68,000", 
            img: "/images/22.jpg",
            desc: "Elegant timepiece featuring moon phase complication and sophisticated dial design. A romantic interpretation of time.",
            properties: {
                waterResistance: "30m",
                movement: "Automatic Moon Phase",
                caseMaterial: "18K Gold",
                crystal: "Sapphire"
            }
        },
        { 
            id: 22, 
            name: "Exclusive Limited Edition", 
            price: "$125,000", 
            img: "/images/24.jpg",
            desc: "Rare limited edition timepiece with unique design elements. Only 50 pieces worldwide. A true collector's treasure.",
            properties: {
                waterResistance: "50m",
                movement: "Automatic",
                caseMaterial: "Platinum & Gold",
                crystal: "Sapphire"
            }
        },
        { 
            id: 23, 
            name: "Luxury Dual Time Zone", 
            price: "$55,000", 
            img: "/images/25.jpg",
            desc: "Sophisticated GMT watch with dual time zone display. Perfect for frequent travelers and global executives.",
            properties: {
                waterResistance: "100m",
                movement: "Automatic GMT",
                caseMaterial: "Stainless Steel & Gold",
                crystal: "Sapphire"
            }
        },
        { 
            id: 24, 
            name: "Premium Dress Watch Collection", 
            price: "$48,000", 
            img: "/images/26.jpg",
            desc: "Ultra-thin dress watch with elegant proportions and refined aesthetics. The epitome of understated luxury.",
            properties: {
                waterResistance: "30m",
                movement: "Automatic",
                caseMaterial: "18K Gold",
                crystal: "Sapphire"
            }
        }
    ],
    smart: [
        { 
            id: 25, 
            name: "Premium Black Smartwatch", 
            price: "$650", 
            img: "/images/27.jpg",
            desc: "Advanced smartwatch with rectangular touchscreen display. Features fitness tracking, notifications, and long battery life.",
            properties: {
                waterResistance: "50m",
                movement: "Digital",
                caseMaterial: "Aluminum",
                crystal: "Gorilla Glass"
            }
        },
        { 
            id: 26, 
            name: "Fitness Tracker Pro", 
            price: "$299", 
            img: "/images/28.jpg",
            desc: "Advanced fitness tracker with heart rate monitoring, GPS, and comprehensive health metrics. Your personal health companion.",
            properties: {
                waterResistance: "50m",
                movement: "Digital",
                caseMaterial: "Polymer",
                crystal: "Tempered Glass"
            }
        },
        { 
            id: 27, 
            name: "Luxury Smartwatch Edition", 
            price: "$1,200", 
            img: "/images/29.jpg",
            desc: "Premium smartwatch with stainless steel case and leather strap. Combines technology with traditional watchmaking aesthetics.",
            properties: {
                waterResistance: "100m",
                movement: "Digital",
                caseMaterial: "Stainless Steel",
                crystal: "Sapphire Glass"
            }
        },
        { 
            id: 28, 
            name: "Outdoor Adventure Smartwatch", 
            price: "$450", 
            img: "/images/30.jpg",
            desc: "Rugged smartwatch designed for outdoor activities. Features GPS, weather tracking, and extreme durability.",
            properties: {
                waterResistance: "200m",
                movement: "Digital",
                caseMaterial: "Titanium",
                crystal: "Mineral Glass"
            }
        },
        { 
            id: 29, 
            name: "Sport Smartwatch Active", 
            price: "$399", 
            img: "/images/32.jpg",
            desc: "Lightweight sports smartwatch with advanced activity tracking. Perfect for runners, cyclists, and fitness enthusiasts.",
            properties: {
                waterResistance: "100m",
                movement: "Digital",
                caseMaterial: "Polymer",
                crystal: "Tempered Glass"
            }
        },
        { 
            id: 30, 
            name: "Elegant Smartwatch Classic", 
            price: "$850", 
            img: "/images/33.jpg",
            desc: "Classic design smartwatch with round display and leather strap. Technology meets timeless elegance.",
            properties: {
                waterResistance: "50m",
                movement: "Digital",
                caseMaterial: "Stainless Steel",
                crystal: "Sapphire Glass"
            }
        },
        { 
            id: 31, 
            name: "Health Monitoring Watch", 
            price: "$550", 
            img: "/images/34.jpg",
            desc: "Comprehensive health monitoring device with ECG, blood oxygen, and sleep tracking. Your wellness companion.",
            properties: {
                waterResistance: "50m",
                movement: "Digital",
                caseMaterial: "Aluminum",
                crystal: "Gorilla Glass"
            }
        },
        { 
            id: 32, 
            name: "Premium Fitness Smartwatch", 
            price: "$699", 
            img: "/images/35.jpg",
            desc: "High-end fitness smartwatch with advanced sensors and coaching features. Elevate your training performance.",
            properties: {
                waterResistance: "100m",
                movement: "Digital",
                caseMaterial: "Titanium",
                crystal: "Sapphire Glass"
            }
        },
        { 
            id: 33, 
            name: "Modern Digital Timepiece", 
            price: "$349", 
            img: "/images/36.jpg",
            desc: "Sleek digital smartwatch with customizable watch faces and smart notifications. Style meets functionality.",
            properties: {
                waterResistance: "50m",
                movement: "Digital",
                caseMaterial: "Aluminum",
                crystal: "Gorilla Glass"
            }
        },
        { 
            id: 34, 
            name: "Connected Lifestyle Watch", 
            price: "$499", 
            img: "/images/37.jpg",
            desc: "Versatile smartwatch that keeps you connected. Features music control, payments, and seamless smartphone integration.",
            properties: {
                waterResistance: "50m",
                movement: "Digital",
                caseMaterial: "Stainless Steel",
                crystal: "Tempered Glass"
            }
        },
        { 
            id: 35, 
            name: "Athletic Performance Tracker", 
            price: "$379", 
            img: "/images/38.jpg",
            desc: "Professional-grade sports watch with advanced metrics and real-time coaching. Optimize your athletic performance.",
            properties: {
                waterResistance: "100m",
                movement: "Digital",
                caseMaterial: "Polymer",
                crystal: "Tempered Glass"
            }
        },
        { 
            id: 36, 
            name: "Smartwatch Premium Edition", 
            price: "$999", 
            img: "/images/39.jpg",
            desc: "Top-tier smartwatch with premium materials and cutting-edge technology. The ultimate connected timepiece.",
            properties: {
                waterResistance: "100m",
                movement: "Digital",
                caseMaterial: "Stainless Steel & Ceramic",
                crystal: "Sapphire Glass"
            }
        }
    ]
};

export const allWatches = Object.values(watches).flat();
