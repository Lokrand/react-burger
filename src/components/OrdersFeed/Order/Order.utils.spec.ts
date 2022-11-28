import { faker } from "@faker-js/faker";
import { getTotalPrice } from "./Order.utils";

const fixtureIngredients = [
  {
    _id: "52e965a7-01e0-4ec4-8c54-852f5f397747",
    image_mobile:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1193.jpg",
    price: 8844,
  },
  {
    _id: "1c00b37f-744c-4f14-992c-971736cd57a7",
    image_mobile:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/488.jpg",
    price: 7322,
  },
  {
    _id: "1e2213bc-5685-4a3d-b7b1-9ae6fc01d182",
    image_mobile:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1100.jpg",
    price: 31780,
  },
];

const fixtureSelectedIds = fixtureIngredients.map((el) => el._id);

test("getTotalPrice", () => {
  expect(getTotalPrice(fixtureSelectedIds, fixtureIngredients)).toEqual(
    8844 + 7322 + 31780
  );
});
test("getTotalPrice С нескольники одинаковыми id", () => {
  expect(getTotalPrice([...fixtureSelectedIds, ...fixtureSelectedIds], fixtureIngredients)).toEqual(
    8844 + 7322 + 31780 + 8844 + 7322 + 31780
  );
});
