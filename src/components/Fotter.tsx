
const Fotter = () => {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                    <p className="mb-4">
                        We offers expert-led courses to help you master the latest web technologies like React.js, Next.js, and more.
                    </p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <div className="flex flex-col ">
                        <a href="#" className="hover:text-white transition-colors duration-300">
                            Home
                        </a>

                        <a href="#" className="hover:text-white transition-colors duration-300">
                            About
                        </a>

                        <a href="#" className="hover:text-white transition-colors duration-300">
                            Courses
                        </a>

                        <a href="#" className="hover:text-white transition-colors duration-300">
                            Contact
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                    <div className="flex flex-col ">
                        <a href="#" className="hover:text-white transition-colors duration-300">
                            Facebook
                        </a>
                        <a href="#" className="hover:text-white transition-colors duration-300">
                            Twitter
                        </a>
                        <a href="#" className="hover:text-white transition-colors duration-300">
                            Instagram
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p>Hissar, HR</p>
                    <p>Pin code: 125001</p>
                    <p>Email: Nehra@gmail.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
            <p className="text-center text-xs pt-8">© 2024 Tech Academy. All rights reserved.</p>
        </footer>
    )
}

export default Fotter