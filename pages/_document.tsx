import React, {ReactElement} from "react";
import Document, {
  Html,
  Head,
  DocumentInitialProps,
  DocumentContext,
  NextScript,
  Main,
} from "next/document";

/**
 * A custom Document can update the <html> and <body> tags used to render a Page.
 * This file is only rendered on the server, so event handlers like onClick CANNOT BE used in _document.
 */
export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render(): ReactElement {
    return (
      <Html lang="pt-BR">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
