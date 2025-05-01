'use client';
import { useState, useEffect } from 'react';
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useCheckout } from '../context/CheckoutContext';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
}

export default function DeliveryForm() {
  const { setDeliveryFormComplete } = useCheckout();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
  });

  const validateForm = () => {
    const required: (keyof FormData)[] = ['fullName', 'phone', 'address', 'city', 'zipCode'];
    const isComplete = required.every(field => formData[field].trim() !== '');
    setDeliveryFormComplete(isComplete);
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    // Save email to localStorage immediately when it changes
    if (id === 'email') {
      localStorage.setItem('email', JSON.stringify(value.trim()));
      console.log('Email saved to localStorage:', value.trim());
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold text-[#044588] mb-3 flex items-center">
          <MapPin className="mr-2 h-5 w-5 text-blue-600" />
          Contact & Delivery Information
        </h2>
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3">
          <div>
            <label htmlFor="fullName" className="text-base font-semibold text-[#044588]">
              Full Name<span>*</span>
            </label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="John Smith"
              className="h-10 mt-1.5 rounded-sm text-base"
            />
          </div>

          <div>
            <label htmlFor="phone" className="text-base font-semibold text-[#044588]">
              Phone Number<span>*</span>
            </label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="For delivery coordination"
              className="h-10 mt-1.5 rounded-sm text-base"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-base font-semibold text-[#044588]">
              Email Address
            </label>
            <Input
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="For order confirmation"
              className="h-10 mt-1.5 rounded-sm text-base"
            />
          </div>

          <div>
            <label htmlFor="address" className="text-base font-semibold text-[#044588]">
              Delivery Address<span>*</span>
            </label>
            <Input
              id="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Street address"
              className="h-10 mt-1.5 rounded-sm text-base"
            />
          </div>

          <div>
            <label htmlFor="city" className="text-base font-semibold text-[#044588]">
              City<span>*</span>
            </label>
            <Input
              id="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
              className="h-10 mt-1.5 rounded-sm text-base"
            />
          </div>

          <div>
            <label htmlFor="zipCode" className="text-base font-semibold text-[#044588]">
              ZIP Code<span>*</span>
            </label>
            <Input
              id="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              placeholder="ZIP Code"
              className="h-10 mt-1.5 rounded-sm text-base"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="notes" className="text-base font-semibold text-[#044588]">
              Delivery Notes (Optional)
            </label>
            <Textarea
              id="notes"
              placeholder="Additional instructions (e.g., building access, preferred time)"
              className="min-h-[140px] mt-1.5 rounded-sm text-base"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
