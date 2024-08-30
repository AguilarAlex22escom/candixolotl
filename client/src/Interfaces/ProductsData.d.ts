export default interface ProductsData {
  id: number;
  name: string;
  description: string;
  kind: string;
  brand: string;
  price: number;
  units: number;
  unit_grammage: number;
  image: string | null;
  serie: string;
}
