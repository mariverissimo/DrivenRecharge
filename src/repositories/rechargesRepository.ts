import { db } from "../database/db";
import { Recharge, RechargeInsertData } from "../protocols/rechargeProtocol";

export async function create(data: RechargeInsertData): Promise<Recharge> {
  const result = await db.query<Recharge>(
    `
    INSERT INTO recharges (phone_id, amount)
    VALUES ($1, $2)
    RETURNING *;
    `,
    [data.phone_id, data.amount]
  );
  return result.rows[0];
}

export async function findByNumber(number: string): Promise<Recharge[]> {
  const result = await db.query<Recharge>(
    `
    SELECT r.*
    FROM recharges r
    JOIN phones p ON r.phone_id = p.id
    WHERE p.number = $1
    ORDER BY r.created_at DESC;
    `,
    [number]
  );
  return result.rows;
}
