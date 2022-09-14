import Navigation from "../component/Navigation";
import Footer from "../component/Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;

