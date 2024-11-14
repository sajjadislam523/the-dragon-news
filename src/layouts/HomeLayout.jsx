import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import MainSection from "../components/layout-components/MainSection";
import RightNavbar from "../components/layout-components/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            {/* Header */}
            <header>
                <Header />
                <section className="w-11/12 mx-auto">
                    <LatestNews />
                </section>
            </header>
            {/* Nav */}
            <nav className="w-11/12 mx-auto">
                <Navbar />
            </nav>
            {/* Main */}
            <main className="grid w-11/12 gap-4 pt-5 mx-auto md:grid-cols-12">
                <aside className="col-span-3">
                    <LeftNavbar />
                </aside>
                <section className="col-span-6">
                    <MainSection />
                </section>
                <aside className="col-span-3">
                    <RightNavbar />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;
