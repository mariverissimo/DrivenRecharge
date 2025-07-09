export type Recharge = {
  id: number;
  phone_id: number;
  amount: number;
  created_at: string;
};

export type RechargeInsertData = Omit<Recharge, "id" | "created_at">;
