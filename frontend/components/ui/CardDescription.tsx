const CardDescription = ({ className, children, ...props }) => (
    <p
        className={`${className} text-secondary`}
        {...props}>
        {children}
    </p>
)

export default CardDescription
