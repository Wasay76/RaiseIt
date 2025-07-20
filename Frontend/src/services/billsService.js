// billsService.js
import axios from "axios";

// Use the env‑var injected at build time.
// Make sure you’ve set VITE_BACKEND_URL in Railway’s Frontend → Variables!
const API_BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/api/bills`;

export async function getAllBills(testMode = false) {
  try {
    const response = await axios.get(`${API_BASE_URL}/getAllBills`, {
      params: { testMode },
    });
    return response.data; // array of bills
  } catch (error) {
    console.error("getAllBills error:", error);
    throw error;
  }
}
export async function getBillsByBillNumber(billNumber, testMode = false) {
  try {
    const response = await axios.get(`${API_BASE_URL}/getBillsByBillNumber`, {
      params: { billNumber, testMode },
    });
    return response.data;
  } catch (error) {
    console.error("getBillsByBillNumber error:", error);
    throw error;
  }
}

export async function getBillsByParliament(session, testMode = false) {
  try {
    const response = await axios.get(`${API_BASE_URL}/getBillsByParliament`, {
      params: { session, testMode },
    });
    return response.data;
  } catch (error) {
    console.error("getBillsByParliament error:", error);
    throw error;
  }
}

export async function getBillObjectId(billNumber, session, testMode = false) {
  try {
    const response = await axios.get(`${API_BASE_URL}/getBillObjectId`, {
      params: { billNumber, session, testMode },
    });
    return response.data;
  } catch (error) {
    console.error("getBillObjectId error:", error);
    throw error;
  }
}

export async function getBillsByStatus(status, testMode = false) {
  try {
    const response = await axios.get(`${API_BASE_URL}/getBillsByStatus`, {
      params: { status, testMode },
    });
    return response.data;
  } catch (error) {
    console.error("getBillsByStatus error:", error);
    throw error;
  }
}

export async function getBillsBySponsor(MPP_Name, testMode = false) {
  try {
    const response = await axios.get(`${API_BASE_URL}/getBillsBySponsor`, {
      params: { MPP_Name, testMode },
    });
    return response.data;
  } catch (error) {
    console.error("getBillsBySponsor error:", error);
    throw error;
  }
}
