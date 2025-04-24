import React, {PropsWithChildren} from "react";

// interface HeaderProps {
//     image: {
//         src: string;
//         alt: string;
//     }
// }

type HeaderProps = PropsWithChildren<{ image: { src: string; alt: string; } }>

const Header: React.FC<HeaderProps> = ({image, children}) => {
    return (
        <header>
            <img {...image}/>
            {children}
        </header>
    );
};

export {Header};