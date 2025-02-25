import { User } from '@/services';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table.tsx';
import { formatDate, formatLastLogin } from './date.ts';

interface UserTableProps {
  data: User[] | null;
}

export const UserTable = (props: UserTableProps) => {
  const { data } = props;

  if (!data) {
    return <div className='mt-4 text-center text-red-500'>Ошибка: Данные не найдены!</div>;
  }

  return (
    <Table className='font-sf'>
      <TableHeader>
        <TableRow>
          <TableHead className='custom-table-head rounded-tl-2xl'>
            <div className='custom-table-head-text w-14'>ID</div>
          </TableHead>
          <TableHead className='custom-table-head'>
            <div className='custom-table-head-text w-32'>First Name</div>
          </TableHead>
          <TableHead className='custom-table-head'>
            <div className='custom-table-head-text w-32'>Last Name</div>
          </TableHead>
          <TableHead className='custom-table-head'>
            <div className='custom-table-head-text w-24'>Gender</div>
          </TableHead>
          <TableHead className='custom-table-head'>
            <div className='custom-table-head-text w-32'>Date of Birth</div>
          </TableHead>
          <TableHead className='custom-table-head'>
            <div className='custom-table-head-text w-48'>Email</div>
          </TableHead>
          <TableHead className='custom-table-head'>
            <div className='custom-table-head-text w-32'>Phone</div>
          </TableHead>
          <TableHead className='custom-table-head'>
            <div className='custom-table-head-text w-40'>Registration Channel</div>
          </TableHead>
          <TableHead className='custom-table-head'>
            <div className='custom-table-head-text w-24'>Verified</div>
          </TableHead>
          <TableHead className='custom-table-head'>
            <div className='custom-table-head-text w-24'>Status</div>
          </TableHead>
          <TableHead className='custom-table-head'>
            <div className='custom-table-head-text w-48'>Last Login</div>
          </TableHead>
          <TableHead className='custom-table-head'>
            <div className='custom-table-head-text w-32'>User Role</div>
          </TableHead>
          <TableHead className='custom-table-head'>
            <div className='custom-table-head-text w-36'>Membership Level</div>
          </TableHead>
          <TableHead className='custom-table-head'>
            <div className='custom-table-head-text w-36'>Preferred Language</div>
          </TableHead>
          <TableHead className='custom-table-head rounded-tr-2xl'>
            <div className='custom-table-head-text w-20'>Newsletter Subscription</div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((user) => (
          <TableRow key={user.id}>
            <TableCell className='custom-table-cell'>
              <div className='custom-table-cell-text w-14'>{user.id}</div>
            </TableCell>
            <TableCell className='custom-table-cell'>
              <div className='custom-table-cell-text w-32'>{user.firstName}</div>
            </TableCell>
            <TableCell className='custom-table-cell'>
              <div className='custom-table-cell-text w-32'>{user.lastName}</div>
            </TableCell>
            <TableCell className='custom-table-cell'>
              <div className='custom-table-cell-text w-24'> {user.gender}</div>
            </TableCell>
            <TableCell className='custom-table-cell'>
              <div className='custom-table-cell-text w-32'> {formatDate(user.dateOfBirth)}</div>
            </TableCell>
            <TableCell className='custom-table-cell'>
              <div className='custom-table-cell-text w-48'> {user.email}</div>
            </TableCell>
            <TableCell className='custom-table-cell'>
              <div className='custom-table-cell-text w-32'> {user.phone}</div>
            </TableCell>
            <TableCell className='custom-table-cell'>
              <div className='custom-table-cell-text w-40'> {user.registrationChannel}</div>
            </TableCell>
            <TableCell className='custom-table-cell'>
              <div className='custom-table-cell-text w-24'> {user.isVerified ? 'Yes' : 'No'}</div>
            </TableCell>
            <TableCell className='custom-table-cell'>
              <div className='custom-table-cell-text w-24'> {user.status}</div>
            </TableCell>
            <TableCell className='custom-table-cell'>
              <div className='custom-table-cell-text w-48'> {formatLastLogin(user.lastLogin)}</div>
            </TableCell>
            <TableCell className='custom-table-cell'>
              <div className='custom-table-cell-text w-32'> {user.userRole}</div>
            </TableCell>
            <TableCell className='custom-table-cell'>
              <div className='custom-table-cell-text w-36'> {user.membershipLevel}</div>
            </TableCell>
            <TableCell className='custom-table-cell'>
              <div className='custom-table-cell-text w-36'> {user.preferredLanguage}</div>
            </TableCell>
            <TableCell className='custom-table-cell'>
              <div className='custom-table-cell-text w-20'>
                {user.newsletterSubscription ? 'Yes' : 'No'}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
