import { Head} from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    
    return (
        <>
            <Head title="Inicio Carrito"/>
            <div className='text-center text-green-500 text-3xl'>
                Hola Edgar aca veraz los avances del proyecto
            </div>

        </>
    );
}
