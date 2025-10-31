import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
// import { format } from "date-fns";

const History = async () => {

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-white rounded">
        <h2 className="font-medium">Output History</h2>
      </div>
      <div className="mt-5 py-6 px-4 bg-white rounded">
        <Table>
          <TableCaption>A list of your ai output history.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Template</TableHead>
              <TableHead className="w-[250px]">Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Created At</TableHead>
            </TableRow>
          </TableHeader>

        </Table>
      </div>
    </div>
  );
};

export default History;