import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

interface Props {
    titulo: string;
    path: string;
}

export default function NavLink({ titulo, path}: Props) {
    const router = useRouter();

    const isActive = router.pathname === path;
    return (
        <NavLinkContainer isActive={isActive}>
            <Link href={path}>
                {titulo}
            </Link>
        </NavLinkContainer>
    );
}