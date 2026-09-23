function Footer() {
    return (
        <footer className="bg-pink-200  py-4 dark:bg-pink-200 mt-auto">
            <div className="container mx-auto text-center">
                <p className="text-gray-600 dark:text-black-700">&copy; {new Date().getFullYear()} ShopWithSamy. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;