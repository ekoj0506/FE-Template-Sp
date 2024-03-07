/* eslint-disable no-useless-catch */
import axiosInstance from './axiosInstance';
export const responseCategoryApi =  axiosInstance.get('http://localhost:8017/v1/category');
export const responseCartApi = axiosInstance.get('http://localhost:8017/v1/cart');
export const responseProductApi =  axiosInstance.get('http://localhost:8017/v1/product/products');
export const responseProductDetailApi =async(idProduct:string)=>  
{  
    
    try{
    console.log('parammmmmmm', idProduct)
     const ad = await axiosInstance.get(`http://localhost:8017/v1/product/detail?idProduct=${idProduct}`);
     console.log('ssssssssssssssssssssssssssssssssssssssssss',ad.data)
     return ad.data
    }
    catch(error)
    {
        throw error
    }
}
export const responseLoginApi = async(dataUser)=>
{  try{
    const infoUser= await axiosInstance.post('http://localhost:8017/v1/user/signin', dataUser)
    console.log(infoUser)
    return infoUser.data
}
catch(error)
{
    return false
}
}