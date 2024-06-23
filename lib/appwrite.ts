import { Account, Client, Databases } from "react-native-appwrite";

export const appwrite = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.codwave.finguard",
  projectId: "6676cfe8001deb09a38e",
  databaseId: "6676d10c001a19ba0541",
  userCollectionId: "6677fb4200222733be98",
  paymentsCollectionId: "6678380c00379fdc9d11",
};

const client = new Client();

client
  .setEndpoint(appwrite.endpoint)
  .setProject(appwrite.projectId)
  .setPlatform(appwrite.platform);

const account = new Account(client);
const databases = new Databases(client);

export const getCurrentMonthPayments = async () => {
  try {
    const response = await databases.listDocuments(
      appwrite.databaseId,
      appwrite.paymentsCollectionId,
    );

    return response.documents;
  } catch (error: any) {
    throw new Error(error);
  }
};
