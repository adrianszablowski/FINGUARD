import { getDaysInMonth, getMonth, getYear } from "date-fns";
import { router } from "expo-router";
import { Account, Client, Databases, ID, Query } from "react-native-appwrite";
import { filter, replace } from "lodash";

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

  try {
    const response = await databases.listDocuments(
      appwrite.databaseId,
      appwrite.paymentsCollectionId,
      [Query.equal("paid", paidIndex === 0 ? true : false)],
    );

    const result = filter(response.documents, function (data: Payment) {
      return (
        data.dueDate >
          `${year}-${month < 10 && "0"}${month}-00T00:00:00.000+00:00` &&
        data.dueDate <
          `${year}-${month < 10 && "0"}${month}-32T00:00:00.000+00:00`
      );
    });

    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getSpecificMonthPayments = async (monthPlus: number) => {
  const year = getYear(new Date());
  const month = getMonth(new Date()) + monthPlus;

  try {
    const response = await databases.listDocuments(
      appwrite.databaseId,
      appwrite.paymentsCollectionId,
    );

    const result = filter(response.documents, function (data: Payment) {
      return (
        data.dueDate >
          `${year}-${month < 10 && "0"}${month}-00T00:00:00.000+00:00` &&
        data.dueDate <
          `${year}-${month < 10 && "0"}${month}-32T00:00:00.000+00:00`
      );
    });

    return result;
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
  const convertedAmount = replace(data.amount, /,/g, ".");

  try {
    await databases.createDocument(
      appwrite.databaseId,
      appwrite.paymentsCollectionId,
      ID.unique(),
      !data.recurring
        ? {
            name: data.name,
            amount: +convertedAmount,
            dueDate: data.dueDate,
          }
        : {
            name: data.name,
            amount: +convertedAmount,
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

export const editPayment = async (documentId: string, data: CreatePayment) => {
  const convertedAmount = replace(data.amount, /,/g, ".");

  try {
    await databases.updateDocument(
      appwrite.databaseId,
      appwrite.paymentsCollectionId,
      documentId,
      !data.recurring
        ? {
            name: data.name,
            amount: +convertedAmount,
            dueDate: data.dueDate,
          }
        : {
            name: data.name,
            amount: +convertedAmount,
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
