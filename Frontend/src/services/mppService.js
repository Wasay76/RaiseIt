// src/services/mppService.js
import axios from "axios";

const API_BASE_URL = "http://localhost:5004/api/mpps";  // still calls the /api/mpps endpoint

export async function getAllMPPs() {
  try {
    const res = await axios.get(`${API_BASE_URL}/getAllMPPs`);
    return res.data;  // array of MPP objects
  } catch (err) {
    console.error("getAllMPPs error:", err);
    throw err;
  }
}
