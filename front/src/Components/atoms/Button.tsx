interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
    type?: HTMLButtonElement["type"]
}

export const Button = ({ children, className, ...rest }: ButtonProps) => {
    return (
        <button className={`${className} px-6 py-3 rounded bg-secondary hover:bg-green-800 text-white font-semibold transition-colors`} {...rest}>{children}</button>
    )
}