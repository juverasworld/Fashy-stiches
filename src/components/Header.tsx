import { useState } from 'react';
import { useEffect } from 'react';
import { BsGlobe } from 'react-icons/bs';
import Head from 'next/head';
import Link from 'next/link';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    useEffect(() => {

        function ife() {
            const script = document.createElement("script");
            script.src = 'window.gtranslateSettings = {"default_language":"en","languages":["en","fr","de","it","es"],"globe_color":"#66aaff","wrapper_selector":".gtranslate_wrapper","globe_size":20}'

            script.src = "https://cdn.gtranslate.net/widgets/latest/globe.js";
            script.async = true;
            document.body.appendChild(script);
        }
        ife();
    }, []);
    return (
        <>

            <header>
                <nav className="nav bg-yellow-600">
                    <div className="nav__hamburger  " onClick={toggleMenu}>
                        <span />
                        <span />
                        <span />
                    </div>
                    {/* <div className="nav__logo  flex justify-end">
                        <p className='px-10'>Custom Clothing</p>
                        <p>Look Books</p>
                        <p>Coustom Clothing</p>
                        <p className='font-bold font-["Clash Display] text-yellow-600 text-[20px]'>Fashy Stiches</p>
                        <p>     <div className=" border-2 w-16 h-10 globe_size wrapper_selector gtranslate_wrapper"><BsGlobe/></div></p>
                    </div> */}
                    <div className={`nav__menu bg-yellow-600 ${menuOpen ? 'nav__menu--open' : ''}`}>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                </nav>
            </header>
        </>
    );
};

export default Header;
