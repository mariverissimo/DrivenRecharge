import * as summaryRepository from "../repositories/summaryRepository";

export async function getSummary(document: string) {
  const phones = await summaryRepository.findPhonesWithRecharges(document);

  const formattedPhones = phones.map((p) => ({
    id: p.phone_id,
    number: p.number,
    name: p.name,
    description: p.description,
    carrier: {
      id: p.carrier_id,
      name: p.carrier_name,
      code: p.carrier_code
    },
    recharges: p.recharges
  }));

  return {
    document,
    phones: formattedPhones
  };
}
