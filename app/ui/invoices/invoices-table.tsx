import { Suspense } from 'react';
import KeyedInvoicesTable from './table';
import { InvoicesTableSkeleton } from '../skeletons';

const InvoicesTable = async ({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) => {
  const { query = '', page = '1' } = (await searchParams) || {};
  const currentPage = Number(page);
  const key = `${query}:${currentPage}`;

  return (
    <Suspense key={key} fallback={<InvoicesTableSkeleton />}>
      <KeyedInvoicesTable query={query} currentPage={currentPage} />
    </Suspense>
  );
};

export default InvoicesTable;
