import { getDaysInMonth, getMonth, getYear } from "date-fns";
import { router } from "expo-router";
import { Account, Client, Databases, ID, Query } from "react-native-appwrite";

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

export const getCurrentMonthPayments = async (paidIndex: number) => {
  const year = getYear(new Date());
  const month = getMonth(new Date()) + 1;
  const days = getDaysInMonth(new Date()) + 1;

  try {
    const response = await databases.listDocuments(
      appwrite.databaseId,
      appwrite.paymentsCollectionId,
      [
        Query.greaterThan(
          "dueDate",
          `${year}-${month < 10 && "0"}${month}-01T00:00:00.000+00:00`,
        ),
        Query.lessThan(
          "dueDate",
          `${year}-${month < 10 && "0"}${month}-${days}T00:00:00.000+00:00`,
        ),
        Query.equal("paid", paidIndex === 0 ? true : false),
      ],
    );

    return response.documents;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getSpecificMonthPayments = async (monthPlus: number) => {
  const year = getYear(new Date());
  const month = getMonth(new Date()) + monthPlus;
  const days = getDaysInMonth(new Date()) + 1;

  try {
    const response = await databases.listDocuments(
      appwrite.databaseId,
      appwrite.paymentsCollectionId,
      [
        Query.greaterThan(
          "dueDate",
          `${year}-${month < 10 && "0"}${month}-01T00:00:00.000+00:00`,
        ),
        Query.lessThan(
          "dueDate",
          `${year}-${month < 10 && "0"}${month}-${days}T00:00:00.000+00:00`,
        ),
      ],
    );

    return response.documents;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const setStatusOfPayment = async (
  paymentId: string,
  paidStatus: boolean,
) => {
  try {
    await databases.updateDocument(
      appwrite.databaseId,
      appwrite.paymentsCollectionId,
      paymentId,
      { paid: paidStatus },
    );
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createPayment = async (data: CreatePayment) => {
  try {
    await databases.createDocument(
      appwrite.databaseId,
      appwrite.paymentsCollectionId,
      ID.unique(),
      !data.recurring
        ? {
            name: data.name,
            amount: +data.amount,
            dueDate: data.dueDate,
          }
        : {
            name: data.name,
            amount: +data.amount,
            dueDate: data.dueDate,
            recurring: data.recurring,
            recurrenceInterval: data.recurrenceInterval,
            recurrenceEndDate: data.recurrenceEndDate,
          },
    );

    router.push("/home");
  } catch (error: any) {
    throw new Error(error);
  }
};
