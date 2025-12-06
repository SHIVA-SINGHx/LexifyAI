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


const History = async () => {
  const { userId } = auth();

  if (!userId) {
    return (
      <div className="mx-5 py-6">
        <div className="bg-white p-6 rounded shadow">
          <p className="text-red-600">Please sign in to view your history.</p>
        </div>
      </div>
    );
  }

  // Fetch user's generated content from database
  const history = await db.aIOutput.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-white rounded">
        <h2 className="font-medium text-lg">Output History</h2>
        <p className="text-sm text-gray-500">Total outputs: {history.length}</p>
      </div>
      <div className="mt-5 py-6 px-4 bg-white rounded">
        <Table>
          <TableCaption>A list of your AI output history.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Template</TableHead>
              <TableHead className="w-[250px]">Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.length > 0 ? (
              history.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.templateUsed}</TableCell>
                  <TableCell className="truncate">{item.title}</TableCell>
                  <TableCell className="truncate max-w-[300px]">
                    {item.description?.substring(0, 100)}...
                  </TableCell>
                  <TableCell className="text-right">
                    {(new Date(item.createdAt), "MMM dd, yyyy")}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-gray-500 py-8">
                  No history yet. Start generating content!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default History;