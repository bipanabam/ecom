import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full mt-auto">
        <div className="px-10 py-16 flex flex-col items-center md:flex-row md:items-start justify-between gap-12 bg-foreground">
            <div className="flex flex-col gap-4 text-sm items-center md:items-start">
                <p className="font-epilogue text-sm font-bold tracking-widest text-white">
                    LINKS
                </p>
                <Link href="/" className="text-neutral hover:text-secondary/80 transition-colors">
                    PRIVACY POLICY
                </Link>
                <Link href="/" className="text-neutral hover:text-secondary/80 transition-colors">
                    TERMS OF SALE
                </Link>
                <Link href="/" className="text-neutral hover:text-secondary/80 transition-colors">
                    CONTACT US
                </Link>
                <Link href="/" className="text-neutral hover:text-secondary/80 transition-colors">
                    STORE LOCATION
                </Link>
            </div>
            <div className="flex flex-col gap-4 text-sm items-center md:items-start">
                <p className="font-epilogue text-sm font-bold tracking-widest text-white">
                    SOCIAL
                </p>
                <Link href="/" className="text-neutral hover:text-secondary/80 transition-colors">
                    FACEBOOK
                </Link>
                <Link href="/" className="text-neutral hover:text-secondary/80 transition-colors">
                    TWITTER
                </Link>
                <Link href="/" className="text-neutral hover:text-secondary/80 transition-colors">
                    INSTAGRAM
                </Link>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4 h-full justify-between">
                <h1 className="font-epilogue text-2xl font-bold tracking-[-0.04em] text-white">
                SHOPEEE
                </h1>
                <p className="font-inter text-xs font-medium tracking-widest text-neutral">
                    © 2026 SHOPEE
                </p>
                <p className="font-inter text-xs font-medium tracking-widest text-neutral">
                   ALL RIGHTS RESERVED.
                </p>

            </div>
        </div>
    </footer>
  )
}

export default Footer;