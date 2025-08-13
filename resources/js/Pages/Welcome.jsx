import EnvioGratisHeader from '@/Components/EnviogratisHeader';
import LogoConVideo from '@/Components/LogoConVideo';
import { Head} from '@inertiajs/react';
import RectanguloLayout from "@/Layouts/RectanguloLayout";
import Porqueescoger from '@/Components/Porqueescoger';
import Productoscertificados from '@/Components/Productoscertificados';
import Clientes from '@/Components/ClientesSatisfechos';
import Comentarios from '@/Components/Comentarios';
import Corte from '@/Components/AcercaDelCorte';
import Contact from "@/Components/Contacto";

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
            <Comentarios/>
            </RectanguloLayout>

            <EnvioGratisHeader background='#152636'/>

            <RectanguloLayout background="#962b2b">
            <Corte/>
            </RectanguloLayout>

            <RectanguloLayout background="">
            <LogoConVideo/>
            </RectanguloLayout>

            
            <RectanguloLayout background="#962b2b">
            <Contact/>
            </RectanguloLayout>
            
        </>
    );
}
