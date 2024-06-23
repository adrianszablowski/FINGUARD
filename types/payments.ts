type Payment = {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $id: string;
  $permissions: any[];
  $tenant: string;
  $updatedAt: string;
  amount: number;
  dueDate: string;
  name: string;
  recurrenceEndDate: string;
  recurrenceInterval: string;
  recurring: boolean;
  paid: boolean;
  currency: string;
};
