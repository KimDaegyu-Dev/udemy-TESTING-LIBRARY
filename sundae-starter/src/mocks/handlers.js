import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:3030/scoops", () => {
    // JSON으로 stringify 할 필요 없음
    return HttpResponse.json([
      { name: "Chocolate", imagePath: "/images/chocolate.png" },
      { name: "Vanilla", imagePath: "/images/vanilla.png" },
      { name: "Strawberry", imagePath: "/images/strawberry.png" },
    ]);
  }),
  http.get("http://localhost:3030/toppings", () => {
    // JSON으로 stringify 할 필요 없음
    return HttpResponse.json([
      { name: "Cherries", imagePath: "/images/cherries.png" },
      { name: "M&Ms", imagePath: "/images/m-and-ms.png" },
      { name: "Hot fudge", imagePath: "/images/hot-fudge.png" },
    ]);
  }),
];
