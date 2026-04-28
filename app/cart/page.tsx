"use client";

import Image from "next/image";

import { CartItemType } from "@/type";
import { Trash2, PlusCircle, MinusCircle } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

import { useState } from "react";

import ShippingForm from "@/components/ShippingForm";
import PaymentForm from "@/components/PaymentForm";

const cartItems: CartItemType[] = [
   {
        id: 1,
        name: "Nike Air Max 270",
        description: "The Nike Air Max 270 features Nike's biggest heel Air unit yet for a super-soft ride that feels as impossible as it looks. The sleek design is inspired by two icons of big Air: the Air Max 180 and Air Max 93.",
        price: 29.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["red"],
        images: {
            red: "/assets/product1-red.avif",
        },
        quantity: 2,
        selectedSize: "M",
        selectedColor: "red",
    },
    {
        id: 2,
        name: "New Balance 990v5",
        description: "The New Balance 990v5 combines classic design with modern comfort, featuring a premium leather upper and responsive cushioning.",
        price: 39.99,
        sizes: ["S", "M", "L"],
        colors: ["green", "black"],
        images: {
            black: "/assets/product2-black.avif",
            green: "/assets/product2-green.avif",
        },
        quantity: 1,
        selectedSize: "L",
        selectedColor: "black",
    },
]

const steps = [
    {
        id:1,
        title: "Shopping Cart",
        description: "Review your items and proceed to checkout."
     },
     {
        id:2,
        title: "Shipping Address",
        description: "Enter your shipping address and contact information."
     },
     {
        id:3,
        title: "Payment Information",
        description: "Provide your payment details to complete the purchase."
    }
]

const CartPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [shippingFormData, setShippingFormData] = useState(null);
    const [paymentFormData, setPaymentFormData] = useState(null);

    const activeStep = parseInt(searchParams.get("step") || "1");

  return (
    <section className="w-full px-10 py-6 bg-card">
    <div className="flex flex-col gap-8 items-center justify-center">
        {/* Title and Description */}
        <h1 className="text-3xl font-epilogue font-bold text-foreground/90 mb-4">Your Cart</h1>
        <p className="text-sm text-foreground/70">You have {cartItems.length} items in your cart.</p>
        {/* Steps */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
            {steps.map((step) => (
                <div className={`flex items-center gap-2 border-b-2 pb-4 ${activeStep === step.id ? 'border-foreground' : 'border-borderColor/50'}`} key={step.id}>
                    <span className={`w-6 h-6 p-4 rounded-full flex items-center justify-center text-white font-bold ${activeStep === step.id ? 'bg-foreground' : 'bg-borderColor/50'}`}>{step.id}</span>
                    <p className={`text-sm font-semibold ${activeStep === step.id ? "text-foreground" : "text-borderColor/70"}`}>
                    {step.title}
                    </p>
                </div>
            ))}
        </div>
        {/* Description for the active step */}
        <div className="w-full flex flex-col md:flex-row gap-16">
            {/* Cart Items List */}
            <div className="w-full lg:w-7/12 flex flex-col gap-8 bg-white rounded-xl shadow-md divide-y">
                {activeStep === 1 ? (
                    cartItems.map((item) => (
                        <div key={item.id} className="p-4 sm:p-6 border-b border-b-borderColor/30 last:border-none flex flex-col sm:flex-row justify-between items-center">
                            {/* Product Image and Details */}
                            <div className="flex flex-col sm:flex-row gap-8">
                                <div className="relative w-32 h-32 rounded-lg overflow-hidden group">
                                    <Image 
                                        src={item.images[item.selectedColor]} 
                                        alt={item.name}
                                        fill
                                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-[16px] font-semibold text-foreground">{item.name}</h2>
                                        <p className="text-sm text-neutral">Size: {item.selectedSize}</p>
                                        <p className="text-sm text-neutral">Color: {item.selectedColor}</p>
                                        <div className="flex items-center gap-2 text-foreground">
                                            <button className="">
                                                <MinusCircle className="w-6 h-6" color="#737373" />
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button className="">
                                                 <PlusCircle className="w-6 h-6" color="#737373" />
                                            </button>
                                        </div>
                                    </div>
    
                                    <p className="text-[16px] font-medium text-foreground mt-2">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                            {/* Remove Button */}
                            <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center cursor-pointer hover:bg-red-100 hover:scale-110 transition-transform duration-200">
                                <Trash2 className="w-4 h-4 text-red-500 cursor-pointer" />
                            </div>
                        </div>
                    ))
                    ) : activeStep === 2 ? (
                    <ShippingForm setShippingFormData={setShippingFormData} />
                    ) : (
                        activeStep === 3 && shippingFormData ? <PaymentForm setPaymentFormData={setPaymentFormData} /> : <p className="text-sm text-borderColor">Please fill out the shipping form.</p>
                    )}
            </div>
            {/* Orders Summary */}
            <div className="w-full lg:w-5/12 flex flex-col bg-foreground gap-8 p-6 shadow-lg rounded-xl h-max sticky top-10">
                <h2 className="text-xl font-bold text-white p-4">Order Summary</h2>
                {/* Summary details */}
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between text-sm">
                        <p className="text-borderColor">SUBTOTAL:</p>
                        <p className="font-medium text-white">${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                        <p className="text-borderColor">DISCOUNT (10%):</p>
                        <p className="font-medium text-red-400">-${(cartItems.reduce((total, item) => total + item.price * item.quantity, 0) * 0.1).toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                        <p className="text-borderColor">SHIPPING FEE:</p>
                        <p className="font-medium text-white">FREE</p>
                    </div>
                    <hr className="border-white/10 my-2" />
                    <div className="flex justify-between">
                        <p className="text-white">TOTAL:</p>
                        <p className="font-semibold text-secondary text-lg">${(cartItems.reduce((total, item) => total + item.price * item.quantity, 0) * 0.9).toFixed(2)}</p>
                    </div>
                </div>

                {activeStep === 1 && (
                    <button 
                        className="w-full bg-secondary text-foreground font-semibold py-2 mt-6 rounded-xl cursor-pointer hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
                        onClick={() => router.push("/cart?step=2", {scroll: false})}
                    >
                        Proceed to Checkout
                    </button>
                )}
            </div>
            
        </div>
    </div>
    </section>
  )
}

export default CartPage