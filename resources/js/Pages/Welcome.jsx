import EnvioGratisHeader from '@/Components/EnviogratisHeader';
import LogoConVideo from '@/Components/LogoConVideo';
import { Head} from '@inertiajs/react';

export default function Welcome() {
    
    return (
        <>
            <Head title="Corte Beniano"/>
            <EnvioGratisHeader background="#962b2b"/>
            <LogoConVideo/>
        </>
    );
}
