import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Te amo Duda!</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          body {
            margin: 0;
            padding: 16px;
            background-color: #f5f5f5;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          p {
            max-width: 100%;
            font-size: 16px;
            line-height: 1.6;
            color: #333;
            text-align: center;
            margin-bottom: 24px;
          }
          video {
            max-width: 100%;
            height: auto;
            width: 100%;
            border-radius: 8px;
            display: block;
            margin: 0 auto;
          }
        `}</style>
      </Head>

      <p>
        Desde o 9º ano, eu já sentia que era com você que eu queria viver tudo isso. Na época eu não sabia expressar direito, mas hoje eu entendo… sempre foi você. E o mais incrível é perceber que esse sonho já tá acontecendo, aos poucos, cada momento ao seu lado.
      </p>

      <video poster="/imagens/foto.jpeg" controls autoPlay loop>
        <source src="/midia/video.mp4" type="video/mp4" />
      </video>
    </>
  );
}
