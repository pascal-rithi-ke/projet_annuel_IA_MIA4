interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export const Button = ({ children, ...rest }: ButtonProps) => {
    return (
        <button className="px-6 py-3 rounded bg-secondary hover:bg-green-800 text-white font-semibold transition-colors" {...rest}>{children}</button>
    )
}