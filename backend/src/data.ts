import { Product } from "./types/Product"

export const sampleProducts: Product[] = [

    { 
        
        "slug": "xx99-mark-two-headphones",
        "name": "XX99 Mark II",
        image: {
          mobile: "../images/mobile/image-xx99-mark-two-headphones.jpg",
          tablet: "../images/tablet/image-xx99-mark-two-headphones.jpg",
          desktop: "../images/desktop/xx99-mark-two.jpg",
          desktopProductPage: "../images/desktop/image-product.jpg",

        },
      includes: [ 
      {
        quantity: 1,
        "item": "Headphone unit"
      },
      {
        "quantity": 2,
        "item": "Replacement earcups"
      },
      {
        "quantity": 1,
        "item": "User manual"
      },
      {
        "quantity": 1,
        "item": "3.5mm 5m audio cable"
      },
      {
        "quantity": 1,
        "item": "Travel bag"
      }
    ],


        description: "The new XX99 Mark II headphones is the pinnacle of pristine audio.It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
         category : "headphones",
         brand: "xx99",
         price : 2999 ,
         countInStock : 10,
         rating: 5 ,
        numReviews: 10,
         features : "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
        
           
    },

    {
        "slug": "zx9-speaker",
        "name": "ZX9 Speaker",
        "image": {
          "mobile": "./assets/shared/mobile/image-zx9-speaker.jpg",
          "tablet": "./assets/shared/tablet/image-zx9-speaker.jpg",
          "desktop": "./assets/shared/desktop/image-zx9-speaker.jpg"
        },
       "description": "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
       "category" : "headphones",
         "brand": "xx99",
         "price" : 4500 ,
         "countInStock" : 10,
         "rating": 5 ,
        "numReviews": 10,
         "features" : "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."

},

   {
        "slug": "zx7-speaker",
        "name": "ZX7 Speaker",
        "image": {
      "mobile": "./assets/product-zx7-speaker/mobile/image-product.jpg",
      "tablet": "./assets/product-zx7-speaker/tablet/image-product.jpg",
      "desktop": "./assets/product-zx7-speaker/desktop/image-product.jpg"
    },
       "description": "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
       "category" : "speakers",
         "brand": "zx7",
         "price" : 4500 ,
         "countInStock" : 10,
         "rating": 5 ,
        "numReviews": 10,
         "features" : "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."

   } , 

   {
    
    "slug": "yx1-earphones",
    "name": "YX1 Wireless Earphones",
    "image": {
      "mobile": "./assets/product-yx1-earphones/mobile/image-product.jpg",
      "tablet": "./assets/product-yx1-earphones/tablet/image-product.jpg",
      "desktop": "./assets/product-yx1-earphones/desktop/image-product.jpg"
    },
    "description": "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    "category": "earphones",
    "brand": "yx1",
         "price" : 599,
         "countInStock" : 10,
         "rating": 5 ,
        "numReviews": 10,
         "features" : "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
   }


]