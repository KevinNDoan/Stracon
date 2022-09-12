import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <div id="__portal"></div>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}