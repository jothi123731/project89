import {test,request} from '@playwright/test'

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
