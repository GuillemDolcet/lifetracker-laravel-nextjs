import Image from "next/image";

const ApplicationLogo = ({ width = 100, height = 100, ...props }) => (
    <Image src="/logo.png" width={width} height={height} alt="mail logo" {...props} />
);

export default ApplicationLogo;
