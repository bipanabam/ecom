

const Footer = () => {
  return (
    <footer className="w-full mt-auto">
        <div className="px-10 py-16 flex flex-col md:flex-row items-start justify-between gap-12 bg-foreground">
            <div className="flex flex-col gap-4">
                <h1 className="font-epilogue text-2xl font-bold tracking-[-0.04em] text-white">
                SHOPEEE
                </h1>
                <ul className="flex flex-col md:flex-row gap-6 md:gap-10 text-neutral text-xs">
                    <li>PRIVACY POLICY</li>
                    <li>TERMS OF SALE</li>
                    <li>CONTACT US</li>
                    <li>STORE LOCATION</li>
                </ul>
            </div>
            <div className="flex flex-col items-start md:items-end gap-4 h-full justify-between">
                <p className="font-epilogue text-xl font-bold tracking-[-0.04em] text-neutral">
                info@shopee.com
                </p>
                <p className="font-inter text-xs font-medium tracking-widest text-neutral">
                    © 2026 SHOPEE ALL RIGHTS RESERVED.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;