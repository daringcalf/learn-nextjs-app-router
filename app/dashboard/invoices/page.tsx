import Search from '@/app/ui/search';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import InvoicesTable from '@/app/ui/invoices/invoices-table';
import InvoicesPagination from '@/app/ui/invoices/invoices-pagination';

export default async function Page(
  /* NOSONAR */ {
    searchParams,
  }: {
    searchParams?: Promise<{
      query?: string;
      page?: string;
    }>;
  },
) {
  return (
    <div className='w-full'>
      <div className='flex w-full items-center justify-between'>
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
        <Suspense>
          <Search placeholder='Search invoices...' />
        </Suspense>

        <CreateInvoice />
      </div>
      <Suspense>
        <InvoicesTable searchParams={searchParams} />
      </Suspense>
      <div className='mt-5 flex w-full justify-center'>
        <Suspense>
          <InvoicesPagination searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
