import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/icon.png"></link>
                    <meta name="theme-color" content="#0F172A" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@100;200;300;400;500;600;700&family=Ubuntu+Condensed&display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;