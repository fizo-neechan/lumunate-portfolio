import Image from 'next/image';
import ContactFormClient from './contact-form';

export default function ContactForm() {
    return (
        <div className="flex flex-col md:flex-row  p-10 text-white">
            <div className="md:w-1/2 mb-6 flex flex-col items-center">
                <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda text-4xl font-medium text-transparent md:text-5xl text-center">
                    <span className="block">Let&apos;s</span>
                    <span className="block">Connect</span>
                </h2>
                <div className="flex flex-col mt-4 content-center">
                    <div className="flex items-center">
                        <Image src="/images/icons/mail-outline.svg" alt="Email" className="mr-4" width={16} height={16}/>
                        <span>marketing@luminate.com</span>
                    </div>
                    <div className="flex items-center">
                        <Image src="/images/icons/phone-flip.svg" alt="Phone" className="mr-4" width={16} height={16}/>
                        <span>+92 3361000001</span>
                    </div>
                    <div className="flex items-center">
                        <Image src="/images/icons/location-pin.svg" alt="Location" className="mr-4" width={16} height={16}/>
                        <span>Islamabad, Pakistan</span>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 mx-auto px-4 sm:px-6">
                <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda text-3xl font-medium text-transparent md:text-4xl">
                    Let&apos;s Collaborate to Create Something Extraordinary
                </h2>
                <ContactFormClient/>
            </div>
        </div>
    );
}