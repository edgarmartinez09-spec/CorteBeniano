import EnvioGratisHeader from '@/Components/EnviogratisHeader';
import LogoConVideo from '@/Components/LogoConVideo';
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
            <EnvioGratisHeader background="#962b2b" />



            <RectanguloLayout background="#f0efef">
                <LogoConVideo
                    logoSrc="https://res.cloudinary.com/dnbklbswg/image/upload/v1755121029/logo_esb5wx.png"
                    videoSrc="https://res.cloudinary.com/dnbklbswg/video/upload/v1755139271/banner-video_kux6gr.mp4"
                >
                    <p className="text-lg sm:text-xl md:text-[30px] font-montserrat text-gray-800 leading-snug sm:leading-tight max-w-[600px] mx-auto">
                        Compra tus productos cárnicos desde<br />
                        casa de manera sencilla, rápida y segura<br />
                        en <span className="font-bold">Cochabamba, Bolivia.</span>
                    </p>
                </LogoConVideo>
            </RectanguloLayout>


            <RectanguloLayout background="#962b2b">
                <Porqueescoger />
            </RectanguloLayout>

            <RectanguloLayout background="">
                <Productoscertificados />
            </RectanguloLayout>

            <EnvioGratisHeader background='#152636' />

            <RectanguloLayout background="#962b2b">
                <Clientes />
            </RectanguloLayout>

            <RectanguloLayout background="">
                <Comentarios />
            </RectanguloLayout>

            <EnvioGratisHeader background='#152636' />

            <RectanguloLayout background="#962b2b">
                <Corte />
            </RectanguloLayout>

            <RectanguloLayout background="">
                <LogoConVideo logoSrc="https://res.cloudinary.com/dnbklbswg/image/upload/v1755121029/logo_esb5wx.png"
                              videoSrc="https://youtu.be/OA3KsYPhZbw?si=EuquYF7lgHJGsYuG">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug sm:leading-tight max-w-[600px] mx-auto">
                        ¡LA CARNE MÁS FRESCA A SOLO UN CLIC DE DISTANCIA!
                    </h2>

                    <ul className="text-lg sm:text-xl md:text-2xl text-gray-800 list-disc list-inside font-montserrat space-y-2 max-w-[600px] mx-auto text-left">
                        <li>Compra 100% segura <strong>¡Paga al recibir!</strong></li>
                        <li>Descuento EXCLUSIVO por comprar hoy: <strong>10% OFF</strong></li>
                        <li>Delivery <strong>GRATIS</strong></li>
                        <li>Promoción solo para las primeras <strong>50 personas</strong></li>
                    </ul>
                </LogoConVideo>

            </RectanguloLayout>


            <RectanguloLayout background="#962b2b">
                <Contact />
            </RectanguloLayout>

        </>
    );
}
