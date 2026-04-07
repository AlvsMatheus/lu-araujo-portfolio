import Header from "./components/header/Header"
import About from "./components/about/About";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact";

export default function Home() {
    return (
    <main className="overflow-x-hidden h-screen w-screen">
        <Header/>
        <About/>
        <Products />
        <Contact />
    </main>
    )
}
