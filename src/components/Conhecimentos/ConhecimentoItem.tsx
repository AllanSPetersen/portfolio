import { ReactNode } from 'react';
import { ConhecimentoContainer } from './styles';

interface ConhecimentoProps {
    linguagen: string;
    icon: ReactNode;
}

export default function ConhecimentoItem({linguagen, icon}: ConhecimentoProps) {
    return (
        <ConhecimentoContainer>
            <p>{linguagen}</p>
            {icon}
        </ConhecimentoContainer>
    )
}