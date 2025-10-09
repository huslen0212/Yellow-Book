import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const places = [
    {
      name: "Central Library",
      foundedYear: 1950,
      imageUrl: "https://example.com/library.jpg",
      description: "Main public library with extensive book collections and reading areas.",
      location: "Ulaanbaatar, Mongolia",
    },
    {
      name: "Gandan Monastery",
      foundedYear: 1835,
      imageUrl: "https://example.com/gandan.jpg",
      description: "Largest and most important Buddhist monastery in Mongolia.",
      location: "Ulaanbaatar, Mongolia",
    },
    {
      name: "Bogd Khan Palace Museum",
      foundedYear: 1893,
      imageUrl: "https://example.com/bogd_palace.jpg",
      description: "Former residence of Bogd Khan, now a museum showcasing Mongolian history.",
      location: "Ulaanbaatar, Mongolia",
    },
    {
      name: "Sukhbaatar Square",
      foundedYear: 1946,
      imageUrl: "https://example.com/sukhbaatar_square.jpg",
      description: "Central square in Ulaanbaatar with monuments and government buildings.",
      location: "Ulaanbaatar, Mongolia",
    },
    {
      name: "National Museum of Mongolia",
      foundedYear: 1924,
      imageUrl: "https://example.com/national_museum.jpg",
      description: "Museum displaying Mongolia's cultural and historical heritage.",
      location: "Ulaanbaatar, Mongolia",
    },
  ];

  for (const place of places) {
    await prisma.place.create({ data: place });
  }

  console.log("Seed finished.");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
