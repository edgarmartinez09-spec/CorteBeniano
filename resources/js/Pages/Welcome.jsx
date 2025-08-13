import EnvioGratisHeader from '@/Components/EnviogratisHeader';
import LogoConVideo from '@/Components/LogoConVideo';
import { Head} from '@inertiajs/react';
import RectanguloLayout from "@/Layouts/RectanguloLayout";
import Porqueescoger from '@/Components/Porqueescoger';
import Productoscertificados from '@/Components/Productoscertificados';
import Clientes from '@/Components/ClientesSatisfechos';

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

            <RectanguloLayout background="">
            <Productoscertificados/>
            </RectanguloLayout>
            
            <EnvioGratisHeader background='#152636'/>

            <RectanguloLayout background="#962b2b">
            <Clientes/>
            </RectanguloLayout>

            <RectanguloLayout background="">

            </RectanguloLayout>






            <RectanguloLayout background="#962b2b">
            <Productoscertificados/>
            </RectanguloLayout>
            
        </>
    );
}
