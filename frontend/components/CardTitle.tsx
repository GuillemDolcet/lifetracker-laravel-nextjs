const CardTitle = ({ className, children, ...props }) => (
    <h2
        className={`${className} card-title text-center`}
        {...props}>
        {children}
    </h2>
)

export default CardTitle
