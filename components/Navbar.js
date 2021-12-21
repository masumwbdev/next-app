import Link from "next/link";

const Navbar = () => {
    return ( 
        <div>
            <nav>
                <div className="logo">
                    <h1>Next app</h1>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/contact/contact"><a>Contact</a></Link>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;