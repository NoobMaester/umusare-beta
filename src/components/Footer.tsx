
const Footer: React.FC = () => {
    return (
        <footer className="bg-[#000300] text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Umusaare. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;