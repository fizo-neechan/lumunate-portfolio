"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
//import { resend } from "resend"; // Ensure you have this package installed
//import { Email } from "react-email"; // Ensure you have this package installed

const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message is required"),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export default function ContactFormClient() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormInputs>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormInputs) => {
        console.log(data)
        // try {
        //     await resend.sendEmail({
        //         to: "saad@luminate.com",
        //         subject: "New Contact Form Submission",
        //         html: (
        //             <Email>
        //                 <h1>Contact Form Submission</h1>
        //                 <p><strong>Name:</strong> {data.name}</p>
        //                 <p><strong>Email:</strong> {data.email}</p>
        //                 <p><strong>Message:</strong> {data.message}</p>
        //             </Email>
        //         ),
        //     });
        //     alert("Message sent successfully!");
        // } catch (error) {
        //     console.error("Error sending email:", error);
        //     alert("Failed to send message. Please try again later.");
        // }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
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