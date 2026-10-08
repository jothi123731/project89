import {test,request,expect} from '@playwright/test'
import postData from '../data/post.json'
import tokenData from '../data/token.json'
import putData from '../data/put.json'
//import postsample from '../sample/post.json'
var B_id=""
var BearerToken =""

test.describe.serial('api', async () =>{

test('Get Booking Id', async({request})=>{
   const response =await request.get('https://restful-booker.herokuapp.com/booking')
    const body=await response.json()
    console.log(body)
})

test('Get Booking Details', async({request})=>{
   const response =await request.get('https://restful-booker.herokuapp.com/booking/4')
    const body=await response.json()
    console.log(body)
})

test('Create Booking Details', async({request})=>{
   const response =await request.post('https://restful-booker.herokuapp.com/booking',{
     data: postData

   })
    const body=await response.json()
    B_id = body.bookingid
    console.log(body)
    console.log("Booking ID Created :", B_id)
})



test('Create Token', async({request})=>{
   const response =await request.post('https://restful-booker.herokuapp.com/auth',{
     data: tokenData
   })
    const body=await response.json()
    BearerToken=await body.token
    console.log("Token Created:" , BearerToken)
})

test('Update Booking Details', async ({ request }) => {
    const response = await request.put(`https://restful-booker.herokuapp.com/booking/${B_id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Cookie": `token=${BearerToken}`
        },
        data: putData
      })

    const status = await response.status()
    console.log("Status Code for PUT Method :", status)
    await expect(status).toEqual(200)
    const body = await response.json()
    console.log(body)
  })
})








