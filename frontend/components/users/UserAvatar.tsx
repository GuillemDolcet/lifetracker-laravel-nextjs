import Image from "next/image";

export default function UserAvatar({avatarBase64}) {
    if (!avatarBase64) {
        return <span className="avatar avatar-sm me-2"><Image src="/images/default-avatar.webp" width="24" height="24" alt="user-avatar" /></span>;
    }

    return <span className="avatar avatar-sm me-2" style={{backgroundImage: `url("data:image/png;base64,${avatarBase64}")`}}></span>;
}
