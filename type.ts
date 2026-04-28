import { z } from "zod";

export type ProductType = {
    id: string | number;
    name: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>;
}

export type CartItemType = ProductType & {
    quantity: number;
    selectedSize: string;
    selectedColor: string;
}

export const shippingFormSchema = z.object({
    fullName: z.string().min(2, "Full Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits").regex(/^\d+$/, "Phone number must contain only digits/numbers"),
    address: z.string().min(5, "Address is required"),
    city: z.string().min(2, "City is required"),
    postalCode: z.string().min(4, "Postal Code must be at least 4 characters").regex(/^\d+$/, "Postal Code must contain only numbers"),
    // country: z.string().min(2, "Country is required"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
    cardHolder: z.string().min(2, "Card holder name is required"),
    cardNumber: z.string().min(16, "Card number must be at least 16 digits").regex(/^\d+$/, "Card number must contain only digits/numbers"),
    expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Invalid expiry date"),
    cvv: z.string().min(3, "CVV must be at least 3 digits").regex(/^\d+$/, "CVV must contain only digits/numbers"),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;
