import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Lumunate">
      <Image src={'/logo.svg'} alt="Logo" width={-1} height={32} /> 
    </Link>
  );  
}
