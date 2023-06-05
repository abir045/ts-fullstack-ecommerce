export type Product =  { 

    name: string
    slug: string
    image: {
        "mobile": string ;
        "tablet": string ;
        "desktop": string ;
    } 
    category: string
    brand: string
    price: number
    countInStock: number
    description: string
    rating: number
    numReviews: number
    features: string

}