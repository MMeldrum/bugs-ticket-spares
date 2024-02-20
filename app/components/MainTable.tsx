import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';

export default function MainTable() {
  return (

    <div className="overflow-x-auto">
      <Table striped hoverable>
        <TableHead>
          <TableHeadCell>Ticket Owner</TableHeadCell>
          <TableHeadCell>Contact Details</TableHeadCell>
          <TableHeadCell># of Tickets</TableHeadCell>
          <TableHeadCell>Concert City</TableHeadCell>
          <TableHeadCell>Seats or Standing</TableHeadCell>
          <TableHeadCell>Section / Row / Seat #</TableHeadCell>
          <TableHeadCell>Price Wanted (FV or less)</TableHeadCell>
          <TableHeadCell>Ticket received by</TableHeadCell>
          <TableHeadCell>Contact Details</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Eddie Vedder
            </TableCell>
            <TableCell>ed@pearljam.com</TableCell>
            <TableCell>1</TableCell>
            <TableCell>Dublin</TableCell>
            <TableCell>Standing</TableCell>
            <TableCell>On stage</TableCell>
            <TableCell>€1</TableCell>
            <TableCell>Scott Stapp</TableCell>
            <TableCell>scott@creed.com</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Jeff Ament
            </TableCell>
            <TableCell>jeff@pearljam.com</TableCell>
            <TableCell>1</TableCell>
            <TableCell>London</TableCell>
            <TableCell>Standing</TableCell>
            <TableCell>On stage</TableCell>
            <TableCell>£1</TableCell>
            <TableCell>Chad Kroeger</TableCell>
            <TableCell>chad@nickelback.com</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Stone Gossard
            </TableCell>
            <TableCell>stone@pearljam.com</TableCell>
            <TableCell>1</TableCell>
            <TableCell>Berlin</TableCell>
            <TableCell>Standing</TableCell>
            <TableCell>On stage</TableCell>
            <TableCell>€1</TableCell>
            <TableCell>Gavin Rossdale</TableCell>
            <TableCell>gavin@bush.com</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}