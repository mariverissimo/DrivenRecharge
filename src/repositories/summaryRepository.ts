import { db } from "../database/db";

export async function findPhonesWithRecharges(document: string) {
  const result = await db.query(
    `
    SELECT
      p.id AS phone_id,
      p.number,
      p.name,
      p.description,
      c.id AS carrier_id,
      c.name AS carrier_name,
      c.code AS carrier_code,
      COALESCE(
        json_agg(
          json_build_object(
            'id', r.id,
            'amount', r.amount,
            'createdAt', r.created_at
          )
        ) FILTER (WHERE r.id IS NOT NULL),
        '[]'
      ) AS recharges
    FROM phones p
    JOIN carriers c ON p.carrier_id = c.id
    LEFT JOIN recharges r ON r.phone_id = p.id
    WHERE p.document = $1
    GROUP BY p.id, c.id
    `,
    [document]
  );

  return result.rows;
}
