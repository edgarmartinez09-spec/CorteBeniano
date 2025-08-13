import EnvioGratisHeader from '@/Components/EnviogratisHeader';
import LogoConVideo from '@/Components/LogoConVideo';
import { Head} from '@inertiajs/react';
import RectanguloLayout from "@/Layouts/RectanguloLayout";
import Porqueescoger from '@/Components/Porqueescoger';

export default function Welcome() {

    return (
        <>
            <Head title="Corte Beniano"/>

            <EnvioGratisHeader background="#962b2b"/>

            <RectanguloLayout background="#f0efef">
            <LogoConVideo/>
            </RectanguloLayout>
            
            <RectanguloLayout background="#962b2b">
            <Porqueescoger/>
            </RectanguloLayout>
        </>
    );
}
