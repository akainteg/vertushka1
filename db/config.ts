// db/config.ts
import { defineDb, defineTable, column } from 'astro:db';

const Logs = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    path: column.text(),
    userAgent: column.text(),
    clientIp: column.text(),
    status: column.number(),
    redirectedTo: column.text({ optional: true }),
    timestamp: column.date({ default: new Date() })
  }
});



// Deprecated table for Googlebot IP ranges

const GooglebotIps = defineTable({
    columns: {
        id: column.number({
            primaryKey: true,
            autoincrement: true // Правильное использование автоинкремента
        }),
        cidr: column.text(),
        type: column.text(),
        creationTime: column.date()
    }
});

const  Domains = defineTable({
    columns: {
        id: column.text({ primaryKey: true }),
        domain: column.text({ unique: true }),
        timestamp: column.date({ default: new Date() })
    }
});




export default defineDb({
  tables: { Logs, Domains, GooglebotIps }
});