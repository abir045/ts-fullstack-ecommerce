import express, {Request, Response} from 'express'
// import { sampleProducts } from './data'
import cors from 'cors'
import dotenv from 'dotenv' ;
import mongoose from 'mongoose';
import { productRouter } from './routers/productRouter';
import { seedRouter } from './routers/seedRouter';

dotenv.config()

const app = express() ;

const  MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/audiophile'
      
       mongoose.set('strictQuery', true)
       mongoose
       .connect(MONGODB_URI)
       .then(()=> {
        console.log('connected to mongodb')
       })
       .catch(()=> {
        console.log('error mongodb')
       })


app.use(

    cors({
        credentials: true,
        origin: 'http://127.0.0.1:5173'
    
    })
)

// app.get('/api/products', (req: Request, res: Response) => {
//     res.json(sampleProducts)
// })


// app.get('/api/products/:slug',(req: Request , res: Response) => {

//     res.json(sampleProducts.find((x)=> x.slug === req.params.slug))
// } )

app.use('/api/products' , productRouter)
app.use('/api/seed' , seedRouter)


const PORT = 4000

app.listen(PORT, ()=> {
    console.log(`server started at http://localhost:${PORT}`)
})