import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import EditInvoiceFormSkeleton from '@/app/ui/invoices/edit-form-skeleton';
import { Suspense } from 'react';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            // href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Suspense fallback={<EditInvoiceFormSkeleton />}>
        <Form params={params} />
      </Suspense>
    </main>
  );
}
