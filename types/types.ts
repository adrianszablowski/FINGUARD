type SignUpCredentials = {
  username: string;
  email: string;
  password: string;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type User = {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $id: string;
  $updatedAt: string;
};
