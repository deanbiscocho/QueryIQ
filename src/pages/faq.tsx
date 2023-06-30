import React from 'react';
import Header from '../components/Header'
import Head from 'next/head';


const FAQ = () => {
    return (
        <>
          <Head>
            <title>FAQ</title>
            <meta name="Frequently Asked Questions" content="Generated by QueryIQ" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="max-h-full w-screen min-w-full max-w-full bg-black">
            <Header />
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-bold text-white">FAQ</h1>
              <p className="mt-4 text-lg text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tristique sem ligula, non cursus mi malesuada ut. Quisque sed urna
                non metus accumsan posuere. Vestibulum sit amet lectus rutrum,
                tincidunt leo nec, volutpat metus. In venenatis, libero sit amet
                tristique pellentesque, arcu erat iaculis purus, ac sagittis turpis
                elit eu neque. Integer pellentesque arcu in consequat malesuada.
                Aliquam erat volutpat. Vestibulum posuere lacinia urna, ac luctus
                arcu blandit sed. Sed tempor, dolor ac pretium tristique, ligula
                orci ullamcorper lectus, sit amet tempus neque sem non est. Nulla
                facilisi. Aliquam mollis tristique diam, ut efficitur nulla lacinia
                ut.
              </p>
              <p className="mt-4 text-lg text-gray-300">
                Phasellus ullamcorper sagittis sapien, vel dapibus dolor facilisis
                et. Nulla malesuada felis non maximus lacinia. Phasellus sit amet
                lacus sed nisl aliquam consectetur. Nunc pretium ligula vitae lectus
                interdum, ut efficitur lectus iaculis. Morbi eget sapien sapien. Sed
                eleifend augue elit, ac scelerisque sem egestas sit amet. Sed
                finibus vehicula urna, ut eleifend dui venenatis sed. Aenean
                fringilla, urna id ullamcorper pellentesque, mauris felis tristique
                dolor, ut aliquam orci est sit amet purus. Ut malesuada sem non
                sagittis tincidunt. Vivamus vestibulum vehicula eros nec congue.
                Proin pellentesque elementum malesuada.
              </p>
            </div>
          </main>
        </>
      );
    };

export default FAQ;
