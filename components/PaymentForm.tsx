import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentFormInputs, paymentFormSchema } from "@/type";
import { ShoppingCart } from "lucide-react";

import { useRouter } from "next/navigation";
import Image from "next/image";

const PaymentForm = ({setPaymentFormData}: {setPaymentFormData: (data: PaymentFormInputs) => void}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  })

  const router = useRouter();

  const handlePaymentFormSubmit: SubmitHandler<PaymentFormInputs> = (data) => {
    setPaymentFormData(data);
    console.log("Payment Form Data:", data);
    // You can perform further actions here, such as sending the data to an API or navigating to the next step.
  }
  return (
    <form className="flex flex-col gap-4 p-4 sm:p-6" onSubmit={handleSubmit(handlePaymentFormSubmit)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="cardHolder" className="text-foreground text-lg font-medium">Card Holder</label>
        <input type="text" id="cardHolder" placeholder="John Doe" className="text-sm border-b border-borderColor outline-none py-2 text-muted placeholder:text-muted/60" {...register("cardHolder")} />
        {errors.cardHolder && <p className="text-xs text-red-500">{errors.cardHolder.message}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cardNumber" className="text-foreground text-lg font-medium">Card Number</label>
        <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" className="text-sm border-b border-borderColor outline-none py-2 text-muted placeholder:text-muted/60" {...register("cardNumber")} />
        {errors.cardNumber && <p className="text-xs text-red-500">{errors.cardNumber.message}</p>}
      </div>
      <div className="flex flex-col sm:flex-row gap-10 items-center justify-between">
          <div className="w-full sm:w-1/2 flex flex-col gap-1">
            <label htmlFor="expiryDate" className="text-foreground text-lg font-medium">Expiry Date</label>
            <input type="tel" id="expiryDate" placeholder="12/24" className="text-sm border-b border-borderColor outline-none py-2 text-muted placeholder:text-muted/60" {...register("expiryDate")} />
            {errors.expiryDate && <p className="text-xs text-red-500">{errors.expiryDate.message}</p>}
          </div>
          <div className="w-full sm:w-1/2 flex flex-col gap-1">
            <label htmlFor="cvv" className="text-foreground text-lg font-medium">CVV</label>
            <input type="tel" id="cvv" placeholder="123" className="text-sm border-b border-borderColor outline-none py-2 text-muted placeholder:text-muted/60" {...register("cvv")} />
            {errors.cvv && <p className="text-xs text-red-500">{errors.cvv.message}</p>}
          </div>
      </div>
        
      <div className="flex items-center gap-2 mt-4">
        <Image src="/assets/visa.png" alt="Visa" width={40} height={24} className="rounded-md" />
        <Image src="/assets/master-card.png" alt="MasterCard" width={40} height={24} className="rounded-md" />
        <Image src="/assets/esewa.png" alt="Esewa" width={40} height={24} className="rounded-md" />
      </div>
      <button type="submit" 
        className="w-full bg-secondary text-foreground font-semibold py-2 mt-6 rounded-xl cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
      >
        Checkout
        <ShoppingCart className="w-4 h-4" />
      </button>

    </form>
  )
}

export default PaymentForm