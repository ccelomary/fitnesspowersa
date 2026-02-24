"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(8, "Phone number is required"),
  message: z.string().min(8, "Please tell us your goal")
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful }
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = (values: ContactValues) => {
    console.log(values);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit(onSubmit)}
      className="desert-card space-y-4 p-6"
    >
      <input {...register("name")} className="w-full rounded-lg border border-amber-100/20 bg-black/20 p-3 text-white" placeholder="Full name" />
      {errors.name && <p className="text-xs text-red-300">{errors.name.message}</p>}
      <input {...register("email")} className="w-full rounded-lg border border-amber-100/20 bg-black/20 p-3 text-white" placeholder="Email" />
      {errors.email && <p className="text-xs text-red-300">{errors.email.message}</p>}
      <input {...register("phone")} className="w-full rounded-lg border border-amber-100/20 bg-black/20 p-3 text-white" placeholder="Phone" />
      {errors.phone && <p className="text-xs text-red-300">{errors.phone.message}</p>}
      <textarea {...register("message")} className="min-h-28 w-full rounded-lg border border-amber-100/20 bg-black/20 p-3 text-white" placeholder="What do you want to achieve?" />
      {errors.message && <p className="text-xs text-red-300">{errors.message.message}</p>}
      <Button className="w-full bg-gradient-to-r from-amber-400 to-orange-700 text-white">Contact Us</Button>
      {isSubmitSuccessful && <p className="text-sm text-amber-300">Thanks! We’ll reach out shortly.</p>}
    </motion.form>
  );
}
