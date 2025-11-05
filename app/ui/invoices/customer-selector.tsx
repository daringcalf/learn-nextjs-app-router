import { fetchCustomers } from '@/app/lib/data';
import { CustomerField } from '@/app/lib/definitions';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import postgres from 'postgres';

export async function CustomerSelector(
  /* NOSONAR */ {
    customerId,
    customers,
  }: {
    customerId?: string;
    customers?: postgres.RowList<CustomerField[]>;
  },
) {
  customers ??= await fetchCustomers();

  return (
    <div className='mb-4'>
      <label htmlFor='customer' className='mb-2 block text-sm font-medium'>
        Choose customer
      </label>
      <div className='relative'>
        <select
          id='customer'
          name='customerId'
          className='peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
          defaultValue={customerId || ''}
        >
          <option value='' disabled>
            Select a customer
          </option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>
        <UserCircleIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500' />
      </div>
    </div>
  );
}

export function CustomerSelectorSkeleton() {
  return (
    <div className='mb-4'>
      <label
        htmlFor='customer'
        className='mb-2 block text-sm font-medium text-gray-400'
      >
        Choose customer
      </label>
      <div className='relative'>
        <div className='peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 bg-gray-50 animate-pulse'>
          <span className='text-gray-400'>Loading...</span>
        </div>
        <UserCircleIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400' />
      </div>
    </div>
  );
}
