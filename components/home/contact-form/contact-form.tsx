"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormInputs, contactSchema } from "@/types/contact-us";
import { useState } from "react";
import { submitContactForm } from "./contact-form.action";

export default function ContactFormClient() {
    const [submitStatus, setSubmitStatus] = useState<{
        message: string;
        type: 'success' | 'error' | null;
    }>({
        message: '',
        type: null
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormInputs>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormInputs) => {
        try {
            const result = await submitContactForm(data);

            if (result.success) {
                setSubmitStatus({
                    message: result.message,
                    type: 'success'
                });
                reset();
            } else {
                setSubmitStatus({
                    message: result.message,
                    type: 'error'
                });
            }
        } catch {
            setSubmitStatus({
                message: 'An unexpected error occurred. Please try again.',
                type: 'error'
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            {submitStatus.message && (
                <div
                    className={`p-4 rounded-md ${submitStatus.type === 'success'
                            ? 'bg-green-50 text-green-800'
                            : 'bg-red-50 text-red-800'
                        }`}
                >
                    {submitStatus.message}
                </div>
            )}

            <div className="mb-4">
                <label className="text-white mb-2">Name</label>
                <input
                    type="text"
                    placeholder="Name"
                    {...register("name")}
                    className="w-full p-2 bg-transparent text-white border-none rounded-md shadow-[0_-3px_5px_rgba(0,162,112,0.5),0_3px_5px_rgba(0,162,112,0.5)]"
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>

            <div className="mb-4">
                <label className="text-white mb-2">Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    className="w-full p-2 bg-transparent text-white border-none rounded-md shadow-[0_-3px_5px_rgba(0,162,112,0.5),0_3px_5px_rgba(0,162,112,0.5)]"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
                <label className="text-white mb-2">Message</label>
                <textarea
                    placeholder="Message"
                    {...register("message")}
                    className="w-full p-2 bg-transparent text-white border-none rounded-md shadow-[0_-3px_5px_rgba(0,162,112,0.5),0_3px_5px_rgba(0,162,112,0.5)]"
                />
                {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            </div>

            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center font-raleway mt-8">
                <button type="submit" className="btn group mb-4 w-auto bg-gradient-to-t from-forest-600 to-forest-500 text-white rounded-full px-16">
                    <span className="relative inline-flex items-center">
                        Send Message
                        <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">-&gt;</span>
                    </span>
                </button>
            </div>
        </form>
    );
}