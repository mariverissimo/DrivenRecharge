export type Recharge = {
  id: number;
  amount: number;
  createdAt: string;
};

export type CarrierSummary = {
  id: number;
  name: string;
  code: number;
};

export type PhoneSummary = {
  phone_id: number;
  number: string;
  name: string;
  description: string;
  carrier_id: number;
  carrier_name: string;
  carrier_code: number;
  recharges: Recharge[];
};
