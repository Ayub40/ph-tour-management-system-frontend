import { DeleteConfirmation } from "@/components/DeleteConfirmation";
import { AddDivisionModal } from "@/components/modules/Admin/Division/AddDivisionModal";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetDivisionsQuery, useRemoveDivisionMutation } from "@/redux/features/division/division.api";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function AddDivision() {
    const { data } = useGetDivisionsQuery(undefined);
    console.log(data);
    const [removeDivision] = useRemoveDivisionMutation();

    const handleRemoveDivision = async (divisionId: string) => {
        const toastId = toast.loading("Removing...");
        try {
            const res = await removeDivision(divisionId).unwrap();

            if (res.success) {
                toast.success("Removed", { id: toastId });
            }
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <div>
            <h1 className="mb-1.5">This is AddDivision Component</h1>
            <AddDivisionModal />
            <div className="border border-muted rounded-md mt-3">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.data?.map((item: { _id: string; name: string }) => (
                            <TableRow>
                                <TableCell className="font-medium w-full">
                                    {item?.name}
                                </TableCell>
                                <TableCell>
                                    <DeleteConfirmation
                                        onConfirm={() => handleRemoveDivision(item._id)}
                                    >
                                        <Button size="sm">
                                            <Trash2 />
                                        </Button>
                                    </DeleteConfirmation>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
