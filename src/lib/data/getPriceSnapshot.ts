import raw from "@/data/mock/priceSnapshot.json";
import { PriceSnapshot } from "@/types/price";

export async function getPriceSnapshot(): Promise<PriceSnapshot> {
  return raw as PriceSnapshot;
}
