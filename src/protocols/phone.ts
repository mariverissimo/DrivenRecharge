export type Phone = {
  id: number;
  number: string;
  name: string;
  description: string;
  document: string;
  carrier_id: number;
};

export type PhoneInput = Omit<Phone, "id">;
