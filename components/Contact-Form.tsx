// ContactForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { resend } from "resend";
import { Email } from "react-email";

const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message is required"),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormInputs>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormInputs) => {
        try {
            await resend.sendEmail({
                to: "saad@luminate.com",
                subject: "New Contact Form Submission",
                html: (
                    <Email>
                        <h1>Contact Form Submission</h1>
                        <p><strong>Name:</strong> {data.name}</p>
                        <p><strong>Email:</strong> {data.email}</p>
                        <p><strong>Message:</strong> {data.message}</p>
                    </Email>
                ),
            });
            alert("Message sent successfully!");
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send message. Please try again later.");
        }
    };

    return (
        <div className="flex flex-col md:flex-row justify-between p-6 bg-gray-800 text-white">
            <div className="md:w-1/2 mb-6">
                <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda text-3xl font-medium text-transparent md:text-4xl">
                    Let's Connect</h2>
                <div className="flex flex-col mt-4">
                    <div className="flex items-center">
                        <img src="/images/logos/dify.png" alt="Email" className="mr-2"/>
                        <span>marketing@luminate.com</span>
                    </div>
                    <div className="flex items-center">
                        <img src="/images/logos/dify.png" alt="Phone" className="mr-2" />
                        <span>+92 3361000001</span>
                    </div>
                    <div className="flex items-center">
                        <img src="/images/logos/dify.png" alt="Location" className="mr-2" />
                        <span>Islamabad, Pakistan</span>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2">
                <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda text-3xl font-medium text-transparent md:text-4xl">
                    Let's Collaborate to Create Something Extraordinary</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register("name")}
                            className="w-full p-2 mb-2 border border-gray-300 rounded"
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                            className="w-full p-2 mb-2 border border-gray-300 rounded"
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    <div>
            <textarea
                placeholder="Message"
                {...register("message")}
                className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
                        {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                    </div>
                    <button type="submit" className="bg-forest-200 text-white p-2 rounded ">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}