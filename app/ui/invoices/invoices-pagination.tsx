import { fetchInvoicesPages } from '@/app/lib/data';
import Pagination from './pagination';

const InvoicesPagination = async ({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string }>;
}) => {
  const { query = '' } = (await searchParams) || {};
  const totalPages = await fetchInvoicesPages(query);

  return <Pagination totalPages={totalPages} />;
};

export default InvoicesPagination;
