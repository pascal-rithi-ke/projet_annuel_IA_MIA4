import { Link } from "react-router-dom"

const TEST_PAGES = ["Page 1", "Page 2", "Page 3"];

export const Footer = () => {
    return (
        <footer className="bg-white border border-">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between">
                <div>
                    <p className="text-sm">© ExpressFood {new Date().getFullYear()}</p>
                </div>
                <nav className="flex space-x-4" aria-label="Footer">
                    {TEST_PAGES.map((page, index) => (
                        <Link key={index} to={`/${page}`} className="text-sm text-gray-500 hover:text-gray-700">
                            {page}
                        </Link>
                    ))}
                </nav>
            </div>
        </footer>
    )
}