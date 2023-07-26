const express = require('express')
const multer  = require('multer')
const { Sequelize } = require('sequelize')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const { S3Client } =require('aws-sdk/client-s3')

// process the image

app.get ("/api/postRoutes", upload.single('image'), async (req, res) => {
    const file = req.file
    const caption = req.body.caption
})

// PUT the image into S3

const { S3Client, PutObjectCommand } = "@aws-sdk/client-s3"

const dotenv = require('dotenv')

dotenv.config()

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3Client = new S3Client({
    region,
    credentials: {
        accessKeyId,
        secretAccessKey
    }
})

// Generate URL

const { GetObjectCommand } = "@aws-sdk/client-s3"
const { getSignedUrl } = "@aws-sdk/s3-request-presigner"

app.get("/", async (req, res) => {
    const posts = await Sequelize.posts.findMany({})
})


app.post("/api/postRoutes", async (req, res) => {
    console.log("req.body", req.body)
    res.send({})
})


//app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
 // })
 // app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
 // })




 // for .env

 //DATABASE_URL='https://brewreview-c780e18c5286.herokuapp.com/'

 //BUCKET_NAME='brewfinder-img-s3'
 //BUCKET_REGOION='us-east-1'
 //ACCESS_KEY=''
 //SECRET_ACCESS_KEY=''