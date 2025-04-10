// db/seed.ts
import { db, Domains } from 'astro:db';
import { v4 as uuidv4 } from 'uuid'; // Добавьте этот импорт

function generateRandomDomain(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const nameLength = Math.floor(Math.random() * 10) + 5;
    const tlds = ['com', 'net', 'org', 'io', 'dev', 'app', 'blog', 'site'];

    let domain = '';
    for (let i = 0; i < nameLength; i++) {
        domain += chars[Math.floor(Math.random() * chars.length)];
    }

    return `${domain}.${tlds[Math.floor(Math.random() * tlds.length)]}`;
}

function generateUniqueDomains(count: number): Set<string> {
    const domains = new Set<string>();
    while (domains.size < count) {
        domains.add(generateRandomDomain());
    }
    return domains;
}

export default async function seed() {
    const domains = generateUniqueDomains(20);

    await db.insert(Domains).values(
        Array.from(domains).map(domain => ({
            id: uuidv4(), // Используем uuid вместо crypto
            domain,
        }))
    );
}