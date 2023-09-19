export const Button = ({ children }: { children: React.ReactNode }) => {
    return (
        <button className="px-6 py-3 rounded bg-secondary text-white" type="submit">{children}</button>
    )
}