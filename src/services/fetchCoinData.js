import axiosInstance from "../helpers/axiosinstance";

export async function fetchCoinData(page = 1, currency = "usd") {
  const perPage = 10;
  try {
    const response = await axiosInstance.get(
      `coins/markets?vs_currency=${currency}&per_page=${perPage}&page=${page}&order=market_cap_desc`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
