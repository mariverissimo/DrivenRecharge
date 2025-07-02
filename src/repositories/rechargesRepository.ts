import { db } from "../database/db";
import { RechargeInsertData } from "../protocols/rechargeProtocol";

export async function create(data: RechargeInsertData) {
  const result = await db.query(
    `
    INSERT INTO recharges (phone_id, amount)
    VALUES ($1, $2)
    RETURNING *
    `,
    [data.phone_id, data.amount]
  );
  return result.rows[0];
}

export async function findByNumber(number: string) {
  const result = await db.query(
    `
    SELECT r.*
    FROM recharges r
    JOIN phones p ON r.phone_id = p.id
    WHERE p.number = $1
    ORDER BY r.created_at DESC
    `,
    [number]
  );
  return result.rows;
}
