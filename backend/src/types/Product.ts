export type Product =  { 

    name: string
    slug: string
    image: {
        "mobile": string ;
        "tablet": string ;
        "desktop": string ;
        "desktopProductPage": string ;
    }
    includes: 
        {
        "quantity": number,
        "item": string
      }[],
    category: string
    brand: string
    price: number
    countInStock: number
    description: string
    rating: number
    numReviews: number
    features: string

}