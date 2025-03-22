import { GetStaticPropsContext } from 'next';

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale || 'en';
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Home({ messages }: { messages: any }) {
  return (
    <div>
      <h1>{messages.greeting}</h1>
      <h1>{messages.description}</h1>
    </div>
  );
}
