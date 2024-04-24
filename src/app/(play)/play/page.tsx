import { KlaviyoForm } from '@/components/klaviyo/form';
import { SimpleFormTest } from '@/components/klaviyo/form/sample';

export default async function Play() {
  return (
    <section className='flex h-screen items-center justify-center'>
      <div className='z-50 flex flex-col items-center space-y-4'>
        <SimpleFormTest />

        <KlaviyoForm />
      </div>
    </section>
  );
}
