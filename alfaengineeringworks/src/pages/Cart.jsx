import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'

export default function Cart() {
  const selector = useSelector(state => state.cart);
  // console.log('cart obj',selector)
  return (
    <>
    <Navbar/>
    </>
  )
}
