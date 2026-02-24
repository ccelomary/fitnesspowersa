"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  goal: z.string().min(5, "Tell us your main fitness goal")
});

type FormValues = z.infer<typeof schema>;

export function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful }
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    console.log("Booking request", values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-white/10 bg-card p-6">
      <h2 className="text-2xl font-bold">Book Your Free Trial</h2>
      <p className="text-sm text-muted">Tell us your goal and a coach will contact you shortly.</p>

      <div>
        <input {...register("name")} placeholder="Full name" className="w-full rounded-lg border border-white/15 bg-black p-3" />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
      </div>

      <div>
        <input {...register("email")} placeholder="Email address" className="w-full rounded-lg border border-white/15 bg-black p-3" />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
      </div>

      <div>
        <textarea {...register("goal")} placeholder="Your fitness goal" className="min-h-28 w-full rounded-lg border border-white/15 bg-black p-3" />
        {errors.goal && <p className="mt-1 text-xs text-red-400">{errors.goal.message}</p>}
      </div>

      <Button type="submit" className="w-full">
        Submit Booking Request
      </Button>
      {isSubmitSuccessful && <p className="text-sm text-primary">Thanks! We will contact you shortly.</p>}
    </form>
  );
}
