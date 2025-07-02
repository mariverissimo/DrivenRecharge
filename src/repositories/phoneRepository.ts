import { db } from "../database/db";
import { Phone } from "../protocols/phone";

export async function insertPhone(phone: Omit<Phone, "id">) {
  const { number, name, description, document, carrier_id } = phone;
  const result = await db.query(
    `INSERT INTO phones (number, name, description, document, carrier_id) 
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [number, name, description, document, carrier_id]
  );
  return result.rows[0];
}

export async function findPhonesByDocument(document: string) {
  const result = await db.query(`SELECT * FROM phones WHERE document = $1`, [document]);
  return result.rows;
}

export async function findPhoneByNumber(number: string) {
  const result = await db.query(`SELECT * FROM phones WHERE number = $1`, [number]);
  return result.rows[0];
}

export async function countPhonesByDocument(document: string) {
  const result = await db.query(`SELECT COUNT(*) FROM phones WHERE document = $1`, [document]);
  return Number(result.rows[0].count);
}
