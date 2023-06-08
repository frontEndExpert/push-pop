import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = 'Ordered List implemented with linked list';


const Head = (props: any) => (
  <NextHead>
    <meta charSet="UTF-8" />

    <title>{props.title || ''}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="author" content="Aylon Spigel" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head;
