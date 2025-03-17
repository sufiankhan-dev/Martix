"use client";

import { Eye, ArrowRight, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const orders = [
  {
    id: "ORD-7652",
    customer: "John Smith",
    email: "john.smith@example.com",
    date: "2023-05-28",
    status: "Delivered",
    total: 129.99,
  },
  {
    id: "ORD-7651",
    customer: "Sarah Johnson",
    email: "sarah.j@example.com",
    date: "2023-05-27",
    status: "Processing",
    total: 89.99,
  },
  {
    id: "ORD-7650",
    customer: "Michael Brown",
    email: "m.brown@example.com",
    date: "2023-05-26",
    status: "Shipped",
    total: 149.99,
  },
  {
    id: "ORD-7649",
    customer: "Emily Wilson",
    email: "emily.w@example.com",
    date: "2023-05-25",
    status: "Delivered",
    total: 24.99,
  },
  {
    id: "ORD-7648",
    customer: "David Lee",
    email: "david.lee@example.com",
    date: "2023-05-24",
    status: "Canceled",
    total: 74.99,
  },
];

export function RecentOrdersTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          className="text-xs text-muted-foreground"
        >
          <ArrowUpDown className="mr-1 h-3 w-3" />
          Sort by Date
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-xs text-muted-foreground"
        >
          View All
          <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </div>
      <div className="rounded-md border">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-10 px-2 text-left align-middle font-medium">
                  Order
                </th>
                <th className="h-10 px-2 text-left align-middle font-medium">
                  Customer
                </th>
                <th className="h-10 px-2 text-left align-middle font-medium">
                  Status
                </th>
                <th className="h-10 px-2 text-right align-middle font-medium">
                  Total
                </th>
                <th className="h-10 w-[50px] px-2 align-middle"></th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                >
                  <td className="p-2 align-middle font-medium">{order.id}</td>
                  <td className="p-2 align-middle">
                    <div className="flex flex-col">
                      <span>{order.customer}</span>
                      <span className="text-xs text-muted-foreground">
                        {order.email}
                      </span>
                    </div>
                  </td>
                  <td className="p-2 align-middle">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="p-2 align-middle text-right">
                    ${order.total.toFixed(2)}
                  </td>
                  <td className="p-2 align-middle">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View order {order.id}</span>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const getVariant = (status: string) => {
    switch (status) {
      case "Delivered":
        return "success";
      case "Processing":
        return "warning";
      case "Shipped":
        return "info";
      case "Canceled":
        return "destructive";
      default:
        return "secondary";
    }
  };

  const getClassNames = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800 hover:bg-green-100/80";
      case "Processing":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80";
      case "Shipped":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100/80";
      case "Canceled":
        return "bg-red-100 text-red-800 hover:bg-red-100/80";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100/80";
    }
  };

  return (
    <Badge className={getClassNames(status)} variant="outline">
      {status}
    </Badge>
  );
}
