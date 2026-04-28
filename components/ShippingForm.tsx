import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { shippingFormSchema, ShippingFormInputs } from "@/type";
import { useRouter } from "next/navigation";

const ShippingForm = ({setShippingFormData}: {setShippingFormData: (data: ShippingFormInputs) => void}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  })

  const router = useRouter();

  const handleShippingFormSubmit: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingFormData(data);
    router.push("/cart?step=3", {scroll: false});
    console.log("Shipping Form Data:", data);
    // You can perform further actions here, such as sending the data to an API or navigating to the next step.
  }
  return (
    <form className="flex flex-col gap-4 p-4 sm:p-6" onSubmit={handleSubmit(handleShippingFormSubmit)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="fullName" className="text-foreground text-lg font-medium">Full Name</label>
        <input type="text" id="fullName" placeholder="John Doe" className="text-sm border-b border-borderColor outline-none py-2 text-muted placeholder:text-muted/60" {...register("fullName")} />
        {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-foreground text-lg font-medium">Email</label>
        <input type="email" id="email" placeholder="john@example.com" className="text-sm border-b border-borderColor outline-none py-2 text-muted placeholder:text-muted/60" {...register("email")} />
        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-foreground text-lg font-medium">Phone Number</label>
        <input type="tel" id="phone" placeholder="123-456-7890" className="text-sm border-b border-borderColor outline-none py-2 text-muted placeholder:text-muted/60" {...register("phone")} />
        {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-foreground text-lg font-medium">Address</label>
        <input type="text" id="address" placeholder="123 Main St" className="text-sm border-b border-borderColor outline-none py-2 text-muted placeholder:text-muted/60" {...register("address")} />
        {errors.address && <p className="text-xs text-red-500">{errors.address.message}</p>}
      </div>
      <div className="flex flex-col sm:flex-row gap-10 items-center justify-between">
        <div className="w-full sm:w-1/2 flex flex-col gap-1">
          <label htmlFor="city" className="text-foreground text-lg font-medium">City</label>
          <input type="text" id="city" placeholder="New York" className="text-sm border-b border-borderColor outline-none py-2 text-muted placeholder:text-muted/60" {...register("city")} />
          {errors.city && <p className="text-xs text-red-500">{errors.city.message}</p>}
        </div>
        <div className="w-full sm:w-1/2 flex flex-col gap-1">
          <label htmlFor="postalCode" className="text-foreground text-lg font-medium">Postal Code</label>
          <input type="text" id="postalCode" placeholder="44600" className="text-sm border-b border-borderColor outline-none py-2 text-muted placeholder:text-muted/60" {...register("postalCode")} />
          {errors.postalCode && <p className="text-xs text-red-500">{errors.postalCode.message}</p>}
        </div>
      </div>
      {/* <div className="flex flex-col gap-1">
        <label htmlFor="country" className="text-foreground text-lg font-medium">Country</label>
        <input type="text" id="country" placeholder="United States" className="text-sm border-b border-borderColor outline-none py-2 text-muted placeholder:text-muted/60" {...register("country")} />
        {errors.country && <p className="text-xs text-red-500">{errors.country.message}</p>}
      </div> */}
      <button type="submit" 
      className="w-full bg-secondary text-foreground font-semibold py-2 mt-6 rounded-xl cursor-pointer hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
      >
        Continue to Payment
      </button>

    </form>
  )
}

export default ShippingForm