import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className="bg-white border border-">
            <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8 flex justify-between">
                <div>
                    <p className="text-sm">© ExpressFood {new Date().getFullYear()}</p>
                </div>
                <nav className="flex space-x-4" aria-label="Footer">
                    <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-700">
                        Termes et conditions
                    </Link>
                    {/* TODO: link to /privacy */}
                    <Link to="#" className="text-sm text-gray-500 hover:text-gray-700">
                        Confidentialité
                    </Link>
                </nav>
            </div>
        </footer>
    )
}