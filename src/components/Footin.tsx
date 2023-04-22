

export default function Footer() {
    return (
        <>
            <div className="flex md:flex-row flex-col  md:justify-evenly md:text-start text-center bg-yellow-600 text-black py-5">
                <div>
                    <p className="font-bold font-['Clash Display'] text-[20px]">Info</p>
                    <p>Home</p>
                    <p>Contact</p>
                    <p>Blog</p>
                    <p>Shipping</p>
                </div>

                <div>
                    <p className="font-bold font-['Clash Display'] text-[20px]">Shop</p>
                    <p>Waistcoat</p>
                    <p>Shorts</p>
                    <p>Shirts</p>
                    <p>Footwear</p>
                    <p>Pants</p>
                    <p>Tees</p>
                    <p>Coats</p>
                    <p>Jackets</p>
                    <p>Suits & Blazers</p>
                </div>

                <div>
<p className="font-bold font-['Clash Display'] text-[20px]">Explore</p>
<p>About Us</p>
<p>FAQ</p>
<p>Sizing</p>
<p>Terms of Service</p>
<p>Contact Us</p>
                </div>
            </div>
        </>
    )
}