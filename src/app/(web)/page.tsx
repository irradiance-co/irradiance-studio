import { Welcome } from '@/components/welcome';

export default async function Home() {
  return (
    <main className='mx-auto max-w-7xl px-6 lg:px-16'>
      <section className='mb-16 mt-20 flex flex-col items-start justify-between gap-x-12 lg:mt-32 xl:flex-row xl:items-center xl:justify-center'>
        <Welcome />
      </section>
    </main>
  );
}
